'use client'
import Image from "next/image"
import { useState } from "react"
import arrow from '../../../../public/icons/Arrow_drop_down.svg'


const QuestionContainer = ({ question, answer }) => {
    const [isExpand, setExpand] = useState(false)

    function handleExpand() {
        setExpand(!isExpand)
    }
    return (
        <>
            <div onClick={handleExpand} className="flex justify-between items-start p-5 cursor-pointer bg-gray-200 rounded-xl ">
                <h4 className={`transition-all delay-150 duration-700 text-lg sm:text-2xl lg:text-2xl font-bold`}>{question}</h4>
                <Image src={arrow} alt="arrow" className="" width={30} />
            </div>
        </>
    )
}

export default QuestionContainer