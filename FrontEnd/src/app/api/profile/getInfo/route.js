import { cookies } from "next/headers"
import { NextResponse } from "next/server"


export async function GET(req) {
    try {
        const token = cookies().get('accessToken')?.value

        const responseOfGetProfile = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/Profile/profile/`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log(responseOfGetProfile)
        const profileData = await responseOfGetProfile.json()
        console.log('14=> ', profileData)

        return NextResponse.json({ data: profileData })
    } catch (error) {
        return NextResponse.json(error)
    }
}