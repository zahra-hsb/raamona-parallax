import Button from "@/components/globalComponents/Button"
import Image from "next/image"
import Join from '../../../../public/icons/Pointers_duotone_line.png'
import instagram from '../../../../public/icons/Instagram (1).png'
import linkedin from '../../../../public/icons/LinkedIn (1).png'
import twitter from '../../../../public/icons/Twitter (1).png'
import facebook from '../../../../public/icons/Facebook (1).png'
import tiktok from '../../../../public/icons/TikTok.png'
import telegram from '../../../../public/icons/Telegram.png'

const Footer = () => {
    const social = [
        instagram,
        linkedin,
        twitter,
        facebook,
        tiktok,
        telegram
    ]
    return (
        <>
            <footer className="w-full py-10 px-20">
                <section className="w-full rounded-2xl bg-amber-50 pt-10 px-28 flex flex-col">
                    <form className="w-full">
                        <div className="w-full flex relative">
                            <input type="text" className=" w-full p-3 rounded-md border backdrop-blur-3xl" placeholder="Enter Your Email..." />
                            <Button
                                text={
                                    <>
                                        Join Us
                                        <Image src={Join} alt="join raamona" />
                                    </>}
                                style={'absolute top-1 right-2'}
                            />
                        </div>
                    </form>
                    <div className="flex gap-2 w-full items-center justify-center py-2">
                        {social.map(item => (
                            <>
                                <Image src={item} alt="" />
                            </>
                        ))}
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer