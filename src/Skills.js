import React, { Component } from 'react'; 
import './Skills.css';

class Skills extends Component{
  render(){
  return( 
   <div className="skills-container">
     <h3 className="skills-title">Skills</h3>
     <hr className="between"></hr> 
     <div className="icons-container">
     <img className ="icon" src ={require('./icons/nodejs.png')} alt=''/> 
     <img className ="icon" src ={require('./icons/appian-logo-red.png')} alt=''/> 
     <img className ="icon" src ={require('./icons/angular.png')} alt=''/> 
     <img className ="icon" src ={require('./icons/angularjs.png')} alt=''/> 
     <img className ="icon" src ={require('./icons/aws.png')} alt=''/> 
     <img className ="icon" src ={require('./icons/bootstrap.png')} alt=''/> 
     <img className ="icon" src ={require('./icons/expressjs.png')} alt=''/> 
     <img className ="icon" src ={require('./icons/github-icon.png')} alt=''/>  
     <img className ="icon" src ={require('./icons/html5.png')} alt=''/> 
     <img className ="icon" src ={require('./icons/jquery.png')} alt=''/> 
     <img className ="icon" src ={require('./icons/json.png')} alt=''/> 
     <img className ="icon" src ={require('./icons/mongodb.png')} alt=''/> 
     <img className ="icon" src ={require('./icons/mysql.png')} alt=''/> 
     <img className ="icon" src ={require('./icons/npm.png')} alt=''/>  
     <img className ="icon" src ={require('./icons/postgres.png')} alt=''/> 
     <img className ="icon" src ={require('./icons/terminal.png')} alt=''/> 
     <img className ="icon" src ={require('./icons/vscode.png')} alt=''/> 
     <img className ="icon" src ={require('./icons/css3.png')} alt=''/>  
     <img className ="icon" src ={require('./icons/react.png')} alt=''/> 
     <img className ="icon" src ={require('./icons/redux.png')} alt=''/> 
     <img className ="icon" src ={require('./icons/javascript-logo.png')} alt=''/> 
     <img className ="icon" src ={require('./icons/ajax.png')} alt=''/> 
     <img className ="icon" src ={require('./icons/logo_jazz.png')} alt=''/> 
     <img className ="icon" src ={require('./icons/atlassian_logo-rgb-navy.png')} alt=''/> 

     </div>
     <hr className="between"></hr> 
   </div>
  );
}
}

export default Skills;
