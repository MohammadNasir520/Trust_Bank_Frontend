import DebitCreditCard from "@/components/UI/Debit-Credit-card/DebitCreditCard";
import DebitCreditCardTab from "@/components/UI/Debit-Credit-card/DebitCreditCardTab";
import Image from "next/image";

export default function Home() {
  return (
    // <div className="flex justify-center items-center h-screen grid lg:grid-cols-3 ">
    //   <DebitCreditCard></DebitCreditCard>
    //   <DebitCreditCard></DebitCreditCard>
    //   <DebitCreditCard></DebitCreditCard>
    //   <DebitCreditCard></DebitCreditCard>
    //   <DebitCreditCard></DebitCreditCard>
    //   <DebitCreditCard></DebitCreditCard>
    // </div>
    <div>
      <DebitCreditCardTab></DebitCreditCardTab>
    </div>
  );
}
