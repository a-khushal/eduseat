"use client"

import React from 'react';
import { GraduationCap, Stethoscope, Wrench } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

export function Hero() {
  return (
    <div className="relative min-h-screen px-4 py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/root.avif"
        alt="Students collaborating"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/30 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-grid-small-black/[0.1] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <span className="text-sm font-medium text-gray-600">
              Trusted by 1000+ Students
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Your Path to{' '}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Medical
              </span>{' '}
              &{' '}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Engineering
              </span>{' '}
              Excellence
            </h1>
            <p className="text-xl text-black pt-6 font-normal max-w-2xl mx-auto">
              Expert counseling and guidance to help you make informed decisions about your future in medical and engineering careers.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium">
              Book a counselling session
            </button>
            <button className="px-6 py-2 text-orange-600 hover:text-orange-700 font-medium transition-colors bg-white/50 backdrop-blur-sm rounded-lg">
              Explore Programs
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {[
              {
                icon: <GraduationCap className="w-6 h-6" />,
                title: "Expert Counselors",
                description: "Guidance from experienced professionals"
              },
              {
                icon: <Stethoscope className="w-6 h-6" />,
                title: "Medical Pathways",
                description: "Comprehensive medical career guidance",
                link: "/medical",
              },
              {
                icon: <Wrench className="w-6 h-6" />,
                title: "Engineering Focus",
                description: "Specialized engineering stream advice",
                link: "/engineering"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                {feature.link ? (
                  <Link href={feature.link} className="block h-full no-underline">
                    <FeatureContent feature={feature} />
                  </Link>
                ) : (
                  <FeatureContent feature={feature} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureContent({ feature }: { feature: Feature }) {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-gradient-to-br from-orange-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4">
        {feature.icon}
      </div>
      <h3 className="font-semibold text-lg mb-2 text-gray-900">{feature.title}</h3>
      <p className="text-gray-700 flex-grow">{feature.description}</p>
      {feature.link && (
        <div className="mt-4 text-blue-600 hover:text-blue-800 transition-colors">
          Learn more →
        </div>
      )}
    </div>
  );
}

