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
import { useState } from "react"
import LoginHeader from "@/components/globalComponents/LoginHeader"
import SocialLogin from "@/components/globalComponents/SocialLogin"
import LoginBg from "@/components/globalComponents/LoginBg"

const options = ['accordion option', 'accordion option', 'accordion option', 'accordion option']
const Signup = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: '',
        option: ''
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
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await fetch(`/api/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: values
            })
            console.log('res: ', await response.json());
        } catch (error) {
            console.log('error=> ', error);
        }
    }
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
                                    id={'firstName'}
                                    value={values.firstName}
                                    name={'firstName'}
                                    label={'FIRST NAME*'}
                                    maxLength={20}
                                    placeholder={'Enter first name'}
                                    style={'border border-gray-500'}
                                    icon={user}
                                    onChange={handleChangeValues}
                                />
                                <Input
                                    value={values.lastName}
                                    id={'lastName'}
                                    name={'lastName'}
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
                                        value={values.confirmPassword}
                                        type={'password'}
                                        id={'confirmPassword'}
                                        name={'confirmPassword'}
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
                                id={'phone'}
                                name={'phone'}
                                value={values.phone}
                                label={'PHONE NUMBER*'}
                                maxLength={20}
                                placeholder={'+1'}
                                onChange={handleChangeValues}
                                type={'tel'}
                                style={'border border-gray-500'}
                                icon={phone}
                            />

                            <select onClick={handleShowOptions} className="border outline-none border-gray-500 px-5 py-2 rounded-lg shadow-lg my-5 cursor-pointer text-blue font-bold flex justify-between items-center relative"
                                value={values.option}
                                onChange={handleChangeValues}
                                name={'option'}

                            >
                                <option>
                                    CHOOSE AN OPTION
                                </option>
                                {/* <ul className={`absolute rounded-lg bottom-12 overflow-hidden w-full left-0 shadow-lg transition-all text-start duration-300 ease-out ${isShowOption ? 'opacity-100' : 'opacity-0'}`}> */}
                                {options.map((item, index) =>
                                    <option
                                        className="w-full text-gray-400 font-medium bg-gray-100 px-5 py-2 hover:bg-gray-300 transition-all text-start duration-300 ease-out"
                                        key={index}>{item}</option>
                                )}
                                {/* </ul> */}
                            </select>
                            <Image src={arrow} alt="" className="rotate-180 absolute z-30 hidden" />
                            <Button type={'submit'} text={'Create Account'} />

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