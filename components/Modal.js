import React from 'react';
import '../Style.css'



const Modal = ({open, onClose}) => {
  if(!open) return null

  return (
    <div className="create">
      <button onClick={onClose} className='close-btn'>X</button>
      <h2>RVSP</h2>
      <form>
        <label>Name</label>
        <input 
          type="text"
        />
        <label>Phone Number</label>
        <input 
          type="number"
        />
        <label>Email Address</label>
        <input 
          type="email"
        />
        <button className='submit'>Submit</button>
        <p>Color of the day</p>
        <p>White <span className='gold'>| Champagne Gold</span> <span className='red'>Burgundy</span></p>
      </form>
    </div>
  );
}

export default Modal;

      
