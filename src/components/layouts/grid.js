import { useContext } from 'react'
import Pin from "../pin";
import DataImg from "../../api/data";
import Modal from '../modal'
import UserContext from '../../context';

import "../../styles/layoutGrid.css";

export const GridLayout = () => {
  const { state, setState } = useContext(UserContext)

  return (
    <div className="pinContainer">
      {state.openModal && <Modal />}
      {DataImg.map((img) => {
        return (
          <Pin
            key={img.title}
            title={img.title}
            description={img.description}
            src={img.src}
            size={img.size}
          />
        );
      })}
    </div>
  );
};

export default GridLayout;
