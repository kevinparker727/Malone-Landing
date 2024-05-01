import { Link } from "react-router-dom";

const Modal = ({ children }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div>
        <section>
          <div>{children.name}</div>
          <div>{children.image}</div>
          <div>{children}</div>

          <div>
            <button>Inquire</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Modal;
