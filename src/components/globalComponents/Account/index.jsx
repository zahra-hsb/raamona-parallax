import Image from "next/image"
import account from '../../../../public/icons/User_cicrle_duotone_line.svg'

const Account = () => {
    return (
        <>
            <div className="flex gap-2 p-3">
                <h5 className="text-blue">Username</h5>
                <Image src={account} alt="" />
            </div>
        </>
    )
}

export default Account