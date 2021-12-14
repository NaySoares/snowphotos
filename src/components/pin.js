import { useContext } from "react";
import UserContext from "../context";

import "../styles/pin.scss";
export const Pin = ({ size, src, description, title, id }) => {
  const { state, setState } = useContext(UserContext);

  const handleSetModal = () => {
    if (state.openModal === true) {
      setState({
        ...state,
        openModal: false
      });
      return
    }
    setState({
      ...state,
      openModal: true,
      id: id,
    });
  };

  return (
    <div
      className="pin"
      style={{ gridRowEnd: `span ${size}` }}
      onClick={() => handleSetModal(src, description, title, id)}
    >
      <img src={src} alt="ilust" />

      <span>{title}</span>
    </div>
  );
};

export default Pin;
