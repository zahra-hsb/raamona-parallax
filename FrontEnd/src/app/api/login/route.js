import { NextResponse } from "next/server"


export async function POST(req) {
    try {
        const data = await req.json()
        if (!data) {
            throw Error('data does not exists..')
        }
        const username = data.username != '' ? data.username : 'unknown'
        const email = data.email != '' ? data.email : 'unknown'
        console.log('response login: ', JSON.stringify(data), username);

        if (data.username != '') {
            const res = await fetch(`${process.env.API_URL}/api/Users/login/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: username, email: email, password: data.password })
            })
            const response = await res.json()
            console.log('=> ', response, JSON.stringify({ username: username, email: email, password: data.password }))
            if (!res.ok) {
                throw Error('error while login...');
            }
            return NextResponse.json({ message: '', response });
        } else if (data.email != '') {
            const res = await fetch(`${process.env.API_URL}/api/Users/login/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: username, email: email, password: data.password })
            })
            const response = await res.json()
            console.log('=> ', response, JSON.stringify({ username: username, email: email, password: data.password }))
            if (!res.ok) {
                throw Error('error while login...');
            }
            return NextResponse.json({ message: '', response });
        }
    } catch (error) {
        return NextResponse.json(error)
    }
}