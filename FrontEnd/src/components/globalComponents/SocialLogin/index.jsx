import SignupContainer from "@/components/signupComponents/SignupContainer"
import google from '../../../../public/icons/Google.svg'
import facebook from '../../../../public/icons/Facebook.svg'
import microsoft from '../../../../public/icons/Microsoft.svg'
import apple from '../../../../public/icons/Apple.svg'

const SocialLogin = ({ isLogin }) => {
    function handleGoogleLogin() {
        try {
            // fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/auth/google`)
        } catch (error) {
            console.error(error)
        }
    }
    function handleFacebookLogin() {
        try {
            // fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/login`)
        } catch (error) {
            console.error(error)
        }
    }
    function handleMicrosoftLogin() {
        try {
            // fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/login`)
        } catch (error) {
            console.error(error)
        }
    }
    function handleAppleLogin() {
        try {
            // fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/login`)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            <div className="grid grid-cols-2  gap-5">
                <SignupContainer onClick={handleGoogleLogin} text={isLogin ? 'Sign in With Google' : 'Sign up With Google'} icon={google} />
                <SignupContainer text={isLogin ? 'Sign in With Facebook' : 'Sign up With Facebook'} icon={facebook} />
                <SignupContainer text={isLogin ? 'Sign in With Microsoft' : 'Sign up With Microsoft'} icon={microsoft} />
                <SignupContainer text={isLogin ? 'Sign in With Apple' :'Sign up With Apple'} icon={apple} />
            </div>
            <div className="flex items-center w-full justify-between gap-2 py-2">
                <div className="border border-gray-500 w-full"></div>
                <div>Or</div>
                <div className="border border-gray-500 w-full"></div>
            </div>
        </>
    )
}

export default SocialLogin