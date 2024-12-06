import Tab from "../Tab"

const TabsComponent = ({ tabArray, selectedTab, handleSelectTab, style, border }) => {
    return (
        <>
            <div className={`flex gap-2 border-b px-32 ${border}`}>
                {tabArray?.map((item, index) => (
                    <Tab style={style} disabled={index === tabArray.length - 1 ? true : false} isSelected={selectedTab === item.id} handleSelect={() => handleSelectTab(item.id)} text={item.text} key={item.id} />
                ))}
            </div>
        </>
    )
}

export default TabsComponent