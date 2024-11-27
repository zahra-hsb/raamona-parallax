import Image from "next/image"

const LoginBg = ({ bg }) => {
    return (
        <>
            <div className="p-10">
                <Image src={bg} alt="" className="h-full rounded-3xl" />
            </div>
        </>
    )
}

export default LoginBg