import BlogPagination from "@/components/blogComponents/BlogPagination"
import BlogSection from "@/components/blogComponents/BlogSection"
import BlogSlider from "@/components/blogComponents/BlogSlider"
import Header from "@/components/globalComponents/Header"
import Footer from "@/components/homeComponents/Footer"


const blog = () => {
    return (
        <>
            <Header isLoggedIn={true} style={'w-[90%] fixed z-50'} />
            <BlogSlider />
            <BlogSection />
            <BlogPagination />
            <Footer isShow={false} />
        </>
    )
}

export default blog