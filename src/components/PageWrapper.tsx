"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // Ensures animations run on route change
        initial={{ opacity: 0, y: 20 }} // Starting animation
        animate={{ opacity: 1, y: 0 }} // Enter animation
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
