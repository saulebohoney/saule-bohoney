import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Navigation from './Navigation';
import * as serviceWorker from './serviceWorker';
import Header from './Header';
import Main from './Main';
import Skills from './Skills';

class App extends Component{
  render(){
    return(
      <div>
            <Navigation/>
            <Header title="Hi, I am Saule Bokhoni." button="Check Out My Resume"/>
            <Main/>
            <Skills/>
      </div>
    );
  }
}
ReactDOM.render(<App/>,document.getElementById('root'));
serviceWorker.unregister();
