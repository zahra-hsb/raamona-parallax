

const PageTitle = ({ title, style }) => {
    return (
        <>
            <span className={`flex items-center gap-2 justify-start text-slate-500 ${style}`}>
                <h3>Home</h3>
                {' > '}
                <h3>{title}</h3>
            </span>
        </>
    )
}

export default PageTitle 