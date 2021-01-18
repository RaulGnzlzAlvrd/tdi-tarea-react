import { Component } from 'react'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './bootstrap-theme.css';
import Navigation from './components/Navigation';
import Todos from './components/Todos';
import { todos } from './todos.json'
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      title:'Tablero tareas',
      todos
    };
  }

  handleChangeTodos(todos) {
    this.setState({
      todos: todos
    });
  }

  saveTodo = (todo) => {
    this.state.todos.push(todo);
    this.setState({
      todos: this.state.todos
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Navigation title={this.state.title} ntareas={this.state.todos.length} />

          <Todos todos={this.state.todos} onChangeTodos={this.handleChangeTodos.bind(this)} />

          <TodoForm saveTodo={this.saveTodo}/>

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Facultad de Ciencias
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
        </header>
      </div>

    );
  }
}

export default App;
