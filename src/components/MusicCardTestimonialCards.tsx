"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";


const testimonials = [
  {
    quote:
      "Joining Harmony Music School was one of the best decisions I’ve made. The instructors are incredibly talented and supportive, and the progress I've made in just a few months is amazing.",
    name: "Emma Johnson",
    title: "Piano Student",
  },
  {
    quote:
      "As a working professional, I needed flexible scheduling—and Harmony delivered. The online guitar lessons are top-notch and tailored to my learning style.",
    name: "Michael Chen",
    title: "Guitar Student",
  },
  {
    quote:
      "The vocal program helped me prepare for my college auditions with confidence. The feedback and one-on-one coaching made a huge difference.",
    name: "Sofia Martinez",
    title: "Voice Student",
  },
  {
    quote:
      "I enrolled my 10-year-old son in drum lessons, and he absolutely loves it. The teachers know how to keep kids engaged while teaching solid technique.",
    name: "Rachel Thompson",
    title: "Parent of Student",
  },
  {
    quote:
      "I’ve always wanted to learn the violin, and the supportive environment at Harmony Music School made that dream possible. The recitals are a great way to stay motivated.",
    name: "Daniel Kim",
    title: "Violin Student",
  },
];





export function MusicCardTestimonialCards() {
  return (

    <div className="relative flex h-[40rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      >
        <div className="h-full rounded-md flex flex-col z-10 antialiased  items-center justify-evenly relative overflow-hidden">
          <h2 className="text-3xl font-bold text-center z-10">Hear our Harmony: Voices of success</h2>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>
      </div>



    </div>


  );
}

