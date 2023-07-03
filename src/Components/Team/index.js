import hexToRgba from 'hex-to-rgba';
import Cooperator from '../Cooperator';
import './Team.css'

const Team = ({ id, name, color, cooperators, onDelete, changeColor}) => {
  return (
    cooperators.length > 0 ? 
    <section className='team' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(color, 0.2) }}> 
      <input onChange={event => changeColor(event.target.value, id)} value={color} type='color' className='input-color'/>
      <h3 style={{ borderBottomColor: color }}>{name}</h3>
      <div className='cooperators'>
        {cooperators.map(cooperator => {
          return <Cooperator 
            id={cooperator.id}
            backgroundColor={color}
            key={cooperator.name}  
            name={cooperator.name} 
            office={cooperator.office} 
            image={cooperator.image}
            onDelete={onDelete}/>
            }
          )}
      </div>
    </section>
    : ''
  )
}

export default Team;