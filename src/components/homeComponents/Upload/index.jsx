'use client'
import { useState } from "react"
import Tab from "../Tab"

const Upload = () => {
    const [selectedTab, setSelectedTab] = useState(null)
    
    const tabArray = [
        { text: 'Upload Banner', id: 1 },
        { text: 'Upload Cover', id: 2 }
    ]

    function handleSelect(id) {
        setSelectedTab(id)
        console.log('object');
    }
    return (
        <div className="rounded-3xl bg-gray-200 overflow-hidden">
            <div className="bg-white pt-10 px-10 flex gap-10">
                {tabArray?.map((item, index) => (
                    <>
                        <Tab key={item.id} handleSelect={() => handleSelect(item.id)} text={item.text} isSelected={selectedTab === item.id} />
                    </>
                ))}
            </div>
            .
        </div>
    )
}

export default Upload