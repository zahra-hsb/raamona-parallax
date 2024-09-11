import Header from "@/components/globalComponents/Header";
import raamonaChar from '../../public/icons/Turnaround_ 1.svg'
import Image from "next/image";
import Button from "@/components/globalComponents/Button";


export default function NotFound() {
    return (
        <>
            <Header />
            <section className="w-full flex flex-col items-center justify-center p-5">
                <div className="flex items-center justify-center">
                    <h1 className="text-[200pt] font-bold text-blue">4</h1>
                    <Image src={raamonaChar} alt="raamona character" />
                    <h1 className="text-[200pt] font-bold text-blue">4</h1>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <h3 className="text-3xl text-center">Page not found</h3>
                    <p className="text-xl text-center">Sorry, we can’t find the page you’re looking for.</p>
                    <Button text={'Go back'} style={'text-center'}/>
                </div>
            </section>
        </>
    )
}