import logo from '../assets/snowphotos.png';
import profileImg from '../assets/profile.jpg';
import '../styles/aside.css';

export const Aside = () => {
  return (
    <aside className="aside">
      <img src={logo} alt="Logo" />
      <span>SnowPhotos</span>
      <img src={profileImg} alt="Profile" />
    </aside>
  )
}

export default Aside