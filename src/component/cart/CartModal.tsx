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

  return createPortal(
    <dialog className={props.className}>{props.children}</dialog>,
    document.getElementById("modal")!,
  );
}
