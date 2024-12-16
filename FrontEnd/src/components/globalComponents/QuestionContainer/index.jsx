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
            <div className="w-full bg-gray-200 hover:bg-gray-300 transition-all duration-300 px-5 rounded-3xl overflow-hidden active:bg-gray-300">
                <div onClick={handleExpand} className="flex justify-between items-start lg:p-5 lg:pb-8 sm:p-3 sm:pb-5 pl-2 pb-2 cursor-pointer rounded-xl ">
                    <h4 className={`${isExpand ? `-translate-y-[1px]` : `translate-y-5`} transition-all delay-150 duration-700 text-lg sm:text-2xl lg:text-2xl font-bold`}>{question}</h4>
                    <Image src={arrow} alt="arrow" className={`${isExpand ? `-translate-y-[1px] rotate-180` : `translate-y-5`} transition-all delay-150 duration-700`} width={30} />
                </div>
                <hr className={`${isExpand ? `opacity-1 ` : `opacity-0`} border-slate-600 transition-all delay-150 duration-700 w-1/5 py-3`}/>
                <p className={`${isExpand ? `opacity-1 max-h-56 sm:h-40` : `opacity-0 h-0`} max-h-full transition-all duration-700 text-sm sm:text-md lg:text-lg text-justify text-slate-500`}>{answer}</p>
            </div>
        </>
    )
}

export default QuestionContainer