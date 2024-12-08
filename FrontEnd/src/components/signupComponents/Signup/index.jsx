'use client'
import Image from "next/image"
import bg from '../../../../public/images/signup/Image.png'
import Input from "@/components/globalComponents/Input"
import user from '../../../../public/icons/User_alt_duotone_line.svg'
import username from '../../../../public/icons/E-mail_light.svg'
import password from '../../../../public/icons/Password.svg'
import email from '../../../../public/icons/mail.svg'
import phone from '../../../../public/icons/phone_duotone_line.svg'
import Button from "@/components/globalComponents/Button"
import Link from "next/link"
import arrow from '../../../../public/icons/Arrow_drop_down.svg'
import { useEffect, useState } from "react"
import LoginHeader from "@/components/globalComponents/LoginHeader"
import SocialLogin from "@/components/globalComponents/SocialLogin"
import LoginBg from "@/components/globalComponents/LoginBg"
import { useRouter } from "next/navigation"

const userRole = [
    { id: 0, title: 'Psychologist' },
    { id: 1, title: 'Artist' },
    { id: 2, title: 'Art therapist' },
    { id: 3, title: 'Other' },
]
// const options = ['accordion option', 'accordion option', 'accordion option', 'accordion option']
const Signup = () => {
    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        password_repeat: '',
        phone_number: '',
        role: '',
    })
    const [isValidForm, setValidForm] = useState(false)
    const router = useRouter()
    const [error, setError] = useState({
        message: '',
        color: ''
    })
    const [isShowOption, setShowOptions] = useState(false)


    function handleChangeValues(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    function handleShowOptions() {
        setShowOptions(!isShowOption)
    }
    function handlePasswordValidation() {
        if (values.password !== values.password_repeat) {
            setError({ message: 'the password is not correct!', color: '#ff0000' })
        } else if (values.password.length < 8 || values.password_repeat.length < 8) {
            setError({ message: 'the password must be greater than 8 characters!', color: '#ff0000' })
        } else {
            setError({ message: '', color: '' })
        }
    }
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await fetch(`/api/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            })
            const data = await response.json()
            if (!response.ok) {
                setError({ message: data.error, color: '#ff0000' })
                setTimeout(() => {
                    setError({
                        message: '',
                        color: ''
                    })
                }, 5000)
            } else if(data.isExistUser) {
                setError({ message: data.error + 'plaese login', color: '#ff0000' })
                setTimeout(() => {
                    setError({
                        message: '',
                        color: ''
                    })
                    router.push('/signin')
                }, 5000)
            } else {
                setError({ message: data.message, color: '#00ff00' })
                setTimeout(() => {
                    setError({
                        message: '',
                        color: ''
                    })
                    router.push('/signin/userprofile')
                }, 5000)
            }
            console.log('res: ', data);
        } catch (error) {
            console.log('error=> ', error);
        }
    }

    useEffect(() => {
        const passwordsMatch = values.password === values.password_repeat;
        setValidForm(
            values.first_name &&
            values.last_name &&
            values.username &&
            values.password &&
            values.password_repeat.length >= 8 &&
            values.email &&
            values.phone_number &&
            values.role &&
            passwordsMatch &&
            values.password.length >= 8
        );
    }, [values])
    return (
        <>
            <section className="flex">
                <div className="w-1/2 p-10">
                    <LoginHeader />
                    <div className="p-16 flex flex-col gap-5">
                        <h2 className="text-4xl">Create account</h2>
                        <SocialLogin />
                        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                            <div className="flex gap-2 justify-between items-center">
                                <Input
                                    id={'first_name'}
                                    value={values.first_name}
                                    name={'first_name'}
                                    label={'FIRST NAME*'}
                                    maxLength={20}
                                    placeholder={'Enter first name'}
                                    style={'border border-gray-500'}
                                    icon={user}
                                    onChange={handleChangeValues}
                                />
                                <Input
                                    value={values.last_name}
                                    id={'last_name'}
                                    name={'last_name'}
                                    label={'LAST NAME*'}
                                    onChange={handleChangeValues}
                                    maxLength={20}
                                    placeholder={'Enter last name'}
                                    style={'border border-gray-500'}
                                    icon={user} />
                            </div>
                            <div className="flex gap-2 justify-between items-start">
                                <Input
                                    id={'username'}
                                    value={values.username}
                                    onChange={handleChangeValues}
                                    name={'username'}
                                    label={'USERNAME*'}
                                    maxLength={20}
                                    placeholder={'Enter username'}
                                    style={'border border-gray-500'}
                                    icon={username}
                                />
                                <div className="flex flex-col gap-2">
                                    <Input
                                        value={values.password}
                                        type={'password'}
                                        onChange={handleChangeValues}
                                        id={'password'}
                                        name={'password'}
                                        label={'PASSWORD*'}
                                        maxLength={20}
                                        placeholder={'Create a password'}
                                        style={'border border-gray-500'}
                                        icon={password}
                                    />
                                    <Input
                                        value={values.password_repeat}
                                        onBlur={handlePasswordValidation}
                                        type={'password'}
                                        id={'password_repeat'}
                                        name={'password_repeat'}
                                        onChange={handleChangeValues}
                                        maxLength={20}
                                        placeholder={'Confirm your password'}
                                        style={'border border-gray-500'}
                                        icon={password}
                                    />
                                </div>
                            </div>
                            <Input
                                id={'email'}
                                name={'email'}
                                value={values.email}
                                onChange={handleChangeValues}
                                label={'EMAIL*'}
                                maxLength={20}
                                placeholder={'Enter an Email'}
                                type={'email'}
                                style={'border border-gray-500'}
                                icon={email}
                            />
                            <Input
                                id={'phone_number'}
                                name={'phone_number'}
                                value={values.phone_number}
                                label={'PHONE NUMBER*'}
                                maxLength={20}
                                placeholder={'+1'}
                                onChange={handleChangeValues}
                                type={'tel'}
                                style={'border border-gray-500'}
                                icon={phone}
                            />

                            <select onClick={handleShowOptions} className="border outline-none border-gray-500 px-5 py-2 rounded-lg shadow-lg my-5 cursor-pointer text-blue font-bold flex justify-between items-center relative"
                                value={values.role}
                                onChange={handleChangeValues}
                                name={'role'}

                            >
                                <option>
                                    CHOOSE AN OPTION
                                </option>
                                {/* <ul className={`absolute rounded-lg bottom-12 overflow-hidden w-full left-0 shadow-lg transition-all text-start duration-300 ease-out ${isShowOption ? 'opacity-100' : 'opacity-0'}`}> */}
                                {userRole.map((item) =>
                                    <option
                                        className="w-full text-gray-400 font-medium bg-gray-100 px-5 py-2 hover:bg-gray-300 transition-all text-start duration-300 ease-out"
                                        key={item.id} value={item.title}>{item.title}</option>
                                )}
                                {/* </ul> */}
                            </select>
                            <Image src={arrow} alt="" className="rotate-180 absolute z-30 hidden" />
                            {error && <div style={{ color: error.color }}>
                                {error.message}
                            </div>}
                            <Button disabled={isValidForm ? false : true} type={'submit'} text={'Create Account'} />

                        </form>
                        <div className="py-2">
                            <p className="text-center">
                                Already have an acount?
                                <Link href={'/signin'} className="px-2 text-blue font-bold text-xl">Sign In</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <LoginBg bg={bg} />
            </section>
        </>
    )
}

export default Signup