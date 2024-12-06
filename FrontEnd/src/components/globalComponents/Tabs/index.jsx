import Tab from "../Tab"

const TabsComponent = ({ tabArray, selectedTab, handleSelectTab }) => {
    return (
        <>
            <div className="flex gap-2 border-b px-32">
                {tabArray?.map((item, index) => (
                    <Tab disabled={index === tabArray.length - 1 ? true : false} isSelected={selectedTab === item.id} handleSelect={() => handleSelectTab(item.id)} text={item.text} key={item.id} />
                ))}
            </div>
        </>
    )
}

export default TabsComponent