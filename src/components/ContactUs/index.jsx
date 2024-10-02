import Image from "next/image"
import Header from "../globalComponents/Header"
import backIcon from '../../../public/icons/Refund_ring_back.svg'

const ContactUs = () => {
    return (
        <>
            <section className="flex">
                <aside className="bg-contact w-1/2 bg-cover h-screen bg-no-repeat bg-center">
                    <Image src={backIcon} alt="" />
                </aside>
                <main>
                    <Header style={''} menuStyle={'!justify-start w-1/2'} isLoggedIn={false} />
                </main>
            </section>
        </>
    )
}

export default ContactUs