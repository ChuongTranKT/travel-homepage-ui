import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section id="section__features" className="px-4 py-8 xl:px-0 xl:pl-16">
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 xl:gap-[4.38rem]">
        <div className="relative h-[27.43056rem] md:h-[54.3125rem] xl:order-2 ">
          <Image src={'/features-bg.svg'} alt="features bg" fill className="object-contain"></Image>
        </div>
        <div className="flex flex-col gap-8 md:gap-16">
          <div className="flex flex-col items-center justify-center gap-4 ">
            <p className="text-base font-bold uppercase leading-5 tracking-[0.2rem] text-[#F85E9F] ">
              Key features
            </p>
            <p className="text-center text-[2rem] font-bold leading-[2.4rem] text-[#191825] ">
              We offer best services
            </p>
            <p className="text-[rgba(25, 24, 37, 0.50)] mt-4 text-center text-base font-normal leading-[1.6rem] opacity-50">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 ">
            <div className="flex w-full flex-col items-start justify-start gap-8 rounded-[2rem] border p-8 md:col-span-1 md:flex-row md:items-center">
              <div className="rounded-[2rem] bg-[#FF5722] p-[1.62rem] ">
                <Image src={'/location-2.svg'} alt="location icon" width={32} height={32}></Image>
              </div>
              <div className="flex flex-col items-start justify-center gap-4">
                <p className="text-start text-[1.4375rem] font-bold leading-7 text-[#191825]">
                  We offer best services
                </p>
                <p className=" text-[1.125rem] font-normal leading-7 text-[#191825] opacity-50">
                  Lorem Ipsum is not simply random text
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-8 rounded-[2rem] border p-8 md:col-span-1 md:flex-row md:items-center">
              <div className="rounded-[2rem] bg-[#FACD49] p-[1.62rem] ">
                <Image src={'/calendar-2.svg'} alt="location icon" width={32} height={32}></Image>
              </div>
              <div className="flex flex-col items-start justify-center gap-4">
                <p className="text-start text-[1.4375rem] font-bold leading-7 text-[#191825]">
                  Schedule your trip
                </p>
                <p className=" text-[1.125rem] font-normal leading-7 text-[#191825] opacity-50">
                  It has roots in a piece of classical
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-8 rounded-[2rem] border p-8 md:col-span-1 md:flex-row md:items-center">
              <div className="rounded-[2rem] bg-[#F85E9F] p-[1.62rem] ">
                <Image src={'/ticket.svg'} alt="location icon" width={32} height={32}></Image>
              </div>
              <div className="flex flex-col items-start justify-center gap-4">
                <p className="text-start text-[1.4375rem] font-bold leading-7 text-[#191825]">
                  It has roots in a piece of classical
                </p>
                <p className=" text-[1.125rem] font-normal leading-7 text-[#191825] opacity-50">
                  Lorem Ipsum is not simply random text
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
