import Explore from "@/components/exploreComponents/Explore"
import Header from "@/components/globalComponents/Header"

const explore = () => {
    return (
        <>
            <Header isLoggedIn={true} isShowPlayBtn={true} />
            <Explore />
        </>
    )
}

export default explore