const Modal = ({ user }: { user: { firstName: string; lastName: string } }) => {
  return (
    <div className="modal d-flex align-items-center" style={{ backgroundColor: '#212529cc' }}>
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="modal-header gap-5">
            <h5 className="modal-title fw-bold fs-4">
              Dear {user.firstName} {user.lastName}!
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body fw-semi-bold fs-5">
            Your order is accepted! Thank you for your purchase!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
