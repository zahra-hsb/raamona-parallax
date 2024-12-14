'use client'
import { createContext, useContext, useEffect, useState } from "react"
import FaQ from "../FaQ"
import Footer from "../Footer"
import Main from "../Main"
import RaamonaInfo from "../RaamonaInfo"
import Tabs from "../Tabs"
import { LoadContext } from "@/components/context/context"
import { deviceDetector } from "@/methods"
import MobileMain from "@/components/mobileHomeComponents/MobileMain"


const MainPage = () => {
    const [device, setDevice] = useState(false)
    const { isLoad, handleLoad } = useContext(LoadContext)
    useEffect(() => {
        async function handleDetectDevice() {
            setDevice(await deviceDetector())
        }
        handleDetectDevice()
    }, [])
    return (
        <>
            {device ?
                <MobileMain />
                :
                <Main />
            }
            <Tabs />
            <RaamonaInfo />
            <FaQ />
            <Footer isShow={true} />
        </>
    )
}

export default MainPage