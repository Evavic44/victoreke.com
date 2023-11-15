"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

type props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export const Slide = ({ children, className, delay }: props) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("stop");
    }
  }, [controls, isInview]);

  return (
    <motion.div
      ref={ref}
      variants={{
        start: { opacity: 0, y: 50 },
        stop: { opacity: 1, y: 0 },
      }}
      initial="start"
      animate={controls}
      transition={{
        ease: "linear",
        delay: delay,
        duration: 0.2,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
