import DropdownList from '../DropdownList';
import TextField from '../TextField';
import './Form.css';

const Form = () => {

  const team = [
    'Programação',
    'Front-end',
    'Data Science',
    'Devops',
    'UX e Desing',
    'Mobile',
    'Inovação e Gestão'
  ]

  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField label="Nome" placeholder="Digite o seu nome"/>
        <TextField label="Cargo" placeholder="Digite o seu cargo"/>
        <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
        <DropdownList labbel="Time" itens={team}/>
      </form>
    </section>
  )
}

export default Form;