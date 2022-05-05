import { motion } from 'framer-motion/dist/framer-motion';

const AnimatedText = ({ children }) => {
  const variants = {
    initial: {
      opacity: 1,
      x: 200,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const splitLetters = [...children];

  return (
    <>
      {splitLetters.map((char, i) => {
        return (
          <motion.span
            key={i}
            animate={{ x: 100 }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            {char}
          </motion.span>
        );
      })}
    </>
  );
};

export default AnimatedText;
