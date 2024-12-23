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
import { useEffect, useState } from "react"
import { useAuthStore } from "@/store/authStore"

const Signin = () => {
    const router = useRouter()

    const [values, setValues] = useState({
        emailUser: '',
        password: ''
    })

    const [isValidForm, setValidForm] = useState(false)
    const { login } = useAuthStore()
    const [error, setError] = useState({
        message: '',
        color: ''
    })

    function handleChangeValues(e) {
        const { name, value } = e.target;
        let newValue = value;

        if (name === 'emailUser') {
            // Simple email validation (improve this for production)  
            if (value.includes('@') && value.includes('.')) {
                newValue = value; //Treat as email  
            } else {
                newValue = value; // Treat as username if not a valid email format  
            }
        }

        setValues({ ...values, [name]: newValue });
    }

    async function handleLogin(e) {
        e.preventDefault()
        try {
            const resultOfLogin = login(values)

            const result = await resultOfLogin;
            console.log('res: ', await result);

            if (!result.isLoggedIn) {
                setError({ message: result.message, color: '[#ff0000]' })
                setTimeout(() => {
                    setError({})
                }, 3000)
            } else if (!result?.response.detail) {
                setError({ message: result.message, color: '[#ff0000]' })
                setTimeout(() => {
                    setError({})
                }, 3000)
            } else {
                setError({ message: result?.response.detail, color: '[#00ff00]' })
                setTimeout(() => {
                    setError({})
                    router.push('/signin/userprofile')
                }, 3000)
            }
        } catch (error) {
            console.log('error=> ', error);
            setError({ message: 'An error occurred during login', color: '[#ff0000]' });
        }
    }

    async function refreshToken() {
        try {
            const response = await fetch('/api/login', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
            });
            const result = await response.json();
            return result.isLoggedIn;
        } catch (error) {
            console.error('Error refreshing token:', error);
            return false;
        }
    }

    useEffect(() => {
        setValidForm(
            values.emailUser &&
            values.password &&
            values.password.length >= 8
        );
    }, [values])

    useEffect(() => {
        const checkAndRefreshToken = async () => {
            const isRefreshed = await refreshToken();
            if (!isRefreshed) {
                router.push('/signin');
            }
        };

        const intervalId = setInterval(checkAndRefreshToken, 14 * 60 * 1000); // Check every 14 minutes

        return () => clearInterval(intervalId);
    }, [router]);

    return (
        <>
            <section className="flex ">
                <div className="w-1/2 p-10">
                    <LoginHeader />
                    <div className="p-16 flex flex-col gap-5 justify-between h-full">
                        <div>
                            <h2 className="text-5xl my-10 font-bold">Sign in Your Account</h2>
                            <div className="w-full">
                                <SocialLogin isLogin={true} />
                            </div>
                            <form className="flex flex-col gap-2">
                                <div className="flex flex-col gap-2 justify-between items-center">
                                    <Input
                                        type={'text'}
                                        id={'emailUser'}
                                        name={'emailUser'}
                                        label={'Email or Username'}
                                        maxLength={30}
                                        placeholder={'Enter a Email / Username'}
                                        style={'border border-gray-500'}
                                        icon={user}
                                        width={'w-full'}
                                        onChange={handleChangeValues}
                                    />
                                    <Input
                                        type={'password'}
                                        id={'password'}
                                        name={'password'}
                                        label={'Password'}
                                        maxLength={20}
                                        placeholder={'Enter your password'}
                                        style={'border border-gray-500'}
                                        icon={password}
                                        width={'w-full'}
                                        onChange={handleChangeValues}
                                    />
                                    {error && <div className={`text-${error.color}`}>
                                        {error.message}
                                    </div>}
                                    <Button
                                        disabled={isValidForm ? false : true}
                                        onClick={(e) => handleLogin(e)}
                                        text={'Login'}
                                        style={'w-full mt-5'} />
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