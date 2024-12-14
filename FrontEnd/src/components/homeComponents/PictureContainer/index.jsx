import Image from "next/image"



const PictureContainer = ({ item, isSecond }) => {
    return (
        <>
            <div aria-hidden={isSecond} className="rounded sm:w-max h-full sm:basis-full">
                <Image src={item} alt="raamona" className="object-cover max-w-none" />
            </div>
        </>
    )
}

export default PictureContainer