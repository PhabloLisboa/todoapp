import React from 'react'
import Button from '../template/iconButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { markedAsDone, markedAsPending, remove } from './toDoActions'


const toDoList = props => {

	const renderRows = ()=>{
		const list = props.list || []
		return list.map(todo => (
			<tr key={todo._id}>
				<td className={todo.done ? 'markedAsDone':''}>{todo.description}</td>
				<td className="d-flex justify-content-end">
				<Button style="success" icon="check" hide={todo.done} onClick={() => props.markedAsDone(todo)}/>
				<Button style="warning" icon="undo" hide={!todo.done} onClick={() => props.markedAsPending(todo)}/>
				<Button style="danger" icon="trash-o" hide={!todo.done} onClick={() => props.remove(todo)}/></td>
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

const mapStateToProps = state => ({list:state.todo.list})
const mapDispatchToProps = dispatch => 
	bindActionCreators({ markedAsDone, markedAsPending, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(toDoList)