// import { motion } from 'framer-motion/dist/framer-motion';

import { motion } from 'framer-motion';

const AnimatedHeader = ({ children }) => {
  const animations = {
    initial: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    viewport: {
      once: true,
    },
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
            transition={{ delay: 0.03 * i }}
          >
            {char}
          </motion.span>
        );
      })}
    </>
  );
};

export default AnimatedHeader;
