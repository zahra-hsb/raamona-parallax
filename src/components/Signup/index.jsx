'use client'
import Image from "next/image"
import bg from '../../../public/images/signup/Image.png'
import Logo from "../globalComponents/Logo"
import back from '../../../public/icons/Arrow_drop_left.svg'
import { useRouter } from "next/navigation"

const Signup = () => {
    const router = useRouter()
    return (
        <>
            <section className="flex ">
                <div className="w-1/2 p-10">   
                    <div className="flex justify-between items-center w-full">
                        <Logo />
                        <button onClick={() => router.back()} className="flex items-center justify-center">
                            <Image src={back} alt="" />
                            <h4>GO BACK</h4>
                        </button>
                    </div>
                </div>
                <div className="p-10">
                    <Image src={bg} alt="" className="h-full rounded-3xl" />
                </div>
            </section>  
        </>
    )
}

export default Signup