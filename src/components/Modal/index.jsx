import { useEffect, useRef } from "react";
import { useKeydown } from "../../hooks/useKeydown";
import { useOutclick } from "../../hooks/useOutclick";
import styles from "./style.module.css";

export const Modal = ({ children, setIsOpen }) => {
   const modalRef = useOutclick(() => {
      setIsOpen(false);
   });

   const buttonRef = useKeydown("Escape", (element) => {
      element.click();
   });

   return (
      <div className={styles.modalOverlay} role="dialog">
         <div ref={modalRef} className={styles.modalBox}>
            <button
               ref={buttonRef}
               className={styles.closeButton}
               onClick={() => setIsOpen(false)}
            >
               Fechar
            </button>
            {children}
         </div>
      </div>
   );
};
