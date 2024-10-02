import About from "@/components/aboutComponents/About"
import Header from "@/components/globalComponents/Header"
import Footer from "@/components/homeComponents/Footer"

const about = () => {
    return (
        <>
            <Header isLoggedIn={true} style={'fixed w-[90%] z-50 '} />
            <About />
            <Footer />
        </>
    )
}

export default about