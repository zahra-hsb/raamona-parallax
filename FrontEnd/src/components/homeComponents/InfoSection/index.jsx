import Image from "next/image"

const InfoSection = ({ title, details, pic, usersDetail, style, imageMotion }) => {
    return (
        <>
            <div className={`w-full flex justify-between items-center py-10 ${style}`}>
                <div className="w-1/2 flex flex-col gap-5 py-14">
                    <h3 className="text-4xl">{title}</h3>
                    <p className="text-justify">
                        {details}
                    </p>
                </div>
                <div className={`flex gap-5 justify-end items-center ${imageMotion}`}>
                    <div className={`flex flex-col gap-3 ${imageMotion}`}>
                        {usersDetail}
                    </div>
                    <Image src={pic} alt="raamona info" className={`${imageMotion}`} />
                </div>
            </div>
        </>
    )
}


export default InfoSection