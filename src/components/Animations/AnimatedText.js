import { motion } from 'framer-motion/dist/framer-motion';

const AnimatedText = ({ children }) => {
  const animations = {
    initial: { opacity: 0, x: -100 },
  };

  console.log(children);
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      variants={animations}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;
