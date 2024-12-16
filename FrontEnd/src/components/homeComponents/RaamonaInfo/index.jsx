import InfoSection from "../InfoSection"
import infoPic1 from '../../../../public/images/info/1.png'
import infoPic2 from '../../../../public/images/info/2.png'
import { useEffect, useState } from "react"

const RaamonaInfo = () => {

    const [show, setShow] = useState(false)

    function handleScroll(e) {

        if (window.scrollY > 1200) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        <>
            <section className="py-8 px-5 sm:px-10 lg:px-20 overflow-hidden">
                <div className={`${show ? `sm:translate-y-0` : `sm:translate-y-52`} transition-all duration-1000`}>
                    <h3 className="lg:text-5xl sm:text-3xl text-xl font-extrabold ">How Does Work Raamona?</h3>
                    <p className="text-justify">
                        You will answer some art therapy questions. After the analysis, you can choose to receive a picture that helps you relax, or a black-and-white coloring book picture that allows you to use your creativity to continue drawing and create your own colorful world.
                    </p>
                </div>
                <InfoSection
                    imageMotion={`
                    ${show ? 'sm:translate-x-0 translate-y-0 scale-100' : 'sm:-translate-x-52 translate-y-52 scale-75'} transition-all duration-1000 sm:translate-y-0 sm:scale-100 lg:w-full sm:w-2/3
                    `}

                    style={`
                    ${show ? 'sm:translate-x-0 translate-y-0 scale-100' : 'sm:translate-x-52 translate-y-52 scale-75'} transition-all duration-1000 sm:translate-y-0 sm:scale-100 flex-col-reverse mt-5
                    `}
                    title={'What Is Art Therapy?'}
                    details={`Art therapy is like using art to help you feel better. It's when you draw, paint, or make sculptures to explore your feelings and sort through any tough stuff you're dealing with. It's a cool way to express yourself when words just aren't enough. You can dive into your creative side and uncover new things about yourself. It's helpful for people of all ages, whether you're facing challenges or just want to understand yourself better.`}

                    pic={infoPic1} />

                <InfoSection
                    imageMotion={`
                    ${show ? 'sm:translate-x-0 sm:translate-y-0 translate-y-0 scale-100' : 'sm:!-translate-x-52 translate-y-52 scale-75'} transition-all duration-1000 sm:translate-y-0 sm:scale-100 lg:w-full sm:w-2/3
                    `}

                    style={`
                    ${show ? 'sm:translate-x-0 sm:translate-y-0 translate-y-0 scale-100' : 'sm:translate-x-52 translate-y-52 scale-75'} transition-all duration-1000 sm:translate-y-0 sm:scale-100 flex-col-reverse 
                    `}

                    title={'About Users'}
                    details={`Art lovers, tech enthusiasts, and those who seek the miracle of art to bring growth and vibrancy to their lives—these are the friends and companions of Raamona.
If, along the way, you ever find yourself facing the mirage of anxiety or the quiet storms of depression, rest assured you’re not alone with us by your side.
                We recognise the hustle of the modern world and the realities of ADHD. We've all walked this path, and we're in it together.
`}
                    pic={infoPic2}
                    usersDetail={<>
                        <div>
                            <h5 className="sm:text-end text-center">+400 k</h5>
                            <h6 className="sm:text-end text-center">Other Users</h6>
                        </div>
                        <div>
                            <h5 className="sm:text-end text-center">+200 k</h5>
                            <h6 className="sm:text-end text-center">Therapist Users</h6>
                        </div>
                        <div>
                            <h5 className="sm:text-end text-center">+100 k</h5>
                            <h6 className="sm:text-end text-center">Artist Users</h6>
                        </div>
                        <div>
                            <h5 className="sm:text-end text-center">+100 k</h5>
                            <h6 className="sm:text-end text-center">Treated Users</h6>
                        </div>
                    </>} />
            </section>
        </>
    )
}

export default RaamonaInfo