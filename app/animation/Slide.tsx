"use client";
import { motion } from "framer-motion";

type props = {
  children: React.ReactNode;
  className?: any;
  delay?: number;
};

export const Slide = ({ children, className, delay }: props) => {
  return (
    <motion.div
      variants={{
        start: { opacity: 0, y: 50 },
        stop: { opacity: 1, y: 0 },
      }}
      initial="start"
      animate="stop"
      transition={{
        // duration: 0.6,
        ease: "backInOut",
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
