import { AiTwotoneCloseCircle } from 'react-icons/ai'
import './Cooperator.css'

const Cooperator = ({id, name, image, office, backgroundColor, onDelete}) => {
  return (
    <div className='cooperator'>
      <AiTwotoneCloseCircle 
        size={24} 
        color='#c4302b'  
        className='delete' 
        onClick={() => onDelete(id)}
      />
      <div className='header' style={{ backgroundColor: backgroundColor}}>
        <img src={image} alt={name}></img>
      </div>
      <div className='footer'>
        <h4>{name}</h4>
        <h5>{office}</h5>
      </div>
    </div>
  )
}

export default Cooperator;