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
import shareIcon from '../../../../public/icons/group_share_light.svg'
import hubIcon from '../../../../public/icons/group_share_light.svg'
import starIcon from '../../../../public/icons/Star_duotone_line.svg'
import dateIcon from '../../../../public/icons/Date_range_duotone_line.svg'
import infoIcon from '../../../../public/icons/Info_alt_duotone_line.svg'
import Tab from "@/components/globalComponents/Tab"
import Input from "@/components/globalComponents/Input"
import Textarea from "@/components/globalComponents/Textarea"

const tabArray = [
    { text: 'Information', id: 1 },
    { text: 'Generation', id: 2 },
    { text: 'Analysis', id: 3 },
    { text: 'Coming soon...', id: 4 },
]

const Profile = () => {

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
                        <button className="bg-blue p-3 rounded-lg">
                            <Image src={searchIcon} alt="" />
                        </button>
                        <button className="bg-blue p-3 rounded-lg">
                            <Image src={editIcon} alt="" />
                        </button>
                        <button className="bg-blue p-3 rounded-lg">
                            <Image src={shareIcon} alt="" />
                        </button>
                        <button className="bg-blue p-3 rounded-lg">
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
                <div className=" py-10">
                    <div className="flex gap-2 border-b px-32">
                        {tabArray?.map(item => (
                            <>
                                <Tab text={item.text} key={item.id} />
                            </>
                        ))}
                    </div>
                    <div className="px-32 py-10 flex flex-col gap-5">
                        <Input icon={dateIcon} id={'date'} maxLength={25} placeholder={'Birth Day'} type={'text'} width={'w-1/3'} />
                        <Input icon={dateIcon} id={'date'} maxLength={25} placeholder={'First/Last Name'} type={'text'} width={'w-1/3'} />
                        <Input icon={dateIcon} id={'date'} maxLength={25} placeholder={'First/Last Name'} type={'text'} width={'w-1/3'} />
                        <Textarea placeholder={'Description'}  icon={infoIcon} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile