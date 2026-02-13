import React from "react";
import { motion } from "framer-motion";
function Close() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
            width={30}
      height={30}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3 }}
        d="M6 6l12 12 M6 18l12-12"
      />
    </svg>
  );
}

export default React.memo(Close);
