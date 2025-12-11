'use client'
import Image from "next/image"
import Header from "../globalComponents/Header"
import backIcon from '../../../public/icons/Refund_ring_back.svg'
import Footer from "../homeComponents/Footer"
import PageTitle from "../globalComponents/PageTitle"
import icon from '../../../public/icons/User_alt_duotone_line.svg'
import Input from "../globalComponents/Input"
import email from '../../../public/icons/mail.svg'
import Textarea from "../globalComponents/Textarea"
import textareaicon from '../../../public/icons/Desk_alt_duotone_line.svg'
import Button from "../globalComponents/Button"
import send from '../../../public/icons/Send_duotone_line.svg'
import Link from "next/link"
import instagram from '../../../public/icons/Instagram.svg'
import twitter from '../../../public/icons/Twitter.svg'
import linkedin from '../../../public/icons/LinkedIn.svg'
import { useRouter } from "next/navigation"

const ContactUs = () => {
    const router = useRouter()
    return (
        <>
            <section className="flex">
                <aside className="bg-contact w-1/2 bg-cover bg-no-repeat bg-center p-10">
                    <button onClick={() => router.back()}>
                        <Image src={backIcon} alt="" />
                    </button>
                </aside>
                <main className="px- flex flex-col">
                    <Header isShowPlayBtn={true} style={'w-[90%]'} menuStyle={'!justify-start w-1/2'} isLoggedIn={false} />
                    <div className="px-28 flex flex-col gap-5">
                        <PageTitle title={'Contact Us'} />
                        <form>
                            <h2 className="text-3xl font-bold">Contact Us</h2>
                            <div className="bg-gray-200 p-8 rounded-lg flex flex-col gap-5">
                                <h4>How can i help you?</h4>
                                <Input icon={icon} id={'name'} label={'NAME'} maxLength={20} placeholder={'Enter your fullname'} type={'text'} />
                                <Input icon={email} id={'email'} label={'EMAIL'} maxLength={25} placeholder={'Enter your Email'} type={'email'} />
                                <Textarea icon={textareaicon} id={'description'} label={'DESCRIPTION'} placeholder={"Enter your description..."} />
                                <Button text={
                                    <>
                                        <Image src={send} alt="" />
                                        SEND MESSAGE
                                    </>
                                } />
                                <p className="text-center">
                                    or send email to:
                                    <Link href={'mailto:support@raamona.com'} className="px-1 text-blue">support@raamona.com</Link>
                                </p>
                                <div className="flex items-center gap-2 justify-center w-full">
                                    <Link href={'#'}>
                                        <Image src={instagram} alt="" width={30} />
                                    </Link>
                                    <Link href={'#'}>
                                        <Image src={twitter} alt="" width={30} />
                                    </Link>
                                    <Link href={'#'}>
                                        <Image src={linkedin} alt="" width={30} />
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Footer />
                </main>
            </section>
        </>
    )
}

export default ContactUs
