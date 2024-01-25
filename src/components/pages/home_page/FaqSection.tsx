'use client'

import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
const faqsData: any = [
    {
        question: ' How do I open a new bank account?',
        answer: 'To open a new account, visit our nearest branch or apply online through our website. Ensure you have valid identification and proof of address.'
    },
    {
        question: 'What documents are required for account opening?',
        answer: 'You will need a government- issued ID(passport, drivers license) and proof of address (utility bill, rental agreement). Additional documents may be required based on the type of account.'
    },
    {
        question: 'How do I reset my online banking password?',
        answer: 'Click on the "Forgot Password" link on the login page. Follow the instructions to verify your identity and create a new password.'
    },
    {
        question: 'Are my online transactions secure?',
        answer: 'Yes, we use the latest encryption technologies to ensure the security of your online transactions. Additionally, monitor your account regularly and report any suspicious activity immediately.'
    },

]

export default function FaqSection() {
    return (
        <div className="lg:mx-12 my-12 mx-6 rounded  p-8">

            <h1 className=" mb-7 text-center text-2xl font-semibold">Frequently Asked Questions</h1>
            <Accordion>
                {faqsData?.map((faq: any) => <AccordionItem className="mb-2 bg-gray-50 px-5 py-3 rounded-lg ">
                    <h2 className="  ">
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left' className="font-semibold">
                                {faq?.question}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel className="mt-2">
                        {faq?.answer}

                    </AccordionPanel>
                </AccordionItem>)}
            </Accordion>
        </div>

    )
}
