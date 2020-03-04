import Todos from './components/Todos';
import Header from './components/layout/Header';
import React, { Component } from 'react';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'React',
        completed: false
      },
      {
        id: 2,
        title: 'Python',
        completed: true
      },
      {
        id: 3,
        title: 'Django',
        completed: false
      }
    ]
  };

  //Mark Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //Delete todo
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <AddTodo />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
