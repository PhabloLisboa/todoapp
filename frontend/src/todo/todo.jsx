import React, {Component} from 'react'

import Header from '../template/pageHeader'
import Form from './toDoForm'
import List from './toDoList'

export default props => (
	<div>
		<Header name="Tarefas |" small="Cadastro" />
		<Form/>
		<List/>
	</div>

)
