import React from "react";

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div>
      <div>
        <section>
          {children}
          <div>
            <button>Inquire</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Modal;
