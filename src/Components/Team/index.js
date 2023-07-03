import Cooperator from '../Cooperator';
import './Team.css'

const Team = ({ name, primaryColor, secondaryColor, cooperators, onDelete}) => {
  return (
    cooperators.length > 0 ? 
    <section className='team' style={{ backgroundColor: secondaryColor }}> 
      <h3 style={{ borderBottomColor: primaryColor }}>{name}</h3>
      <div className='cooperators'>
        {cooperators.map(cooperator => {
          return <Cooperator 
            backgroundColor={primaryColor}
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