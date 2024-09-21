'use client'
import Button from "@/components/globalComponents/Button"
import Image from "next/image"
import add from '../../../../public/icons/Add_round_duotone_line.svg'
import heart from '../../../../public/icons/like.svg'
import redheart from '../../../../public/icons/State=Press.svg'
import { useState } from "react"

const HubSection = ({ avatar, username, category, image, alt }) => {
    const [isFollow, setFollow] = useState(false)
    const [isLike, setLike] = useState(false)

    function handleFollow() {
        setFollow(!isFollow)
    }
    function handleLike() {
        setLike(!isLike)
    }
    return (
        <>
            <section className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <span>
                            <Image src={avatar} alt="" />
                        </span>
                        <div>
                            <p>{username}</p>
                            <p className="text-sm text-gray-400">{category}</p>
                        </div>
                    </div>
                    <div>
                        <Button
                            onClick={handleFollow}
                            text={
                                <>
                                    Follow
                                    {!isFollow && <Image src={add} alt="follow" />}
                                </>}
                            style={isFollow ? '' : '!bg-white !text-blue border !px-4 border-blue'} />
                    </div>
                </div>
                <div className="w-full relative rounded-lg overflow-hidden flex items-center justify-center bg-gray-200">
                    <Image src={image} alt={alt} />
                    <button onClick={handleLike} className="absolute bottom-5 left-5">
                        <Image src={isLike ? redheart : heart} alt={'heart'} />
                    </button>
                </div>
            </section>
        </>
    )
}

export default HubSection