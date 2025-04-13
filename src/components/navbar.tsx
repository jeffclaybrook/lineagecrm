"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { clsx } from "clsx"
import { Close, Menu } from "./icons"
import Image from "next/image"
import Link from "next/link"

const links = [
 { label: "Benefits", href: "#benefits" },
 { label: "Features", href: "#features" },
 { label: "Pricing", href: "#pricing" }
]

export default function Navbar() {
 const [isOpen, setIsOpen] = useState(false)

 const pathname = usePathname()

 return (
  <nav>
   <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
    <Link href={"/"}>
     <Image
      src="/logo.png"
      alt="LineageCRM logo"
      width={134}
      height={32}
      priority
     />
    </Link>
    <ul className="hidden md:flex gap-1">
     {links.map((link, i) => (
      <li key={i}>
       <Link href={link.href} className={clsx(
        "text-slate-700 text-sm font-medium hover:bg-slate-100 transition rounded-md p-2 px-4",
        pathname === link.href ? "bg-slate-100" : "bg-transparent"
       )}>
        {link.label}
       </Link>
      </li>
     ))}
     <li>
      <a href="https://app.lineagecrm.com" className="text-green-600 text-sm font-medium hover:bg-slate-100 rounded-md p-2 px-4">Login</a>
     </li>
    </ul>
    <button
     onClick={() => setIsOpen(!isOpen)}
     className="md:hidden text-slate-700 hover:bg-slate-100 p-2 rounded-full transition cursor-pointer"
    >
     {isOpen ? <Close /> : <Menu />}
    </button>
   </div>
   <div className={clsx(
    "fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 md:hidden",
    isOpen ? "translate-x-0" : "translate-x-full"
   )}>
    <div className="flex items-center justify-end p-2">
     <button
      onClick={() => setIsOpen(false)}
      className="text-slate-700 hover:bg-slate-100 p-2 rounded-full transition cursor-pointer"
     >
      <Close />
     </button>
    </div>
    <ul className="flex flex-col items-start">
     {links.map((link, i) => (
      <li key={i} className="flex items-center w-full">
       <Link href={link.href}
        onClick={() => setIsOpen(false)}
        className={clsx(
         "text-slate-700 hover:bg-slate-100 text-lg font-medium px-6 py-4 w-full",
         pathname === link.href ? "bg-slate-100" : "bg-transparent"
        )}
       >
        {link.label}
       </Link>
      </li>
     ))}
     <li className="flex items-center w-full">
      <a href="https://app.lineagecrm.com" className="text-green-600 text-lg font-medium px-6 py-4 hover:bg-slate-100 w-full">Login</a>
     </li>
    </ul>
   </div>
   {isOpen && (
    <div
     className="fixed inset-0 bg-black opacity-60 z-30 md:hidden"
    />
   )}
  </nav>
 )
}