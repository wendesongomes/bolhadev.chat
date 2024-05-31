import * as React from "react"
import { LucideIcon, MessageCircle } from 'lucide-react';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

type InfoCardType = {
  Icon: LucideIcon;
  content: string;
}[];

interface InfoCardProps {
  info: InfoCardType;
}

export const InfoCard: React.FC<InfoCardProps> = ({ info }) => {
  return (
    <Carousel
    className="[mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_140%)]"
  >
    <CarouselContent className="md:animate-slide-left animate-slide-left-mobile">
      {info.map(({ Icon, content}, index) => (
        <CarouselItem key={index} className="basis-3/4 md:basis-2/4 lg:basis-1/4">
          <div className="p-1">
            <Card className="border border-white/20 bg-stone-500/10 backdrop-blur-xl">
              <CardContent className="flex flex-row items-center gap-4 bg-none p-5">
                <div className="">
                  <Icon size={26} />
                </div>
                <p className='font-extralight'>
                  {content}
                </p>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}

      {info.map(({ Icon, content}, index) => (
        <CarouselItem key={index} className="basis-3/4 md:basis-2/4 lg:basis-1/4">
          <div className="p-1">
            <Card className="border border-white/20 bg-stone-500/10 backdrop-blur-xl">
              <CardContent className="flex flex-row items-center gap-4 bg-none p-5">
                <div className="">
                  <Icon size={26} />
                </div>
                <p className='font-extralight'>
                  {content}
                </p>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
  )
}
