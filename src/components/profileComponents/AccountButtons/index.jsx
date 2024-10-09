import Button from "@/components/globalComponents/Button"
import ShareButton from "@/components/globalComponents/ShareButton"
import Image from "next/image"
import Toggle from "../Toggle"
import { useRouter } from "next/navigation"
import searchIcon from '../../../../public/icons/Search_alt_duotone_line.svg'
import hubIcon from '../../../../public/icons/Hub.svg'
import starIcon from '../../../../public/icons/Star_duotone_line.svg'
import followIcon from '../../../../public/icons/User_add_alt_duotone_line.svg'
import saveIcon from '../../../../public/icons/Save_duotone.svg'
import editIcon from '../../../../public/icons/Edit_duotone_line.svg'


const AccountButtons = ({ isViewMode, handlePublic, isPublic, handleShowSearch, showSearchBox, handleShowEditInfo, handleSaveInfo, showEditInfo }) => {
    const router = useRouter()
    return (
        <>
            <div className="flex gap-2 items-center justify-end">
                {!isViewMode && <Toggle handlePublic={handlePublic} isPublic={isPublic} />}
                <div className="relative">
                    <button onClick={handleShowSearch} className="bg-blue p-3 rounded-lg">
                        <Image src={searchIcon} alt="" />
                    </button>
                    {showSearchBox && <input type="search" className="bg-gray-100 px-7 py-2 w-[200px] outline-none rounded-md absolute top-14 left-0" placeholder="Search Username..." />}
                </div>
                {!isViewMode && !showEditInfo && <button onClick={handleShowEditInfo} className="bg-blue p-3 rounded-lg">
                    <Image src={editIcon} alt="" />
                </button>}
                {/* edit view */}
                {showEditInfo &&
                    <button onClick={handleSaveInfo} className="border-2 border-blue p-3 rounded-lg">
                        <Image src={saveIcon} alt="" />
                    </button>
                }
                {isViewMode && <Button
                    style={'!bg-white border-2 border-blue h-full py-3 !text-blue'}
                    text={
                        <>
                            Follow
                            <Image src={followIcon} alt="" />
                        </>
                    } />}
                <ShareButton title={'share'} url={'#'} />
                {!isViewMode &&
                    <>
                        <button onClick={() => router.push('/hub')} className="bg-blue p-3 rounded-lg">
                            <Image src={hubIcon} alt="" />
                        </button>
                        <button className="bg-blue p-3 rounded-lg">
                            <Image src={starIcon} alt="" />
                        </button>
                    </>
                }
            </div>
        </>
    )
}

export default AccountButtons 