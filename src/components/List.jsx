import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaListAlt,
} from "react-icons/fa";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

const List = (props) => {
  const [isHovered, setHovered] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const { theme } = useTheme();

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
          "https://www.google.com/maps/place/7%C2%B025'12.5%22S+109%C2%B053'31.4%22E/@-7.42015,109.89206,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-7.42015!4d109.89206?hl=id&entry=ttu",
          "_blank"
        );
        break;
      case "pricelist":
        setModalOpen(true);
        break;
      default:
        console.log(`Button ${props.label} clicked`);
    }
  };

  const getIcon = () => {
    switch (props.label.toLowerCase()) {
      case "whatsapp":
        return <FaWhatsapp />;
      case "instagram":
        return <FaInstagram />;
      case "tiktok":
        return <FaTiktok />;
      case "locations":
        return <FaMapMarkerAlt />;
      case "pricelist":
        return <FaListAlt />;
      default:
        return null;
    }
  };

  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full my-2"
      >
        <Button
          className={`w-full bg-transparent border-2 rounded-md ${
            theme === "dark"
              ? "hover:text-white hover:border-[#bbc3ce] text-[#6d7a8f] border-[#455367]"
              : "hover:text-black hover:border-[#000000] text-[#0f172a] border-[#0f172a]"
          }`}
          onClick={handleButtonClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span className="flex items-center justify-center space-x-2">
            {isHovered && (
              <motion.span
                className="ml-1 text-xl"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {getIcon()}
              </motion.span>
            )}
            <span className="text-base">{props.label}</span>
          </span>
        </Button>
      </motion.div>

      <Modal
        backdrop="opaque"
        isOpen={isModalOpen}
        size="full"
        onOpenChange={() => setModalOpen(!isModalOpen)}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Pricelist
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default List;
