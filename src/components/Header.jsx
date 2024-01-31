import React, { useState, useEffect } from "react";
import { Avatar } from "@nextui-org/react";
import { motion } from "framer-motion";

const Header = () => {
  const beautifulWords = ["Beautiful", "Stunning", "Gorgeous", "Elegant"];
  const [beautifulIndex, setBeautifulIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBeautifulIndex((prevIndex) => (prevIndex + 1) % beautifulWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-full max-w-[260px] text-center text-[#061492]"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="w-full flex justify-center mb-2">
        <Avatar
          src="/logo3.jpg"
          className="w-20 h-20 border-2 border-white"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
          }}
        />
      </div>
      <div className="px-4">
        <h1 className="font-bold text-xl">Queen Bouquet</h1>
        <h2 className="text-tiny">
          Something {beautifulWords[beautifulIndex].toLowerCase()} for a good
          day
        </h2>
      </div>
    </motion.div>
  );
};

export default Header;
