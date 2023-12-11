import { useRef } from 'react';
import './App.css';
// В компоненте Example находится лекция по userRef и useCallback
import Example from './components/Example';

// ниже указанные компоненты показывают пример работы автоскролла
import Header from './components/Header';
import Main from './components/Main';


function App() {

  let scrollRef = useRef()

  function autoScroll(){
    scrollRef.current.scrollIntoView({behavior: 'smooth'})
  }


  // ref передавать как проп можно только тогда, когда дочерний компонент
  // использует функцию forwardRef, которые отделяет переданные пропы от рефа
  return(
    <div>
      <Header autoScroll={autoScroll}/>
      <Main ref={scrollRef}/>
    </div>
  )
}

export default App;
