import Header from "@/components/globalComponents/Header"
import Hub from "@/components/hubComponents/Hub"

const hub = () => {
    return (
        <>  
            <Header isLoggedIn={true} style={'w-[90%] z-50'} isShowPlayBtn={true} />
            <Hub />
        </>
    )
}

export default hub