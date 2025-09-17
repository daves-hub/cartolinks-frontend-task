'use client'

import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import CarouselCard from "./CarouselCard";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, ImageUp } from "lucide-react";

export default function Hero() {
  const carouselItems = [
    { title: "WAN 2.2", badge: "WAN 2.2", subtitle: "WAN 2.2 Image generation", description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.", buttonText: "Try WAN 2.2", imageUrl: '/image1.webp' },
    { title: "Open Source", badge: "OPEN SOURCE MODEL", subtitle: "FLUX.1 Krea", description: "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.", buttonText: "Try FLUX.1 Krea", imageUrl: '/image2.png' },
    { title: "WAN 2.2", badge: "WAN 2.2", subtitle: "WAN 2.2 Image generation", description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.", buttonText: "Try WAN 2.2", imageUrl: '/image1.webp' },
    { title: "Open Source", badge: "OPEN SOURCE MODEL", subtitle: "FLUX.1 Krea", description: "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.", buttonText: "Try FLUX.1 Krea", imageUrl: '/image2.png' },
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const goToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="relative w-full mb-6">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent className="flex gap-2 sm:gap-4 -ml-2 sm:-ml-4 pb-2">
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="pl-3 sm:pl-6 basis-auto">
              <CarouselCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="w-full flex items-center justify-between mt-4">
          <div/>
          <div className="flex gap-2 sm:gap-3 z-10">
            {Array.from({ length: count }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full transition-colors duration-200 cursor-pointer ${
                  current === index + 1 ? "bg-gray-700" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-1 sm:gap-2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="h-6 w-6 sm:h-8 sm:w-8 text-accent-foreground rounded-full"
              onClick={() => api?.scrollPrev()}
              disabled={!api?.canScrollPrev()}
            >
              <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>

            <Button
              variant="outline" 
              size="icon"
              className="h-6 w-6 sm:h-8 sm:w-8 text-accent-foreground! rounded-full text-light"
              onClick={() => api?.scrollNext()}
              disabled={!api?.canScrollNext()}
            >
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
      </Carousel>

      
    </div>
  );
}