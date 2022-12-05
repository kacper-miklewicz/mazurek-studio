import { useEffect } from "react";

import { motion } from "framer-motion";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

interface LoadingScreenProps {}

const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  const { lockScroll, unlockScroll } = useLockBodyScroll();

  useEffect(() => {
    lockScroll();
    return () => unlockScroll();
  });

  return (
    <motion.div
      key="loading"
      exit={{ transition: { delay: 1 }, opacity: 0 }}
      className="w-full h-full fixed flex flex-col items-center justify-center top-0 left-0 bg-dark z-50"
    >
      <img
        className="block w-4/5 animate-pulse xs:w-1/2 md:w-1/3 l:w-1/4"
        src="https://firebasestorage.googleapis.com/v0/b/mazurek-studio.appspot.com/o/static%2Fimg%2Flogo.png?alt=media&token=4557b9f3-5260-4a7d-8646-3764e934d602"
        alt="Mazurek Studio logo"
      />
    </motion.div>
  );
};

export default LoadingScreen;
