import React, { Component } from 'react'; 
import './Navigation.css';
class Navigation extends Component{
render(){
  const sections = ['Home','About','Skills','Contact']
  const navLinks = sections.map(section => {
    return(
      <li><a href={'#' + section}>{section}</a></li>
    )
  });
return(
<nav>
   <ul>
     {navLinks}
   </ul>
</nav>

 
);
  }
}
export default Navigation;

