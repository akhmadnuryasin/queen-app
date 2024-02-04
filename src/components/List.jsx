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
                <div className="px-11">
                  <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                    <div
                      className={`flex flex-col w-full p-8 space-y-8 text-center border-2 border-gray-200 rounded-lg ${
                        theme === "dark"
                          ? "bg-[#0f172a] border-gray-700"
                          : "bg-white border-gray-200"
                      } `}
                    >
                      <div className="flex-shrink-0">
                        <h2
                          className={`inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg ${
                            theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                          } `}
                        >
                          Flower bouquet
                        </h2>
                      </div>

                      <div className="flex-shrink-0">
                        <span
                          className={`pt-2 text-3xl font-bold  uppercase  ${
                            theme === "dark" ? "text-gray-100" : "text-gray-800"
                          } `}
                        >
                          Start From
                        </span>
                      </div>

                      <ul className="flex-1 space-y-4">
                        <li className="text-gray-500 dark:text-gray-400">
                          Mini flowers 15cm 15k/ minimal 5pcs
                        </li>

                        <li className="text-gray-500 dark:text-gray-400">
                          Size S 55K
                        </li>

                        <li className="text-gray-500 dark:text-gray-400">
                          Size M 85K
                        </li>
                        <li className="text-gray-500 dark:text-gray-400">
                          Size L 125K
                        </li>
                        <li className="text-gray-500 dark:text-gray-400">
                          Size XL 160K
                        </li>
                      </ul>

                      <button
                        onClick={() => {
                          window.open("https://wa.me/6283865422026", "_blank");
                        }}
                        className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                      >
                        Pilih Paket
                      </button>
                    </div>
                    <div
                      className={`flex flex-col w-full p-8 space-y-8 text-center border-2 border-gray-200 rounded-lg ${
                        theme === "dark"
                          ? "bg-[#0f172a] border-gray-700"
                          : "bg-white border-gray-200"
                      } `}
                    >
                      <div className="flex-shrink-0">
                        <h2
                          className={`inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg ${
                            theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                          } `}
                        >
                          Snack Bouquet
                        </h2>
                      </div>

                      <div className="flex-shrink-0">
                        <span
                          className={`pt-2 text-3xl font-bold  uppercase  ${
                            theme === "dark" ? "text-gray-100" : "text-gray-800"
                          } `}
                        >
                          Start From
                        </span>
                      </div>

                      <ul className="flex-1 space-y-4">
                        <li className="text-gray-500 dark:text-gray-400">
                          Random Snack size S 35K
                        </li>

                        <li className="text-gray-500 dark:text-gray-400">
                          Random Snack size M 55K
                        </li>

                        <li className="text-gray-500 dark:text-gray-400">
                          Bebas request budget
                        </li>
                        <li className="text-gray-500 dark:text-gray-400">
                          Bebas request warna warping
                        </li>
                        <li className="text-gray-500 dark:text-gray-400">
                          Bebas reques isi snack
                        </li>
                      </ul>

                      <button
                        onClick={() => {
                          window.open("https://wa.me/6283865422026", "_blank");
                        }}
                        className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                      >
                        Pilih Paket
                      </button>
                    </div>
                    <div
                      className={`flex flex-col w-full p-8 space-y-8 text-center border-2 border-gray-200 rounded-lg ${
                        theme === "dark"
                          ? "bg-[#0f172a] border-gray-700"
                          : "bg-white border-gray-200"
                      } `}
                    >
                      <div className="flex-shrink-0">
                        <h2
                          className={`inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg ${
                            theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                          } `}
                        >
                          Money Bouquet
                        </h2>
                      </div>

                      <div className="flex-shrink-0">
                        <span
                          className={`pt-2 text-3xl font-bold  uppercase  ${
                            theme === "dark" ? "text-gray-100" : "text-gray-800"
                          } `}
                        >
                          Start From
                        </span>
                      </div>

                      <ul className="flex-1 space-y-4">
                        <li className="text-gray-500 dark:text-gray-400">
                          10-15 Lembar : 55K
                        </li>

                        <li className="text-gray-500 dark:text-gray-400">
                          20-30 Lembar : 60K
                        </li>

                        <li className="text-gray-500 dark:text-gray-400">
                          50-100 Lembar : 90K
                        </li>
                        <li className="text-gray-500 dark:text-gray-400">
                          Bebas request model
                        </li>

                        <li className="text-gray-500 dark:text-gray-400">
                          Bebas request warna
                        </li>
                      </ul>

                      <button
                        onClick={() => {
                          window.open("https://wa.me/6283865422026", "_blank");
                        }}
                        className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                      >
                        Pilih Paket
                      </button>
                    </div>
                    <div
                      className={`flex flex-col w-full p-8 space-y-8 text-center border-2 border-gray-200 rounded-lg ${
                        theme === "dark"
                          ? "bg-[#0f172a] border-gray-700"
                          : "bg-white border-gray-200"
                      } `}
                    >
                      <div className="flex-shrink-0">
                        <h2
                          className={`inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg ${
                            theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                          } `}
                        >
                          Balloon Bouquet
                        </h2>
                      </div>

                      <div className="flex-shrink-0">
                        <span
                          className={`pt-2 text-3xl font-bold  uppercase  ${
                            theme === "dark" ? "text-gray-100" : "text-gray-800"
                          } `}
                        >
                          Start From
                        </span>
                      </div>

                      <ul className="flex-1 space-y-4">
                        <li className="text-gray-500 dark:text-gray-400">
                          4 Tangkai 24K
                        </li>

                        <li className="text-gray-500 dark:text-gray-400">
                          6 Tangkai 37K
                        </li>

                        <li className="text-gray-500 dark:text-gray-400">
                          8 Tangkai 50K
                        </li>
                        <li className="text-gray-500 dark:text-gray-400">
                          10 Tangkai 63K
                        </li>

                        <li className="text-gray-500 dark:text-gray-400">
                          12 Tangkai 74K
                        </li>
                      </ul>

                      <button
                        onClick={() => {
                          window.open("https://wa.me/6283865422026", "_blank");
                        }}
                        className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                      >
                        Pilih Paket
                      </button>
                    </div>
                  </div>
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
