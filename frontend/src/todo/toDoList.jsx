import React from 'react'
import Button from '../template/iconButton'

export default props => {

	const renderRows = ()=>{
		const list = props.list || []
		return list.map(todo => (
			<tr key={todo._id}>
				<td className={todo.done ? 'markedAsDone':''}>{todo.description}</td>
				<td className="d-flex justify-content-end">
				<Button style="success" icon="check" hide={todo.done} onClick={() => props.handlemarkAsDone(todo)}/>
				<Button style="warning" icon="undo" hide={!todo.done} onClick={() => props.handlemarkAsPending(todo)}/>
				<Button style="danger" icon="trash-o" hide={!todo.done} onClick={() => props.handleRemove(todo)}/></td>
			</tr>
		))
	}

	return(
		<table className="table">
			<thead>
				<tr>
					<th>Description</th>
					<th className="d-flex justify-content-end">Ações</th>
				</tr>
			</thead>
			<tbody>
				{renderRows()}
			</tbody>
		</table>
		)
}