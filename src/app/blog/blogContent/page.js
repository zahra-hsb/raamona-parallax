import Header from "@/components/globalComponents/Header"
import Image from "next/image"
import avatar from '../../../../public/images/blogContent/Mask Group.png'
import twitter from '../../../../public/icons/Vector (1).svg'
import facebook from '../../../../public/icons/facebook 1.svg'
import Link from "next/link"
import image from '../../../../public/images/blogContent/Rectangle 8.png'
import eyes from '../../../../public/icons/Group 10.svg'
import Footer from "@/components/homeComponents/Footer"
import BlogPagination from "@/components/blogComponents/BlogPagination"

const blogContent = () => {
    return (
        <>
            <Header isShowPlayBtn={false} isLoggedIn={true} />
            <section className="border-b-2 border-b-black relative">
                <div className="px-32 py-12 flex flex-col gap-6">
                    <h2 className="text-5xl font-semibold text-center  leading-normal">
                        A few words about this blog platform, Ghost, and how this site was made
                    </h2>
                    <p className="text-center">
                        Why Ghost (& Figma) instead of Medium, WordPress or other options?
                    </p>
                </div>
                <div className="bg-blogContent bg-cover bg-top h-screen">
                    .
                </div>
                <div className="px-52 py-5 flex flex-col items-center">
                    <div className="border-t-2 border-t-black py-5 flex w-full justify-between items-center">
                        <div className="flex items-center gap-5 ">
                            <Image src={avatar} alt="" />
                            <div>
                                <h3>Maika Matikainen</h3>
                                <p>Apr 15, 2020 · 4 min read</p>
                            </div>
                        </div>
                        <div className=" flex">
                            <Link href={'#'} className="border px-5 py-2">
                                <Image src={facebook} alt="" />
                            </Link>
                            <Link href={'#'} className="border px-5 py-2">
                                <Image src={twitter} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.
                        </p>
                        <p>
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.
                        </p>
                        <h4 className="py-10 pt-20 text-xl font-semibold text-left w-full">
                            Next on the pipeline
                        </h4>
                        <p>
                            Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi efficitur auctor metus, id mollis lorem pellentesque id.
                        </p>
                        <p>
                            Nullam posuere maximus dui et fringilla.
                        </p>
                        <div className="flex flex-col items-center py-20 pb-10">
                            <Image src={image} alt="" className="" />
                            <p className="text-sm text-center py-5 w-1/2">Image caption centered this way and I’ll make this a bit longer to indicate the amount of line-height.</p>
                        </div>
                        <p>
                            Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.
                        </p>
                        <p>
                            Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.
                        </p>
                        <h5 className="mt-10 text-left w-full">
                            A list looks like this:
                        </h5>
                        <ul className="list-disc text-left w-full">
                            <li>
                                First item in the list
                            </li>
                            <li>
                                Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet
                            </li>
                            <li>
                                Third item in the list
                            </li>
                        </ul>
                        <p className="text-left w-full">
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
                        </p>
                        <h3 className="my-10 text-xl text-left w-full">Thanks for reading, Mika</h3>
                        <div className="flex flex-col items-center justify-center w-[80%] py-10 border-b-2 border-dotted border-b-black">
                            <div className=" flex items-center justify-center w-full">
                                <Link href={'#'} className="border rounded-l px-5 py-2 h-14 flex items-center gap-5">
                                    <Image src={facebook} alt="" />
                                    Share on Facebook
                                </Link>
                                <Link href={'#'} className="border rounded-r px-5 py-2 h-14 flex items-center gap-5">
                                    <Image src={twitter} alt="" />
                                    Share on Twitter
                                </Link>
                            </div>
                            <h4 className="py-5 font-semibold text-left">Tags: product design, culture</h4>
                        </div>
                        <div className="flex items-center gap-5 py-10">
                            <Image src={avatar} alt="" />
                            <div>
                                <p>
                                    Mika Matikainen is a Design Founder & Advisor, Berlin School of Creative Leadership Executive MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src={eyes} alt="" className="w-[100px] absolute -bottom-10 left-[48%]" />
            </section>
            <div className="px-20">
                <h2 className="text-3xl text-center px-20 pt-16 font-bold">What to read next</h2>
                <BlogPagination />
            </div>
            <Footer isShow={false} />
        </>
    )
}

export default blogContent