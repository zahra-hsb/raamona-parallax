import { NextResponse } from "next/server"


export async function POST(req) {
    try {
        const data = await req.json()

        if (!data) {
            throw Error('data does not exists..')
        }
        console.log("data=> ", data, data.emailUser.includes('@'))

        if (data.emailUser.includes('@') && data.emailUser.includes('.')) {
            const email = data.emailUser;
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Users/login/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email, password: data.password })
            })
            return NextResponse.json({ message: '', res, isLoggedIn: true });
        } else if ((!data.emailUser.includes('@') && !data.emailUser.includes('.'))) {
            const username = data.emailUser;
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Users/login/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: username, password: data.password })
            })
            const response = await res.json()
            console.log('=> ', response)
            if (!res.ok) {
                throw Error('error while login...');
            }
            return NextResponse.json({ message: '', response, res, isLoggedIn: true });
        } else {

            return NextResponse.json({ message: '', isLoggedIn: false });
        }

    } catch (error) {
        return NextResponse.json(error)
    }
}