"use client";

import Header from "@/components/layouts/header";
import Spline from "@splinetool/react-spline";

import { HyperText } from "@/components/ui/hyper-text";

export default function Infor() {
  return (
    <section className="w-full flex divide-x">
      <div className="flex-1 flex flex-col relative">
        <Header />
        <div
          id="hero"
          className="relative flex lg:min-h-[60vh] flex-col py-12 p-4 backdrop-blur-lg overflow-hidden"
        >
          <div className="absolute top-0 bottom-0 left-100 hidden lg:block -z-10 w-6/7 h-[110%] -ratote-15">
            <Spline scene="https://prod.spline.design/tYqLLCrJ14AFx6MC/scene.splinecode" />
            <div className="absolute inset-0 opacity-20 mix-blend-multiply z-0"></div>
          </div>
          <HyperText className="head-text-md max-w-3xl">
            Vendor - Building NFT Marketplace on Cedra Network
          </HyperText>

          <p className="text-muted-foreground max-w-3xl border-l-4 border-foreground pl-2">
            Coming soon! We&apos;re building the next generation NFT marketplace
            on Cedra Network. Experience seamless trading with low fees, secure
            transactions, and a vibrant creator community.
          </p>
        </div>
      </div>
    </section>
  );
}
