import React, { useState } from "react";
import Button from '@mui/material/Button';
import Modal from './components/Modal'
import './App.css';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Button onClick={()=>setOpen(true)}>Open modal</Button>
      <Modal
       open={open} 
       close= {()=>setOpen(false)}
       title="this is a title from props" 
       />
    </div>
  );
}

export default App;
