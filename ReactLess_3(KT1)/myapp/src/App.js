import './App.css'
import About from './components/About/About';
import Header from './components/Header/Header';
import OfferList from './components/OfferList/OfferList';
import Services from './components/Services/Services';

function App() {
  return (
    <div >
      <Header/>
      <Services/>
      <About/>
      <OfferList/>
    </div>
  );
}

export default App;
