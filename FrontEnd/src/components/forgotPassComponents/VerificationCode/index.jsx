import Input from "@/components/globalComponents/Input"

const VerificationCode = ({ isShowVerificationCode, verCode, handleChangeValues, verification, password, passwordIcon, cPassword }) => {
    return (
        <>
            {isShowVerificationCode &&
                <div className="flex flex-col gap-5 w-full">
                    <div className="">
                        <Input value={verCode} onChange={(e) => handleChangeValues(e)}
                            width={'w-full'} icon={verification} name={'code'} style={'border-2 border-gary-500'}
                            placeholder={'Verification Code'} />
                    </div>
                    <div>
                        <Input
                            value={password} name={'password'} onChange={(e) => handleChangeValues(e)}
                            width={'w-full'} icon={passwordIcon} type={'password'}
                            placeholder={'New password (at least 8 characters)'}
                            style={'border-2 border-gary-500'} id={'pass'} />
                        <Input
                            value={cPassword} onChange={(e) => handleChangeValues(e)}
                            width={'w-full'} icon={passwordIcon} type={'password'}
                            placeholder={'Confirm your password'} name={'confirmPassword'} style={'border-2 border-gary-500'} id={'cPass'} />
                    </div>
                </div>
            }
        </>
    )
}

export default VerificationCode