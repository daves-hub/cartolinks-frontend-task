import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";

export interface CarouselCardProp {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  badge: string;
}

export default function CarouselCard(item: CarouselCardProp) {
  return (
    <Card className="col-span-2 relative overflow-hidden p-0 rounded-4xl">
      <CardContent className="p-3 sm:p-6 h-[300px] sm:h-[400px] lg:h-[512px] w-[280px] sm:w-[600px] lg:w-[1000px] text-white">
        <Image
          src={item.imageUrl}
          alt={item.title}
          className="absolute aspect-auto inset-0 h-full w-full"
          width={1000}
          height={550}
        />
        <Badge className="bg-transparent absolute top-2 sm:top-3 left-2 sm:left-3 text-light text-xs sm:text-sm">
          {item.badge}
        </Badge>
        <div className="relative z-10 flex flex-col justify-between h-full w-full">
          <h1 className="text-4xl sm:text-6xl lg:text-9xl font-bold text-center flex-1 flex items-center justify-center px-2">
            {item.title}
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-0">
            <div className="flex flex-col gap-1 sm:gap-2 basis-full sm:basis-1/2">
              <h2 className="text-sm sm:text-lg lg:text-xl font-medium">{item.subtitle}</h2>
              <p className="text-xs sm:text-sm lg:text-md line-clamp-2 sm:line-clamp-none">{item.description}</p>
            </div>

            <div className="flex justify-start sm:justify-end basis-full sm:basis-1/2">
              <Button variant="secondary" className="rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 text-xs sm:text-sm">
                {item.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
