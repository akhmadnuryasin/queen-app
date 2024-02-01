import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

const LoadingText = () => {
  const { theme } = useTheme();
  return (
    <motion.div
      className="text-3xl font-sambutan mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <p className={`${theme === "dark" ? "text-white" : "text-black"}`}>
        Hallo 😇, Selamat datang di Queen Bouquet
      </p>
    </motion.div>
  );
};

export default LoadingText;
