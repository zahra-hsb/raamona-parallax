import Input from "@/components/globalComponents/Input"
import emailIcon from '../../../../public/icons/mail.svg'

const VerificationEmail = ({ isShowVerificationCode, handleChangeEmail, email }) => {
    return (
        <>
            {!isShowVerificationCode &&
                <Input value={email} onChange={(e) => handleChangeEmail(e)}
                    type={'email'} style={'border-2 border-gary-500'} width={'w-full'} icon={emailIcon}
                    placeholder={'you@yourmail.com'} id={'email'} />
            }
        </>
    )
}

export default VerificationEmail