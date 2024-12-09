import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Appbar from "@/components/ui/appbar"

export default function EngineeringPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/engineering.avif"
        alt="Engineering Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70" />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
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
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Engineering
              </span>{" "}
              Excellence
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
              Shape the future through innovation and problem-solving. Our comprehensive
              engineering programs will equip you with the skills to design, build, and optimize the
              technologies of tomorrow.
            </p>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
              Discover Engineering Paths
            </Button>
          </div>

          {/* Cards Section */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-20">
            {/* Why Choose Engineering Card */}
            <Card className="bg-white/10 backdrop-blur-md border-none text-white overflow-hidden group hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-blue-300 mb-6 group-hover:text-blue-200">
                  Why Choose Engineering?
                </h2>
                <ul className="space-y-4 text-left">
                  {[
                    "Drive technological advancements and innovation",
                    "Solve complex problems and improve people's lives",
                    "Enjoy diverse career opportunities across industries",
                    "Engage in cutting-edge research and development",
                    "Develop critical thinking and analytical skills"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <span className="mr-2 text-blue-300 group-hover:text-blue-200">•</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Our Engineering Programs Card */}
            <Card className="bg-white/10 backdrop-blur-md border-none text-white overflow-hidden group hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-purple-300 mb-6 group-hover:text-purple-200">
                  Our Engineering Programs
                </h2>
                <ul className="space-y-4 text-left">
                  {[
                    "Computer Science and Software Engineering",
                    "Electrical and Electronic Engineering",
                    "Mechanical and Aerospace Engineering",
                    "Civil and Environmental Engineering",
                    "Biomedical Engineering and Robotics"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <span className="mr-2 text-purple-300 group-hover:text-purple-200">•</span>
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

