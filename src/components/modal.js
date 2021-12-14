import { useContext } from 'react'
import UserContext from '../context'
import DataImg from '../api/data'

import '../styles/modal.scss'

export const Modal = () => {
  const { state, setState } = useContext(UserContext)
  const currentModal = DataImg.filter((obj =>  obj.id === state.id)) 
  
  const closeModal = () => {
    setState({
      ...state,
      openModal: false
    })
  }

  return (
    <div
      className="modalContainer"
    >
      <strong onClick={() => closeModal()}>x</strong> 
      <img src={currentModal[0].srcModal} alt="Ilust" />
      <div>
        <h3>{currentModal[0].title}</h3>
        <strong>Adaptação</strong>
        <span>{currentModal[0].description}</span>
      </div>
    </div>
  );
};

export default Modal
