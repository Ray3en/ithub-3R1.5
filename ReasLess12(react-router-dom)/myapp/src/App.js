import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFoundPage';
import ProductInfoPage from './pages/ProductInfoPage';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contacts' element={<ContactsPage/>}/>
          <Route path='/product/:id' element={<ProductInfoPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
