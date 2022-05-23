import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export const FadeInWhenVisible: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3, staggerChildren: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0, scale: 1 },
        hidden: { opacity: 0, y: 100, scale: 0.9 },
      }}>
      {children}
    </motion.div>
  );
};

export const OnHoverZoom: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        y: -5,
      }}>
      {children}
    </motion.div>
  );
};
