import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';

//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Book from './components/bookpage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/book' element={<Book/>} />

    

        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;