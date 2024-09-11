import Image from "next/image"
import logo from '../../../../public/logo/logo.png'

const Logo = () => {
    return (
        <>
            <div className="flex items-center justify-start">
                <Image src={logo} alt="raamona logo" />
                <h3 className="text-blue text-3xl font-bold">Raamona</h3>
            </div>
        </>
    )
}

export default Logo