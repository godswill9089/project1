import './App.css';
import React from 'react';
import './Style.css'
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import {useState} from 'react'


function App() {
  const [openModal, setOpenModal] = useState(false)


  return (
    <div className="App">
      <Navbar/>
      <div className='png'>
        <img src="/images/Landing page web 1 1.png" alt="" className='header-png'/>
      </div>
      <Modal open={openModal} onClose={()=> setOpenModal(false)} />
    </div>
  );
}

export default App;



