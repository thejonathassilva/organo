import { useState } from 'react';
import Banner from './Components/Banner';
import Form from './Components/Form';
import Team from './Components/Team';
import Footer from './Components/Footer';
import { v4 as newId } from 'uuid';

function App() {
  
  const [teams, setTeams] = useState([
    {
      id: newId(),
      name: 'Programação',
      color: '#57c278'
    },
    { 
      id: newId(),
      name: 'Front-end',
      color: '#82cffa'
    },
    { 
      id: newId(),
      name: 'Data Science',
      color: '#a6d157'
    },
    { 
      id: newId(),
      name: 'Devops',
      color: '#e06b69'
    },
    { 
      id: newId(),
      name: 'UX e Desing',
      color: '#db6ebf'
    },
    { 
      id: newId(),
      name: 'Mobile',
      color: '#ffba05'
    },
    { 
      id: newId(),
      name: 'Inovação e Gestão',
      color: '#ff8a29'
    }
  ]);

  const beggin = [
    {
      id: newId(),
      name: 'JULIANA AMOASEI',
      favorite: false,
      office: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: newId(),
      name: 'DANIEL ARTINE',
      favorite: false,
      office: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: newId(),
      name: 'GUILHERME LIMA',
      favorite: false,
      office: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: newId(),
      name: 'PAULO SILVEIRA',
      favorite: false,
      office: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: newId(),
      name: 'JULIANA AMOASEI',
      favorite: false,
      office: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: newId(),
      name: 'DANIEL ARTINE',
      favorite: false,
      office: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: newId(),
      name: 'GUILHERME LIMA',
      favorite: false,
      office: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: newId(),
      name: 'PAULO SILVEIRA',
      favorite: false,
      office: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: newId(),
      name: 'JULIANA AMOASEI',
      favorite: false,
      office: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: newId(),
      name: 'DANIEL ARTINE',
      favorite: false,
      office: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: newId(),
      name: 'GUILHERME LIMA',
      favorite: false,
      office: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: newId(),
      name: 'PAULO SILVEIRA',
      favorite: false,
      office: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: newId(),
      name: 'JULIANA AMOASEI',
      favorite: false,
      office: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: newId(),
      name: 'DANIEL ARTINE',
      favorite: false,
      office: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: newId(),
      name: 'GUILHERME LIMA',
      favorite: false,
      office: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: newId(),
      name: 'PAULO SILVEIRA',
      favorite: false,
      office: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: newId(),
      name: 'JULIANA AMOASEI',
      favorite: false,
      office: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: newId(),
      name: 'DANIEL ARTINE',
      favorite: false,
      office: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: newId(),
      name: 'GUILHERME LIMA',
      favorite: false,
      office: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: newId(),
      name: 'PAULO SILVEIRA',
      favorite: false,
      office: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: newId(),
      name: 'JULIANA AMOASEI',
      favorite: false,
      office: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: newId(),
      name: 'DANIEL ARTINE',
      favorite: false,
      office: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: newId(),
      name: 'GUILHERME LIMA',
      favorite: false,
      office: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: newId(),
      name: 'PAULO SILVEIRA',
      favorite: false,
      office: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[5].name
    },
  ];

  const [cooperators, setCooperators] = useState(beggin);

  const onNewCooperatorInclude = (cooperator) => {
    setCooperators([...cooperators, cooperator])
  }

  
  function deletingCooperator(id) {
    return setCooperators(cooperators.filter(cooperator => cooperator.id !== id));
  }
  
  function changeColorOfTeam(color, id) {
    setTeams(teams.map(team => {
      if(team.id === id) {
        team.color = color;
      }
      return team;
    }))
  }

  function createTeam(name, color) {
    setTeams([...teams, {name, color, id: newId()}])
  }

  function resolveFavorite(id) {
    setCooperators(cooperators.map(cooperator => {
      if(cooperator.id === id) {
        cooperator.favorite = !cooperator.favorite;
      }
      return cooperator;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        createTeam={createTeam}
        teamsName={teams.map(team => team.name)} 
        onRegisteredCooperator={cooperator => onNewCooperatorInclude(cooperator)} 
      />
      {teams.map(team => 
      <Team 
        id={team.id}
        changeColor={changeColorOfTeam}
        key={team.name} 
        name={team.name} 
        color={team.color}
        cooperators={cooperators.filter(cooperator => cooperator.team === team.name)}
        onDelete={deletingCooperator}
        byFavorite={resolveFavorite}
      />)}
      <Footer/>
    </div>
  );
}

export default App;
