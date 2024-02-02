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
                <div className="grid gap-6 mt-6 mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                  <div
                    className={`border border-slate-400 px-6 py-4 transition-colors duration-300 transform rounded-lg ${
                      theme === "dark"
                        ? "hover:bg-gray-800"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    <p
                      className={`text-lg font-medium ${
                        theme === "dark" ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      Money Bouquet
                    </p>
                    <h4
                      className={`mt-2 text-3xl font-semibold ${
                        theme === "dark" ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      50k - 90k{" "}
                      <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                        / Pcs
                      </span>
                    </h4>
                    <p className="mt-4 text-gray-500 dark:text-gray-300">
                      For most businesses that want to optimaize web queries.
                    </p>
                    <div className="mt-8 space-y-8">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          All limited links
                        </span>
                      </div>

                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          Own analytics platform
                        </span>
                      </div>

                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          Chat support
                        </span>
                      </div>

                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          Optimize hashtags
                        </span>
                      </div>

                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          Unlimited users
                        </span>
                      </div>
                    </div>
                    <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                      Pilih Paket
                    </button>
                  </div>
                  <div
                    className={`border border-slate-400 px-6 py-4 transition-colors duration-300 transform rounded-lg ${
                      theme === "dark"
                        ? "hover:bg-gray-800"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    <p
                      className={`text-lg font-medium ${
                        theme === "dark" ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      Money Bouquet
                    </p>
                    <h4
                      className={`mt-2 text-3xl font-semibold ${
                        theme === "dark" ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      50k - 90k{" "}
                      <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                        / Pcs
                      </span>
                    </h4>
                    <p className="mt-4 text-gray-500 dark:text-gray-300">
                      For most businesses that want to optimaize web queries.
                    </p>
                    <div className="mt-8 space-y-8">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          All limited links
                        </span>
                      </div>

                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          Own analytics platform
                        </span>
                      </div>

                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          Chat support
                        </span>
                      </div>

                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          Optimize hashtags
                        </span>
                      </div>

                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          Unlimited users
                        </span>
                      </div>
                    </div>
                    <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                      Pilih Paket
                    </button>
                  </div>
                  <div
                    className={`border border-slate-400 px-6 py-4 transition-colors duration-300 transform rounded-lg ${
                      theme === "dark"
                        ? "hover:bg-gray-800"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    <p
                      className={`text-lg font-medium ${
                        theme === "dark" ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      Money Bouquet
                    </p>
                    <h4
                      className={`mt-2 text-3xl font-semibold ${
                        theme === "dark" ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      50k - 90k{" "}
                      <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                        / Pcs
                      </span>
                    </h4>
                    <p className="mt-4 text-gray-500 dark:text-gray-300">
                      For most businesses that want to optimaize web queries.
                    </p>
                    <div className="mt-8 space-y-8">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          All limited links
                        </span>
                      </div>

                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          Own analytics platform
                        </span>
                      </div>

                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          Chat support
                        </span>
                      </div>

                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          Optimize hashtags
                        </span>
                      </div>

                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          Unlimited users
                        </span>
                      </div>
                    </div>
                    <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                      Pilih Paket
                    </button>
                  </div>
                  <div
                    className={`border border-slate-400 px-6 py-4 transition-colors duration-300 transform rounded-lg ${
                      theme === "dark"
                        ? "hover:bg-gray-800"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    <p
                      className={`text-lg font-medium ${
                        theme === "dark" ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      Money Bouquet
                    </p>
                    <h4
                      className={`mt-2 text-3xl font-semibold ${
                        theme === "dark" ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      50k - 90k{" "}
                      <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                        / Pcs
                      </span>
                    </h4>
                    <p className="mt-4 text-gray-500 dark:text-gray-300">
                      For most businesses that want to optimaize web queries.
                    </p>
                    <div className="mt-8 space-y-8">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          All limited links
                        </span>
                      </div>

                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          Own analytics platform
                        </span>
                      </div>

                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          Chat support
                        </span>
                      </div>

                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          Optimize hashtags
                        </span>
                      </div>

                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          Unlimited users
                        </span>
                      </div>
                    </div>
                    <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                      Pilih Paket
                    </button>
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
