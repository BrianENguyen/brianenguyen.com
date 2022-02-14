import { motion } from 'framer-motion/dist/framer-motion';

const AnimatedHeader = ({ children }) => {
  const animations = {
    initial: { opacity: 0 },
  };

  const splitLetters = [...children];

  return (
    <>
      {splitLetters.map((char, i) => {
        return (
          <motion.span
            key={i}
            variants={animations}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.01 }}
          >
            {char}
          </motion.span>
        );
      })}
    </>
  );
};

export default AnimatedHeader;
