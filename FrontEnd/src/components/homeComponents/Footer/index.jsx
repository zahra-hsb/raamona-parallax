import Button from "@/components/globalComponents/Button"
import Image from "next/image"
import Join from '../../../../public/icons/Pointers_duotone_line.png'
import instagram from '../../../../public/icons/Instagram (1).png'
import linkedin from '../../../../public/icons/LinkedIn (1).png'
import twitter from '../../../../public/icons/Twitter (1).png'
import facebook from '../../../../public/icons/Facebook (1).png'
import tiktok from '../../../../public/icons/TikTok.png'
import telegram from '../../../../public/icons/Telegram.png'
import Menu from "@/components/globalComponents/Menu"

const Footer = ({ isShow }) => {
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
                {isShow &&
                    <>
                        <section className="w-full bg-footer h-full rounded-2xl bg-amber-50 px-28 flex flex-col pt-72 bg-cover">
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
                                {social.map((item, index) => (
                                    <Image key={index} src={item} alt="" />
                                ))}
                            </div>
                        </section>
                    </>
                }
                <Menu style={'w-full gap-5'} whichMenu={true} />
                <p className="text-center">Copyright © Raamona Group Community Standards Acknowledgements Privacy Policy Terms of Service Refund Policy Sitemap</p>
            </footer>
        </>
    )
}

export default Footer