import About from "@/components/aboutComponents/About"
import Header from "@/components/globalComponents/Header"

const about = () => {
    return (
        <>
            <Header style={'fixed w-[90%] z-50 '} />
            <About />
        </>
    )
}

export default about