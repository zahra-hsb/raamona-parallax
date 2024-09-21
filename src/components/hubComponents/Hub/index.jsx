import HubSection from "../HubSection"
import avatar from '../../../../public/images/hub/Frame 196.png'
import image1 from '../../../../public/images/hub/Frame 197.png'
import image2 from '../../../../public/images/hub/Frame 19.png'
import image3 from '../../../../public/images/hub/Frame 200.png'

const Hub = () => {
    const array = [
        { avatar: avatar, username: '@username', category: 'Category', image: image1, alt: 'green' },
        { avatar: avatar, username: '@username', category: 'Category', image: image2, alt: 'green' },
        { avatar: avatar, username: '@username', category: 'Category', image: image3, alt: 'green' }
    ]
    return (
        <>
            <section className="my-10 px-20 flex flex-col gap-5">
                {array.map((item, index) => (
                    <>
                        <HubSection alt={item.alt} avatar={item.avatar} category={item.category} image={item.image} username={item.username} key={index} />
                    </>
                ))}
            </section>
        </>
    )
}

export default Hub