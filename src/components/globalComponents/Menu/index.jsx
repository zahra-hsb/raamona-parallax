import Link from "next/link"

const Menu = () => {
    const menu = [
        {title: 'Home', link: '/'},
        {title: 'Blog', link: '/blog'},
        {title: 'Contact Us', link: '/contact'},
        {title: 'About Us', link: '/about'}
    ]
    return (
        <>
            <ul className="flex w-full gap-5 justify-center py-2 font-semibold">
                {menu.map(item => (
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