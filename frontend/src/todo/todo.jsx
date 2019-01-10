import React, {Component} from 'react'
import axios from 'axios'

import Header from '../template/pageHeader'
import Form from './toDoForm'
import List from './toDoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component{
	constructor(props){
		super(props)
		this.state = {description: '', list: []}
		this.handleAdd = this.handleAdd.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleRemove = this.handleRemove.bind(this)
		this.handlemarkAsDone = this.handlemarkAsDone.bind(this)
		this.handlemarkAsPending = this.handlemarkAsPending.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
		this.handleClear = this.handleClear.bind(this)
		this.refresh()
	}

	refresh(description = ''){
		const search = description ? `&description__regex=/${description}/` : ''
		axios.get(`${URL}?sort=-createdAt${search}`).then(resp => this.setState({...this.state, description, list: resp.data}))
	}

	handleChange(e){
		this.setState({...this.state, description: e.target.value})

	}

	handleAdd(){
		const description = this.state.description
		axios.post(URL, {description}).then(resp => this.refresh())
	}

	handleRemove(todo){
		axios.delete(`${URL}/${todo._id}`).then( resp => this.refresh(this.state.description))
	}

	handlemarkAsDone(todo){
		axios.put(`${URL}/${todo._id}`, {...todo, done:true}).then( resp => this.refresh(this.state.description))
	}

	handlemarkAsPending(todo){
		axios.put(`${URL}/${todo._id}`, {...todo, done:false}).then( resp => this.refresh(this.state.description))
	}

	handleSearch(){
		this.refresh(this.state.description)
	}

	handleClear(){
		this.refresh();
	}

	render(){
		return(
			<div>
				<Header name="Tarefas |" small="Cadastro" />
				<Form handleAdd={this.handleAdd} handleChange={this.handleChange} handleSearch={this.handleSearch}
					handleClear={this.handleClear}/>
				<List list={this.state.list} 
					handleRemove={this.handleRemove} 
					handlemarkAsDone={this.handlemarkAsDone} 
					handlemarkAsPending={this.handlemarkAsPending} />
			</div>
			)
	}
}