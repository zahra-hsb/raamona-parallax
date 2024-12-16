import Image from "next/image"



const PictureContainer = ({ item, isSecond }) => {
    return (
        <>
            <div aria-hidden={isSecond} className="rounded sm:w-[200px] h-[200px] sm:basis-">
                <Image src={item} alt="raamona" className="object-contain max-w-none w-[200px] h-[200px]" />
            </div>
        </>
    )
}

export default PictureContainer