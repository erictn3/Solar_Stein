import React, { Component } from 'react';
import { MenuItem } from './MenuItems'; 
// import { Button } from '../Buttons/Button';
import './Navbar.css';
import image from './solarstein-logo-final.png'

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return(        
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Solar Stein<img src={image} alt="" className="stein-logo"/></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItem.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                {item.title}
                </a>
              </li>            
            )
          })}
        </ul>
        {/* <Button>Sign Up</Button> */}
      </nav>
    )
  }
}

export default Navbar;