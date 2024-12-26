import Input from "@/components/globalComponents/Input"

const VerificationCode = ({ isShowVerificationCode, verCode, handleChangeVerCode, verification, password, passwordIcon, handleChangePass, cPassword, handleChangeCPass }) => {
    return (
        <>
            {isShowVerificationCode &&
                <div className="flex flex-col gap-5 w-full">
                    <div className="">
                        <Input value={verCode} onChange={(e) => handleChangeVerCode(e)}
                            width={'w-full'} icon={verification} style={'border-2 border-gary-500'}
                            placeholder={'Verification Code'} />
                    </div>
                    <div>
                        <Input
                            value={password} onChange={(e) => handleChangePass(e)}
                            width={'w-full'} icon={passwordIcon} type={'password'}
                            placeholder={'New password (at least 8 characters)'}
                            style={'border-2 border-gary-500'} id={'pass'} />
                        <Input
                            value={cPassword} onChange={(e) => handleChangeCPass(e)}
                            width={'w-full'} icon={passwordIcon} type={'password'}
                            placeholder={'Confirm your password'} style={'border-2 border-gary-500'} id={'cPass'} />
                    </div>
                </div>
            }
        </>
    )
}

export default VerificationCode