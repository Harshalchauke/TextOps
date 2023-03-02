import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor ='black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
    }
  }
  return (
    <>
     <NavBar title="TextOps" mode={mode} toggleMode={toggleMode}/>
     <div className='container my-3'>
     <TextForm heading="Enter the text to analyze" />
     </div>
    </>

  );
}

export default App;
