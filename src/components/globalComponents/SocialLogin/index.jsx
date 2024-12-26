import SignupContainer from "@/components/signupComponents/SignupContainer"
import google from '../../../../public/icons/Google.svg'
import facebook from '../../../../public/icons/Facebook.svg'
import microsoft from '../../../../public/icons/Microsoft.svg'
import apple from '../../../../public/icons/Apple.svg'

const SocialLogin = () => {
    return (
        <>
            <div className="grid grid-cols-2  gap-5">
                <SignupContainer text={'Sign up With Google'} icon={google} />
                <SignupContainer text={'Sign up With Facebook'} icon={facebook} />
                <SignupContainer text={'Sign up With Microsoft'} icon={microsoft} />
                <SignupContainer text={'Sign up With Apple'} icon={apple} />
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