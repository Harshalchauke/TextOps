import React from 'react'

export default function NavBar(props) {

  let myStyle = {
    color: 'White',
    backgroundColor: 'Black'
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
            <div className = {`custom-control custom-switch text-${props.mode=='light'?'dark':'light'}`}>
              <input type="checkbox" className="custom-control-input" onClick={props.toggleMode} id="customSwitch1"/>
                <label className="custom-control-label" htmlFor="customSwitch1">Dark Mode</label>
            </div>
            {/* <button className="btn btn-primary" onClick={myStyle} > Dark Mode</button> */}
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>

        </div>
      </nav>
    </div>
  )
}
