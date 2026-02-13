import { memo } from "react";
import { motion } from "framer-motion";
function Hamburgar() {
  return (
    <svg             width={30}
      height={30} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <motion.path         initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3 }} strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>

  );
}

export default memo(Hamburgar);
