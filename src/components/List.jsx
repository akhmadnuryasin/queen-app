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

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
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
        <ModalContent
          className={`overflow-auto ${
            theme === "dark" ? "bg-[#0f172a]" : "bg-white"
          }`}
        >
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 px-[55px]"></ModalHeader>
              <ModalBody>
                <div className="max-w-full gap-2 grid grid-cols-12 grid-rows-2 px-8 my-5">
                  <Card
                    isFooterBlurred
                    className="w-full h-[300px] col-span-12 sm:col-span-5"
                  >
                    <CardHeader className="absolute z-10 top-1 flex-col h-full flex justify-center items-center">
                      <p className="text-tiny text-black uppercase font-bold">
                        Pricelist 1
                      </p>
                    </CardHeader>
                  </Card>
                  <Card
                    isFooterBlurred
                    className="w-full h-[300px] col-span-12 sm:col-span-7"
                  >
                    <CardHeader className="absolute z-10 top-1 flex-col items-start"></CardHeader>
                    <Image
                      removeWrapper
                      alt="Relaxing app background"
                      className="z-0 w-full h-full object-cover"
                      src="./1.jpg"
                    />
                  </Card>
                  <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start"></CardHeader>
                    <Image
                      removeWrapper
                      alt="Card background"
                      className="z-0 w-full h-full object-cover"
                      src="./2.jpg"
                    />
                  </Card>
                  <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start"></CardHeader>
                    <Image
                      removeWrapper
                      alt="Card background"
                      className="z-0 w-full h-full object-cover"
                      src="./3.jpg"
                    />
                  </Card>
                  <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start"></CardHeader>
                    <Image
                      removeWrapper
                      alt="Card background"
                      className="z-0 w-full h-full object-cover"
                      src="./4.jpg"
                    />
                  </Card>
                </div>
                <div className="max-w-full gap-2 grid grid-cols-12 grid-rows-2 px-8 my-5">
                  <Card
                    isFooterBlurred
                    className={`w-full h-[300px] col-span-12 sm:col-span-5`}
                  >
                    <CardHeader className="absolute z-10 top-1 flex-col h-full flex justify-center items-center">
                      <p className="text-tiny text-black uppercase font-bold">
                        Pricelist 2
                      </p>
                    </CardHeader>
                  </Card>
                  <Card
                    isFooterBlurred
                    className="w-full h-[300px] col-span-12 sm:col-span-7"
                  >
                    <CardHeader className="absolute z-10 top-1 flex-col items-start"></CardHeader>
                    <Image
                      removeWrapper
                      alt="Relaxing app background"
                      className="z-0 w-full h-full object-cover"
                      src="./1.jpg"
                    />
                  </Card>
                  <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start"></CardHeader>
                    <Image
                      removeWrapper
                      alt="Card background"
                      className="z-0 w-full h-full object-cover"
                      src="./2.jpg"
                    />
                  </Card>
                  <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start"></CardHeader>
                    <Image
                      removeWrapper
                      alt="Card background"
                      className="z-0 w-full h-full object-cover"
                      src="./3.jpg"
                    />
                  </Card>
                  <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start"></CardHeader>
                    <Image
                      removeWrapper
                      alt="Card background"
                      className="z-0 w-full h-full object-cover"
                      src="./4.jpg"
                    />
                  </Card>
                </div>
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
