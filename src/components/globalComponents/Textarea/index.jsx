import Image from "next/image"

const Textarea = ({ icon, label, maxLength, id, placeholder, disabled, style }) => {
    return (
        <>
            <div className="">
                <label htmlFor={id}>{label}</label>
                <div className="py-1 relative ">
                    <Image src={icon} alt="" className="absolute top-3 left-2" />
                    <textarea disabled={disabled} maxLength={maxLength} placeholder={placeholder} id={id} className="rounded-md shadow-input p-2 pl-10 w-full outline-none" />
                </div>
            </div>
        </>
    )
}

export default Textarea