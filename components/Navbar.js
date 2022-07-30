import '../Style.css'
import React from 'react';
import {
    Link
} from 'react-router-dom'
import { useState } from 'react';
import Modal from './Modal';



const Navbar = () => {
    const [openModal, setOpenModal] = useState(false)

    return(
       <>
        <div className='nav-items'>
            <div className='nav-img'>
                <img src="/images/Asset 1 1.png" alt="" className='asset1'/>
            </div>
            <nav className='items'>
                <ul className='ul'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <div className='register-btn'>
                        <button onClick= {() => setOpenModal(true)}  className='btn1'>Register</button>
                    </div>
                </ul>
            </nav>
            <h1 className='names'>Gina & Ayo</h1>
        </div>
        <Modal open={openModal} onClose={()=> setOpenModal(false)} />
       </>
    )
}

export default Navbar;