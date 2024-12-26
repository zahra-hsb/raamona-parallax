import Image from "next/image"

const PrivacyToggle = ({ isPrivate, onToggle }) => {
    return (
        <>
            <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={onToggle}
            >
                {/* <div className={`w-10 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out 
                ${isPrivate ? 'bg-blue-500' : 'bg-gray-300'}`
                }>
                    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out 
                    ${isPrivate ? 'translate-x-4' : ''}`}></div>
                </div> */}
                <span className="rounded-full flex items-center gap-1 border p-2">
                    <span className={`rounded-full p-1 ${isPrivate ? 'translate-x-14 bg-blue' : 'bg-orange'} transition-all duration-300`}>
                        <Image src="/icons/Lock_duotone_line.svg" width={16} height={16} alt="Privacy" />
                    </span>
                    <span className={`text-blue opacity-40 mr-1 ${isPrivate ? '-translate-x-5' : ''} transition-all duration-300`}>
                        {isPrivate ? 'Private' : 'Public'}
                    </span>
                </span>
            </div>
        </>
    )
}

export default PrivacyToggle