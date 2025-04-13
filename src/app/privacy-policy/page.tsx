"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function PrivacyPolicy() {
 return (
  <>
   <nav className="flex items-center justify-between max-w-7xl mx-auto p-4">
    <Link href={"/"}>
     <Image
      src="/logo.png"
      alt="LineageCRM logo"
      width={134}
      height={32}
      priority
     />
    </Link>
    <a href="https://app.lineagecrm.com" className="text-green-600 text-sm font-medium hover:bg-slate-100 rounded-md p-2 px-4">Login</a>
   </nav>
   <main className="p-6">
    <motion.section
     initial={{ y: 20, opacity: 0 }}
     whileInView={{ y: 0, opacity: 1 }}
     transition={{ ease: "easeInOut", duration: 1 }}
     className="max-w-3xl mx-auto text-slate-700"
    >
     <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
     <p className="mb-4"><strong>Lineage CRM</strong> respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and safeguard your data when you use our web app or website. By accessing or using our services, you consent to the practices described in this policy.</p>
     <p><strong>Effective Date:</strong> 06/05/2024</p>
     <p className="mb-4"><strong>Last Updated:</strong> 04/04/2025</p>
     <h2 className="text-2xl font-bold mb-4">Scope</h2>
     <p className="mb-4">This Privacy Policy applies solely to individuals and entities located in the <strong>United States</strong>. If you are a California resident, please refer to the section titled <strong>“Your California Privacy Rights”</strong> for information specific to your rights under California law.</p>
     <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
     <h3 className="text-xl font-bold mb-4">Personal Information You Provide</h3>
     <p className="mb-4">We may collect personal data that you voluntarily provide when using our services, including:</p>
     <ul className="list-disc space-y-2 pl-4 mb-4">
      <li><strong>Name</strong> - to personalize your experience</li>
      <li><strong>Email Address</strong> - for communication and updates</li>
      <li><strong>Phone Number</strong> - for contact when required</li>
      <li><strong>Mailing Address</strong> - if necessary for service delivery</li>
      <li><strong>Other Information</strong> - such as preferences or support messages</li>
     </ul>
     <p className="mb-4">This data may be collected during registration, contact forms, or customer support interactions.</p>
     <h3 className="text-xl font-bold mb-4">Automatically Collected Information</h3>
     <p className="mb-4">When you access our website or app, we automatically collect certain data, such as:</p>
     <ul className="list-disc space-y-2 pl-4 mb-4">
      <li><strong>IP Address</strong></li>
      <li><strong>Browser and Device Type</strong></li>
      <li><strong>Operating System</strong></li>
      <li><strong>Referral URLs</strong></li>
      <li><strong>Pages Visited and Time Spent</strong></li>
     </ul>
     <p className="mb-4">This data helps us analyze performance and improve user experience.</p>
     <h2 className="text-2xl font-bold mb-4">Google API Disclosure</h2>
     <p className="mb-4">Lineage CRM’s use and transfer of information received from Google APIs complies with the Google API Services User Data Policy, including the Limited Use requirements.</p>
     <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
     <ul className="list-disc space-y-2 pl-4 mb-4">
      <li>To deliver and manage our services</li>
      <li>To personalize your experience on our platform</li>
      <li>To communicate with you about updates, support, or promotions</li>
      <li>To monitor and improve service performance and security</li>
      <li>To comply with legal obligations</li>
     </ul>
     <h2 className="text-2xl font-bold mb-4">Sharing of Information</h2>
     <p className="mb-4">We <strong>do not sell, rent, or trade</strong> your personal data. We may share it with trusted third-party service providers under confidentiality agreements, including:</p>
     <ul className="list-disc space-y-2 pl-4 mb-4">
      <li>Hosting and cloud infrastructure providers</li>
      <li>Analytics and performance monitoring tools</li>
      <li>Customer support and email services</li>
     </ul>
     <p className="mb-4">We may also disclose your information</p>
     <ul className="list-disc space-y-2 pl-4 mb-4">
      <li>In response to lawful requests by public authorities</li>
      <li>If required by law or legal process</li>
      <li>In connection with a merger, acquisition, or sale of assets</li>
     </ul>
     <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
     <p className="mb-4">Lineage CRM uses cookies and similar tracking technologies to understand user behavior, improve the platform, and remember your preferences. You may adjust your cookie settings through your browser. See our [Cookie Policy] for more details.</p>
     <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
     <p className="mb-4">We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, including to comply with legal, accounting, or regulatory requirements. When data is no longer required, we securely delete or anonymize it.</p>
     <h2 className="text-2xl font-bold mb-4">Data Security</h2>
     <p className="mb-4">We implement strong administrative, technical, and physical safeguards to protect your data, including:</p>
     <ul className="list-disc space-y-2 pl-4 mb-4">
      <li>Encrypted data transmission and storage</li>
      <li>Secure user authentication and access control</li>
      <li>Regular security monitoring and updates</li>
     </ul>
     <h2 className="text-2xl font-bold mb-4">Your Rights (U.S. Residents)</h2>
     <p className="mb-4">As a user in the United States, you have the right to:</p>
     <ul className="list-disc space-y-2 pl-4 mb-4">
      <li><strong>Access</strong> the personal data we hold about you</li>
      <li><strong>Correct</strong> inaccuracies in your personal information</li>
      <li><strong>Request deletion</strong> of your data (subject to exceptions)</li>
      <li><strong>Object</strong> to specific data uses, such as direct marketing</li>
      <li><strong>Request a portable copy</strong> of your personal data</li>
     </ul>
     <p className="mb-4">To exercise these rights, please email <strong>help@lineagecrm.com</strong>. We may request additional information to verify your identity.</p>
     <h2 className="text-2xl font-bold mb-4">Your California Privacy Rights</h2>
     <p className="mb-4">If you are a resident of California, you have the following rights under the <strong>California Consumer Privacy Act (CCPA)</strong> and <strong>California Privacy Rights Act (CPRA)</strong>:</p>
     <ul className="list-decimal space-y-2 pl-4 mb-4">
      <li><strong>Right to Know</strong> - You can request to know what personal data we have collected, used, disclosed, or sold.</li>
      <li><strong>Right to Delete</strong> - You can request that we delete your personal data, subject to legal exceptions.</li>
      <li><strong>Right to Correct</strong> - You can request correction of inaccurate personal data.</li>
      <li><strong>Right to Opt Out</strong> - We do <strong>not sell or share</strong> your personal information as defined under California law.</li>
      <li><strong>Right to Limit Use of Sensitive Personal Information</strong> - We do <strong>not</strong> collect or process sensitive personal information in ways that require this right.</li>
      <li><strong>Right to Non-Discrimination</strong> - We will not discriminate against you for exercising your privacy rights.</li>
     </ul>
     <p className="mb-4">To make a request under California law, contact us at <strong>help@lineagecrm.com</strong> with the subject line: <strong>&quot;California Privacy Request.&quot;</strong> We may verify your identity before responding. You may also designate an authorized agent to make requests on your behalf.</p>
     <h2 className="text-2xl font-bold mb-4">Children&apos;s Privacy</h2>
     <p className="mb-4">Lineage CRM does not knowingly collect or store personal information from children under 13. If we become aware that a child has provided us with personal data, we will delete it promptly.</p>
     <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
     <p className="mb-4">We may update this Privacy Policy from time to time. If material changes are made, we will notify users via email or prominent notice on our site. Your continued use of the service after such updates constitutes acceptance of the changes.</p>
     <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
     <p className="mb-4">If you have questions, concerns, or requests regarding this Privacy Policy, please contact us at <strong>help@lineagecrm.com</strong>.</p>
    </motion.section>
   </main>
  </>
 )
}