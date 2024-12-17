const Tab = ({ handleSelect, text, isSelected, disabled, style }) => {
    return (
        <>
            <span aria-disabled={disabled} onClick={handleSelect} className={`p-2 text-gray-500 cursor-pointer text-nowrap hover:border-b-2 hover:text-blue hover:border-b-orange transition-all text-xs sm:text-lg duration-300 ${isSelected && `sm:text-xl !text-md !text-blue font-bold border-b-2 border-b-orange`} ${style}`}>{text}</span>
        </>
    )
}

export default Tab