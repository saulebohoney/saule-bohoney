import React, { Component } from 'react'; 
import Background from './images/IMG_9630.jpeg';

import './Header.css';
const styles= {
  backgroundImage: `url( ${Background} )`,
  height: '50vh',
  backgroundSize: 'cover'
}
class Header extends Component{
  render(){
  return(

    <header style={styles}>
   
    <h3>{this.props.title} </h3>
         <p>A Web Developer in Washington, DC.</p>
         <a href="#button">{this.props.button}</a>
         </header>
        

  );
}
}

export default Header;

