'use client'
import LoginBg from "@/components/globalComponents/LoginBg"
import LoginHeader from "@/components/globalComponents/LoginHeader"
import SocialLogin from "@/components/globalComponents/SocialLogin"
import bg from '../../../../public/images/signin/Image.png'

const Signin = () => {
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
                    </div>
                </div>
                <LoginBg bg={bg} />
            </section>
        </>
    )
}

export default Signin