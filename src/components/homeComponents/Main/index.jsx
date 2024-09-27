'use client'
import Image from "next/image"
import bg1 from '../../../../public/images/parallax/Frame (1).svg'
import '../../../app/paris-font.css'
import Button from "@/components/globalComponents/Button"
import Join from '../../../../public/icons/Search_alt_duotone_line.svg'
import sun from '../../../../public/images/parallax/sun.svg'
import mountain from '../../../../public/images/parallax/Group 20.png'
import earth from '../../../../public/images/parallax/Front.png'
import sky from '../../../../public/images/parallax/bgup.svg'
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

const Main = () => {
    const [background, setBackground] = useState(20)

    const parallaxRef = useRef(null)
    const skyRef = useRef(null)
    const sky2Ref = useRef(null)
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
                sky2Ref.current,
                {
                    y: "+=500",
                    duration: 0.1,
                    opacity: 0
                },
                0
            )
            tl.to(
                raamona.current,
                {
                    y: "+=500",
                    duration: 0.1,
                    opacity: 0,
                }
            )
        });
        return () => ctx.revert();
    }, [])
    return (
        <>
            <section ref={parallaxRef} className="w-full relative bg-gradient-to-b from-[#474afe] to-[#a4f1de] overflow-hidden h-screen">
                <h3 ref={raamona} className="paris text-[60pt] text-blue font-extrabold absolute z-30 top-28 left-96 opacity-100">Raamona</h3>
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
                    <Image className={`scale-125 opacity-0`} src={bg1} alt="" ref={sky2Ref} />
                    {/* <Image className={`absolute z-50 top-16 right-[41%]`} src={sun} alt="" /> */}
                    {/* <Image className={`absolute left-0 top-0 z-10`} src={mountain} alt="" /> */}
                    <Image ref={skyRef} className={`opacity-${background} absolute h-screen w-full left-0 top-0 z-0 scale-105`} src={sky} alt="" />
                    <Image className={`absolute left-0 bottom-0 w-full scale-125 z-30 `} src={earth} alt="" />

                </div>
            </section>
        </>
    )
}

export default Main