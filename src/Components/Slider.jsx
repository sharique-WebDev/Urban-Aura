import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Section from './Section';
import kidsImg from '../Assets/kids-bg-remove.png'
import menImg from '../Assets/men-bg-remove.png'
import womenImg from '../Assets/women-bg-remove.png'

export default function App() {
    return (
        <>
            <div className="bg-color">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: false,
                    }}
                    navigation={false}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Section Image={menImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Section Image={womenImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Section Image={kidsImg} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
