import "../styles/pin.scss";
import exemplo from "../assets/profile.jpg";
export const Pin = ({ size }) => {
  return (
    <div className="pin" style={{ gridRowEnd: `span ${size}` }}>
      <img src={exemplo} alt="exemplo" />

      <span>Obra aqui com um nome bem grande</span>
    </div>
  );
};

export default Pin;
