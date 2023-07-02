import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';

function App() {

  const [cooperators, setCooperators] = useState([]);

  const onNewCooperatorInclude = (cooperator) => {
    setCooperators([...cooperators, cooperator])
    console.log(cooperators)
  }

  return (
    <div className="App">
      <Banner />
      <Form onRegisteredCooperator={cooperator => onNewCooperatorInclude(cooperator)} />
    </div>
  );
}

export default App;
