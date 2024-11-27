import Image from "next/image"

const SignupContainer = ({ text, icon }) => {
    return (
        <>
            <button className="rounded-md border border-gray-500 px-5 py-3 flex justify-center items-center w-full gap-2">
                <p>{text}</p>
                <Image src={icon} alt="" />
            </button>
        </>
    )
}

export default SignupContainer