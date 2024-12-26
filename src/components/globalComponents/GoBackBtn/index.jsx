'use client'
import { useRouter } from "next/navigation"
import Button from "../Button"

const GoBackBtn = () => {
    const router = useRouter()
    return <Button onClick={() => router.back()} text={'Go back'} style={'text-center'} />
}

export default GoBackBtn