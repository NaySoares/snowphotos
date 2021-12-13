import { useContext } from "react";
import UserContext from "../context";

import "../styles/pin.scss";
export const Pin = ({ size, src, description, title }) => {
  const { state, setState } = useContext(UserContext);

  const handleSetModal = (title, description, src) => {
    setState({
      ...state,
      openModal: true,
      title: title,
      description: description,
      src: src,
    });
  };

  return (
    <div
      className="pin"
      style={{ gridRowEnd: `span ${size}` }}
      onClick={() => handleSetModal(src, description, title)}
    >
      <img src={src} alt={title} />

      <span>{description}</span>
    </div>
  );
};

export default Pin;
