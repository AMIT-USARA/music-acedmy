"use client"
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'

export const projects = [
    {
        title: "Stripe",
        description: "Builds modern economic infrastructure for online businesses including payments, billing, and financial services.",
        link: "https://stripe.com",
        tags: ["Fintech", "Payments", "APIs"]
    },
    {
        title: "Netflix",
        description: "Global streaming platform offering movies, TV shows, documentaries, and original content across all genres.",
        link: "https://netflix.com",
        tags: ["Entertainment", "Streaming", "Media"]
    },
    {
        title: "Google",
        description: "Innovates in search, advertising, cloud computing, Android, and AI to organize the world's information.",
        link: "https://google.com",
        tags: ["Search", "AI", "Cloud"]
    },
    {
        title: "Meta",
        description: "Focuses on social media, virtual reality, and building the metaverse through products like Facebook and Instagram.",
        link: "https://meta.com",
        tags: ["Social", "VR", "Metaverse"]
    },
    {
        title: "Amazon",
        description: "Leads in global e-commerce, AWS cloud infrastructure, AI devices, and logistics innovation.",
        link: "https://amazon.com",
        tags: ["E-commerce", "Cloud", "AI"]
    },
    {
        title: "Microsoft",
        description: "Delivers enterprise and consumer solutions like Windows, Azure, Office 365, and GitHub.",
        link: "https://microsoft.com",
        tags: ["Software", "Cloud", "Productivity"]
    }
];




function UpcomingWebinars() {
    return (
        <div className='py-12 bg-gray-900 '>
            <div>
                <div className="text-center">
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
                    <p className='mt-2text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn With the Best</p>
                </div>
            </div>

            <div className="mt-10 flex justify-center text-center">
                <div className='xl:max-w-[80%] max-w-[90%]'>
                    <HoverEffect items={projects} />
                </div>
                    
                
            </div>


            <div className="mt-20 text-center">
                <Link href={'/courses'} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                    <button>
                        View All Course
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default UpcomingWebinars
