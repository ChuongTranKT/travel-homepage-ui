'use client'
import { swiperConfig } from '@/configurations/swiper'
import { CARD_SERVICE } from '@/constants'
import { CardServiceTypes } from '@/types'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import styles from './../css/swiperOverrides.module.css'
const CardService = ({ description, icon, icon_name, title }: CardServiceTypes) => {
  return (
    <div className=" flex h-96 w-72 flex-col items-center justify-center gap-8 overflow-hidden rounded-[2rem] border p-8 md:h-96 md:w-72 xl:h-96 xl:w-80">
      <Image src={icon} alt={icon_name} width={64} height={64}></Image>
      <div>
        <span className="text-2xl font-bold leading-7 text-black">{title}</span>
      </div>
      <div className="flex-center ">
        <span className="text-center text-base font-normal leading-7 text-gray-900 text-opacity-50">
          {description}
        </span>
      </div>
    </div>
  )
}

const Service = () => {
  return (
    <section className="relative flex-col gap-4 px-4 py-8 md:flex-col md:px-8 xl:flex xl:flex-row xl:gap-4">
      <div className="flex-center mb-8 flex-col flex-wrap items-center gap-4 xl:flex xl:items-start xl:justify-center">
        <span className="block text-base font-bold text-pink-500 xl:text-2xl">SERVICE</span>
        <span className="text-center text-3xl font-bold leading-10 xl:text-start">
          Our top value categories for you
        </span>
      </div>
      <div className="flex-center flex-col gap-8 overflow-hidden md:flex-row">
        <Swiper {...swiperConfig} className={styles.swiper__service}>
          {CARD_SERVICE.map((item: CardServiceTypes) => (
            <SwiperSlide key={item.title} className={styles.swipper__slider__service}>
              <CardService
                description={item.description}
                icon={item.icon}
                icon_name={item.icon_name}
                title={item.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Service
