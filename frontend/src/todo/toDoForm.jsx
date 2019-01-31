import React, { Component } from 'react'
import Grid from '../template/grid'
import Button from '../template/iconButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { add, changeDescription, search, clear } from './toDoActions'

class ToDoForm extends Component{
	constructor(props){	
		super(props)
		this.keyHandler = this.keyHandler.bind(this)
	}

	componentWillMount(){
		this.props.search()
	}

	keyHandler(e){
		const { add, search, description } = this.props
		if(e.key === 'Enter'){
			e.shiftKey ? search() : add(description)
		}else if(e.key === 'Escape'){
			this.props.clear()
		}
	}


	render(){
		const { add, search, description } = this.props
		return(
			<div role="form"  className="toDoForm row">
				<Grid cols="12 9 10">
					<input id="description" className="form-control" 
						placeholder="Adcione uma tarefa" 
						onChange={this.props.changeDescription} 
						onKeyUp={this.keyHandler} 
						value={this.props.description}>
					</input>			
				</Grid>

				<div className="col-12 col-sm-3 col-md-2 d-flex justify-content-end">
					<Button style="primary" onClick={() => add(description)} icon="plus" />
					<Button style="info" onClick={search} icon="search" />
					<Button style="danger" onClick={this.props.clear} icon="close" />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => 
	bindActionCreators({ add, changeDescription, search, clear}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm)