import { Component } from "react";
import Todo from "./Todo";

class Todos extends Component {
  constructor(props) {
  	super(props);
    this.state = {
			todos: props.todos,
			component: 'Todos'
		};
	}
	
	removeTodo(index){
    if(window.confirm('Are you sure you want to delete it?')){
			const update = this.state.todos.filter((todo, i) => i !== index);
      this.setState({
        todos: update
			});

			this.props.onChangeTodos(update);
		}
	}

	render() {
		const todoList = this.state.todos.map((todo, i) => (
			<div className="col-md-4" key={i}>
				<Todo todo={todo} id={i} removeTodo={this.removeTodo.bind(this)}/>
			</div>
		));

		return (
			<div className="container">
				<div className="row mt-4">
					{todoList}
				</div>
			</div>
		);
	}
}

export default Todos;
