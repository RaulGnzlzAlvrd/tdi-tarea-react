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
					<h3 className="text-dark card-title">
						{todo.title} &nbsp; 
						<span style={{fontSize: 1 + 'rem'}} className={"badge badge-pill " + todo.badge}>
							{todo.priority}
						</span>
					</h3>
				</div>
				<div className="card-body">
					<p className="text-dark card-text">{todo.description}</p>
					<p className="card-text"><mark>{todo.responsable}</mark></p>
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
