import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
      </motion.div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
      </motion.div>
    </div>
  );
};

export default Home; 