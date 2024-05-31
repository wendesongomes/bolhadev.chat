import React from "react";
import Link from "next/link";

import { ChevronRight, Dumbbell, Heart, MessageCircle, PiggyBank } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfoCard } from "@/components/info-card";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const infoCardContent = [
  {
    Icon: MessageCircle,
    content: 'The most effective way to improve your English is through speaking.'
  },
  {
    Icon: Dumbbell,
    content: 'Enhance your English skills quickly by practicing a little every day.'
  },
  {
    Icon: Heart,
    content: 'Show respect, patience, and kindness to everyone.'
  },
  {
    Icon: PiggyBank,
    content: "And best of all, it's completely free."
  }
]


export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex w-full flex-col lg:container lg:flex-row-reverse">
        <div className="z-10 mt-16 flex w-full flex-col items-center justify-center gap-3 p-10">
          <h2
            className="bg-gradient-to-br from-stone-50 to-violet-300 bg-clip-text p-3 text-center text-6xl font-bold leading-[50px] text-transparent lg:text-7xl">
            Practice English for free
          </h2>
          <h3 className="max-w-3xl text-center text-sm lg:text-base">The quickest path to learning English is to practice speaking it regularly. Connect with others for free 10-minute video chats and improve your skills in a friendly, safe environment. Join us now and start speaking English today!</h3>
          <div className="mt-4 flex w-full justify-center">
            <Link href={`room/queue`}>
              <Button className="min-w-max rounded-full bg-violet-600 text-base font-light text-white/90 transition-all duration-300 hover:scale-105 hover:bg-violet-800 hover:font-semibold hover:text-white">
                Get Started
                <ChevronRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full">
        <InfoCard info={infoCardContent} />
      </section>

      <section className="my-20 flex flex-col items-center justify-center gap-10 md:flex-row md:items-start md:px-10">
        <Card className="border-slate-5 bg-slate-6 mx-10 border border-b-0 md:mx-0">
          <CardContent className="max-w-[500px] p-5">
            <Image src={'/user.png'} width={1000} height={1000} alt="" className="rounded-md" />
          </CardContent>
        </Card>
        <div className="flex w-3/4 max-w-[900px] flex-col items-center gap-2">
          <h2 className="text-4xl font-bold">Join the community</h2>
          <p className="max-w-3xl text-sm lg:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptatum repellendus doloremque non nulla explicabo id sit at iusto eum. At aperiam quaerat velit fugit corporis unde eaque id hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptatum repellendus doloremque non nulla explicabo id sit at iusto eum. At aperiam quaerat velit fugit corporis unde eaque id hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptatum repellendus doloremque non nulla explicabo id sit at iusto eum. At aperiam quaerat velit fugit corporis unde eaque id hic?</p>
        </div>
      </section>
    </main>
  );
}
