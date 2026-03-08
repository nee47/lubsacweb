"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeUp({ children, duration }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: duration }}
      className={`
        transition-all ease-out duration-1000 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
      `}
    >
      {children}
    </div>
  );
}
