import Image from "next/image"
import play from '../../../../public/icons/Play-Button.svg'
import { useState } from "react"
import forward from '../../../../public/icons/forward.svg'
import playIcon from '../../../../public/icons/Stop_and_play_duotone_line.svg'

const PlayButton = () => {
    const [isShow, setShowPlayBtn] = useState(false)

    function handleShowPlayBtn() {
        setShowPlayBtn(!isShow)
    }
    return (
        <>
            <span onClick={handleShowPlayBtn} className={`w-10 relative after:w-full after:border-2 after:border-blue after:p-4 after:rounded-lg after:absolute after:top-5  ${isShow ? `after:translate-y-10 after:opacity-0` : `after:translate-y-0 after:opacity-0`} after:transition-all after:duration-500`}>
                <Image src={play} alt="" className="cursor-pointer" />
                <span className={` ${isShow ? `opacity-100 z-50` : `opacity-0 z-0`} border-2 border-blue p-1 rounded-lg absolute top-10 flex flex-col gap-1 transition-all duration-500`}>
                    <Image className="w-full cursor-pointer" src={forward} alt="" />
                    <Image className='w-full cursor-pointer' src={playIcon} alt="" />
                    <Image className="rotate-180 cursor-pointer" src={forward} alt="" />
                </span>
            </span>
        </>
    )
}

export default PlayButton