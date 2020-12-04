import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import github from './github.svg';
import linkedin from './linkedin.svg';
import mail from './mail.svg';

class Page extends React.Component {
render () {
return (
  <div className="head">
    <header className="head">
      <div className="title">
      <h2>Erling Devold</h2>
      </div>
    <div className="about" >
        <p>Third year CS student</p>
    </div>
    <div className="foot">
      <div class="row">
      <div className="column">
        <a href="https://github.com/erlingdevdev">
          <img border="0" alt=" " src={github}></img>


        </a>
      </div>

      <div className="column">
      <a href="https://no.linkedin.com/in/erlingdevold">
          <img border="0" alt=" " src={linkedin}></img>
        </a>
      </div>
      <div className="column">
      <a href="mailto:erling.a.devold@uit.no">
          <img border="0" alt=" " src={mail}></img>


        </a>
      </div>
      </div>
    </div>
    </header>
  </div>
);

}



}




class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Page />
    </div>
  
  );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
  