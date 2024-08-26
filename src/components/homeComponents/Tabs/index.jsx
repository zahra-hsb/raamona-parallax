import PictureContainer from "../PictureContainer"
import pic1 from '../../../../public/images/pics/1.png'
import pic2 from '../../../../public/images/pics/2.png'
import pic3 from '../../../../public/images/pics/3.png'
import pic4 from '../../../../public/images/pics/4.png'
import pic5 from '../../../../public/images/pics/5.png'
import pic6 from '../../../../public/images/pics/6.png'
import pic7 from '../../../../public/images/pics/7.png'
import pic8 from '../../../../public/images/pics/8.png'
import pic9 from '../../../../public/images/pics/9.png'
import pic10 from '../../../../public/images/pics/10.png'
import pic11 from '../../../../public/images/pics/11.png'
import pic12 from '../../../../public/images/pics/12.png'
import pic13 from '../../../../public/images/pics/13.png'
import pic14 from '../../../../public/images/pics/14.png'
import pic15 from '../../../../public/images/pics/15.png'
import Image from "next/image"


const Tabs = () => {

    const pics1Array = {
        div1: [pic2, pic3, pic4, pic5, pic5],
        div2: [pic6, pic6, pic9, pic10, pic10],
        div: [pic11, pic12, pic13, pic14, pic12]
    }
    const pics2Array = [pic7, pic6, pic9, pic10, pic15]
    return (
        <>
            <section className="w-full">
                <div className="w-full flex gap-14 justify-center items-center">
                    <span className="py-2 text-blue font-bold cursor-pointer border-b-2 border-b-orange">All Images</span>
                    <span className="py-2 text-gray-500 cursor-pointer">For Coloring</span>
                    <span className="py-2 text-gray-500 cursor-pointer">Color Image</span>
                    <span className="py-2 text-gray-500 cursor-pointer">More...</span>
                </div>
                <div className="w-full flex gap-5 py-5">
                    <div className="w-screen flex flex-col gap-5 overflow-x-hidden">
                        {Object.keys(pics1Array).map((divKey) => (
                            <div key={divKey} className="grid grid-cols-5 grid-rows-1 gap-5 w-screen even:-translate-x-20 even:w-9/10 overflow-x-hidden">
                                {pics1Array[divKey].map((pic, index) => (
                                    <>
                                        <PictureContainer key={index} item={pic} />
                                    </>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tabs