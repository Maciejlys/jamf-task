import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export const OnHoverZoom: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}>
      {children}
    </motion.div>
  );
};
