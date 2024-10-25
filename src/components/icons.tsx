import { motion } from 'framer-motion';

export const Cross = () => (
  <motion.svg
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.3 }}
    aria-label="X"
    role="img"
    viewBox="0 0 128 128"
    width="100%"
    height="100%"
  >
    <path d="M16 16L112 112" stroke="currentColor" strokeWidth="16" strokeLinecap="round" />
    <path d="M112 16L16 112" stroke="currentColor" strokeWidth="16" strokeLinecap="round" />
  </motion.svg>
);

export const Circle = () => (
  <motion.svg
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.3 }}
    aria-label="O"
    role="img"
    viewBox="0 0 128 128"
    width="100%"
    height="100%"
  >
    <circle cx="64" cy="64" r="48" stroke="currentColor" strokeWidth="16" fill="none" />
  </motion.svg>
);
