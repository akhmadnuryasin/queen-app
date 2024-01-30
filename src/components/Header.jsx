import React, { useState, useEffect } from "react";
import { Avatar } from "@nextui-org/react";

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
    <div className="w-full max-w-[260px] text-center text-[#061492]">
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
    </div>
  );
};

export default Header;
