import Image from "next/image"
import bg1 from '../../../../public/images/parallax/Frame (1).svg'
import '../../../app/paris-font.css'
import Button from "@/components/globalComponents/Button"
import Join from '../../../../public/icons/Search_alt_duotone_line.svg'
import sun from '../../../../public/images/parallax/sun.svg'
import mountain from '../../../../public/images/parallax/Group 20.png'
import earth from '../../../../public/images/parallax/Front.png'
import sky from '../../../../public/images/parallax/Group (1).png'

const Main = () => {
    return (
        <>
            <section className="w-full relative bg-gradient-to-b from-[#474afe] to-[#a4f1de] overflow-hidden">
                <h3 className="paris text-[60pt] text-blue font-extrabold absolute z-30 top-64 right-96">Raamona</h3>
                <div className="w-full flex relative">
                    <input type="text" className="w-80 p-2 rounded-md border border-gray-500 shadow-md backdrop-blur-lg placeholder:text-gray-500 top-96 bg-transparent right-96 z-30 absolute" placeholder="Search Username..." />
                    <Button
                        text={
                            <>
                                <Image src={Join} alt="join raamona" />
                            </>}
                        style={'absolute z-30 top-96 mt-1 mr-1 right-96 !py-1'}
                    />
                </div>
                <div>
                <Image className={`scale-125`} src={bg1} alt="" />
                {/* <Image className={`absolute z-50 top-16 right-[41%]`} src={sun} alt="" /> */}
                {/* <Image className={`absolute left-0 top-0 z-10`} src={mountain} alt="" /> */}
                {/* <Image className={`absolute left-0 top-0 z-0`} src={sky} alt="" /> */}
                {/* <Image className={`absolute left-0 bottom-0 w-full scale-125 z-30 `} src={earth} alt="" /> */}

                </div>
            </section>
        </>
    )
}

export default Main