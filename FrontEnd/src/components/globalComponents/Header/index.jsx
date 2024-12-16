'use client'
import Account from "../Account"
import Logo from "../Logo"
import Menu from "../Menu"
import PlayButton from "../PlayButton"


const Header = ({ style, menuStyle, isLoggedIn, isShowPlayBtn }) => {
    return (
        <>
            <header className={style + ` hidden sm:flex justify-between gap-10 rounded-full shadow-xl p-5 mx-14 my-5 backdrop-blur-md bg-white/10`}>
                <nav className="w-full flex gap-5">
                    <Logo />
                    <Menu style={'gap-5 text-blue ' + menuStyle} whichMenu={false} />
                </nav>
                <nav className="w-full flex gap-5 justify-end items-center">
                    {isLoggedIn && <Account />}
                    {isShowPlayBtn && <PlayButton />}
                </nav>
            </header>
        </>
    )
}

export default Header