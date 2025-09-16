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
      <CardContent className="p-6 h-[512px] w-[1000px] text-white">
        <Image
          src={item.imageUrl}
          alt={item.title}
          className="absolute aspect-auto inset-0 w-full"
          width={1000}
          height={550}
        />
        <Badge className="bg-transparent absolute top-3 left-3 text-light">
          {item.badge}
        </Badge>
        <div className="relative z-10 flex flex-col justify-between h-full w-full">
          <h1 className="text-9xl font-bold text-center flex-1 flex items-center justify-center">
            {item.title}
          </h1>

          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-2 basis-1/2">
              <h2 className="text-xl font-medium">{item.subtitle}</h2>
              <p className="text-md">{item.description}</p>
            </div>

            <div className="flex justify-end basis-1/2">
              <Button variant="secondary" className="rounded-full px-8 py-6">
                {item.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
