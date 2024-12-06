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
        { id: 1, profileName: 'Profile name', category: 'Category', detail: 'Lorem ipsum dolor sit amet consectetur. Egestas posuere.', imagesCount: 310, avatar: avatar, images: [pic1, pic2, pic3, pic1] },
        { id: 2, profileName: 'Profile name', category: 'Category', detail: 'Lorem ipsum dolor sit amet consectetur. Egestas posuere.', imagesCount: 310, avatar: avatar, images: [pic1, pic2, pic3] },
        { id: 3, profileName: 'Profile name', category: 'Category', detail: 'Lorem ipsum dolor sit amet consectetur. Egestas posuere.', imagesCount: 310, avatar: avatar, images: [pic1, pic2, pic3] },
        { id: 4, profileName: 'Profile name', category: 'Category', detail: 'Lorem ipsum dolor sit amet consectetur. Egestas posuere.', imagesCount: 310, avatar: avatar, images: [pic1, pic2, pic3] },
        { id: 5, profileName: 'Profile name', category: 'Category', detail: 'Lorem ipsum dolor sit amet consectetur. Egestas posuere.', imagesCount: 310, avatar: avatar, images: [pic1, pic2, pic3] },
        { id: 6, profileName: 'Profile name', category: 'Category', detail: 'Lorem ipsum dolor sit amet consectetur. Egestas posuere.', imagesCount: 310, avatar: avatar, images: [pic1, pic2, pic3, pic1] },
    ]

    const picturesArray = [
        { id: 1, avatar: avatar, username: 'username', pic: pic2 },
        { id: 2, avatar: avatar, username: 'username', pic: pic2 },
        { id: 3, avatar: avatar, username: 'username', pic: pic2 },
        { id: 4, avatar: avatar, username: 'username', pic: pic2 },
        { id: 5, avatar: avatar, username: 'username', pic: pic2 },
        { id: 6, avatar: avatar, username: 'username', pic: pic2 },
        { id: 7, avatar: avatar, username: 'username', pic: pic2 },
        { id: 8, avatar: avatar, username: 'username', pic: pic2 },
        { id: 9, avatar: avatar, username: 'username', pic: pic2 },
        { id: 10, avatar: avatar, username: 'username', pic: pic2 },
        { id: 11, avatar: avatar, username: 'username', pic: pic2 },
        { id: 12, avatar: avatar, username: 'username', pic: pic2 },
        { id: 13, avatar: avatar, username: 'username', pic: pic2 },
        { id: 14, avatar: avatar, username: 'username', pic: pic2 },
        { id: 15, avatar: avatar, username: 'username', pic: pic2 },
        { id: 16, avatar: avatar, username: 'username', pic: pic2 },
        { id: 17, avatar: avatar, username: 'username', pic: pic2 },
        { id: 18, avatar: avatar, username: 'username', pic: pic2 },
        { id: 19, avatar: avatar, username: 'username', pic: pic2 },
        { id: 20, avatar: avatar, username: 'username', pic: pic2 },
        { id: 21, avatar: avatar, username: 'username', pic: pic2 },
        { id: 22, avatar: avatar, username: 'username', pic: pic2 },
        { id: 23, avatar: avatar, username: 'username', pic: pic2 },
        { id: 24, avatar: avatar, username: 'username', pic: pic2 },
        { id: 25, avatar: avatar, username: 'username', pic: pic2 },
        { id: 26, avatar: avatar, username: 'username', pic: pic2 },
        { id: 27, avatar: avatar, username: 'username', pic: pic2 },
        { id: 28, avatar: avatar, username: 'username', pic: pic2 },
        { id: 29, avatar: avatar, username: 'username', pic: pic2 },
        { id: 30, avatar: avatar, username: 'username', pic: pic2 },
        { id: 31, avatar: avatar, username: 'username', pic: pic2 },
        { id: 32, avatar: avatar, username: 'username', pic: pic2 },
        { id: 33, avatar: avatar, username: 'username', pic: pic2 },
        { id: 34, avatar: avatar, username: 'username', pic: pic2 },
        { id: 35, avatar: avatar, username: 'username', pic: pic2 },
        { id: 36, avatar: avatar, username: 'username', pic: pic2 },
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
                            <ProfileSection key={item.id} item={item} />
                        ))
                            :
                            <div className="p-10">There is no any data...</div>
                        }
                    </div>
                    <div className="grid grid-cols-4 gap-10">
                        {picturesArray.length !== 0 ? picturesArray?.slice(0, 32).map(item => (
                            <PictureContainer item={item} key={item.id} />
                        ))
                            :
                            <div>There is no any picture...</div>
                        }
                    </div>
                    <div className="my-5 flex flex-col gap-5">
                        {dataArray.length !== 0 ? dataArray?.slice(0, 5).map((item, index) => (
                            <ProfileSection key={item.id} item={item} />
                        ))
                            :
                            <div className="p-10">There is no any data...</div>
                        }
                    </div>
                    <div className="grid grid-cols-4 gap-10">
                        {picturesArray.length !== 0 ? picturesArray?.slice(0, 32).map(item => (
                            <PictureContainer item={item} key={item.id} />
                        ))
                            :
                            <div>There is no any picture...</div>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Explore