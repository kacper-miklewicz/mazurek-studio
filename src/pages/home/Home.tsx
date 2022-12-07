import { motion } from "framer-motion";

import Projects from "./Projects";

const Home: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ transition: { delay: 0.5, duration: 0.5 }, opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Projects />
    </motion.main>
  );
};

export default Home;
