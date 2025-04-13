"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function TermsOfService() {
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
     <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
     <p className="mb-4"><strong>Last Updated:</strong> 04/04/2025</p>
     <p className="mb-4">Please read these Terms of Service (“Terms”) carefully before using the Lineage CRM platform. These Terms govern your access to and use of our web application, services, and related tools (collectively, the “Service”) and form a binding agreement between you and Lineage CRM.</p>
     <ul className="list-decimal space-y-4 pl-6">
      <li className="text-2xl font-bold">
       <h2 className="mb-4">Definitions</h2>
       <ul className="list-disc space-y-2 text-base font-normal mb-4">
        <li><strong>&quot;Company&quot; / &quot;We&quot; / &quot;Us&quot; / &quot;Our&quot;</strong> means Lineage CRM, operated within the United States.</li>
        <li><strong>&quot;User&quot; / &quot;You&quot; / &quot;Your&quot;</strong> refers to the individual or legal entity accessing or using the Service.</li>
        <li><strong>&quot;Account&quot;</strong> means the unique account registered to access the Service.</li>
        <li><strong>&quot;Content&quot;</strong> means all material (text, data, images, etc.) submitted, posted, or transmitted through the Service.</li>
        <li><strong>&quot;Website&quot;</strong> refers to the Lineage CRM website available at <Link href={"/"}>https://www.lineagecrm.com</Link>.</li>
       </ul>
      </li>
      <li className="text-2xl font-bold">
       <h2 className="mb-4">Eligibility</h2>
       <p className="text-base font-normal mb-4">You must be at least 18 years old to use the Service. By using the Service, you represent and warrant that you meet this age requirement and have the authority to agree to these Terms.</p>
      </li>
      <li className="text-2xl font-bold">
       <h2 className="mb-4">Account Responsibilities</h2>
       <p className="text-base font-normal mb-4">You agree to provide accurate, complete, and current information when creating an Account. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your Account. You must notify us immediately of any unauthorized access or use.</p>
      </li>
      <li className="text-2xl font-bold">
       <h2 className="mb-4">Acceptable Use</h2>
       <p className="text-base font-normal mb-4">You agree not to:</p>
       <ul className="list-disc space-y-2 text-base font-normal mb-4 pl-4">
        <li>Violate any applicable laws, including U.S. state and federal regulations.</li>
        <li>Post or transmit unlawful, threatening, defamatory, obscene, or infringing content.</li>
        <li>Use the Service to send spam or malicious code.</li>
        <li>Impersonate another person or misrepresent your identity.</li>
        <li>Interfere with or disrupt the integrity or performance of the Service.</li>
       </ul>
       <p className="text-base font-normal mb-4">We reserve the right to suspend or terminate your access if we believe you are in breach of these Terms.</p>
      </li>
      <li className="text-2xl font-bold">
       <h2 className="mb-4">User Content</h2>
       <p className="text-base font-normal mb-4">You retain ownership of your submitted Content but grant Lineage CRM a non-exclusive, royalty-free, worldwide license to use, reproduce, modify, and display such Content in connection with the operation and improvement of the Service.</p>
       <p className="text-base font-normal mb-4">You represent that you have the right to post any Content you submit and that it does not violate the rights of any third party.</p>
      </li>
      <li className="text-2xl font-bold">
       <h2 className="mb-4">Intellectual Property</h2>
       <p className="text-base font-normal mb-4">All content and functionality provided by Lineage CRM (excluding user-submitted Content) are the exclusive property of the Company or its licensors. No portion may be copied, republished, or reused without express written permission.</p>
      </li>
      <li className="text-2xl font-bold">
       <h2 className="mb-4">Feedback</h2>
       <p className="text-base font-normal mb-4">By submitting ideas, suggestions, or other feedback, you grant us the unrestricted right to use such feedback without compensation or obligation to you.</p>
      </li>
      <li className="text-2xl font-bold">
       <h2 className="mb-4">Copyright and DMCA Policy</h2>
       <p className="text-base font-normal mb-4">If you believe that your intellectual property has been used in a way that constitutes copyright infringement, please send a detailed notice to <strong>help@lineagecrm.com</strong>. Your DMCA notice must include all information required by 17 U.S.C. § 512(c)(3).</p>
       <p className="text-base font-normal mb-4">We will investigate and respond appropriately, which may include removing infringing content.</p>
      </li>
      <li className="text-2xl font-bold">
       <h2 className="mb-4">Third-Party Services and Links</h2>
       <p className="text-base font-normal mb-4">The Service may contain links to third-party websites or services. We are not responsible for their content, privacy policies, or practices. Use of third-party services is at your own risk.</p>
      </li>
      <li className="text-2xl font-bold">
       <h2 className="mb-4">Termination</h2>
       <p className="text-base font-normal mb-4">We may suspend or terminate your Account at any time for any reason, including violation of these Terms. Upon termination, your right to use the Service will cease immediately.</p>
      </li>
      <li className="text-2xl font-bold">
       <h2 className="mb-4">Disclaimer of Warranties</h2>
       <p className="text-base font-normal mb-4">The Service is provided <strong>“as is” and “as available”</strong> without warranties of any kind. We do not guarantee that the Service will be uninterrupted, error-free, or secure.</p>
      </li>
      <li className="text-2xl font-bold">
       <h2 className="mb-4">Limitation of Liability</h2>
       <p className="text-base font-normal mb-4">To the fullest extent permitted by law, Lineage CRM is not liable for indirect, incidental, special, consequential, or punitive damages. Our total liability will not exceed the greater of $100 or the amount you paid to use the Service in the past 12 months.</p>
       <p className="text-base font-normal mb-4">Some states do not allow certain limitations, so these provisions may not apply to you.</p>
      </li>
      <li className="text-2xl font-bold">
       <h2 className="mb-4">Indemnification</h2>
       <p className="text-base font-normal mb-4">You agree to indemnify and hold harmless Lineage CRM, its officers, affiliates, and employees from any claim or demand (including legal fees) arising from your use of the Service or your violation of these Terms.</p>
      </li>
      <li className="text-2xl font-bold">
       <h2 className="mb-4">Governing Law</h2>
       <p className="text-base font-normal mb-4">These Terms are governed by the laws of the <strong>State of Texas</strong>, without regard to conflict of law principles. You agree to submit to the personal jurisdiction and venue of courts located in Texas.</p>
      </li>
      <li className="text-2xl font-bold">
       <h2 className="mb-4">U.S. Export Control and Sanctions Compliance</h2>
       <p className="text-base font-normal mb-4">You represent that you are not subject to U.S. sanctions or listed on any U.S. government list of prohibited or restricted parties. You may not use the Service in violation of U.S. export laws.</p>
      </li>
      <li className="text-2xl font-bold">
       <h2 className="mb-4">Severability and Waiver</h2>
       <p className="text-base font-normal mb-4">If any part of these Terms is found unenforceable, the remainder will remain in full effect. Our failure to enforce any right or provision is not a waiver of future enforcement.</p>
      </li>
      <li className="text-2xl font-bold">
       <h2 className="mb-4">Changes to These Terms</h2>
       <p className="text-base font-normal mb-4">We may update these Terms at any time. If changes are material, we will provide 30 days&apos; notice before the new Terms take effect. Your continued use of the Service after that constitutes your acceptance.</p>
      </li>
      <li className="text-2xl font-bold">
       <h2 className="mb-4">Contact Us</h2>
       <p className="text-base font-normal mb-4">If you have any questions about these Terms, contact us at: <strong>help@lineagecrm.com</strong>.</p>
      </li>
     </ul>
    </motion.section>
   </main>
  </>
 )
}