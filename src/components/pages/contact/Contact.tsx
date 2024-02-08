import { Divider } from "@chakra-ui/react";
import QuickContact from "./QuickContact/QuickContact";
import Link from "next/link";
import ContactForm from "./contactForm/ContactForm";

const Contact = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-3/4 lg:w-2/3 py-12 lg:py-16">
        <div className="text-lg lg:text-2xl font-bold tracking-wide mb-1">
          Quick Contact
        </div>
        <Divider className="h-[1px] bg-[#012169] opacity-20 mb-8" />

        <div className="text-[#012169] text-sm lg:text-base my-2">
          Corporate Office – Postal Address
        </div>
        <div className="text-sm lg:text-base font-semibold mt-2">
          Indian Bank, Corporate Office,
        </div>
        <div className="text-sm lg:text-base mb-2">
          PB No: 5555, 254-260, Avvai Shanmugam Salai,
          <br /> Royapettah, Chennai – 600 014
        </div>

        <div className="text-sm lg:text-base my-2">
          <span className="font-semibold">
            Corporate Office: Phone Number:{" "}
          </span>
          044 28134300
        </div>
        <div className="text-sm lg:text-base my-2">
          <span className="font-semibold">Contact Details of Branches: </span>
          Branch contact details are given at{" "}
          <Link className="text-[#012169] font-semibold" href="#">
            ‘Branch Network‘
          </Link>{" "}
          section »
        </div>
        <div className="text-sm lg:text-base my-2">
          <span className="font-semibold">National Helpline No.: </span>
          1800 425 00 000
        </div>
        <div className="text-sm lg:text-base my-2 italic">
          functioning all 24 hours 365 days to attend the queries received from
          our customers
        </div>

        <div className="text-[#012169] text-sm lg:text-base mt-4">
          Quick Contacts
        </div>

        <QuickContact />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
