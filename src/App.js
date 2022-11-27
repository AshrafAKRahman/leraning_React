import React, {Component } from 'react';
// import Greet from './components/Greet';
import './App.css';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
import Counter from './components/Counter';

class App extends Component {
  render(){
    return (
      <div className="App">
      <Counter/>
        {/* <Message/> */}
        {/* <Greet name = "Bruce" heroName= "Superman">
          <p>This is Children Props</p>
        </Greet>
        <Greet name = "Francesca" heroName= "Batman">
          <button>ACTION</button>
        </Greet>
        <Greet name = "Fede" heroName= "Cat Woman" />
        <Welcome Greet name = "Bruce" heroName= "Superman"/>
        <Welcome/>
        <Welcome/> */}
        {/* <Hello/> */}
      </div>
    )
  }
}

export default App;
