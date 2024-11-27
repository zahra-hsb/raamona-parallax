import Image from "next/image"
import Logo from "../Logo"
import { useRouter } from "next/navigation"
import back from '../../../../public/icons/Arrow_drop_left.svg'

const LoginHeader = () => {
    const router = useRouter()

    return (
        <>
            <div className="flex justify-between items-center w-full">
                <Logo />
                <button onClick={() => router.back()} className="flex items-center justify-center">
                    <Image src={back} alt="" />
                    <h4>GO BACK</h4>
                </button>
            </div>
        </>
    )
}

export default LoginHeader