import { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import { todos } from './todos.json'

class App extends Component {
  constructor(){
    super();
    this.state={
      title:'Tablero tareas',
      ntareas: 5,
      todos
    }
  }

  removeTodo(index){
    console.log(index);
    if(window.confirm('Are you sure you want to delete it?')){
      this.setState({
        todos: this.state.todos.filter((todo,i) => {
          return i !== index
        })
      })
    }
  }

  render(){

      console.log(this.state.todos);

    const todos = this.state.todos.map((todo,i) =>{
      return(
      <div className="col-md-4" key={i}>
        <div className="card mt-4">
          <div className="card-header">
            <h3 className="text-dark">{todo.title}</h3>
            <span className="text-danger badge badge-danger ml-2">
              {todo.priority}
            </span>
          </div>
          <div className="card-body">
            <p className="text-dark">{todo.description}</p>
            <p><mark>{todo.responsable}</mark></p>
          </div>
          <div className="card-footer">
            <button className="btn btn-danger" onClick={this.removeTodo.bind(this,i)}>Delete</button>
          </div>
        </div>
      </div>
    )
    });

    return (
      <div className="App">
        <header className="App-header">
          <Navigation title={this.state.title} ntareas={todos.length}/>

          <div className ="container">
  		      <div className = "row mt-4">
  			       {todos}
  		      </div>
  	      </div>

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
