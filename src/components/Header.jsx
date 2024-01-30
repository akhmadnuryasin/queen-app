import React from "react";
import { Avatar } from "@nextui-org/react";

const Header = () => {
  return (
    <div className="w-full max-w-[260px] text-center text-[#061492]">
      <div className="w-full flex justify-center mb-2">
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          className="w-20 h-20 text-large"
        />
      </div>
      <div className="px-4">
        <h1 className="font-bold text-xl">Queen Bouquet</h1>
        <h2 className="text-tiny">Something beautiful for a good day</h2>
      </div>
    </div>
  );
};

export default Header;
