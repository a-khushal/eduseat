"use client";

import { Footer } from '@/components/ui/footer';
import { motion } from 'framer-motion';

interface AnimatedWordProps {
  text: string;
  delay: number;
  yFrom: number;
  className?: string;
}

export function AnimatedWord({ text, delay, yFrom, className }: AnimatedWordProps) {
  return (
    <motion.span
      className={`inline-block whitespace-pre py-1 ${className}`}
      initial={{ opacity: 0, y: yFrom }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.2, 0.65, 0.3, 0.9],
      }}
    >
      {text}{' '}
    </motion.span>
  );
}
function AnnouncementBadge() {
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="flex items-center justify-center bg-red-100 px-4 py-1 rounded-full w-fit"
        >
        <div className="text-md font-medium text-red-600 flex items-center">
            Trusted by 1000+ students
        </div>
        </motion.div>
    );
}

function SubTagLine() {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 8 * 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="flex items-center justify-center w-fit"
        >
            <div className="text-xl font-medium text-slate-500 flex flex-col items-center text-center gap-1">
                <div>Simplifying the Complex Path</div>
                <div>to Secure Your Seat at Top Institutions.</div>
            </div>
        </motion.div>
    );
}

export default function App() {
  const firstLine = [
    { word: "Your", className: "" },
    { word: "Path", className: "" },
    { word: "to", className: "" },
    { word: "Engineering", className: "bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent" },
  ];
  const secondLine = [
    { word: "and", className: "" },
    { word: "Medical", className: "bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent" },
    { word: "Excellence", className: "" },
  ];

  return (
    <div className='h-screen bg-white'>
        <div className="min-h-screen mt-20 flex items-center justify-center bg-white text-black">
          <div>
              <div className='flex flex-col items-center justify-center'>
                  <div className='mb-8'>
                      <AnnouncementBadge />
                  </div>
                  <div className="text-center">
                      <h1 className="text-6xl font-bold tracking-tight">
                          <div className="overflow-hidden">
                          {firstLine.map((item, index) => (
                              <AnimatedWord
                              key={item.word + index}
                              text={item.word}
                              delay={(index + 1) * 0.2}
                              yFrom={50}
                              className={item.className}
                              />
                          ))}
                          </div>
                          <div className="overflow-hidden">
                          {secondLine.map((item, index) => (
                              <AnimatedWord
                              key={item.word + index}
                              text={item.word}
                              delay={(firstLine.length + index + 1) * 0.2}
                              yFrom={50}
                              className={item.className}
                              />
                          ))}
                          </div>
                      </h1>
                  </div>
                  <div className='mt-5'>
                      <SubTagLine />
                  </div>
              </div>
              <div className='w-screen'>
                <Footer/>
              </div>
            </div>
        </div>
    </div>
  );
}