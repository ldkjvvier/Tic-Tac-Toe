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
    <path d="M16 16L112 112" stroke="#EF476F" strokeWidth="16" strokeLinecap="round" />
    <path d="M112 16L16 112" stroke="#EF476F" strokeWidth="16" strokeLinecap="round" />
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
    <circle cx="64" cy="64" r="48" stroke="#06D6A0" strokeWidth="16" fill="none" />
  </motion.svg>
);

export const LocalIcon = () => {
  return (
    <svg
      className="w-6 h-6 text-gray-800 dark:text-gray-300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const BotIcon = () => {
  return (
    <svg
      className="w-6 h-6 text-gray-800 dark:text-gray-300"
      role="img"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="robot"
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path
        fill="currentColor"
        d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"
      ></path>
    </svg>
  );
};
