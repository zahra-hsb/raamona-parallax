const Button = ({ text, style, onClick, disabled }) => {
    return (
        <>
            <button onClick={onClick} disabled={disabled} className={`bg-blue transition-all duration-300 text-white py-2 px-6 flex items-center justify-center gap-2 rounded-md ${style}`}>{text}</button>
        </>
    )
}

export default Button