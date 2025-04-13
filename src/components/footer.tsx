import Image from "next/image"
import Link from "next/link"

const links = [
 { label: "Privacy Policy", href: "/privacy-policy" },
 { label: "Terms of Service", href: "/terms-of-service" }
]

export default function Footer() {
 return (
  <footer className="flex flex-col items-center gap-4 py-8 border-t border-slate-100">
   <Link href={"/"}>
    <Image
     src="/logo.png"
     alt="LineageCRM logo"
     width={150}
     height={36}
    />
   </Link>
   <p className="text-slate-700 text-sm">&copy; 2025 Silverbow Technology Group. All rights reserved.</p>
   <ul className="flex items-center gap-4">
    {links.map((link, i) => (
     <li key={i}>
      <Link href={link.href} className="text-slate-700 text-sm hover:underline">{link.label}</Link>
     </li>
    ))}
   </ul>
  </footer>
 )
}