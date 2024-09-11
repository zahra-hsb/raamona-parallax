'use client'
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import slide from '../../../../public/images/blog/Blog-Item.png'
import DateAndViews from '@/components/globalComponents/DateAndViews';

const BlogSlider = () => {
    const [date, setDate] = useState('')

    useEffect(() => {
        const now = new Date()
        const t = now.toDateString()
        console.log(t);
        setDate(t)
    }, [])
    return (
        <>
            <div className='w-full h-screen rounded-b-3xl overflow-hidden'>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    className="mySwiper"
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    modules={[EffectFade, Pagination, Autoplay]}
                >
                    <SwiperSlide>
                        <div className='h-screen w-full bg-slide1 bg-cover bg-no-repeat pt-[60vh]'>
                            <div className='w-full h-full p-16 text-white backdrop-brightness-50 backdrop-blur-sm'>
                                {/* <Image src={slide} alt='' /> */}
                                <p className='text-4xl font-bold pb-3'>Lorem ipsum dolor sit amet consectetur.</p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Diam id leo id elementum nibh quis ut vehicula dui. Vel ultrices commodo congue vestibulum enim neque. Sit et at rhoncus augue at. Commodo id consequat mauris et. Adipiscing morbi nulla est erat nec mauris venenatis. Vulputate dignissim urna ullamcorper porttitor suspendisse habitant id lectus. Diam sapien condimentum mattis duis morbi turpis. Fermentum nec varius arcu arcu nisi diam. Feugiat massa nibh non semper nunc tempor auctor amet. Sapien dignissim augue purus tristique orci venenatis ornare eget.
                                </p>
                                <DateAndViews date={date}/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-screen w-full bg-slide2 bg-cover bg-no-repeat pt-[60vh]'>
                            <div className='w-full h-full p-16 text-white backdrop-brightness-50 backdrop-blur-sm'>
                                {/* <Image src={slide} alt='' /> */}
                                <p className='text-4xl font-bold pb-3'>Lorem ipsum dolor sit amet consectetur.</p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Diam id leo id elementum nibh quis ut vehicula dui. Vel ultrices commodo congue vestibulum enim neque. Sit et at rhoncus augue at. Commodo id consequat mauris et. Adipiscing morbi nulla est erat nec mauris venenatis. Vulputate dignissim urna ullamcorper porttitor suspendisse habitant id lectus. Diam sapien condimentum mattis duis morbi turpis. Fermentum nec varius arcu arcu nisi diam. Feugiat massa nibh non semper nunc tempor auctor amet. Sapien dignissim augue purus tristique orci venenatis ornare eget.
                                </p>
                                <DateAndViews date={date}/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-screen w-full bg-slide3 bg-cover bg-no-repeat pt-[60vh]'>
                            <div className='w-full h-full p-16 text-white backdrop-brightness-50 backdrop-blur-sm'>
                                {/* <Image src={slide} alt='' /> */}
                                <p className='text-4xl font-bold pb-3'>Lorem ipsum dolor sit amet consectetur.</p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Diam id leo id elementum nibh quis ut vehicula dui. Vel ultrices commodo congue vestibulum enim neque. Sit et at rhoncus augue at. Commodo id consequat mauris et. Adipiscing morbi nulla est erat nec mauris venenatis. Vulputate dignissim urna ullamcorper porttitor suspendisse habitant id lectus. Diam sapien condimentum mattis duis morbi turpis. Fermentum nec varius arcu arcu nisi diam. Feugiat massa nibh non semper nunc tempor auctor amet. Sapien dignissim augue purus tristique orci venenatis ornare eget.
                                </p>
                                <DateAndViews date={date} />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default BlogSlider