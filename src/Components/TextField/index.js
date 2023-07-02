import './TextField.css'

const TextField = (props) => {

  const placeholderModificada = `${props.placeholder}...`

  const onTyped = (event) => {
    props.onChanged(event.target.value);
  }

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input value={props.value} onChange={onTyped} required={props.required} placeholder={placeholderModificada} />
    </div>
  )
}

export default TextField;