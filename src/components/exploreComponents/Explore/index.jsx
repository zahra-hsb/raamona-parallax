'use client'
import CardContainer from "@/components/globalComponents/CardContainer"
import Image from "next/image"
import avatar from '../../../../public/images/explore/Frame 161.png'
import pic1 from '../../../../public/images/explore/Frame 158.png'
import pic2 from '../../../../public/images/explore/Frame 159.png'
import pic3 from '../../../../public/images/explore/Frame 160.png'
import ProfileSection from "../ProfileSection"
import PictureContainer from "../PictureContainer"

const Explore = () => {
    const dataArray = [
        { profileName: 'Profile name', category: 'Category', detail: 'Lorem ipsum dolor sit amet consectetur. Egestas posuere.', imagesCount: 310, avatar: avatar, images: [pic1, pic2, pic3, pic1] },
        { profileName: 'Profile name', category: 'Category', detail: 'Lorem ipsum dolor sit amet consectetur. Egestas posuere.', imagesCount: 310, avatar: avatar, images: [pic1, pic2, pic3] },
        { profileName: 'Profile name', category: 'Category', detail: 'Lorem ipsum dolor sit amet consectetur. Egestas posuere.', imagesCount: 310, avatar: avatar, images: [pic1, pic2, pic3] },
        { profileName: 'Profile name', category: 'Category', detail: 'Lorem ipsum dolor sit amet consectetur. Egestas posuere.', imagesCount: 310, avatar: avatar, images: [pic1, pic2, pic3] },
        { profileName: 'Profile name', category: 'Category', detail: 'Lorem ipsum dolor sit amet consectetur. Egestas posuere.', imagesCount: 310, avatar: avatar, images: [pic1, pic2, pic3] },
        { profileName: 'Profile name', category: 'Category', detail: 'Lorem ipsum dolor sit amet consectetur. Egestas posuere.', imagesCount: 310, avatar: avatar, images: [pic1, pic2, pic3, pic1] },
    ]

    const picturesArray = [
        { avatar: avatar, username: 'username', pic: pic2 },
        { avatar: avatar, username: 'username', pic: pic2 },
        { avatar: avatar, username: 'username', pic: pic2 },
        { avatar: avatar, username: 'username', pic: pic2 },
        { avatar: avatar, username: 'username', pic: pic2 },
        { avatar: avatar, username: 'username', pic: pic2 },
        { avatar: avatar, username: 'username', pic: pic2 },
        { avatar: avatar, username: 'username', pic: pic2 },
        { avatar: avatar, username: 'username', pic: pic2 },
        { avatar: avatar, username: 'username', pic: pic2 },
        { avatar: avatar, username: 'username', pic: pic2 },
        { avatar: avatar, username: 'username', pic: pic2 },
        { avatar: avatar, username: 'username', pic: pic2 },
        { avatar: avatar, username: 'username', pic: pic2 },
        { avatar: avatar, username: 'username', pic: pic2 },
        { avatar: avatar, username: 'username', pic: pic2 },
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
                                <ProfileSection item={item} />
                            </>
                        ))
                            :
                            <div className="p-10">There is no any data...</div>
                        }
                    </div>
                    <div className="grid grid-cols-4 gap-10">
                        {picturesArray.length !== 0 ? picturesArray.map(item => (
                            <>
                                <PictureContainer item={item} />
                            </>
                        ))
                            :
                            <div>There is no any picture...</div>
                        }
                    </div>
                    <div className="my-5 flex flex-col gap-5">
                        {dataArray.length !== 0 ? dataArray?.slice(0, 5).map((item, index) => (
                            <>
                                <ProfileSection item={item} />
                            </>
                        ))
                            :
                            <div className="p-10">There is no any data...</div>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Explore