import Image from "next/image"
import bg1 from '../../../../public/images/parallax/Frame (1).svg'
import '../../../app/paris-font.css'
import Button from "@/components/globalComponents/Button"
import Join from '../../../../public/icons/Search_alt_duotone_line.svg'

const Main = () => {
    return (
        <>
            <section className="w-full  bg-gradient-to-b from-[#474afe] to-[#a4f1de] overflow-hidden">
                <h3 className="text-[60pt] text-blue font-extrabold absolute z-30 top-64 right-96">Raamona</h3>
                <div className="w-full flex relative">
                    <input type="text" className="w-72 p-3 rounded-md border border-gray-500 shadow-md backdrop-blur-lg placeholder:text-gray-500 top-96 bg-transparent right-96 z-30 absolute" placeholder="Search Username..." />
                    <Button
                        text={
                            <>
                                <Image src={Join} alt="join raamona" />
                            </>}
                        style={'absolute z-30 top-96 mt-1 mr-1 right-96'}
                    />
                </div>
                <div>
                    <Image className={`scale-125`} src={bg1} alt="" />
                </div>
            </section>
        </>
    )
}

export default Main