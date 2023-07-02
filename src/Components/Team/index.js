import Cooperator from '../Cooperator';
import './Team.css'

const Team = ({ name, primaryColor, secondaryColor, cooperators}) => {
  return (
    cooperators.length > 0 ? <section className='team' style={{ backgroundColor: secondaryColor }}> 
      <h3 style={{ borderBottomColor: primaryColor }}>{name}</h3>
      <div className='cooperators'>
        {cooperators.map(cooperator => <Cooperator name={cooperator.name} office={cooperator.office} image={cooperator.image}/>)}
      </div>
    </section>
    : ''
  )
}

export default Team;