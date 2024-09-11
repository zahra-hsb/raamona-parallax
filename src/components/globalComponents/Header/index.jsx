import Account from "../Account"
import Logo from "../Logo"
import Menu from "../Menu"
import PlayButton from "../PlayButton"


const Header = ({ style }) => {
    return (
        <>
            <header className={style + ` flex justify-between gap-10 rounded-full shadow-xl p-5 mx-14 my-5 backdrop-blur-sm`}>
                <nav className="w-full flex gap-5">
                    <Logo />
                    <Menu style={'gap-9 text-blue'} whichMenu={false} />
                </nav>
                <nav className="w-full flex gap-5 justify-end">
                    <Account />
                    <PlayButton />
                </nav>
            </header>
        </>
    )
}

export default Header