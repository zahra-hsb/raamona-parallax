import Image from "next/image"



const PictureContainer = ({ item }) => {
    console.log(item);
    return (
        <>
            <div className="rounded w-full h-full">
                <Image src={item} alt="raamona" />
            </div>
        </>
    )
}

export default PictureContainer