import Image from "next/image"

const Input = ({ icon, label, disabled, type, maxLength, id, placeholder, style, width, onChange, value }) => {
    return (
        <>
            <div className={` ${width}`}>
                <label htmlFor={id}>{label}</label>
                <div className="py-1 relative ">
                    <Image src={icon} alt="" className="absolute top-3 left-2" />
                    <input disabled={disabled} value={value} onChange={onChange} type={type} maxLength={maxLength} placeholder={placeholder} id={id} className={"rounded-md shadow-input p-2 pl-10 w-full outline-none " + style} />
                </div>
            </div>
        </>
    )
}

export default Input