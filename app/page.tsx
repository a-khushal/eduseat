import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
          <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] pointer-events-none" />
          <main className="relative z-10 text-center space-y-8 max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-7xl font-bold text-black font-sans tracking-tight animate-fade-in-up">
              eduseat
            </h1>
            <div className="animate-fade-in-up animation-delay-200">
              <h2 className="text-4xl sm:text-7xl font-extrabold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
                  Coming Soon
                </span>
              </h2>
              <p className="mt-2 text-slate-600 text-xl font-semibold">Get ready for something amazing!</p>
            </div>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full animate-fade-in-up animation-delay-400" />
            <p className="text-slate-600 font-medium animate-fade-in-up animation-delay-600">
              Your gateway to comprehensive information about engineering and medical seats.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-800">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors transform hover:scale-105">
                Notify Me
              </button>
            </div>
          </main>
          <footer className="absolute bottom-4 text-slate-600 flex items-center space-x-2 animate-fade-in-up animation-delay-1000">
            <span>with love by Amogh A Joshi</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
          </footer>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  )
}
