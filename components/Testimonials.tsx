'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import Button from './Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { swiperDestinationConfig, swiperTestimonialsConfig } from '@/configurations/swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const CartTestimonials = () => {
  return (
    <div className="flex h-[500px] w-full flex-col items-center justify-center gap-16 px-4">
      <div>
        <Image src={'/testimonials-avatar.svg'} alt="avatar" width={128} height={128}></Image>
      </div>
      <div className="flex-center flex-col gap-8">
        <div>
          <span className="text-[1.75rem] font-bold leading-[2.1rem] text-[#FF5722]">
            Mark Smith{' '}
            <span className="text-[1.4375rem] text-gray-900 opacity-75 ">/ Travel Enthusiast</span>{' '}
          </span>
        </div>
        <div className="flex-center gap-4">
          {Array.from({ length: 5 }).map((_, index: any) => (
            <Image src={'/star.svg'} alt="start" width={32} height={32} key={index}></Image>
          ))}
        </div>
      </div>
      <div className="flex-center md:w-[36.5rem]">
        <span className="text-center text-[1.125rem] text-gray-900 opacity-75 ">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC.
        </span>
      </div>
    </div>
  )
}

const Testimonials = () => {
  const swiperRef = useRef<any>(null)

  const handlePrevSlide = () => {
    swiperRef.current.slidePrev()
  }

  const handleNextSlide = () => {
    swiperRef.current.slideNext()
  }
  return (
    <section className="relative py-8">
      <div className=" h-full w-full">
        <div className=" h-full w-full bg-cover bg-center bg-no-repeat md:h-full md:bg-[url('/testimonials-bg-md.svg')] xl:h-full xl:bg-[url('/testimonials-bg.svg')]">
          {/* <div className="flex flex-col items-center justify-center gap-4 "> */}
          <div className="flex flex-col items-center justify-center gap-4 ">
            <p className="text-base font-bold leading-5 tracking-[0.2rem] text-[#F85E9F]  ">
              Testimonials
            </p>
            <p className="text-center text-[2rem] font-bold leading-[2.4rem] text-[#191825] ">
              Trust our clients
            </p>
          </div>
          <div className="pb-8">
            <Swiper
              {...swiperTestimonialsConfig}
              ref={swiperRef}
              onSwiper={(swiper) => {
                swiperRef.current = swiper // function is called after the swiper is initialized and returns a swiper object containing swiper methods and properties that allow manipulation of the methods after the swiper is initialized
              }}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
            >
              <SwiperSlide>
                <CartTestimonials />
              </SwiperSlide>
              <SwiperSlide>
                <CartTestimonials />
              </SwiperSlide>
              <SwiperSlide>
                <CartTestimonials />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="z-10 flex items-center justify-between px-4 md:absolute md:top-[50%] md:flex md:w-full md:justify-between md:gap-4 xl:top-[45%]">
            <Button
              type="button"
              icon="/arrow-left.svg"
              variant="bg-[#fff] w-16 h-16 border md:mx-[50px]"
              handleClick={handlePrevSlide}
            />
            <Button
              type="button"
              icon="/arrow-right.svg"
              variant="bg-indigo-600 w-16 h-16 md:mx-[50px] "
              handleClick={handleNextSlide}
            />
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
