'use client'

import Link from 'next/link';
import facebook from "../../../public/assets/social media/facebook.png"
import instagram from "../../../public/assets/social media/instagram.png"
import whatsapp from "../../../public/assets/social media/whatsapp.png"
import telegram from "../../../public/assets/social media/telegram.png"
import Image from 'next/image';
const Footer = () => {
  const footerLinks = [
    'Locations',
    'Contact Us',
    'Help & Support',
    'Browse with Specialist',
    'Accessible Banking',
    'Privacy',
    'Security',
    'Online Banking Service Agreement',
    'Advertising Practices layer',
    'Your Privacy Choices',
    'Site Map',
    'Careers',
    'Share Your Feedback',
    'View Full Online Banking Site'
  ];

  return (
    <footer className="bg-[#012169] py-4">
      <div className="container mx-auto flex flex-wrap justify-center">
        {footerLinks.map((link, index) => (
          <div key={index} className={`mx-4 relative ${index !== footerLinks.length - 1 ? 'pr-2' : ''}`}>
            <Link href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}>
              <p className="text-white hover:text-blue-500 text-xs py-2 relative z-10 ">{link}</p>
            </Link>

          </div>
        ))}
      </div>
      <div className="container mx-auto text-center py-5">
        <p className="text-white text-md font-bold mb-2">Connect With Us</p>
        <div className="flex justify-center">
          <Link href="#" className="text-white hover:text-gray-400 mx-2">
            <Image src={facebook} alt="Facebook" height={30} width={30} />
          </Link>
          <Link href="#" className="text-white hover:text-gray-400 mx-2">
            <Image src={instagram} alt="Instagram" height={30} width={30} />
          </Link>
          <Link href="#" className="text-white hover:text-gray-400 mx-2">
            <Image src={whatsapp} alt="WhatsApp" height={30} width={30} />
          </Link>
          <Link href="#" className="text-white hover:text-gray-400 mx-2">
            <Image src={telegram} alt="Telegram" height={30} width={30} />
          </Link>
        </div>
        <p className="text-white mt-4 text-xs">
          Prime Trust Bank, N.A. Member FDIC. Equal Housing Lender
          <a href="#" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">
            new window
          </a>
        </p>
        <p className="text-white mt-2 text-xs">
          © 2023 Prime Trust Bank Corporation. All rights reserved.
        </p>
        <p className="text-white mt-2 text-xs">
          Patent: <a href="https://patents.bankofamerica.com" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">
            patents.primetrust.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
