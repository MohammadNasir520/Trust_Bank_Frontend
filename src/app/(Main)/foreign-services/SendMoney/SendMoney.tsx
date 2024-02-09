"use client"
import React, { useState } from 'react';
import Form from "@/components/Forms/Form/Form";
import FormInput from "@/components/Forms/FormInput/FormInput";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/Tabs";
import Image from 'next/image';
import CurrencyExchange from '@/components/UI/CurrencyExchange/CurrencyExchange';

const DirectRemitPage = () => {
  const [activeTab, setActiveTab] = useState('exchange');

  const onSubmit = async (values: any) => {
    const obj = { ...values };

    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
  <div>
      <h1 className="text-center p-5 text-xl lg:text-3xl py-12 lg:py-15 gap-4 lg:gap-10">
       International transfers
        </h1>
    <div className="max-w-[1200px] md:py-[80] py-5 flex mx-auto md:flex-row flex-col">
     
     <div className="basis-[45%] px-5">
       <Image src="https://www.qib.com.qa/wp-content/uploads/2024/01/Direct-Remit-Web-Banner-1600x477-EN-scaled.jpg" alt="DirectRemit" layout='intrinsic' width={700} height={700}/>
       <div className="py-6">
         <h2 className="text-xl font-semibold mb-4">DirectRemit</h2>
         <p className="text-sm">Free, 60 second transfers now available round-the-clock.</p>
         <p className="text-sm mt-2">Transferring money to your loved ones in India, Philippines, Pakistan, Egypt, Sri Lanka, and the UK is now available 24/7!</p>
         <p className="text-sm mt-2">Simply log in to your Mobile or Online Banking account and start transferring.</p>
         <p className="text-sm mt-2">Know more about DirectRemit</p>
       </div>
     </div>
     <div className="basis-[55%] px-5">
       <Tabs defaultValue="exchange" className="w-full lg:border-l-2 lg:border-[#012169] xl:border-l-2 xl:border-[#012169] lg:px-6 xl:px-6">
         <TabsList className="grid w-full grid-cols-2 items-center justify-center">
           <TabsTrigger value="exchange" className={`text-center ${activeTab === 'exchange' ? 'font-bold' : ''}`}>Exchange</TabsTrigger>
           <TabsTrigger value="send" className={`text-center ${activeTab === 'send' ? 'font-bold' : ''}`}>Send</TabsTrigger>
         </TabsList>
         <TabsContent value="exchange">
        <CurrencyExchange/>
         </TabsContent>
         <TabsContent value="send">
           <Form submitHandler={onSubmit} className="bg-white p-8 border rounded-lg">
             <div className="mb-6">
               <FormInput
                 name="exchangeFrom"
                 type="string"
                 placeholder="Exchange Currency From"
                 className="w-full text-sm px-4 py-4 bg-[#F3F8FF] focus:bg-[#F3F8FF] border border-white rounded-lg focus:outline-none focus:border-[#012169]"
               />
             </div>
             <div className="mb-6">
               <FormInput
                 name="exchangeFromAmount"
                 type="string"
                 placeholder="Exchange Currency From Amount"
                 className="w-full text-sm px-4 py-4 bg-[#F3F8FF] focus:bg-[#F3F8FF] rounded-lg focus:outline-none focus:border-[#012169]"
               />
             </div>
             <div className="mb-6">
               <FormInput
                 name="exchangeTo"
                 type="string"
                 placeholder="Exchange Currency To"
                 className="w-full text-sm px-4 py-4 bg-[#F3F8FF] focus:bg-[#F3F8FF] border border-white rounded-lg focus:outline-none focus:border-[#012169]"
               />
             </div>
             <button
               type="submit"
               className="px-4 py-2 bg-[#FDB712] rounded-md text-black focus:outline-none"
             >
               Send Money
             </button>
           </Form>
         </TabsContent>
       </Tabs>
     </div>
   </div>
  </div>
  );
};

export default DirectRemitPage;
