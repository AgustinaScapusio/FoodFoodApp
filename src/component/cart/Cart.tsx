import { Modal } from "./CartModal.tsx";

export function Cart() {
  // const modal = useAppSelector((state) => state.modal.isVisible);

  function handleClose() {}

  return (
    <Modal className={""} onClose={handleClose} open={true}>
      <div className="modal-content">
        <span className="close">&times;</span>
        <h2>Cart Items</h2>
        <ul></ul>
      </div>
    </Modal>
  );
}
