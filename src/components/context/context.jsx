import { createContext, useEffect, useState } from "react";

export const LoadContext = createContext({
    isLoad: false,
    handleLoad: () => {}
})

export default function LoadProvider({ children }) {
    const [isLoad, setLoad] = useState(false)

    useEffect(() => {
        const handleLoad = () => {
            setLoad(true)
        }
        handleLoad()
    }, [])

    return (
        <LoadContext.Provider value={{
            isLoad,
            handleLoad
        }}>
            {children}
        </LoadContext.Provider>
    )
}