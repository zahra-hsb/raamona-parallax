'use client'
import { createContext, useContext, useEffect, useState } from "react"
import FaQ from "../FaQ"
import Footer from "../Footer"
import Main from "../Main"
import RaamonaInfo from "../RaamonaInfo"
import Tabs from "../Tabs"
import { LoadContext } from "@/components/context/context"


const MainPage = () => {

    const { isLoad, handleLoad } = useContext(LoadContext)

    return (
        <>
            <Main />
            <Tabs Home={true} />
            <RaamonaInfo />
            <FaQ />
            <Footer isShow={true} />
        </>
    )
}

export default MainPage