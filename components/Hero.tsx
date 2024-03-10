// 'use client'
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { BRAND_URL } from '@/constants'

const Hero = () => {
  return (
    <section className="relative px-4 py-8 md:px-8">
      <div className="grid grid-rows-2 gap-0 md:gap-8 xl:grid-cols-3 xl:grid-rows-1">
        <div className="relative row-span-1 h-96  xl:order-2 xl:col-span-2 xl:h-[700px]">
          <div className="relative  h-36 w-full bg-[url('/earth-and-plane.png')] bg-contain bg-center bg-no-repeat  md:h-72 ">
            <div className="relative flex items-center justify-center ">
              <div className=" justify-starts mt-10 flex items-center gap-4 md:mt-14 xl:mt-14">
                <div className="flex flex-col items-start justify-start gap-4">
                  <div className="relative h-40 w-36 rounded-2xl md:h-72 md:w-64">
                    <Image
                      src={'/travel_1.svg'}
                      alt="travel 1"
                      fill
                      className="object-contain"
                    ></Image>
                    <div className="flex-center shadow-custom absolute bottom-[-10px] left-[-20px] gap-2 rounded-full bg-pink-500 p-2 md:p-3">
                      <img src="/send.svg" alt="send" className="w-6" />
                    </div>
                  </div>
                  <div className="relative h-40 w-36 rounded-2xl md:h-72 md:w-64">
                    <Image
                      src={'/travel_2.svg'}
                      alt="travel 2"
                      fill
                      className="object-contain"
                    ></Image>
                  </div>
                </div>
                <div className="relative flex flex-col items-center justify-center">
                  <div className="relative h-52 w-36 rounded-2xl md:h-96 md:w-64">
                    <Image
                      src={'/travel_3.svg'}
                      alt="travel 3"
                      fill
                      className="object-contain"
                    ></Image>
                    <div className="shadow-custom absolute bottom-[2rem] right-[-3rem] inline-flex items-center justify-center rounded-[3rem] bg-zinc-50 px-4 py-2">
                      <img src="/location.svg" alt="location" />
                      <label className="text-[0.5rem] font-bold leading-[120%]">Top Places</label>
                    </div>
                  </div>
                  <div className="shadow-custom flex-center absolute bottom-[-4rem] rounded-full bg-orange-600 p-2 md:bottom-[-6rem] xl:bottom-[-6rem] ">
                    <img src="/add-user.svg" alt="add-user" className="w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-center relative row-span-1 flex-col gap-4 md:mt-[160px] md:gap-10 xl:col-span-1 xl:mt-0">
          <Button
            title="Explore the world!"
            type="button"
            variant="px-8 py-4 shadow"
            icon="/work.svg"
            textStyle="text-pink-500 font-bold leading-none shadow-custom"
          />
          <span className="text-center text-4xl font-bold leading-[4.2rem] text-black md:text-5xl xl:text-start xl:text-7xl xl:leading-[5rem]">
            Travel <span className="text-pink-500">top destination</span> of the world
          </span>
          <span className="text-center text-base font-normal leading-relaxed text-gray-900 text-opacity-50 md:text-lg md:leading-7 xl:text-start">
            We always make our customer happy by providing as many choices as possible
          </span>

          <div className="flex w-full flex-col gap-6 md:flex-row md:items-center md:justify-center">
            <Button
              title="Get Started"
              type="button"
              variant="px-8 py-6 h-16 bg-indigo-600 shadow-custom md:py-4 md:h-14 "
              textStyle="text-zinc-100 font-bold leading-none"
            />
            <Button
              title="Watch Demo"
              type="button"
              icon="/play-circle.svg"
              variant="px-8 py-6 h-16 bg-[#fff] border md:py-4 md:h-14"
              textStyle="text-black font-bold leading-none"
            />
          </div>
        </div>
      </div>
      <div className="flex-center  mt-8 w-full flex-wrap gap-6 xl:order-3  xl:col-span-3 xl:gap-24 ">
        {BRAND_URL.map((url) => (
          <div key={url}>
            <img src={url} alt={url} className="h-6 w-28 xl:w-48"></img>
          </div>
        ))}
      </div>
      {/* <div className=" absolute -right-[50%] bottom-[30px] hidden h-96 w-96 overflow-hidden rounded-full bg-amber-300 opacity-50 blur-[100px] xl:block"></div> */}
    </section>
  )
}

export default Hero
