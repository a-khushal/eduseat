"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function HeroPage() {
  return (
    <div className="h-screen bg-white">
        <div className="mx-72 pt-48 text-black">
            <div className="grid grid-cols-[60%_40%] gap-8 relative">
                <Container1 />
                <Container2 />
            </div>
        </div>
    </div>
  )
}

const Container1 = () => {
    return (
        <div>
            <h1 className="text-7xl font-normal leading-tight">
                YOUR PATH TO ENGINEERING AND MEDICAL EXCELLENCE
            </h1>
            <p className="text-lg mt-3 leading-relaxed">
                Expert counseling and guidance to help you make informed decisions about your future in medical and engineering careers.
            </p>
            <div className="flex justify-between gap-8 mt-20">
                <div className="flex">
                    <div className="w-22">
                        <button className="px-10 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium text-2xl">
                            Get Started
                        </button>
                    </div>
                    <div>
                        <ArrowUpRight className="w-14 h-14 rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-600 hadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium hover:cursor-pointer" />
                    </div>
                </div>
                <div className="relative inline-block">
                    <Image 
                        src="/images/college2.jpg" 
                        alt="college" 
                        width={300} 
                        height={250} 
                        className="rounded-3xl"
                    />
                    <div className="absolute top-6 right-4 max-w-[200px] bg-white rounded-2xl p-3 shadow-md">
                        <p className="text-sm text-zinc-900">
                            Discover your path to success with eduseat!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Container2 = () => {
    return (
        <div className="relative w-full h-full">
            <Image
                src="/images/college1.jpg"
                alt="college"
                layout="fill" 
                objectFit="cover" 
                className="rounded-3xl absolute"
            />
        </div>
    )
}