import './Field.css'

const Field = ({ type = 'text', placeholder, onChanged, label, value, required}) => {

  const onTyped = (event) => {
    onChanged(event.target.value);
  }

  return (
    <div className={`field field-${type}`}>
      <label>{label}</label>
      <input 
        type={type} 
        value={value} 
        onChange={onTyped} 
        required={required} 
        placeholder={placeholder} />
    </div>
  )
}

export default Field;