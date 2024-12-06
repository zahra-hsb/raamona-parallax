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
        { image: pic1, name: 'Fateme Zargar', job: 'CEO', education: 'Education', detail: 'Fateme Zargar is the visionary leader driving the company’s success. With years of experience in business development and a passion for innovation, she leads the team with dedication and strategic insight.' },
        { image: pic2, name: 'Ardalan Farzin', job: 'CMDo (Chief Marketing and Development Officer)', education: 'Education', detail: 'Ardalan Farzin brings a wealth of expertise in marketing and development to the table. His role involves crafting and executing growth strategies that align with the company’s mission.' },
        { image: pic3, name: 'Hosein Fatholahi', job: 'CTO (Chief Technology Officer)', education: 'Education', detail: 'As the CTO, Hosein Fatholahi is responsible for overseeing the company’s technological direction. His innovative approach ensures that the business remains at the forefront of technological advancements.' },
        { image: pic4, name: 'Nilofar Zargar', job: 'Art Specialist', education: 'Education', detail: 'Nilofar Zargar combines creativity with a deep understanding of art therapy. She plays a pivotal role in integrating art-based approaches into the company’s initiatives, enhancing team wellness and innovation.' },

        { image: pic5, name: 'Zahra Hasani', job: 'Developer', education: 'Education', detail: `Zahra Hasani is the backbone of the development team. Her skills in coding and problem-solving help build and maintain the digital infrastructure essential for the company's success.` },
        // { image: pic6, name: 'Name', job: 'Job Position', education: 'Education', detail: 'Lorem ipsum dolor sit amet consectetur. Leo arcu non morbi hendrerit tristique turpis neque. Facilisi platea nec mauris semper nunc vitae. Adipiscing vestibulum a viverra eu fames. Amet dolor donec adipiscing tincidunt dictum ut gravida. Aliquam orci orci urna amet.' },
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
                            Back in school, I was often just going through the motions, pretending to listen. The more serious things got, the less I could focus. Until one day, I stumbled upon a bit of a secret: the less seriously I took things, the better everything seemed to turn out. By the time I reached university, no subject felt particularly important. Sometimes, during revision weeks, I’d head off on holiday, only to come back and somehow end up with better marks than those who’d spent the entire time studying!
                            Then came work. The old 9-to-5, being watched over, and the dreaded in-office routine. I found this one particularly hard. I’d usually finish my tasks in half the time, then either had to pretend to be busy or do double the work, yet get paid the same as everyone else. This, I soon realised, was a fairly typical experience for someone with ADHD.
                            That’s when I discovered colouring books – honestly, they were like magic. Just half an hour of colouring a day, and suddenly my mind wasn’t so overwhelmed. Come bedtime, instead of my thoughts racing through the chaos of the day, it was as if the colours were swirling gently in my head, and I felt at peace. One day, it struck me: why shouldn’t everyone be able to create their own artwork to colour? Why shouldn’t we all have a new, personal image to wake up to every day?
                            My overactive mind needed something fresh, something exciting, a reason to get up in the morning knowing that today wouldn’t be just like yesterday. And for me, it was the colours that worked wonders. My mind finally settled, and for the first time in ages, I could turn the pages of my planner without feeling completely frazzled.
                            Then I thought, why not share this little bit of magic with everyone? And that’s where Raamona began.
                            You know what the real magic was? By colouring again, it was like I’d returned to that place where nothing felt too serious anymore!
                        </p>
                    </div>
                    <ProgressSection />
                    <section className="grid grid-cols-3 gap-28 my-5">
                        {dataArray.length !== 0 ? dataArray?.map((item, index) => (
                            <>
                                <div className="flex items-start gap-2 flex-col">
                                    <Image src={item.image} alt="" className="w-full" />
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