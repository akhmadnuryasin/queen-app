import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center">
      <p className="text-sm text-[#8b99ae]">
        &copy; {currentYear} Queen Bouquet.
        <br /> All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
