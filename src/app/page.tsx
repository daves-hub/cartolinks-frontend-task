import CarouselCard from "@/components/CarouselCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ToolSection from "@/components/ToolSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import {
  ChevronDown,
  CreditCard,
  Edit,
  Grid3x3,
  ImageIcon,
  Newspaper,
  User,
  Video,
  Wand2,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const tools = [
    {
      name: "Image",
      icon: ImageIcon,
      description: "Generate images with custom styles and prompts.",
    },
    {
      name: "Video",
      icon: Video,
      description: "Generate or edit videos with AI-powered tools.",
    },
    {
      name: "Edit",
      icon: Edit,
      description: "Edit custom copies and attract images.",
    },
    {
      name: "Enhancer",
      icon: Wand2,
      description: "Upscale and enhance images up to 2x.",
    },
    {
      name: "Video LipSync",
      icon: Grid3x3,
      description: "Create lip-sync animations from audio.",
    },
    {
      name: "Motion Transfer",
      icon: User,
      description: "Transfer motion to animated characters.",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-light text-black p-3 sm:p-6">
        <Hero />
        <ToolSection />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 sm:mt-6 gap-3 sm:gap-0">
          <h2 className="text-xl sm:text-2xl text-accent-foreground font-semibold">Gallery</h2>
          <div className="flex gap-2 sm:gap-3">
            <Button
              variant="secondary"
              className="gap-1 sm:gap-2 py-1.5 sm:py-2 h-min w-min rounded-xl text-xs sm:text-sm px-3 sm:px-4"
            >
              <Newspaper className="h-4 w-4 sm:h-5 sm:w-5" />
              Legal
            </Button>
            <Button
              variant="secondary"
              className="gap-1 sm:gap-2 py-1.5 sm:py-2 h-min w-min rounded-xl text-xs sm:text-sm px-3 sm:px-4"
            >
              <CreditCard className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
              Pricing
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
