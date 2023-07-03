import './TextField.css'

const TextField = ({ placeholder, onChanged, label, value, required}) => {

  const placeholderModificada = `${placeholder}...`

  const onTyped = (event) => {
    onChanged(event.target.value);
  }

  return (
    <div className="text-field">
      <label>{label}</label>
      <input value={value} onChange={onTyped} required={required} placeholder={placeholderModificada} />
    </div>
  )
}

export default TextField;