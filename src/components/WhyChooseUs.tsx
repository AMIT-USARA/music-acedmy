"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Welcome to Harmony Music School",
    description: "Discover your musical potential with expert instructors, personalized lessons, and a vibrant community. Whether you're a beginner or an advanced musician, we have programs to help you grow."
  },
  {
    title: "Our Programs",
    description: "We offer a range of classes including piano, guitar, violin, drums, voice, and music theory. Lessons are available for all age groups and skill levels."
  },
  {
    title: "Experienced Instructors",
    description: "Our team of professional musicians and educators bring years of experience and passion to every lesson, ensuring a fun and enriching learning experience."
  },
  {
    title: "Flexible Scheduling",
    description: "We offer both in-person and online lessons with flexible scheduling to fit your lifestyle. Evening and weekend classes available."
  },
  {
    title: "Student Performances",
    description: "Showcase your talent through regular recitals, concerts, and community events that build confidence and stage presence."
  },
  {
    title: "Enroll Today",
    description: "Join Harmony Music School and start your musical journey today. Contact us for a free trial lesson or to learn more about our programs."
  }
]



function WhyChooseUs() {

  return (
    <div>
      <StickyScroll content={musicSchoolContent}></StickyScroll>
    </div>
  )
}

export default WhyChooseUs
