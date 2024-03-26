import { createPortal } from "react-dom";
import { ReactNode, useEffect, useRef } from "react";

type ModalProps = {
  children: ReactNode;
  className: string;
  open: boolean;
  onClose: () => void;
};

export function Modal(props: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current;

    if (modal) {
      if (props.open) {
        modal.showModal();
      }
      return () => modal.close();
    }
  }, [props.open]);

  const rootModal = document.getElementById("modal");
  if (!rootModal) {
    return null;
  }

  return createPortal(
    <dialog ref={dialog} className={props.className} onClose={props.onClose}>
      {props.children}
    </dialog>,
    rootModal,
  );
}
