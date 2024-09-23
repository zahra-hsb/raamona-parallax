import Image from "next/image"
import avatar from '../../../../public/images/explore/Frame 161.png'
import Link from "next/link"
import { useState } from "react"
import heart from '../../../../public/icons/like.svg'
import redheart from '../../../../public/icons/State=Press.svg'

const PictureContainer = ({ item }) => {

    const [isLike, setLike] = useState(false)
    const [count, setCount] = useState(0)

    function handleLike() {
        setLike(!isLike)
        setCount(!isLike ? count + 1 : count - 1)
    }
    return (
        <>
            <span className="group rounded-xl relative">
                <Image src={item.pic} alt="" className="w-full" />
                <span className="absolute top-0 right-0 w-full h-full group-hover:opacity-100 flex flex-col items-center justify-center gap-5 text-white bg-black bg-opacity-25 cursor-pointer opacity-0 transition-all duration-500">
                    <span className="rounded-full overflow-hidden">
                        <Image src={item.avatar} alt="" />
                    </span>
                    <p>{item.username}</p>
                    <Link href={'#'}>View profile</Link>
                    <div className="flex flex-col items-center">
                        <button onClick={handleLike} className="">
                            <Image src={isLike ? redheart : heart} alt={'heart'} />
                        </button>
                        <span>{count}</span>
                    </div>
                </span>
            </span>
        </>
    )
}

export default PictureContainer