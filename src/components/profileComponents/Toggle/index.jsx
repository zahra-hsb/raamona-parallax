import lock from '../../../../public/icons/Lock_duotone_line.svg'
import unlockIcon from '../../../../public/icons/Unlock_duotone_line.svg'

const Toggle = ({ handlePublic, isPublic }) => {
    return (
        <button onClick={handlePublic} className={`rounded-full flex items-center gap-1 border p-1 cursor-pointer ${isPublic ? `flex-row-reverse` : `flex-row`}`}>
            <span className={`rounded-full bg-blue p-1 ${isPublic ? 'bg-orange' : 'bg-blue'}`}>
                <Image src={isPublic ? unlockIcon : lock} alt="" />
            </span>
            <span className={`opacity-40 ${isPublic ? 'text-orange ml-1' : 'text-blue mr-1'}`}>{isPublic ? 'Public' : 'Private'}</span>
        </button>
    )
}

export default Toggle