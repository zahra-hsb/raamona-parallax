'use client'
import arrow from '../../../../public/icons/Arrow_alt_lright_alt.svg'
import verification from '../../../../public/icons/Unlock_duotone_line.svg'
import Button from "@/components/globalComponents/Button"
import Image from "next/image"
import Link from "next/link"
import passwordIcon from '../../../../public/icons/Password.svg'
import { useState } from "react"
import { useRouter } from "next/navigation"
import VerificationEmail from "../VerificationEmail"
import VerificationCode from "../VerificationCode"

const ForgotPassword = () => {
    const [isShowVerificationCode, setShowVerificationCode] = useState(false)
    const [email, setEmail] = useState('')
    const [verCode, setVerCode] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const router = useRouter()

    function handleShowVerrificationCode(e) {
        e.preventDefault()
        console.log('show!');
        setShowVerificationCode(true)
    }
    function handleShowEmail() {
        setShowVerificationCode(false)
    }
    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }
    function handleChangeVerCode(e) {
        setVerCode(e.target.value)
    }
    function handleChangePass(e) {
        setPassword(e.target.value)
    }
    function handleChangeCPass(e) {
        setCPassword(e.target.value)
    }
    function handleChangeAccountPass(e) {
        e.preventDefault()
        router.push('/signin')
    }
    return (
        <>
            <section className="px-5 flex flex-col gap-5 p-10 items-center justify-center">
                <form className="lg:w-1/3 border border-gray-400 rounded-lg p-10 flex flex-col gap-5 items-center">
                    <h3 className="text-3xl">Forget Password</h3>
                    <p className="text-center text-gray-500 font-normal">
                        {'We will send on email with verification code if you don’t see it, please check your spam folder.'}
                    </p>
                    <VerificationEmail
                        email={email}
                        handleChangeEmail={handleChangeEmail}
                        isShowVerificationCode={isShowVerificationCode}
                    />

                    <VerificationCode
                        verification={verification}
                        verCode={verCode} 
                        passwordIcon={passwordIcon}
                        password={password} 
                        isShowVerificationCode={isShowVerificationCode}
                        handleChangeVerCode={handleChangeVerCode}
                        handleChangePass={handleChangePass}
                        handleChangeCPass={handleChangeCPass}
                        cPassword={cPassword}
                    />

                    <Button text={
                        <>
                            Next
                            <Image src={arrow} alt="" />
                        </>}
                        onClick={
                            !isShowVerificationCode ? (e) => handleShowVerrificationCode(e)
                                :
                                (e) => handleChangeAccountPass(e)
                        }
                        style={'w-full !rounded-full'} />
                </form>
                {!isShowVerificationCode &&
                    <p className="text-center text-gray-500 font-normal">
                        Remember Password?
                        <Link href={'/signin'} className="px-2 text-blue font-bold text-xl">Login</Link>
                    </p>
                }
                {isShowVerificationCode &&
                    <p className="text-center text-gray-500 font-normal">
                        Wrong email?
                        <button onClick={handleShowEmail} className="px-2 text-blue font-bold text-xl">Back</button>
                    </p>
                }
            </section>
        </>
    )
}

export default ForgotPassword