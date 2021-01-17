import { Component } from "react";

class Todo extends Component {
	constructor(props) {
		super(props);
		const todo = props.todo;
		this.state = {
			todo: {
				...todo,
				badge: this.getPriorityClass(todo.priority)
			},
			id: props.id
		};
	}

	getPriorityClass(priority) {
		return {
			"low": "badge-success",
			"medium": "badge-warning",
			"high": "badge-danger" 
		}[priority];
	}

	render() {
		const todo = this.state.todo;

		return(
			<div className="card mt-4">
				<div className="card-header">
					<h3 className="text-dark">{todo.title}</h3>
					<span className={"badge " + todo.badge}>
						{todo.priority}
					</span>
				</div>
				<div className="card-body">
					<p className="text-dark">{todo.description}</p>
					<p><mark>{todo.responsable}</mark></p>
				</div>
				<div className="card-footer">
					<button 
						className="btn btn-danger" 
						onClick={() => this.props.removeTodo(this.state.id)}
					>
						Delete
					</button>
				</div>
			</div>	
		)	
	}
}

export default Todo;
