import React from 'react';
import logo from './logo.svg';
import './App.css';
import faker from 'faker';
const Cowsay = require('cowsay');

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Generate Cowsay Ipsum</h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      content: Cowsay.say({
        text: faker.random.words() 
      }),
    }
    this.updateCowsay = this.updateCowsay.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateCowsay() {
    this.updateState(Cowsay.say({
      text: faker.random.words()
      })
    );
  }

  updateState(content) {
    this.setState({content});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <div className="content">
            <div className="cowsaycontent">
              <pre>{this.state.content}</pre>
            </div>
            <div className="center">
              <button onClick={this.updateCowsay} className='cowsay'>
                Change Me!
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
