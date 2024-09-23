const CardContainer = ({ children, style }) => {
    return (
        <>
            <div className={`border border-gray-700 rounded-3xl p-8 flex flex-col gap-5 items-start justify-between w-full ` + style}>
                {children}
            </div>
        </>
    )
}

export default CardContainer