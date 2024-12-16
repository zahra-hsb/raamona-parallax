'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const Menu = ({ style, whichMenu }) => {

    const menu = [
        { id: 0, title: 'Home', link: '/' },
        { id: 1, title: 'Blog', link: '/blog' },
        { id: 2, title: 'Contact us', link: '/contact' },
        { id: 3, title: 'About us', link: '/about' }
    ]
    const pathname = usePathname()

    return (
        <>
            <ul className={`flex justify-center items-center py-2 font-semibold overflow-hidden flex-nowrap mx-5 ` + style}>
                {menu.map(item => (
                    <li key={item.id} className={`${pathname === '/contact' && item.link === '/contact' ? 'hidden' : 'block'}`}>
                        <Link className={`${pathname === item.link ? 'text-orange' : ''} text-nowrap`} href={item.link} >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Menu