const Tab = ({ handleSelect, text, isSelected, disabled, style }) => {
    return (
        <>
            <span aria-disabled={disabled} onClick={handleSelect} className={`p-2 text-gray-500 cursor-pointer hover:border-b-2 hover:text-blue hover:border-b-orange transition-all duration-300 ${isSelected && `text-xl !text-blue font-bold border-b-2 border-b-orange`} ${style}`}>{text}</span>
        </>
    )
}

export default Tab