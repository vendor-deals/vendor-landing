"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import Link from "next/link";

type FAQItem = {
  id: string;
  icon: IconName;
  question: string;
  answer: string;
};

export default function FAQs() {
  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      icon: "wallet",
      question: "How to start trading NFTs on Vendor?",
      answer:
        "To start trading on Vendor, connect your Cedra Network wallet, browse through our collections, and place bids or make direct purchases. Our platform ensures secure transactions with low gas fees and instant settlements on the Cedra Network.",
    },
    {
      id: "item-2",
      icon: "image",
      question: "How to create and list your NFTs?",
      answer:
        "Creating and listing NFTs on Vendor is simple. Upload your digital asset, fill in the details like title, description, and price, choose your royalty percentage, and mint your NFT directly on the Cedra Network. Once minted, your NFT will be available in our marketplace.",
    },
    {
      id: "item-3",
      icon: "shield",
      question: "How secure is Vendor marketplace?",
      answer:
        "Vendor is built on Cedra Network&apos;s robust blockchain infrastructure, ensuring maximum security for all transactions. Smart contracts are audited, and all NFT metadata is stored securely. Our platform implements industry-standard security practices to protect users and their assets.",
    },
    {
      id: "item-4",
      icon: "coins",
      question: "What are the fees on Vendor?",
      answer:
        "Vendor operates on Cedra Network, offering significantly lower gas fees compared to other blockchains. Our platform charges a small marketplace fee for transactions, with most of the value going directly to creators and sellers.",
    },
    {
      id: "item-5",
      icon: "help-circle",
      question: "What types of NFTs can I trade on Vendor?",
      answer:
        "Vendor supports various NFT formats including digital art, collectibles, music, videos, and more. All NFTs are minted on Cedra Network, ensuring compatibility and seamless trading experience across the platform.",
    },
  ];

  return (
    <section className="bg-background border-t border-dashed">
      <div className="flex flex-col gap-10 md:gap-0 md:flex-row p-4">
        <div className="md:w-1/3">
          <div className="sticky top-20">
            <h2 className="text-3xl font-bold max-w-2/3">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Can&apos;t find what you&apos;re looking for? Contact our{" "}
              <Link
                href="#"
                className="text-primary font-medium hover:underline"
              >
                customer support team
              </Link>
            </p>
          </div>
        </div>
        <div className="md:w-2/3">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-background border px-4 last:border-b"
              >
                <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="flex size-6">
                      <DynamicIcon name={item.icon} className="m-auto size-4" />
                    </div>
                    <span className="text-sm">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="px-9">
                    <p className="text-sm text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
