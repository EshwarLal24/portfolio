"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
};

export function FadeSection({ children, className, id, delay = 0 }: FadeSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
