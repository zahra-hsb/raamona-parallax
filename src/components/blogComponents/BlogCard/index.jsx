'use client'
import Button from "@/components/globalComponents/Button"
import DateAndViews from "@/components/globalComponents/DateAndViews"
import Image from "next/image"
import { useEffect, useState } from "react"

const BlogCard = ({ image, title, text, style }) => {
    const [date, setDate] = useState('')

    useEffect(() => {
        const now = new Date()
        const t = now.toDateString()
        console.log(t);
        setDate(t)
    }, [])
    return (
        <>
            <div className={`border border-gray-700 rounded-3xl p-8 flex flex-col gap-5 items-start justify-between ` + style}>
                <Image src={image} alt="" />
                <div className="flex flex-col h-full items-start justify-between">
                    <DateAndViews date={date} style={'!text-gray-500 !mt-0'} />
                    <h3 className="text-3xl">{title}</h3>
                    <p className="text-gray-500 ">{text}</p>
                    <Button style={'!rounded-full'} text={
                        <>
                            view more
                            <span className="text-orange">→</span>
                        </>
                    } />
                </div>
            </div>
        </>
    )
}

export default BlogCard