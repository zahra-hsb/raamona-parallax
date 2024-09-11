import BlogSlider from "@/components/blogComponents/BlogSlider"
import Header from "@/components/globalComponents/Header"
import Footer from "@/components/homeComponents/Footer"


const blog = () => {
    return (
        <>
            <Header style={'w-[90%] fixed z-50'} />
            <BlogSlider />
            <Footer isShow={false} />
        </>
    )
}

export default blog