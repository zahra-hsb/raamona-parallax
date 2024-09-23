import CardContainer from "@/components/globalComponents/CardContainer"
import Image from "next/image"

const ProfileSection = ({ item }) => {
    return (
        <>
            <CardContainer style={'!flex-row'}>
                <div className="flex flex-col gap-2 justify-between items-start">
                    <span className="rounded-full">
                        <Image src={item.avatar} alt="" />
                    </span>
                    <p className="text-xl font-bold">{item.profileName}</p>
                    <p className="text-gray-500">{item.category}</p>
                    <p className="text-gray-500">{item.detail}</p>
                    <span className="rounded-full bg-blue p-1 px-4 text-white">{item.imagesCount} images</span>
                </div>
                <div className="flex gap-5">
                    {item.images.slice(0, 3).map(item => (
                        <>
                            <Image src={item} alt="" />
                        </>
                    ))}
                </div>
            </CardContainer>
        </>
    )
}

export default ProfileSection