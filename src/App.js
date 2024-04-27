import React,{useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';

function App() {
  const [mode,setMode] = useState('light')
  const togglebtn=()=>{
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#35374B'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>   
      <Navbar togglebtn ={togglebtn} mode={mode}/>
      <div className="container my-5">
      <Textform heading= 'Describe yourself in not more than 150 words'  mode={mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
