'use client'
import Image from "next/image"
import banner from '../../../../public/banner/Profile Cover.png'
import cover from '../../../../public/images/profile/Frame 60.png'
import icon from '../../../../public/icons/Ticket_duotone_line.svg'
import editIcon from '../../../../public/icons/Edit_duotone_line.svg'
import PageTitle from "@/components/globalComponents/PageTitle"
import Link from "next/link"
import countryIcon from '../../../../public/icons/us.svg'
import lock from '../../../../public/icons/Lock_duotone_line.svg'
import searchIcon from '../../../../public/icons/Search_alt_duotone_line.svg'
import hubIcon from '../../../../public/icons/Hub.svg'
import starIcon from '../../../../public/icons/Star_duotone_line.svg'
import dateIcon from '../../../../public/icons/Date_range_duotone_line.svg'
import saveIcon from '../../../../public/icons/Save_duotone.svg'
import userIcon from '../../../../public/icons/User_alt_duotone_line.svg'
import usernameIcon from '../../../../public/icons/User_duotone_line.svg'
import passwordIcon from '../../../../public/icons/Password.svg'
import countryInputIcon from '../../../../public/icons/world_2_light.svg'
import mapIcon from '../../../../public/icons/Map_duotone_line.svg'
import { useState } from "react"
import ProfileTabs from "../ProfileTabs"
import { useRouter } from "next/navigation"
import ShareButton from "@/components/globalComponents/ShareButton"


const tabArray = [
    { text: 'Information', id: 1 },
    { text: 'Generation', id: 2 },
    { text: 'Analysis', id: 3 },
    { text: 'Coming soon...', id: 4 },
]
const viewInputsArray = [
    { icon: userIcon, iId: 'fName', maxLength: 25, placeholder: 'First name', type: 'text', width: 'w-1/3', disabled: true, id: 1 },
    { icon: userIcon, iId: 'lName', maxLength: 25, placeholder: 'Last name', type: 'text', width: 'w-1/3', disabled: true, id: 1 },
    { icon: dateIcon, iId: 'bDate', maxLength: 25, placeholder: 'Birth Date', type: 'text', width: 'w-1/3', disabled: true, id: 1 },

]
const inputsArray = [
    { icon: userIcon, iId: 'fName', maxLength: 25, placeholder: 'First name', type: 'text', width: 'w-full', disabled: false, id: 1 },
    { icon: userIcon, iId: 'Last name', maxLength: 25, placeholder: 'Last name', type: 'text', width: 'w-full', disabled: false, id: 4 },
    { icon: userIcon, iId: 'mName', maxLength: 25, placeholder: 'Middle name', type: 'text', width: 'w-full', disabled: false, id: 7 },
    { icon: countryInputIcon, iId: 'country', maxLength: 25, placeholder: 'Country', type: 'text', width: 'w-full', disabled: false, id: 2 },
    { icon: mapIcon, iId: 'city', maxLength: 25, placeholder: 'City', type: 'text', width: 'w-full', disabled: false, id: 5 },
    { icon: dateIcon, iId: 'bDate', maxLength: 25, placeholder: 'Birth date', type: 'text', width: 'w-full', disabled: false, id: 8 },
    { icon: usernameIcon, iId: 'username', maxLength: 25, placeholder: '@username', type: 'text', width: 'w-full', disabled: false, id: 3 },
    { icon: passwordIcon, iId: 'password', maxLength: 25, placeholder: 'New Password', type: 'password', width: 'w-full', disabled: false, id: 6 },
    { icon: passwordIcon, iId: 'cPass', maxLength: 25, placeholder: 'Confirm new password', type: 'password', width: 'w-full', disabled: false, id: 9 },

]


const Profile = () => {
    const [showEditInfo, setShowEditInfo] = useState(false)
    const [showSearchBox, setShowSearchBox] = useState(false)

    const router = useRouter()

    function handleShowEditInfo() {
        setShowEditInfo(true)
    }
    function handleSaveInfo() {
        setShowEditInfo(false)
    }
    function handleShowSearch() {
        setShowSearchBox(!showSearchBox)
    }
    return (
        <>
            <div className="w-full ">
                <PageTitle title={'Profile'} style={'!text-white absolute top-32 left-20'} />
                <Image src={banner} className="w-full" alt="" />
                <div className="absolute p-2 flex items-center gap-2 bg-white rounded-lg z-50 -mt-24 right-10">
                    <h4 className="text-blue">28</h4>
                    <Image src={icon} alt="" />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="px-16 flex items-start justify-between gap-5">
                    <div className="rounded-full overflow-hidden relative w-[200px] -mt-20 border-2 border-white">
                        <Link href={'/upload'} className="absolute top-8 z-50 right-8">
                            <Image src={editIcon} alt="" />
                        </Link>
                        <Image src={cover} alt="" className="" />
                    </div>
                    <div className="flex flex-col gap-2 -ml-44">
                        <h2 className="text-xl font-semibold">First/Last Name</h2>
                        <div className="flex gap-2">
                            <Image src={countryIcon} alt="" />
                            <p>Los Angles, United State</p>
                        </div>
                        <h3>@Username</h3>
                    </div>
                    <div className="flex gap-5 text-gray-500">
                        <div>
                            <h4>Followers</h4>
                            <p>1,258</p>
                        </div>
                        <div>
                            <h4>Following</h4>
                            <p>165</p>
                        </div>
                        <div>
                            <h4>Generate</h4>
                            <p>369</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center justify-end">
                        <span className="rounded-full flex items-center gap-1 border p-1 cursor-pointer">
                            <span className="rounded-full bg-blue p-1">
                                <Image src={lock} alt="" />
                            </span>
                            <span className="text-blue opacity-40 mr-1">Privet</span>
                        </span>
                        <div className="relative">
                            <button onClick={handleShowSearch} className="bg-blue p-3 rounded-lg">
                                <Image src={searchIcon} alt="" />
                            </button>
                            {showSearchBox && <input type="search" className="bg-gray-100 px-7 py-2 w-[200px] outline-none rounded-md absolute top-14 left-0" placeholder="Search Username..." />}
                        </div>
                        <button onClick={handleShowEditInfo} className="bg-blue p-3 rounded-lg">
                            <Image src={editIcon} alt="" />
                        </button>
                        {/* edit view */}
                        {showEditInfo &&
                            <button onClick={handleSaveInfo} className="border-2 border-blue p-3 rounded-lg">
                                <Image src={saveIcon} alt="" />
                            </button>
                        }
                        <ShareButton title={'share'} url={'#'} />
                        <button onClick={() => router.push('/hub')} className="bg-blue p-3 rounded-lg">
                            <Image src={hubIcon} alt="" />
                        </button>
                        <button className="bg-blue p-3 rounded-lg">
                            <Image src={starIcon} alt="" />
                        </button>
                    </div>
                </div>
                <div className="pl-72 pr-44">
                    <h4 className="text-xl">Description</h4>
                    <p className="text-justify">
                        aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst
                    </p>
                </div>
                <ProfileTabs
                    tabArray={tabArray}
                    inputsArray={showEditInfo ? inputsArray : viewInputsArray}
                    showEditInfo={showEditInfo}
                />
            </div>
        </>
    )
}

export default Profile