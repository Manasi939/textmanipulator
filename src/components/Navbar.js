import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
  return (
    <div className="cont" id="dm">
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand mx-4" href="/home" style={{color:'blueviolet'}}><i><strong>{props.title}</strong></i></a>
  <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link " to="/home"><strong>Home</strong> <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about"><strong>About</strong></Link>
      </li>
      <div className="form-check form-switch" >
  <input  onClick={props.toggle} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
    </ul>
  </div>
</nav>
    </div>
  )
}
