import Image from 'next/image'
import React from 'react'

const TravelPoint = () => {
  return (
    <section className="px-4 py-8 xl:pl-0 ">
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        <div className="relative h-80 md:h-[43.5625rem] xl:col-span-2">
          <Image
            src={'/travel_point_background.svg'}
            alt="travel background"
            fill
            className="object-contain "
          ></Image>
        </div>
        <div className="flex flex-col gap-8 md:gap-16">
          <div className="flex flex-col items-center justify-center gap-4 ">
            <p className="text-base font-bold uppercase leading-5 tracking-[0.2rem] text-[#F85E9F]  ">
              Travel Point
            </p>
            <p className="text-center text-[2rem] font-bold leading-[2.4rem] text-[#191825] ">
              We helping you find your dream location
            </p>
            <p className="text-[rgba(25, 24, 37, 0.50)] mt-4 text-center text-base font-normal leading-[1.6rem] opacity-50">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-8">
            <div className="flex w-full flex-col items-center justify-center gap-4 rounded-[2rem] border p-8 md:col-span-1 ">
              <h4 className="text-[2.1875rem] font-bold leading-[2.625rem] text-[#FF5722]">500+</h4>
              <p className="text-[1.125rem] font-normal leading-7 text-[#191825]">
                Holiday Package
              </p>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4 rounded-[2rem] border p-8 ">
              <h4 className="text-[2.1875rem] font-bold leading-[2.625rem] text-[#FF5722]">500+</h4>
              <p className="text-[1.125rem] font-normal leading-7 text-[#191825]">
                Holiday Package
              </p>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4 rounded-[2rem] border p-8 ">
              <h4 className="text-[2.1875rem] font-bold leading-[2.625rem] text-[#FF5722]">500+</h4>
              <p className="text-[1.125rem] font-normal leading-7 text-[#191825]">
                Holiday Package
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TravelPoint
