'use client'
import LoginBg from "@/components/globalComponents/LoginBg"
import LoginHeader from "@/components/globalComponents/LoginHeader"
import SocialLogin from "@/components/globalComponents/SocialLogin"
import bg from '../../../../public/images/signin/Image.png'
import Input from "@/components/globalComponents/Input"
import password from '../../../../public/icons/Password.svg'
import Button from "@/components/globalComponents/Button"

const Signin = () => {
    function handleLogin() {

    }
    return (
        <>
            <section className="flex ">
                <div className="w-1/2 p-10">
                    <LoginHeader />
                    <div className="p-16 flex flex-col gap-5">
                        <h2 className="text-4xl">Sign in Your Account</h2>
                        <div className="w-full">
                            <SocialLogin />
                        </div>
                        <form className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2 justify-between items-center">
                                <Input type={'text'} id={'emailUser'} label={'Email or Username'} maxLength={20} placeholder={'Enter a Email / Username'} style={'border border-gray-500'} icon={password} width={'w-full'} />

                                <Input type={'password'} id={'password'} label={'Password'} maxLength={20} placeholder={'Create a password'} style={'border border-gray-500'} icon={password} width={'w-full'} />
                                <Button onClick={handleLogin} 
                                text={'Login'} style={'w-full mt-5'} />
                            </div>
                        </form>
                    </div>
                </div>
                <LoginBg bg={bg} />
            </section>
        </>
    )
}

export default Signin