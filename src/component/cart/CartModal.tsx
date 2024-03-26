import { createPortal } from "react-dom";
import { ReactNode, useRef } from "react";

type ModalProps = {
  children: ReactNode;
  className: string;
  open: boolean;
};

export function Modal(props: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  return createPortal(
    props.open ? (
      <div
        ref={ref}
        className={"fixed top-0 left-0 z-20 w-full h-full flex justify-end "}
      >
        <div className={"fixed bg-black opacity-45 w-full h-full"} />
        <div aria-modal={true} role={"dialog"} className={props.className}>
          {props.children}
        </div>
      </div>
    ) : null,
    document.getElementById("modal")!,
  );
}
