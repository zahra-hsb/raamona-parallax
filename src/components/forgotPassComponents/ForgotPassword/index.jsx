'use client'
import Input from "@/components/globalComponents/Input"
import email from '../../../../public/icons/mail.svg'
import arrow from '../../../../public/icons/Arrow_alt_lright_alt.svg'
import Button from "@/components/globalComponents/Button"
import Image from "next/image"
import Link from "next/link"

const ForgotPassword = () => {
    return (
        <>
            <section className="px-5 flex flex-col gap-5 p-10 items-center justify-center">
                <div className="lg:w-1/3 border border-gray-400 rounded-lg p-10 flex flex-col gap-5 items-center">
                    <h3 className="text-3xl">Forget Password</h3>
                    <p className="text-center text-gray-500 font-normal">
                        We will send on email with verification code if you don’t see it, please check your spam folder.
                    </p>
                    <Input type={'email'} width={'w-full'} icon={email} placeholder={'you@yourmail.com'} id={'email'} />
                    <Button text={
                        <>
                            Next
                            <Image src={arrow} alt="" />
                        </>} style={'w-full !rounded-full'} />
                </div>
                <p className="text-center text-gray-500 font-normal">
                    Remember Password?
                    <Link href={'/signin'} className="px-2 text-blue font-bold text-xl">Login</Link>
                </p>
            </section>
        </>
    )
}

export default ForgotPassword