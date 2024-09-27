'use client'
import Image from "next/image"
import bg1 from '../../../../public/images/parallax/Frame (1).svg'
import '../../../app/paris-font.css'
import Button from "@/components/globalComponents/Button"
import Join from '../../../../public/icons/Search_alt_duotone_line.svg'
import initialBg from '../../../../public/images/parallax/Frame.png'
import mountain from '../../../../public/images/parallax/Group 20.png'
import earth from '../../../../public/images/parallax/Front.png'
import sky from '../../../../public/images/parallax/bgup.svg'
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Header from "@/components/globalComponents/Header"

const Main = () => {
    const [background, setBackground] = useState(20)
    const [isLoad, setLoad] = useState(false)

    const parallaxRef = useRef(null)
    const skyRef = useRef(null)
    const raamona = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            var tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "2500 bottom",
                    scrub: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100 + 20))
                    },
                },
            });
            tl.to(
                skyRef.current,
                {
                    y: "+=500",
                    duration: 0.1,
                    opacity: 0
                },
                0
            );
            tl.to(
                raamona.current,
                {
                    y: "+=700",
                    duration: 0.1,
                    opacity: 0,
                },
                0
            )
        });
        return () => ctx.revert();
    }, [])

    useEffect(() => {
        const handleLoad = () => {
            setLoad(true)
        }
        handleLoad()
    }, [])
    return (
        <>
            <Header style={` ${isLoad ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'} absolute z-50 w-[90%] transition-all duration-1000`} />
            <section ref={parallaxRef} className="w-full relative bg-gradient-to-b from-[#474afe] to-[#a4f1de] overflow-hidden h-screen">
                <h3 ref={raamona} className={` ${isLoad ? '-translate-x-10 -translate-y-10 text-[60pt]' : 'translate-x-96 translate-y-28 text-[90pt] z-50 '} z-30 transition-all duration-1000 paris text-blue font-extrabold absolute top-36 left-96 opacity-100`}>Raamona</h3>
                <div className="w-full flex relative">
                    <input type="text" className="w-80 p-2 rounded-md border border-gray-500 shadow-md backdrop-blur-lg placeholder:text-gray-500 top-96 bg-transparent right-96 z-30 absolute" placeholder="Search Username..." />
                    <Button
                        text={
                            <>
                                <Image src={Join} alt="join raamona" />
                            </>}
                        style={'absolute z-30 top-96 mt-1 mr-1 right-96 !py-1'}
                    />
                </div>
                <div>
                    {/* scroll */}
                    <Image ref={skyRef} className={`${isLoad ? 'translate-x-100 translate-y-100' : '-translate-x-full -translate-y-full'} opacity-${background} absolute h-screen w-full left-0 top-0 z-0 scale-105 transition-all duration-700 ease-out`} src={sky} alt="" />
                    <Image className={`${isLoad ? 'opacity-100' : 'opacity-0'} transition-all duration-700 ease-out absolute left-0 bottom-0 w-full scale-125 z-30 `} src={earth} alt="" />
                    <Image className={`${!isLoad ? `absolute z-50 top-0 right-0 opacity-100` : 'opacity-0'} transition-all duration-500 z-40 -translate-y-52 w-full`} src={initialBg} alt="" />

                </div>
            </section>
        </>
    )
}

export default Main