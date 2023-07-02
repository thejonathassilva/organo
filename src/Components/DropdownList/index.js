import './DropdownList.css';

const DropdownList = ({value, label, itens, required, onChanged}) => {

  return (
    <div className='dropdown-list'>
      <label>{label}</label>
      <select onChange={event => onChanged(event.target.value)} required={required} value={value}>
        <option value=""></option>
        {itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default DropdownList;