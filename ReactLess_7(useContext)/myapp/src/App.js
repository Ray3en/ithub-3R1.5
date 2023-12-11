import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Context } from './context/Context';

function App() {

  const [numbers, setNumbers] = useState([1,2,3,4,5,6])

  function deleteFirstValue(){
    setNumbers(numbers.slice(1))
  }

  return (
    <Context.Provider value={{numbers, deleteFirstValue}}>
    <div>
      <h2>App</h2>
      <p>{numbers}</p>
      <Header/>
      <Main/>
    </div>
    </Context.Provider>
  );
}

export default App;
