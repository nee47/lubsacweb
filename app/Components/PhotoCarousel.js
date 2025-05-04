"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/carousel/1.jpg",
  "/carousel/2.jpg",
  "/carousel/3.jpg",
  "/carousel/4.jpg",
];

export default function PhotoCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => paginate(1), 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative md:w-[500px] my-8  max-w-2xl mx-4 md:mx-auto overflow-hidden rounded-2xl shadow-lg bg-black aspect-[3/4]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          alt={`Foto ${index + 1}`}
          className="absolute w-full h-full object-contain"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <button
        onClick={() => paginate(-1)}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
