import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function PUT(req) {
    const refreshToken = cookies().get('refreshToken')?.value
    if (!refreshToken) {
        return NextResponse.json({ message: 'No refresh token found', isLoggedIn: false }, { status: 401 })
    }

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/Users/token/refresh/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh: refreshToken })
        })
        const data = await res.json()

        if (data.access) {
            cookies().set('accessToken', data.access, { httpOnly: true, secure: true })
            return NextResponse.json({ message: 'Token refreshed successfully', isLoggedIn: true })
        } else {
            return NextResponse.json({ message: 'Failed to refresh token', isLoggedIn: false }, { status: 401 })
        }
    } catch (error) {
        return NextResponse.json({ message: 'Error refreshing token', isLoggedIn: false }, { status: 500 })
    }
}

