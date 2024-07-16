"use client";
import { motion } from "framer-motion";
export default function Animation({ children }) {
  return (
    <div className="animation">
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <h2>The best coaster rollers in the world!</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1>Hello world</h1>
      </motion.div>

      <motion.div
        className=""
        initial={{ opacity: 0, scale: 0.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
