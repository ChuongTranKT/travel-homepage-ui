'use client'
import { swiperDestinationConfig } from '@/configurations/swiper'
import { CARD_DESTINATION } from '@/constants'
import { CardDestinationTypes } from '@/types'
import Image from 'next/image'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './../css/swiperOverrides.module.css'
import Button from './Button'

const CardDestination = ({ image_url, location, price, rating, title }: CardDestinationTypes) => {
  return (
    <div className="h-[35rem] rounded-3xl border p-0">
      <div className="relative h-80  ">
        <Image
          src={image_url}
          alt="destination image"
          fill
          className="rounded-tl-3xl rounded-tr-3xl object-cover"
        ></Image>
      </div>
      <div className="flex flex-col gap-2 p-8">
        <p className="text-[1.4375rem] font-bold leading-7 text-pink-500">${price}</p>
        <p className="text-[1.4375rem] font-bold leading-7 text-[#191825]">{title}</p>
        <p className="text-[rgba(25, 24, 37, 0.75)] mt-2 text-[1.125rem] font-normal leading-7 opacity-50">
          {location}
        </p>
        <div className="flex items-center justify-start gap-2">
          <span className="text-[1.4375rem] font-bold leading-7 text-[#FF5722]">{rating}</span>
          <Image src={'/star.svg'} alt="start" width={24} height={24}></Image>
        </div>
      </div>
    </div>
  )
}

const Destination = () => {
  const swiperRef = useRef<any>(null)

  const handlePrevSlide = () => {
    swiperRef.current.slidePrev()
  }

  const handleNextSlide = () => {
    swiperRef.current.slideNext()
  }
  return (
    <section className="relative px-4 py-8">
      <div className="mb-16 flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-col items-center justify-center gap-4 xl:items-start xl:justify-start ">
          <p className="text-base font-bold tracking-[0.2rem] text-[#F85E9F]">Top Destination</p>
          <p className="text-center text-[2rem] font-bold leading-[2.4rem] text-gray-900">
            Explore top destination
          </p>
        </div>
        <div className="flex items-center justify-between md:flex md:justify-center md:gap-4">
          <Button
            type="button"
            icon="/arrow-left.svg"
            variant="bg-[#fff] w-16 h-16 border"
            handleClick={handlePrevSlide}
          />
          <Button
            type="button"
            icon="/arrow-right.svg"
            variant="bg-indigo-600 w-16 h-16 "
            handleClick={handleNextSlide}
          />
        </div>
      </div>
      <Swiper
        {...swiperDestinationConfig}
        ref={swiperRef}
        className={styles.swiper__destination}
        onSwiper={(swiper) => {
          swiperRef.current = swiper // function is called after the swiper is initialized and returns a swiper object containing swiper methods and properties that allow manipulation of the methods after the swiper is initialized
        }}
      >
        {CARD_DESTINATION.map((item: CardDestinationTypes) => (
          <SwiperSlide key={item.image_url} className={styles.swipper__slider__destination}>
            <CardDestination
              image_url={item.image_url}
              location={item.location}
              price={item.price}
              rating={item.rating}
              title={item.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Destination
