const DateAndViews = ({ date, style }) => {
    return (
        <>
            <p className={`text-white mt-10 ` + style}>{date} 	&#9679; 125 views</p>
        </>
    )
}

export default DateAndViews