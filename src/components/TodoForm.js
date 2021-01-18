import { Component } from "react";

class TodoForm extends Component {
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
										<label for="title" className="text-dark">Título</label>
										<input type="text" className="form-control" id="title" placeholder="Tarea por hacer"/>
									</div>
									<div className="form-group">
										<label for="responsable" className="text-dark">Responsable</label>
										<input type="text" className="form-control" id="responsable" placeholder="¿Quién debe hacer la tarea?"/>
									</div>
									<div className="form-group">
										<label for="description" className="text-dark">Descripción</label>
										<input type="text-area" className="form-control" id="description" placeholder="Detalles de la tarea"/>
									</div>
									<div class="form-group">
										<label for="priority">Prioridad</label>
										<select class="form-control" id="priority">
											<option value="low">Low</option>
											<option value="medium">Medium</option>
											<option value="high">High</option>
										</select>
									</div>
									<button type="submit" class="btn btn-success">Guardar</button>
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
