import React from 'react';
import logo from './logo.svg';
import Album from './Album';
import UserApp from './UserApp';
import HelloWorldArrowFunc from './HelloWorldArrowFunc';
import HelloWorldFunction from './HelloWorldFunction';
import MyTable from './MyTable';
import NameForm from './NameForm';
import Welcome from './Welcome';
import './App.css';
import BasicForm from './BasicForm';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        { console.log("ENV VAR " + process.env.NODE_ENV) }
        <Welcome name="PEPE"></Welcome>
        <HelloWorldFunction></HelloWorldFunction>
        <HelloWorldArrowFunc></HelloWorldArrowFunc>
        <Album></Album>
        <NameForm></NameForm>
        <UserApp></UserApp>
        <MyTable></MyTable>
        <ContactForm></ContactForm>
      </header>
    </div>
  );
}

export default App;
