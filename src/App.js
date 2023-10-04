import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [lista, setLista] = useState([{ texto: 'Exemplo de tarefa', concluida: false }]);
  let [Item, setItem] = useState('');

  useEffect(() => {
    setLista([]);
  }, []);

  function addItem() {
    if (Item.length <= 0) {
      alert('Nome da tarefa não pode ser null!');
      return;
    }

    let itemIndex = lista.findIndex(item => item.texto === Item);
    if (itemIndex >= 0) {
      alert('Tarefa já existente!');
      return;
    }

    setLista([...lista, { texto: Item, concluida: false }]);
    setItem('');
  }

  function deletarItem(index) {
    let tmpArray = [...lista];
    tmpArray.splice(index, 1);
    setLista(tmpArray);
  }

  function marcarComoConcluida(index) {
    let tmpArray = [...lista];
    tmpArray[index].concluida = !tmpArray[index].concluida;
    setLista(tmpArray);
  }

  return (
    <>
      <div className='container'>
        <h1>LISTA DE TAREFAS</h1>
        <div className='novoItem'>
          <input
            placeholder='Tarefa'
            value={Item}
            onChange={value => setItem(value.target.value)}
            type='text'
          />
          <button onClick={() => addItem()}>Adicionar</button>
        </div>
        <ul className='lista'>
          {lista.map((item, index) => (
            <li key={index} className='item'>
              <input
                type='checkbox'
                checked={item.concluida}
                onChange={() => marcarComoConcluida(index)}
              />
              {item.texto}
              <button onClick={() => deletarItem(index)}>Deletar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;