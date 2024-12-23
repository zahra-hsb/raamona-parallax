import { NextResponse } from "next/server"


export async function GET(req) {
    try {
        const token = await req.body;
        const responseOfGetProfile = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/Profile/profile/`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log(responseOfGetProfile)
        const profileData = await responseOfGetProfile.json()

        return NextResponse.json({ data: profileData })
    } catch (error) {
        return NextResponse.json(error)
    }
}