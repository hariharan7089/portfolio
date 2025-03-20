import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); 

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center"
    >
      <span>{message}</span>
      <button className="ml-4 text-white" onClick={onClose}>
        ✖
      </button>
    </motion.div>
  );
};

export default Toast;
