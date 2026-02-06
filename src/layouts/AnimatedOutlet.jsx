import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AnimatedOutlet = ({ children, direction }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  const distance = 100;
  const sign = isRTL ? -1 : 1;

  return (
    <motion.div
      initial={{ x: sign * direction * distance, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      }}
      exit={{
        x: -sign * direction * distance,
        opacity: 0,
        transition: { duration: 0.25, ease: "easeIn" },
      }}
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOutlet;