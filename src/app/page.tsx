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
      <div className="min-h-screen bg-light text-black p-6">
        <Hero />
        <ToolSection />
        <div className="flex justify-between items-center mt-6">
          <h2 className="text-2xl text-accent-foreground font-semibold ">Gallery</h2>
          <div className="flex gap-3">
            <Button
              variant="secondary"
              className="gap-2 py-2 h-min w-min rounded-xl"
            >
              <Newspaper className="h-5! w-5!" />
              Legal
            </Button>
            <Button
              variant="secondary"
              className="gap-2 py-2 h-min w-min rounded-xl"
            >
              <CreditCard className="h-4.5! w-4.5!" />
              Pricing
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
