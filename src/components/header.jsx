import React from 'react';
import logo from '../assets/img/Lenovologo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='text-light pt-2 pb-2' style={{"background": "#000"}}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-sm">
            <Link to="/">
              <img src={logo} alt="Lenovo logo" style={{"width": "10rem"}}/>
            </Link>
          </div>
          <div className="col-sm text-uppercase text-right h3 mb-0">
            <span>Supply Management</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
