import { useState } from 'react';
import Button from '../Button';
import DropdownList from '../DropdownList';
import TextField from '../TextField';
import './Form.css';

const Form = ({onRegisteredCooperator, teamsName, createTeam}) => {
  const [name, setName] = useState('');
  const [office, setOffice] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');
  const [nameTeam, setNameTeam] = useState('');
  const [color, setColor] = useState('');

  const onSave = (event) => {
    event.preventDefault();
    onRegisteredCooperator({
      name,
      office,
      image,
      team
    })
    setName('');
    setOffice('');
    setImage('');
    setTeam('');
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField 
          required 
          label="Nome" 
          placeholder="Digite o seu nome"
          value={name}
          onChanged={value => setName(value)}
          />
        <TextField 
          required 
          label="Cargo" 
          placeholder="Digite o seu cargo"
          value={office}
          onChanged={value => setOffice(value)}
          />
        <TextField 
          label="Imagem" 
          placeholder="Digite o endereço da imagem"
          value={image}
          onChanged={value => setImage(value)}
          />
        <DropdownList 
          required 
          label="Time" 
          itens={teamsName}
          value={team}
          onChanged={value => setTeam(value)}
          />
        <Button>
          Criar card
        </Button>
      </form>
      <form onSubmit={(event) => {
        event.preventDefault();
        createTeam(nameTeam, color);
      }}>
        <h2>Preencha os dados para criar um novo time</h2>
        <TextField 
          required 
          label="Nome" 
          placeholder="Digite o nome do time"
          value={nameTeam}
          onChanged={value => setNameTeam(value)}
          />
        <TextField 
          required 
          label="Cor" 
          placeholder="Digite a cor do time"
          value={color}
          onChanged={value => setColor(value)}
          />
        <Button>
          Criar um novo time
        </Button>
      </form>
    </section>
  )
}

export default Form;