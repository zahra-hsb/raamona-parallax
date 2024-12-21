import { NextResponse } from "next/server"


export async function POST(req) {
    try {
        const data = await req.json()

        if (!data) {
            throw Error('data does not exists..')
        }

        if (data.emailUser.includes('@') && data.emailUser.includes('.')) {
            const email = data.emailUser;
            console.log('email')
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/Users/login/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password: data.password })
            })
            const resultOfLoginWithEmail = await res.json()
            console.log(resultOfLoginWithEmail.non_field_errors)
            if (resultOfLoginWithEmail.non_field_errors) {
                return NextResponse.json({ message: resultOfLoginWithEmail.non_field_errors[0], response: resultOfLoginWithEmail, isLoggedIn: false });
            }
            return NextResponse.json({ message: 'Login successfull..', response: resultOfLoginWithEmail, isLoggedIn: true });
        } else if ((!data.emailUser.includes('@') && !data.emailUser.includes('.'))) {
            const username = data.emailUser;
            console.log('username')
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/Users/login/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password: data.password })
            })
            const responseOfUsernameLogin = await res.json()

            if (responseOfUsernameLogin.non_field_errors) {
                return NextResponse.json({ message: responseOfUsernameLogin.non_field_errors[0], response: res, isLoggedIn: false });
            }

            console.log('=> ')
            return NextResponse.json({ message: 'Login successfull..', response: responseOfUsernameLogin, isLoggedIn: true });
        } else {
            console.log('no')

            return NextResponse.json({ message: '', isLoggedIn: false });
        }

    } catch (error) {
        return NextResponse.json(error)
    }
}