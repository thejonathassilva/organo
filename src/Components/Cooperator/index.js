import './Cooperator.css'

const Cooperator = ({name, image, office, backgroundColor}) => {
  return (
    <div className='cooperator'>
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