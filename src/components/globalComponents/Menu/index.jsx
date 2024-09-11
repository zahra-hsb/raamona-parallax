import Link from "next/link"

const Menu = ({ style, whichMenu }) => {
    const menu = [
        { title: 'Home', link: '/' },
        { title: 'Blog', link: '/blog' },
        { title: 'Contact Us', link: '/contact' },
        { title: 'About Us', link: '/about' }
    ]
    const menu2 = [
        { title: 'Home', link: '/' },
        { title: 'Book Shelf', link: '/bookshelf' },
        { title: 'Blog', link: '/blog' },
        { title: 'Price', link: '/price' }
    ]
    return (
        <>
            <ul className={`flex justify-center items-center py-2 font-semibold ` + style}>
                {whichMenu ? menu.map(item => (
                    <>
                        <li>
                            <Link href={item.link} >
                                {item.title}
                            </Link>
                        </li>
                    </>
                ))
                :
                menu2.map(item => (
                    <>
                        <li>
                            <Link href={item.link} >
                                {item.title}
                            </Link>
                        </li>
                    </>
                ))}
            </ul>
        </>
    )
}

export default Menu