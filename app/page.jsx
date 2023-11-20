'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCards, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
const Homepage = () => {
  return (
    <div className='w-[1440px] mx-auto my-32'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 0,
          modifier: 5,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        
      >
        <SwiperSlide className='rounded-2xl flex justify-center items-center bg-yellow-500'>
          <div className='border w-full h-[400px] rounded-2xl flex justify-center items-center text-5xl border-none'>
              <Image src="/astronaut.png" alt=""  width={400} height={1000}/>
          </div>
          </SwiperSlide>
        <SwiperSlide className='rounded-2xl flex justify-center items-center bg-green-500'>
          <div className='border w-full h-[400px] rounded-2xl flex justify-center items-center text-5xl border-none'>
              <Image src="/astronaut.png" alt=""  width={400} height={1000}/>
          </div>
          </SwiperSlide>
        <SwiperSlide className='rounded-2xl flex justify-center items-center bg-sky-500'>
          <div className='border w-full h-[400px] rounded-2xl flex justify-center items-center text-5xl border-none'>
              <Image src="/astronaut.png" alt=""  width={400} height={1000}/>
          </div>
          </SwiperSlide>
        <SwiperSlide className='rounded-2xl flex justify-center items-center bg-lime-500'>
          <div className='border w-full h-[400px] rounded-2xl flex justify-center items-center text-5xl border-none'>
              <Image src="/astronaut.png" alt=""  width={400} height={1000}/>
          </div>
          </SwiperSlide>
        <SwiperSlide className='rounded-2xl flex justify-center items-center bg-orange-500'>
          <div className='border w-full h-[400px] rounded-2xl flex justify-center items-center text-5xl border-none'>
              <Image src="/astronaut.png" alt=""  width={400} height={1000}/>
          </div>
          </SwiperSlide>
        <SwiperSlide className='rounded-2xl flex justify-center items-center bg-blue-500'>
          <div className='border w-full h-[400px] rounded-2xl flex justify-center items-center text-5xl border-none'>
              <Image src="/astronaut.png" alt=""  width={400} height={1000}/>
          </div>
          </SwiperSlide>
        <SwiperSlide className='rounded-2xl flex justify-center items-center bg-indigo-500'>
          <div className='border w-full h-[400px] rounded-2xl flex justify-center items-center text-5xl border-none'>
              <Image src="/astronaut.png" alt=""  width={400} height={1000}/>
          </div>
          </SwiperSlide>
        <SwiperSlide className='rounded-2xl flex justify-center items-center bg-purple-500'>
          <div className='border w-full h-[400px] rounded-2xl flex justify-center items-center text-5xl border-none'>
              <Image src="/astronaut.png" alt=""  width={400} height={1000}/>
          </div>
          </SwiperSlide>
        <SwiperSlide className='rounded-2xl flex justify-center items-center bg-purple-500'>
          <div className='border w-full h-[400px] rounded-2xl flex justify-center items-center text-5xl border-none'>
              <Image src="/astronaut.png" alt=""  width={400} height={1000}/>
          </div>
          </SwiperSlide>
        <SwiperSlide className='rounded-2xl flex justify-center items-center bg-purple-500'>
          <div className='border w-full h-[400px] rounded-2xl flex justify-center items-center text-5xl border-none'>
              <Image src="/astronaut.png" alt=""  width={400} height={1000}/>
          </div>
          </SwiperSlide>
        <SwiperSlide className='rounded-2xl flex justify-center items-center bg-purple-500'>
          <div className='border w-full h-[400px] rounded-2xl flex justify-center items-center text-5xl border-none'>
              <Image src="/astronaut.png" alt=""  width={400} height={1000}/>
          </div>
          </SwiperSlide>
        <SwiperSlide className='rounded-2xl flex justify-center items-center bg-purple-500'>
          <div className='border w-full h-[400px] rounded-2xl flex justify-center items-center text-5xl border-none'>
              <Image src="/astronaut.png" alt=""  width={400} height={1000}/>
          </div>
          </SwiperSlide>
        
        


      </Swiper>
    </div >
  )
}

export default Homepage