import React,{useState} from 'react'

export default function Navbar(props) {

  const [btntext,setbtnText] = useState('Enable Dark Mode')
  const [navColor,setnavColor] = useState('bg-body-tertiary')

  const buttonText =()=>{
    props.togglebtn()
    navcolor()
    if (btntext==='Enable Dark Mode') {
      setbtnText('Enable Light Mode')
      
    }
    else{
      setbtnText('Enable Dark Mode')
      
    }
  }

  const navcolor=()=>{
    if (navColor==='bg-body-tertiary') {
      setnavColor('bg-dark border-bottom border-body')
    }
    else{
      setnavColor('bg-body-tertiary')
    }
  }
  return (

    <>
    <nav className={`navbar ${navColor}`}>
  <div className="container-fluid">
    <a className="navbar-brand" style={props.mode!=='light'? {color:'white'}:{color:'black'}}><h2>Text Editor</h2></a>
    <div className="form-check form-switch">
  <input className="form-check-input" onClick={buttonText} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" style={props.mode!=='light'? {color:'white'}:{color:'black'}} htmlFor="flexSwitchCheckDefault">{btntext}</label>
</div>
  </div>
</nav>
    </>
  )
}

// Navbar.propTypes = {
//     name1: PropTypes.string,
//     name2: PropTypes.string,
//     name3: PropTypes.string,
// }

// Navbar.defaultProps ={
//     name1: 'set navbar',
//     name2: 'set name2',
//     name3: 'set name3',
// };