import { useState } from 'react';
import Banner from './Components/Banner';
import Form from './Components/Form';
import Team from './Components/Team';
import Footer from './Components/Footer';

function App() {
  
  const teams = [
    { 
      name: 'Programação',
      primaryColor: '#57c278',
      secondaryColor: '#d9f7e9'
    },
    { 
      name: 'Front-end',
      primaryColor: '#82cffa',
      secondaryColor: '#e8f8ff'
    },
    { 
      name: 'Data Science',
      primaryColor: '#a6d157',
      secondaryColor: '#f0f8e2'
    },
    { 
      name: 'Devops',
      primaryColor: '#e06b69',
      secondaryColor: '#fde7e8'
    },
    { 
      name: 'UX e Desing',
      primaryColor: '#db6ebf',
      secondaryColor: '#fae9f5'
    },
    { 
      name: 'Mobile',
      primaryColor: '#ffba05',
      secondaryColor: '#fff5d9'
    },
    { 
      name: 'Inovação e Gestão',
      primaryColor: '#ff8a29',
      secondaryColor: '#ffeedf'
    }
  ]

  const [cooperators, setCooperators] = useState([]);

  const onNewCooperatorInclude = (cooperator) => {
    setCooperators([...cooperators, cooperator])
  }

  return (
    <div className="App">
      <Banner />
      <Form teamsName={teams.map(team => team.name)} onRegisteredCooperator={cooperator => onNewCooperatorInclude(cooperator)} />
      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor}
        cooperators={cooperators.filter(cooperator => cooperator.team === team.name)}
        />)}
        <Footer/>
    </div>
  );
}

export default App;
