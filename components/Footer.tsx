'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Footer = () => {
  const [isShowCompany, setIsShowCompany] = useState(false)
  const [isShowContact, setIsShowContact] = useState(false)
  const [isShowMeetUs, setIsShowMeetUs] = useState(false)

  const showCompany = () => {
    setIsShowCompany(!isShowCompany)
  }
  const showContact = () => {
    setIsShowContact(!isShowContact)
  }
  const showMeetUs = () => {
    setIsShowMeetUs(!isShowMeetUs)
  }
  return (
    <section className="px-4 py-16">
      <div className="grid grid-cols-1 gap-16 xl:grid-cols-2">
        <div className="col-span-1 flex flex-col items-start justify-start gap-8">
          <div className="flex items-center justify-start gap-4  ">
            <Link href={'/'}>
              <Image src={'/logo.svg'} alt="logo" width={40} height={40}></Image>
            </Link>
            <div className="text-[1.5rem] font-black leading-10 text-gray-900">Travlog</div>
          </div>
          <div>
            <span className="text-[1.4375rem] font-[450] leading-[2.3rem] text-gray-900 opacity-50">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC.
            </span>
          </div>
          <div className="flex items-center justify-start gap-8">
            <Image src={'/facebook.svg'} alt="logo" width={40} height={40}></Image>
            <Image src={'/twitter.svg'} alt="logo" width={40} height={40}></Image>
            <Image src={'/instagram.svg'} alt="logo" width={40} height={40}></Image>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col gap-8">
            <div className="flex-between ">
              <p className="text-[1.4375rem] font-bold leading-[1.725rem] text-gray-900">Company</p>
              <div className="md:hidden" onClick={showCompany}>
                <Image src={'/arrow-circle-down.svg'} alt="logo" width={24} height={24}></Image>
              </div>
            </div>
            <div
              className={`flex flex-col gap-8 overflow-hidden ${isShowCompany ? 'h-auto max-h-48' : 'h-0 max-h-0 md:h-48 md:max-h-48'} transition-all duration-500 ease-in-out`}
            >
              <p className="text-[1.125rem] font-normal leading-[1.8rem] text-gray-900 opacity-75">
                About
              </p>
              <p className="text-[1.125rem] font-normal leading-[1.8rem] text-gray-900 opacity-75">
                Career
              </p>
              <p className="text-[1.125rem] font-normal leading-[1.8rem] text-gray-900 opacity-75">
                Mobile
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex-between ">
              <p className="text-[1.4375rem] font-bold leading-[1.725rem] text-gray-900">Contact</p>
              <div className="md:hidden" onClick={showContact}>
                <Image src={'/arrow-circle-down.svg'} alt="logo" width={24} height={24}></Image>
              </div>
            </div>
            <div
              className={`flex flex-col gap-8 overflow-hidden ${isShowContact ? 'h-auto max-h-60 ' : 'h-0 max-h-0 md:h-60 md:max-h-60'} transition-all duration-500 ease-in-out`}
            >
              <p className="text-[1.125rem] font-normal leading-[1.8rem] text-gray-900 opacity-75">
                Why Travlog?
              </p>
              <p className="text-[1.125rem] font-normal leading-[1.8rem] text-gray-900 opacity-75">
                Partner with us
              </p>
              <p className="text-[1.125rem] font-normal leading-[1.8rem] text-gray-900 opacity-75">
                FAQ’s
              </p>
              <p className="text-[1.125rem] font-normal leading-[1.8rem] text-gray-900 opacity-75">
                Blog
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex-between ">
              <p className="text-[1.4375rem] font-bold leading-[1.725rem] text-gray-900">Meet Us</p>
              <div className="md:hidden" onClick={showMeetUs}>
                <Image src={'/arrow-circle-down.svg'} alt="logo" width={24} height={24}></Image>
              </div>
            </div>
            <div
              className={`flex flex-col gap-8 overflow-hidden ${isShowMeetUs ? 'h-auto max-h-60 ' : 'h-0 max-h-0 md:h-60 md:max-h-60'} transition-all duration-500 ease-in-out md:h-full`}
            >
              <p className="text-[1.125rem] font-normal leading-[1.8rem] text-gray-900 opacity-75">
                +00 92 1234 56789
              </p>
              <p className="text-[1.125rem] font-normal leading-[1.8rem] text-gray-900 opacity-75">
                info@travlog.com
              </p>
              <p className="text-[1.125rem] font-normal leading-[1.8rem] text-gray-900 opacity-75">
                205. R Street, New York BD23200
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
