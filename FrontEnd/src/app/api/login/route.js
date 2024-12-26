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

