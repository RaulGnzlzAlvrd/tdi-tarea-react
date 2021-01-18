import { Component } from "react";

class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			priority: 'low',
			responsable: '',
			description: ''
		};
	}

	clearForm() {
		this.setState({
			title: '',
			priority: 'low',
			responsable: '',
			description: ''
		});
	}

	saveTodo() {
		this.props.saveTodo(this.state);
		this.clearForm();
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col mt-5">
						<div className="card">
							<div className="card-header">
								<h3 className="card-title text-dark">Agregar tarea:</h3>
							</div>
							<div className="card-body">
								<form>
									<div className="form-group">
										<label htmlFor="title" className="text-dark">Título</label>
										<input type="text" className="form-control" id="title" placeholder="Tarea por hacer" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}/>
									</div>
									<div className="form-group">
										<label htmlFor="responsable" className="text-dark">Responsable</label>
										<input type="text" className="form-control" id="responsable" placeholder="¿Quién debe hacer la tarea?" value={this.state.responsable} onChange={(e) => this.setState({responsable: e.target.value})}/>
									</div>
									<div className="form-group">
										<label htmlFor="description" className="text-dark">Descripción</label>
										<input type="text" className="form-control" id="description" placeholder="Detalles de la tarea" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})}/>
									</div>
									<div className="form-group">
										<label htmlFor="priority">Prioridad</label>
										<select className="form-control" id="priority" value={this.state.priority} onChange={(e) => this.setState({priority: e.target.value})}>
											<option value="low">Low</option>
											<option value="medium">Medium</option>
											<option value="high">High</option>
										</select>
									</div>
									<button type="button" className="btn btn-success" onClick={() => this.saveTodo()}>Guardar</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TodoForm;
