import Logo from "../Logo"
import Menu from "../Menu"


const Header = () => {
    return (
        <>
            <header className="flex">
                <nav className="w-full flex gap-5">
                    <Logo />
                    <Menu style={'gap-9 text-blue'} whichMenu={false} />
                </nav>
            </header>
        </>
    )
}

export default Header