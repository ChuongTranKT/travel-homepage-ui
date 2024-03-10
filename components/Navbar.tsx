'use client'
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  return (
    <nav className="flex-between h-28 px-4 py-8 md:px-16">
      <div className="flex-center gap-x-4 md:order-2 xl:order-1 ">
        <Link href={'/'}>
          <Image src={'/logo.svg'} alt="logo" width={40} height={40}></Image>
        </Link>
        <div className="text-[1.5rem] font-black leading-10 text-gray-900">Travlog</div>
      </div>
      <div
        className={`absolute left-0 ${
          isOpenMenu ? 'top-0' : 'top-[-100%]'
        } h-auto w-full bg-zinc-100 pb-4 pt-5 transition-all duration-300 ease-in-out xl:relative xl:top-0 xl:order-2 xl:w-fit xl:bg-[#fff] xl:pt-0 xl:transition-none `}
      >
        <ul className="flex cursor-pointer flex-col gap-y-10 px-4 xl:flex xl:flex-row xl:items-center xl:gap-x-16 xl:text-nowrap xl:pt-0">
          {NAV_LINKS.map((link: any) => (
            <Link href={'/'} key={link.key}>
              <div className=" text-sm font-bold text-gray-900 text-opacity-50 hover:text-gray-900">
                {link.label}
              </div>
            </Link>
          ))}
        </ul>
        {isOpenMenu && (
          <div
            className="absolute right-3 top-3 z-40 h-8 w-8 cursor-pointer "
            onClick={() => setIsOpenMenu(false)}
          >
            <Image src={'/close.svg'} alt="close" width={80} height={80} />
          </div>
        )}
      </div>
      <div className="cursor-pointer md:order-1 xl:hidden" onClick={() => setIsOpenMenu(true)}>
        <Image src={'/icon_menu.svg'} alt="menu" width={48} height={48}></Image>
      </div>

      <div className="hidden md:order-3 md:flex xl:order-3">
        <button className="rounded-[6rem] px-8 py-4 text-sm font-bold leading-none text-gray-900">
          Login
        </button>
        <button className="rounded-[6rem] bg-indigo-600 px-8 py-4 text-sm font-bold leading-none text-zinc-100">
          Sign Up
        </button>
      </div>
    </nav>
  )
}

export default Navbar
