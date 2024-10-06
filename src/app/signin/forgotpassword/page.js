import Header from "@/components/globalComponents/Header"
import ForgotPassword from "../../../components/forgotPassComponents/ForgotPassword"


const forgotpassword = () => {
    return (
        <>
            <Header isLoggedIn={true} />
            <ForgotPassword />
        </>
    )
}

export default forgotpassword