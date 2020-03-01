import Todos from './components/Todos'
import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "React",
        completed: false
      },
      {
        id: 2,
        title: "Python",
        completed: false
      },
      {
        id: 3,
        title: "Django",
        completed: false
      }
    ]
  }

  render() {

    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;