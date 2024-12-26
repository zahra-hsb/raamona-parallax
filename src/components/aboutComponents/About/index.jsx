import Image from "next/image"
import Progress from "../Progress"
import ProgressSection from "../ProgressSection"
import Title from "../Title"
import pic1 from '../../../../public/images/about/Frame 136-1.png'
import pic2 from '../../../../public/images/about/Frame 136.png'
import pic3 from '../../../../public/images/about/Frame 137-1.png'
import pic4 from '../../../../public/images/about/Frame 137.png'
import pic5 from '../../../../public/images/about/Frame 138.png'
import pic6 from '../../../../public/images/about/Frame 139.png'

const About = () => {

    const dataArray = [
        { image: pic1, name: 'Name', job: 'Job Position', education: 'Education', detail: 'Lorem ipsum dolor sit amet consectetur. Leo arcu non morbi hendrerit tristique turpis neque. Facilisi platea nec mauris semper nunc vitae. Adipiscing vestibulum a viverra eu fames. Amet dolor donec adipiscing tincidunt dictum ut gravida. Aliquam orci orci urna amet.' },
        { image: pic2, name: 'Name', job: 'Job Position', education: 'Education', detail: 'Lorem ipsum dolor sit amet consectetur. Leo arcu non morbi hendrerit tristique turpis neque. Facilisi platea nec mauris semper nunc vitae. Adipiscing vestibulum a viverra eu fames. Amet dolor donec adipiscing tincidunt dictum ut gravida. Aliquam orci orci urna amet.' },
        { image: pic3, name: 'Name', job: 'Job Position', education: 'Education', detail: 'Lorem ipsum dolor sit amet consectetur. Leo arcu non morbi hendrerit tristique turpis neque. Facilisi platea nec mauris semper nunc vitae. Adipiscing vestibulum a viverra eu fames. Amet dolor donec adipiscing tincidunt dictum ut gravida. Aliquam orci orci urna amet.' },
        { image: pic4, name: 'Name', job: 'Job Position', education: 'Education', detail: 'Lorem ipsum dolor sit amet consectetur. Leo arcu non morbi hendrerit tristique turpis neque. Facilisi platea nec mauris semper nunc vitae. Adipiscing vestibulum a viverra eu fames. Amet dolor donec adipiscing tincidunt dictum ut gravida. Aliquam orci orci urna amet.' },
        { image: pic5, name: 'Name', job: 'Job Position', education: 'Education', detail: 'Lorem ipsum dolor sit amet consectetur. Leo arcu non morbi hendrerit tristique turpis neque. Facilisi platea nec mauris semper nunc vitae. Adipiscing vestibulum a viverra eu fames. Amet dolor donec adipiscing tincidunt dictum ut gravida. Aliquam orci orci urna amet.' },
        { image: pic6, name: 'Name', job: 'Job Position', education: 'Education', detail: 'Lorem ipsum dolor sit amet consectetur. Leo arcu non morbi hendrerit tristique turpis neque. Facilisi platea nec mauris semper nunc vitae. Adipiscing vestibulum a viverra eu fames. Amet dolor donec adipiscing tincidunt dictum ut gravida. Aliquam orci orci urna amet.' },
    ]
    return (
        <>
            <section className="relative">
                <Title />
                <div className="flex w-full px-20 py-10 items-center justify-center bg-gray-300">
                    <p className="text-4xl font-bold text-blue">We are now a part of mindbody!</p>
                </div>
                <section className="py-5 px-32">
                    <div>
                        <h2 className="text-4xl font-bold text-blue pb-2">About us</h2>
                    </div>
                    <div>
                        <p className="text-justify bg-gray-200 p-5 rounded-xl">
                            Lorem ipsum dolor sit amet consectetur. Ullamcorper quam et placerat ultrices. Quisque lorem ornare et faucibus morbi egestas. Et hac egestas massa facilisis aliquam a imperdiet ut id. Phasellus morbi sit odio dignissim ac potenti. Luctus porttitor mollis malesuada rhoncus libero quis. In erat nulla nulla ipsum. Mauris ut porttitor donec placerat congue magnis aenean pellentesque amet. Facilisi a turpis tortor gravida ornare enim tempus mi odio. Tempor ullamcorper eu quam sed tristique massa. Non odio a urna adipiscing lectus eget. Turpis imperdiet integer pellentesque amet sollicitudin. Volutpat morbi parturient scelerisque bibendum egestas. Vitae.
                        </p>
                    </div>
                    <ProgressSection />
                    <section className="grid grid-cols-3 gap-28 my-5">
                        {dataArray.length !== 0 ? dataArray?.map((item, index) => (
                            <>
                                <div className="flex items-start gap-2 flex-col">
                                    <Image src={item.image} alt="" className="w-full"/>
                                    <h3 className="text-2xl">{item.name}</h3>
                                    <h4 className="text-xl font-semibold">{item.job}</h4>
                                    <h5 className="text-lg">{item.education}</h5>
                                    <p className="text-justify">
                                        {item.detail}
                                    </p>
                                </div>
                            </>
                        ))
                            :
                            <div>There is no any data here...</div>
                        }
                    </section>
                </section>
            </section>
        </>
    )
}

export default About