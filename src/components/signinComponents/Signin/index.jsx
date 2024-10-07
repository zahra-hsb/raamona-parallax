'use client'
import LoginBg from "@/components/globalComponents/LoginBg"
import LoginHeader from "@/components/globalComponents/LoginHeader"
import SocialLogin from "@/components/globalComponents/SocialLogin"
import bg from '../../../../public/images/signin/Image.png'
import Input from "@/components/globalComponents/Input"
import password from '../../../../public/icons/Password.svg'
import user from '../../../../public/icons/user.svg'
import Button from "@/components/globalComponents/Button"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Signin = () => {
    const router = useRouter()

    function handleLogin(e) {
        e.preventDefault()
        router.push('/signin/userprofile')
    }
    return (
        <>
            <section className="flex ">
                <div className="w-1/2 p-10">
                    <LoginHeader />
                    <div className="p-16 flex flex-col gap-5 justify-between h-full">
                        <div>
                            <h2 className="text-5xl my-10 font-bold">Sign in Your Account</h2>
                            <div className="w-full">
                                <SocialLogin />
                            </div>
                            <form className="flex flex-col gap-2">
                                <div className="flex flex-col gap-2 justify-between items-center">
                                    <Input type={'text'} id={'emailUser'} label={'Email or Username'} maxLength={20} placeholder={'Enter a Email / Username'} style={'border border-gray-500'} icon={user} width={'w-full'} />

                                    <Input type={'password'} id={'password'} label={'Password'} maxLength={20} placeholder={'Enter your password'} style={'border border-gray-500'} icon={password} width={'w-full'} />
                                    <Button onClick={(e) => handleLogin(e)}
                                        text={'Login'} style={'w-full mt-5'} />
                                </div>
                            </form>
                        </div>
                        <div className="py-2">
                            <p className="text-center">
                                Dont have an acount?
                                <Link href={'/signup'} className="px-2 text-blue font-bold text-xl">Sign up</Link>
                            </p>
                            <h5 className="text-center my-2 text-lg">
                                <Link
                                    className="text-blue font-bold text-center"
                                    href={'/signin/forgotpassword'}>
                                    Forgot Password!
                                </Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <LoginBg bg={bg} />
            </section>
        </>
    )
}

export default Signin