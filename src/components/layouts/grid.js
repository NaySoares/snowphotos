import { useContext } from "react";
import Pin from "../pin";
import DataImg from "../../api/data";
import Modal from "../modal";
import UserContext from "../../context";

import "../../styles/layoutGrid.css";

export const GridLayout = () => {
  const { state } = useContext(UserContext);

  return (
    <div className="pinContainer">
      {state.openModal && <Modal />}
      {DataImg.map((img) => {
        return (
          <Pin
            key={img.id}
            title={img.title}
            description={img.description}
            src={img.src}
            srcModal={img.srcModal}
            size={img.size}
            id={img.id}
          />
        );
      })}
    </div>
  );
};

export default GridLayout;
