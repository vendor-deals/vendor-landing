import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Wallet,
  Image,
  ShoppingCart,
  Shield,
  Zap,
  Plus,
  Gift,
} from "lucide-react";

export default function Feature() {
  return (
    <div className="w-full border-t border-dashed">
      <div className="p-4 border-b border-dashed ">
        <h2 className="text-3xl font-semibold font-heading tracking-tight">
          Key Features
        </h2>
        <p className="text-muted-foreground">
          Discover what makes our platform special
        </p>
      </div>
      <div id="grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featureConfig.map((feature, index) => (
          <a
            key={index}
            href={feature.link}
            className={cn(
              "relative w-full p-4 hover:bg-muted/50 transition-all duration-150 group/item border-dashed",
              {
                "border-b": index < featureConfig.length - 1,
                "md:border-b-0": index >= featureConfig.length - 2,
                "md:border-b": index < featureConfig.length - 2,
                "lg:border-b-0": index >= featureConfig.length - 3,
                "lg:border-b": index < featureConfig.length - 3,
              },
              {
                "md:border-r":
                  index % 2 === 0 && index !== featureConfig.length - 1,
                "lg:border-r":
                  index % 3 !== 2 && index !== featureConfig.length - 1,
              }
            )}
          >
            {(index === 0 || index === featureConfig.length - 1) && (
              <Plus
                className={cn(
                  "absolute w-4 h-4 z-10 fill-current hidden md:block",
                  {
                    "-bottom-2 -right-2": index === 0,
                    "-top-2 -left-2": index === featureConfig.length - 1,
                  }
                )}
              />
            )}
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="group-hover/item:animate-pulse">
                  {feature.icon}
                </span>
                <h3 className="text-zinc-500 dark:text-zinc-400 text-sm font-semibold">
                  {feature.category}
                </h3>
              </div>
              <ArrowRight className="size-4 opacity-0 scale-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:-translate-x-0 group-hover/item:scale-100 transition-all duration-150" />
            </div>
            <h1 className="text-sm font-semibold font-heading tracking-tight mb-2">
              {feature.name}
            </h1>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

const featureConfig = [
  {
    icon: <ShoppingCart className="size-4" />,
    category: "Trading",
    name: "Easy Trading Experience",
    description:
      "Buy, sell, and trade NFTs with ease on the Cedra Network. Enjoy low gas fees and instant settlements for all your NFT transactions.",
    link: "#",
  },
  {
    icon: <Image className="size-4" />,
    category: "Creation",
    name: "NFT Creation Tools",
    description:
      "Create and mint your NFTs directly on our platform. Support for multiple formats including art, music, videos, and collectibles.",
    link: "#",
  },
  {
    icon: <Shield className="size-4" />,
    category: "Security",
    name: "Secure Marketplace",
    description:
      "Built on Cedra Network with audited smart contracts. Your NFTs and transactions are protected by robust blockchain security.",
    link: "#",
  },
  {
    icon: <Wallet className="size-4" />,
    category: "Payments",
    name: "Multiple Payment Options",
    description:
      "Connect your preferred wallet and trade using Cedra Network's native token. Simple and secure payment processing.",
    link: "#",
  },
  {
    icon: <Gift className="size-4" />,
    category: "Rewards",
    name: "Creator Rewards",
    description:
      "Earn royalties from secondary sales. Our smart contracts ensure creators get paid for their work automatically.",
    link: "#",
  },
  {
    icon: <Zap className="size-4" />,
    category: "Performance",
    name: "Lightning Fast",
    description:
      "Experience rapid transactions and minimal fees on Cedra Network. Built for scale with optimal performance.",
    link: "#",
  },
];
