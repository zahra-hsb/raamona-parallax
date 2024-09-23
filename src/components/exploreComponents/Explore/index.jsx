import CardContainer from "@/components/globalComponents/CardContainer"
import Image from "next/image"
import avatar from '../../../../public/images/explore/Frame 161.png'
import pic1 from '../../../../public/images/explore/Frame 158.png'
import pic2 from '../../../../public/images/explore/Frame 159.png'
import pic3 from '../../../../public/images/explore/Frame 160.png'

const Explore = () => {
    const dataArray = [
        { profileName: 'Profile name', category: 'Category', detail: 'Lorem ipsum dolor sit amet consectetur. Egestas posuere.', imagesCount: 310, avatar: avatar, images: [pic1, pic2, pic3, pic1] },
        { profileName: 'Profile name', category: 'Category', detail: 'Lorem ipsum dolor sit amet consectetur. Egestas posuere.', imagesCount: 310, avatar: avatar, images: [pic1, pic2, pic3] },
        { profileName: 'Profile name', category: 'Category', detail: 'Lorem ipsum dolor sit amet consectetur. Egestas posuere.', imagesCount: 310, avatar: avatar, images: [pic1, pic2, pic3] },
        { profileName: 'Profile name', category: 'Category', detail: 'Lorem ipsum dolor sit amet consectetur. Egestas posuere.', imagesCount: 310, avatar: avatar, images: [pic1, pic2, pic3] },
        { profileName: 'Profile name', category: 'Category', detail: 'Lorem ipsum dolor sit amet consectetur. Egestas posuere.', imagesCount: 310, avatar: avatar, images: [pic1, pic2, pic3] },
        { profileName: 'Profile name', category: 'Category', detail: 'Lorem ipsum dolor sit amet consectetur. Egestas posuere.', imagesCount: 310, avatar: avatar, images: [pic1, pic2, pic3, pic1] },
    ]
    return (
        <>
            <section className="flex flex-col px-24 py-5">
                <div>
                    <h3 className="text-4xl mb-2">Meet our creators</h3>
                    <p className="text-gray-500">explore the work of the creative minds using AI to craft stunning photographs across the globe.</p>
                </div>
                <div>
                    <div className="my-5 flex flex-col gap-5">
                        {dataArray.length !== 0 ? dataArray?.slice(0, 5).map((item, index) => (
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
                        ))
                            :
                            <div className="p-10">There is no any data...</div>
                        }
                    </div>
                    <div></div>
                </div>
            </section>
        </>
    )
}

export default Explore