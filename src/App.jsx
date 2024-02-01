import React, { useState, useEffect } from "react";
import ListboxWrapper from "./components/ListboxWrapper";
import { motion, AnimatePresence } from "framer-motion";
import List from "./components/List";
import ListData from "./data/ListData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeToogle from "./components/ThemeToogle";
import { useTheme } from "./components/ThemeContext";
import LoadingText from "./components/LoadingText";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2700));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const createCard = (ListData, index) => {
    return (
      <motion.div
        key={ListData.key}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <List label={ListData.label} />
      </motion.div>
    );
  };

  return (
    <div
      className={`h-[100vh] p-6 flex ${
        theme === "dark" ? "bg-[#0f172a]" : "bg-white"
      } justify-center items-center flex-col w-full`}
    >
      <ThemeToogle />
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <LoadingText />
          </div>
        </motion.div>
      ) : (
        <>
          <Header />
          <ListboxWrapper>
            <AnimatePresence>
              {ListData.map((data, index) => createCard(data, index))}
            </AnimatePresence>
          </ListboxWrapper>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
