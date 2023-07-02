import Button from '../Button';
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

  const onSave = (event) => {
    event.preventDefault();
    console.log('Form foi submetido');
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField required={true} label="Nome" placeholder="Digite o seu nome"/>
        <TextField required={true} label="Cargo" placeholder="Digite o seu cargo"/>
        <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
        <DropdownList required={true} labbel="Time" itens={team}/>
        <Button>
          Criar card
        </Button>
      </form>
    </section>
  )
}

export default Form;