import Button from "@/components/globalComponents/Button"
import Image from "next/image"
import add from '../../../../public/icons/Add_round_duotone_line.svg'
import heart from '../../../../public/icons/like.svg'
import redheart from '../../../../public/icons/State=Press.svg'

const HubSection = ({ avatar, username, category, image, alt }) => {
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
                        <Button text={
                            <>
                                Follow
                                <Image src={add} alt="follow" />
                            </>}
                            style={'!bg-white !text-blue border !px-4 border-blue'} />
                    </div>
                </div>
                <div className="w-full relative rounded-lg overflow-hidden flex items-center justify-center bg-gray-200">
                    <Image src={image} alt={alt} />
                    <div className="absolute bottom-5 left-5">
                        <Image src={heart} alt={'heart'} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HubSection