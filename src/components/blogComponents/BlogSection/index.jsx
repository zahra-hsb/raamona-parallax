import BlogCard from "../BlogCard"
import image1 from '../../../../public/images/blog/Frame 225.png'
import image2 from '../../../../public/images/blog/Frame 230.png'

const BlogSection = () => {
    const array = [
        { image: image1, title: 'Lorem ipsum dolor sit amet consectetur.', text: 'Lorem ipsum dolor sit amet consectetur. Facilisi volutpat non amet tortor eu. Vestibulum turpis augue viverra cras diam volutpat. Ipsum varius sed tincidunt nunc laoreet bibendum praesent. Vestibulum lectus tortor risus lorem lectus eu. Purus pretium risus a faucibus odio ultrices dignissim adipiscing tristique. Nunc faucibus quis parturient mattis ultrices....' },
        { image: image2, title: 'Lorem ipsum dolor sit amet consectetur.', text: 'Lorem ipsum dolor sit amet consectetur. Facilisi volutpat non amet tortor eu. Vestibulum turpis augue viverra cras diam volutpat....' },
        { image: image2, title: 'Lorem ipsum dolor sit amet consectetur.', text: 'Lorem ipsum dolor sit amet consectetur. Facilisi volutpat non amet tortor eu. Vestibulum turpis augue viverra cras diam volutpat....' },
    ]
    return (
        <>
            <section className="py-5 px-20 flex gap-10">
                {array != null && <BlogCard image={array[0].image} title={array[0].title} text={array[0].text} style={'w-1/2'} />}

                <div className="flex flex-col gap-5">
                    {array != null && array.splice(1, 2).map((item) => (
                        <>
                            <BlogCard image={item.image} title={item.title} text={item.text} style={'!flex-row'} />
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}

export default BlogSection