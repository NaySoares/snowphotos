import Pin from '../pin'
import '../../styles/layoutGrid.css'

export const GridLayout = () => {
  const vertical = 18;
  const horizontal = 40;
  const misto = 30;
  return (
    <div className="pinContainer">
      <Pin size={horizontal}/>
      <Pin size={vertical}/>
      <Pin size={misto}/>
      <Pin size={vertical}/>
      <Pin size={horizontal}/>
      <Pin size={misto}/>
      <Pin size={horizontal}/>
      <Pin size={vertical}/>
      <Pin size={horizontal}/>
      <Pin size={vertical}/>
      <Pin size={misto}/>
      <Pin size={vertical}/>
      <Pin size={horizontal}/>
      <Pin size={misto}/>
    </div>
  )
}

export default GridLayout