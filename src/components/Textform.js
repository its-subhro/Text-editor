import React,{useState} from 'react'

export default function Textform(props) {
  const [text,setText] = useState('')
  // const [mystyle,setStyle] = useState({
  //   color: '#35374B',
  //   backgroundColor: 'white',
  // })
  

  const handleUpClick = ()=>{
     
    let newText = text.toUpperCase()
    setText(newText);
  }

  const handleLowClick = ()=>{
     
    let newText = text.toLowerCase()
    setText(newText);
  }

  const toCamelCase = () => {
   
    var words = text.split(' ');

    var camelCase = '';
    for (var i = 0; i < words.length; i++) {
       
        camelCase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
    }

    setText(camelCase);
}

 const clearText = () =>{
  setText(' ')
 }

  const changeHandler =(event)=>{
      setText(event.target.value)
  }

  const handleCopyText = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Text copied to clipboard!');
      })
      .catch((error) => {
        console.error('Error copying text:', error);
      });
  };

  return (
    <>
  <div className="mb-3" style={props.mode!=='light'? {color:'white',
      backgroundColor:'#35374B',}: {color:'#35374B',
      backgroundColor:'white',}}>
    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h3>{props.heading}</h3></label> 
    
    <textarea className="form-control" style={props.mode!=='light'? {color:'white',
      backgroundColor:'#35374B',}: {color:'#35374B',
      backgroundColor:'white',}} id="exampleFormControlTextarea1" rows="10" onChange={changeHandler} value={text}></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
  <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert To Lowercase</button>
  <button className="btn btn-primary" onClick={toCamelCase}>Convert To Camelcase</button>
  <button className="btn btn-primary mx-3" onClick={clearText}>Clear Text</button>
  <button className="btn btn-primary"  onClick={handleCopyText}>Copy Text</button>
  
  <div className="my-3" style={props.mode!=='light'? {color:'white',
      backgroundColor:'#35374B',}: {color:'#35374B',
      backgroundColor:'white',}}>
    <h3>Your text summary here</h3>
    <p>{text.split(' ').length-1} Words and {text.length} Characters</p>
  </div>
  <div className="my-3" style={props.mode!=='light'? {color:'white',
      backgroundColor:'#35374B',}: {color:'#35374B',
      backgroundColor:'white',}}>
    <h3>Preview Of Your Text</h3>
    <p>{text}</p>
  </div>
  </>
  )
}
