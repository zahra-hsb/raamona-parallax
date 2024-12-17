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
            <footer className="w-full py-10 lg:px-20 sm:px-10 px-5">
                {isShow &&
                    <>
                        <section className="w-full sm:bg-footer bg-mobile-footer h-full rounded-3xl sm:rounded-2xl lg:px-28 sm:px-10 px-5 flex flex-col pt-10 sm:pt-72 bg-cover bg-center bg-no-repeat">
                            <form className="w-full">
                                <div className="w-full flex relative">
                                    <input type="text" className=" w-full p-2 pl-3 sm:p-3 rounded-lg sm:rounded-md border !backdrop-blur-sm bg-white/30 placeholder:text-gray-300 my-5" placeholder="Enter Your Email..." />
                                    <Button
                                        text={
                                            <>
                                                Join Us
                                                <Image src={Join} alt="join raamona" />
                                            </>}
                                        style={'absolute sm:top-6 right-2 !p-2 !py-1 !rounded-xl !text-sm top-6'}
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