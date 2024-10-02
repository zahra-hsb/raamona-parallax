

const PageTitle = ({ title }) => {
    return (
        <>
            <span className="flex items-center gap-2 justify-start text-slate-500">
                <h3>Home</h3>
                {' > '}
                <h3>{title}</h3>
            </span>
        </>
    )
}

export default PageTitle 