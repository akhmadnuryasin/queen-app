import React from "react";
import { Button } from "@nextui-org/react";

const List = (props) => {
  const handleButtonClick = () => {
    switch (props.label.toLowerCase()) {
      case "whatsapp":
        window.open("https://wa.me/6283865422026", "_blank");
        break;
      case "instagram":
        window.open("https://www.instagram.com/queenbouquet2", "_blank");
        break;
      case "tiktok":
        window.open(
          "https://www.tiktok.com/@queenbouquet2?is_from_webapp=1&sender_device=pc",
          "_blank"
        );
        break;
      case "locations":
        window.open(
          "https://www.google.com/maps/place/Alun-Alun+Wonosobo/@-7.3587852,109.9005179,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7aa0ff266df64d:0xbb86598aeb9508b!8m2!3d-7.3587905!4d109.9030928!16s%2Fg%2F1pzw6pzsw?hl=id&entry=tts",
          "_blank"
        );
        break;
      case "price list":
        alert("Dalam Tahap Pengembangan");
        break;
      default:
        console.log(`Button ${props.label} clicked`);
    }
  };

  return (
    <Button
      className="w-full my-2 bg-transparent hover:bg-[#061492] text-[#061492] hover:text-white border-small border-[#061492] rounded-md h-12 relative"
      onClick={handleButtonClick}
    >
      <span className="flex items-center justify-center">{props.label}</span>
    </Button>
  );
};

export default List;
