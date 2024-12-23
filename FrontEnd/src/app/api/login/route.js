import { NextResponse } from "next/server"
import { cookies } from 'next/headers'

export async function POST(req) {
    try {
        const data = await req.json()

        if (!data) {
            throw Error('data does not exist..')
        }

        let loginEndpoint = `${process.env.NEXT_PUBLIC_API_URL}api/Users/login/`
        let loginBody = {}

        if (data.emailUser.includes('@') && data.emailUser.includes('.')) {
            loginBody = { email: data.emailUser, password: data.password }
        } else {
            loginBody = { username: data.emailUser, password: data.password }
        }

        const res = await fetch(loginEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginBody)
        })

        const loginResult = await res.json()

        if (loginResult.access && loginResult.refresh) {
            cookies().set('accessToken', loginResult.access, { httpOnly: true, secure: true })
            cookies().set('refreshToken', loginResult.refresh, { httpOnly: true, secure: true })
            return NextResponse.json({ message: 'Login successful', isLoggedIn: true, response: loginResult })
        } else if (loginResult.non_field_errors) {
            return NextResponse.json({ message: loginResult.non_field_errors[0], isLoggedIn: false, response: loginResult })
        } else {
            return NextResponse.json({ message: 'Login failed', isLoggedIn: false, response: loginResult })
        }
    } catch (error) {
        return NextResponse.json({ message: 'An error occurred', isLoggedIn: false, error: error.message })
    }
}

export async function PUT(req) {
    const refreshToken = cookies().get('refreshToken')?.value
    if (!refreshToken) {
        return NextResponse.json({ message: 'No refresh token found', isLoggedIn: false }, { status: 401 })
    }

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/token/refresh/`, {
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

