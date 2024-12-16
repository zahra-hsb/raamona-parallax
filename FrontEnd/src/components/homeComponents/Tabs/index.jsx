import PictureContainer from "../PictureContainer";
import pic1 from '../../../../public/images/pics/1.png';
import pic2 from '../../../../public/images/pics/2.png';
import pic3 from '../../../../public/images/pics/3.png';
import pic4 from '../../../../public/images/pics/4.png';
import pic5 from '../../../../public/images/pics/5.png';
import pic6 from '../../../../public/images/pics/6.png';
import pic7 from '../../../../public/images/pics/7.png';
import pic8 from '../../../../public/images/pics/8.png';
import pic9 from '../../../../public/images/pics/9.png';
import pic10 from '../../../../public/images/pics/10.png';
import pic11 from '../../../../public/images/pics/11.png';
import pic12 from '../../../../public/images/pics/12.png';
import pic13 from '../../../../public/images/pics/13.png';
import pic14 from '../../../../public/images/pics/14.png';
import pic15 from '../../../../public/images/pics/15.png';
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { LoadContext } from "@/components/context/context";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import TabsComponent from "@/components/globalComponents/Tabs";
import { tabsArray } from "@/components/profileComponents/Profile";

const Tabs = () => {
    const [selectedTab, setSelectedTab] = useState(1)

    function handleSelectTab(id) {
        setSelectedTab(id)
    }
    const pics1Array = {
        div1: [pic2, pic3, pic4, pic4, pic4, pic4, pic4, pic4, pic4, pic12, pic10, pic12, pic4, pic4, pic4, pic4, pic4, pic4, pic4, pic4, pic4, pic12, pic10, pic12, pic4, pic4, pic4],
        div2: [pic2, pic6, pic9, pic10, pic14, pic14, pic14, pic14, pic14, pic14, pic14, pic4, pic4, pic4],
        div: [pic11, pic12, pic13, pic14, pic12, pic5, pic12, pic2, pic3, pic12, pic12, pic4, pic15, pic4]
    };
    const pics2Array = [pic7, pic6, pic9, pic10, pic15];

    const { isLoad } = useContext(LoadContext);
    const scrollRef = useRef(null)
    useEffect(() => {
        function addAnimation() {
            const scroll = scrollRef.current
            if (!scroll) return;
            if (scroll.getAttribute('data-cloned') === 'true') return;
            const scrollChildren = Array.from(scroll.children)

            scrollChildren.forEach((item) => {
                const extended = item.cloneNode(true)
                scroll.appendChild(extended)
            })

            scroll.setAttribute('data-cloned', true)
        }
        addAnimation()
    }, []);
    return (
        <>
            <section className="w-full">
                <div className="w-full flex gap-14 justify-center items-center py-2">
                    <div className="absolute hidden lg:flex left-0 gap-5 px-5">
                        <div className="py-2">
                            <p className="text-gray-400 text-sm">Sort</p>
                            <select className="bg-gray-200 cursor-pointer px-3 py-1 rounded">
                                <option>Latest</option>
                                <option>Favorite</option>
                                <option>More Like</option>
                            </select>
                        </div>
                        <div className="py-2">
                            <p className="text-gray-400 text-sm">Category</p>
                            <select className="bg-gray-200 cursor-pointer px-3 py-1 rounded">
                                <option>Nature</option>
                                <option>Human</option>
                                <option>Decorasion</option>
                                <option>Animal</option>
                                <option>Mandala</option>
                            </select>
                        </div>
                    </div>
                    <TabsComponent border={'!border-b-0'} handleSelectTab={handleSelectTab} selectedTab={selectedTab} tabArray={tabsArray} />
                </div>
                {/* <div className="w-full flex gap-5 py-5">
                    <div ref={scrollRef} className="scroller w-screen flex flex-col gap-5 h-full">
                        {Object.keys(pics1Array).map((divKey) => (
                            <div key={divKey} className="flex gap-5 odd:animate-infinite-reverse-scroll even:animate-infinite-scroll overflow-hidden">
                                {pics1Array[divKey].map((pic, index) => (
                                    <>
                                        <PictureContainer key={index} item={pic} />
                                    </>
                                ))}
                            </div>
                        ))}
                    </div>
                </div> */}
                <div className="w-full flex gap-5 py-5 overflow-hidden">
                    <div ref={scrollRef} className=" w-screen flex animate-infinite-reverse-scroll gap-5 h-full flex-nowrap items-center justify-center">
                        {!isLoad && pics1Array.div.map((item, index) => (
                            <PictureContainer key={index} item={item} />
                        ))}
                    </div>
                </div>
                <div className="w-full flex gap-5 py-5 overflow-hidden">
                    <div ref={scrollRef} className=" w-screen flex animate-infinite-scroll gap-5 h-full flex-nowrap items-center justify-center">
                        {!isLoad && pics1Array.div1.map((item, index) => (
                            <PictureContainer key={index} item={item} />
                        ))}
                    </div>
                </div>
                <div className="w-full flex gap-5 py-5 overflow-hidden">
                    <div ref={scrollRef} className=" w-screen flex animate-infinite-reverse-scroll gap-5 h-full flex-nowrap items-center justify-center">
                        {!isLoad && pics1Array.div1.map((item, index) => (
                            <PictureContainer key={index} item={item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Tabs; 