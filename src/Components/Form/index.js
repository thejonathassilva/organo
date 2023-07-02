import { useState } from 'react';
import Button from '../Button';
import DropdownList from '../DropdownList';
import TextField from '../TextField';
import './Form.css';

const Form = (props) => {
  const [name, setName] = useState('');
  const [office, setOffice] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  const onSave = (event) => {
    event.preventDefault();
    props.onRegisteredCooperator({
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
          required={true} 
          label="Nome" 
          placeholder="Digite o seu nome"
          value={name}
          onChanged={value => setName(value)}
          />
        <TextField 
          required={true} 
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
          required={true} 
          label="Time" 
          itens={props.teamsName}
          value={team}
          onChanged={value => setTeam(value)}
          />
        <Button>
          Criar card
        </Button>
      </form>
    </section>
  )
}

export default Form;