"use client"

import Image from "next/image"
import Navbar from "@/components/navbar"
import { motion } from "framer-motion"
import { Checkmark, DialingAndMapping, EnhancedProductivity, SalesOptimizations } from "@/components/icons"

const benefits = [
 {
  title: "Enhanced Productivity",
  subtitle: "Streamline your sales process with automated lead management.",
  icon: EnhancedProductivity
 },
 {
  title: "Sales Optimizations",
  subtitle: "Leverage detailed analytics to optimize your sales strategies.",
  icon: SalesOptimizations
 },
 {
  title: "Dialing and Mappping",
  subtitle: "Utilize integrated Twilio calling for direct and efficient client interactions.",
  icon: DialingAndMapping
 }
]

const features = [
 {
  title: "New! Anti Spam Measures",
  subtitle: "Manage your calling reputation and maintain trusted numbers so you can protect your communication channels with robust anti-spam features.",
  image: "/image-1.png"
 },
 {
  title: "Bulk Lead Import",
  subtitle: "Migrate from excel or another CRM for the most optimized for end of life insurance. Easily import large volumes of leads to keep your pipeline full.",
  image: "/image-2.png",
  className: "order-first md:order-last"
 },
 {
  title: "Caller and Team Access",
  subtitle: "Manage and track all your calls directly within the CRM. Delegate access to your events, leads, calling, and tools so you can scale your impact.",
  image: "/image-3.png"
 }
]

const pricing = [
 {
  title: "Starter",
  subtitle: "CRM + Lead Data",
  price: "$39",
  items: [
   "Bulk lead import",
   "1 phone number",
   "Twilio in-app dialing",
   "Anti-spam protection *per number"
  ]
 },
 {
  title: "Essentials",
  subtitle: "CRM + Limited* VoIP",
  price: "$79",
  items: [
   "2 days (16 hours) of calling",
   "5 phone numbers",
   "Team login",
   "Anti-spam protection *per number"
  ]
 },
 {
  title: "Navigator",
  subtitle: "CRM + Unlimited* VoIP",
  price: "$139",
  items: [
   "Up to 40 hours weekly calling",
   "10 phone numbers",
   "Team login (Upline/Downline)",
   "Anti-spam protection *per number"
  ]
 }
]

export default function Home() {
 return (
  <>
   <Navbar />
   <motion.header
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 1 }}
    className="bg-linear-[98.46deg,#06323e,#0f554c] bg-cover bg-no-repeat md:rounded-4xl md:px-16 pt-8 px-4 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-8"
   >
    <div className="flex flex-col flex-1">
     <h1 className="text-white text-6xl/18 font-semibold mb-4">Success Tools For Senior Market Insurance Agents</h1>
     <p className="text-white font-medium mb-6">Capture, track, and analyze lead data in one integrated platform, ensuring that every customer interaction is meaningful and productive.</p>
     <a href="https://app.lineagecrm.com" className="bg-linear-[90deg,#1ab95f_0%,#0da448_51%,#009033_100%] bg-cover bg-no-repeat text-white font-medium px-10 py-4 rounded-md mr-auto">Get Started</a>
    </div>
    <div className="flex justify-center md:justify-end flex-1">
     <Image
      src="/person.png"
      alt="Insurance agent"
      width={400}
      height={600}
      priority
     />
    </div>
   </motion.header>
   <main>
    <section id="benefits" className="flex flex-col items-center gap-[64px] py-[80px] p-6">
     <h2 className="text-slate-700 text-5xl font-semibold">Benefits</h2>
     <motion.ul
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto"
     >
      {benefits.map((benefit, i) => (
       <li key={i} className="flex flex-col items-center gap-2">
        <benefit.icon className="text-slate-700" />
        <h3 className="text-slate-700 font-semibold text-xl text-center">{benefit.title}</h3>
        <p className="text-slate-500 font-medium text-center">{benefit.subtitle}</p>
       </li>
      ))}
     </motion.ul>
    </section>
    <section id="features" className="flex flex-col items-center gap-[64px] bg-slate-50 py-[80px] p-6 md:p-[80px]">
     <h2 className="text-slate-700 text-5xl font-semibold">Features</h2>
     {features.map((feature, i) => (
      <motion.div
       initial={{ y: 20, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ ease: "easeInOut", duration: 1 }}
       key={i}
       className="flex flex-col md:flex-row md:gap-[72px] gap-6"
      >
       <Image
        src={feature.image}
        alt={feature.title}
        width={600}
        height={374}
        className={feature.className}
       />
       <div className="flex flex-col justify-center">
        <h3 className="text-slate-700 font-semibold text-4xl mb-2">{feature.title}</h3>
        <p className="text-slate-700 text-xl">{feature.subtitle}</p>
       </div>
      </motion.div>
     ))}
    </section>
    <section id="pricing" className="flex flex-col items-center gap-[64px] py-[80px] p-6 md:p-[80px]">
     <h2 className="text-slate-700 text-5xl font-semibold">Pricing</h2>
     <motion.ul
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto w-full"
     >
      {pricing.map((price, i) => (
       <li key={i} className="flex flex-col p-5 py-8 bg-linear-[98.46deg,#06323e,#0f554c] bg-cover bg-no-repeat rounded-4xl">
        <h3 className="text-white text-3xl text-center font-bold">{price.title}</h3>
        <p className="text-slate-300 text-center mb-4">{price.subtitle}</p>
        <h4 className="text-white text-6xl text-center font-bold mb-4">{price.price}<span className="text-slate-300 text-base font-medium">/mo</span></h4>
        <ul className="flex flex-col gap-4 mb-4">
         {price.items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-white">
           <Checkmark />
           <p>{item}</p>
          </li>
         ))}
        </ul>
        <a href="https://app.lineagecrm.com" className="inline-flex mx-auto rounded-md text-white font-medium px-10 py-4 bg-linear-[90deg,#1ab95f_0%,#0da448_51%,#009033_100%] bg-cover bg-no-repeat">Get Started</a>
       </li>
      ))}
     </motion.ul>
    </section>
   </main>
  </>
 )
}