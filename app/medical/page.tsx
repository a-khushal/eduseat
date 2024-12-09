import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Appbar from "@/components/ui/appbar"

export default function MedicalPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/medical.avif"
        alt="Medical Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/80" />

      {/* Content */}
      <div className="relative z-10">
        <Appbar />

        {/* Hero Section */}
        <main className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-block mb-8 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full">
              <span className="text-white text-sm font-medium">
                Trusted by 1000+ Students
              </span>
            </div>

            {/* Main Content */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Your Path to{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Medical
              </span>{" "}
              Excellence
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
              Embark on a journey to become a healthcare professional. Our expert guidance will
              help you navigate the complex world of medicine, from anatomy and physiology to
              patient care and medical ethics.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
              Explore Medical Programs
            </Button>
          </div>

          {/* Cards Section */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-20">
            {/* Why Choose Medicine Card */}
            <Card className="bg-white/10 backdrop-blur-md border-none text-white overflow-hidden group hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-orange-300 mb-6 group-hover:text-orange-200">
                  Why Choose Medicine?
                </h2>
                <ul className="space-y-4 text-left">
                  {[
                    "Make a direct impact on people's lives and well-being",
                    "Engage in lifelong learning and continuous professional development",
                    "Access diverse career opportunities in various medical specialties",
                    "Contribute to groundbreaking medical research and innovations",
                    "Be part of a respected and essential profession in society"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <span className="mr-2 text-orange-300 group-hover:text-orange-200">•</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Our Medical Programs Card */}
            <Card className="bg-white/10 backdrop-blur-md border-none text-white overflow-hidden group hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-red-300 mb-6 group-hover:text-red-200">
                  Our Medical Programs
                </h2>
                <ul className="space-y-4 text-left">
                  {[
                    "Pre-medical preparation and MCAT coaching",
                    "Medical school application guidance",
                    "Clinical rotations and residency planning",
                    "Specialized courses in emerging medical technologies",
                    "Medical research methodology and ethics training"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <span className="mr-2 text-red-300 group-hover:text-red-200">•</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

