import Link from "next/link"

const Menu = ({ style, whichMenu }) => {

    const menu = [
        { id: 0, title: 'Home', link: '/' },
        { id: 1, title: 'Blog', link: '/blog' },
        { id: 2, title: 'Contact us', link: '/contact' },
        { id: 3, title: 'About us', link: '/about' }
    ]
    return (
        <>
            <ul className={`flex justify-center items-center py-2 font-semibold overflow-hidden flex-nowrap mx-5 ` + style}>
                {menu.map(item => (
                    <li key={item.id}>
                        <Link className="text-nowrap" href={item.link} >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Menu