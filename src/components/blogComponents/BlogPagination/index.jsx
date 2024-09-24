'use client';  
import Image from "next/image";  
import blog from '../../../../public/images/blog/Property 1=Default.png';  
import DateAndViews from "@/components/globalComponents/DateAndViews";  
import { useEffect, useState } from "react";  
import Button from "@/components/globalComponents/Button";  
import next from '../../../../public/icons/Expand_right_double_light.svg';  

const BlogPagination = () => {  
    const postsPerPage = 6;  
    const [currentPage, setCurrentPage] = useState(1);  
    const [date, setDate] = useState('');  

    useEffect(() => {  
        const now = new Date();  
        const t = now.toDateString();  
        setDate(t);  
    }, []);  

    const array = [  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  
        { image: blog, title: 'Lorem ipsum dolor sit amet consectetur', text: 'Lorem ipsum dolor sit amet consectetur.', date: date },  

    ];  

    const totalPages = Math.ceil(array.length / postsPerPage);  

    const indexOfLastPost = currentPage * postsPerPage;  
    const indexOfFirstPost = indexOfLastPost - postsPerPage;  
    const currentPosts = array.slice(indexOfFirstPost, indexOfLastPost);  

    const handleNextPage = () => {  
        if (currentPage < totalPages) {  
            setCurrentPage(currentPage + 1);  
        }  
    };  

    const handlePrevPage = () => {  
        if (currentPage > 1) {  
            setCurrentPage(currentPage - 1);  
        }  
    };  

    const renderPaginationButtons = () => {  
        const buttons = [];  
        const startPage = Math.max(1, currentPage - 1);  
        const endPage = Math.min(totalPages, currentPage + 1);  

        for (let i = startPage; i <= endPage; i++) {  
            buttons.push(  
                <button  
                    key={i}  
                    onClick={() => setCurrentPage(i)}  
                    className={`border rounded ${currentPage !== i ? 'rounded-full px-3 py-1 border-2' : 'border-gray-400 rounded-full px-4 border-2 py-2'} transition-all duration-300 m-1`}  
                >  
                    {i}  
                </button>  
            );  
        }  

        return buttons;  
    };  

    return (  
        <>  
            <section className="px-20 py-5 grid gap-5 grid-cols-3">  
                {currentPosts.length > 0 ? currentPosts.map((item, index) => (  
                    <div key={index} className="relative overflow-hidden rounded-3xl text-white w-full">  
                        <Image src={item.image} alt="raamona blog" className="w-full" />  
                        <div className="absolute w-full z-20 bottom-0 backdrop-blur-md p-3">  
                            <h3 className="text-lg">{item.title}</h3>  
                            <p className="text-sm text-gray-100">{item.text}</p>  
                            <div className="flex justify-between items-center">  
                                <DateAndViews date={item.date} style={'text-white !mt-0'} />  
                                <Button style={'text-white !bg-transparent !p-2'} text={'View more...'} />  
                            </div>  
                        </div>  
                    </div>  
                )) : (  
                    <div>There are no blogs here...</div>  
                )}  
            </section>  
            <div className="flex justify-center items-center px-20 py-5 h-20">  
                <button  
                    onClick={handlePrevPage}  
                    disabled={currentPage === 1}  
                    className={`p-2 border-2 rounded-full ${currentPage === 1 ? `border-gray-400 opacity-0 translate-x-10` : `border-blue`} transition-all duration-300`}>  
                    <Image className="rotate-180" src={next} alt="" />  
                </button>  

                <span className={` ${currentPage === 1 ? `-translate-x-10` : ``} transition-all duration-300`}>  
                    {renderPaginationButtons()}  
                </span>  

                <button  
                    onClick={handleNextPage}  
                    disabled={currentPage === totalPages}  
                    className={`p-2 border-2 rounded-full ${currentPage === totalPages ? `border-gray-400` : `border-blue`} ${currentPage === 1 ? `-translate-x-10` : ``} transition-all duration-300`}>  
                    <Image className="" src={next} alt="" />  
                </button>  
            </div>  
        </>  
    );  
}  

export default BlogPagination;