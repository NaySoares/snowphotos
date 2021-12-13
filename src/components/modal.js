import { useContext } from 'react'
import UserContext from '../context'
import img from "../assets/images/elaina.png";
import '../styles/modal.scss'

export const Modal = () => {
  const { state, setState} = useContext(UserContext)
  return (
    <div className="modalContainer">
      <img src={state.src} alt={state.title} />
      <div>
        <h3>{state.description}</h3>
        <strong>Adaptação</strong>
        <span>
          Essa capa foi uma das primeiras que fiz quando comecei a editar capas
          de Light Novels, obviamente não foi nada fácil recriar o titulo com os
          aspectos originais, em particular, os "ramos" que passam atrás do
          nome. Um ponto que fica como curiosidade é que o sub-titulo "A Jornada
          de Elaina" está com uma fonte diferente da original, depois de vários
          meses eu consegui a fonte original mas ainda não tive tempo de
          atualizar essa arte.
        </span>
      </div>
    </div>
  );
};

export default Modal
