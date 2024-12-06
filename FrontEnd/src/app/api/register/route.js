import { NextResponse } from "next/server"


export async function POST(req) {
    try {
        const data = await req.json()
        if(!data) {
            throw Error('data does not exists..')
        }
        const res = await fetch(`${process.env.API_URL}/api/users/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        if(!res.ok) {
            throw Error('error while register...');
        }
        console.log('response: ', await res.json());
        return NextResponse.json({ message: '' });
    } catch (error) {
        return NextResponse.json(error)
    }
}