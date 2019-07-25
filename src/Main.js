import React, { Component } from 'react'; 
import Photo from './images/IMG_5203.jpeg';
import './Main.css';

class Main extends Component{
  render(){
  return( 
   <div className="container">
   <h3 className="aboutMe">About Me</h3> 
   <hr className="between"></hr> 
     <div className="about-container">
    <img className ="about" src = {Photo} alt=''/> 
    <p className= "about"> Solving problems and learning are some of my favorite things to do. That is why I started coding and have not looked back since. I also love sharing my knowledge and helping others so they too can become problem solvers of their own. When I am not coding I am spending time with my family.</p>
     </div>
     <hr className="between"></hr> 
     </div>
  );
}
}

export default Main;
