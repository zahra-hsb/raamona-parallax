import Tab from "@/components/globalComponents/Tab"
import Textarea from "@/components/globalComponents/Textarea"
import Tabs from "@/components/homeComponents/Tabs"
import infoIcon from '../../../../public/icons/Info_alt_duotone_line.svg'
import { useState } from "react"
import Input from "@/components/globalComponents/Input"

const ProfileTabs = ({ tabArray, inputsArray }) => {
    const [selectedTab, setSelectedTab] = useState(1)

    function handleSelectTab(id) {
        setSelectedTab(id)
    }
    return (
        <>
            <div className=" py-10">
                <div className="flex gap-2 border-b px-32">
                    {tabArray?.map(item => (
                        <>
                            <Tab isSelected={selectedTab === item.id} handleSelect={() => handleSelectTab(item.id)} text={item.text} key={item.id} />
                        </>
                    ))}
                </div>
                {selectedTab === 2 && <Tabs />}
                {selectedTab === 1 && <div className="px-32 py-10 flex flex-col gap-5">
                    <div className="grid grid-cols-3 gap-10">
                        {inputsArray?.map(item => (
                            <>
                                <Input icon={item.icon} id={item.iId} maxLength={item.maxLength} placeholder={item.placeholder} type={item.type} width={'w-full'} />
                            </>
                        ))}
                    </div>
                    <Textarea placeholder={'Description'} icon={infoIcon} />
                </div>}
            </div>
        </>
    )
}

export default ProfileTabs