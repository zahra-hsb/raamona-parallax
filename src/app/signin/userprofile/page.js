import Header from "@/components/globalComponents/Header"
import Profile from "@/components/profileComponents/Profile"

const userprofile = () => {
    return (
        <>
            <Header isLoggedIn={true} isShowPlayBtn={true} style={'absolute w-[90%]'}/>
            <Profile />
        </>
    )
}

export default userprofile