import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomInput from "../shared/CustomInput";
import CustomButton from "../shared/CustomButton";
import { useTranslation } from "react-i18next";

const MenuPasswordModal = ({ isOpen, onClose, onSubmit }) => {
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();

    const {t} = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="custom-modal"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <p className="title">{t("menuPasswordModal:title")}</p>
            <CustomInput
              placeholder={t("menuPasswordModal:old_password")}
              containerStyle={{ marginBottom: 32 }}
              type={"password"}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <CustomInput
              placeholder={t("menuPasswordModal:new_password")}
              containerStyle={{ marginBottom: 32 }}
              type={"password"}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <CustomButton text={t("common:confirm")} style={{marginBottom: 32}} onClick={() => onSubmit(oldPassword, newPassword)} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuPasswordModal;
