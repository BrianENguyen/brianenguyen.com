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

  /* 
  Render each letter as a motion.span with animation properties
  Opacity animates from 0 to 1 with a delay based on its index
  */
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
