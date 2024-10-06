'use client'
import { useState } from "react"
import Tab from "../Tab"
import Image from "next/image"
import uploadIcon from '../../../../public/icons/Upload_duotone_line.svg'
import Link from "next/link"
import FileUpload from "../FileUpload"

const Upload = () => {
    const [selectedTab, setSelectedTab] = useState(1)

    const tabArray = [
        { text: 'Upload Banner', id: 1 },
        { text: 'Upload Cover', id: 2 }
    ]

    function handleSelect(id) {
        setSelectedTab(id)
    }
    return (
        <div className="rounded-3xl bg-gray-200 overflow-hidden h-full">
            <div className="bg-white pt-10 px-10 flex gap-10">
                {tabArray?.map((item, index) => (
                    <>
                        <Tab key={item.id} handleSelect={() => handleSelect(item.id)} text={item.text} isSelected={selectedTab === item.id} />
                    </>
                ))}
            </div>
            <div className="flex flex-col gap-5 items-center justify-center h-full">
                <Image src={uploadIcon} alt="" />
                <h2>
                    Drag and Drop a file here
                </h2>
                <p>
                    or <FileUpload />
                </p>
                <p className="text-gray-400">Supported formats: JPG, JPEG and PNG</p>
                <p className="text-gray-400">{selectedTab !== 1 ? '200 * 200' : '1400 * 400'}</p>
            </div>
        </div>
    )
}

export default Upload