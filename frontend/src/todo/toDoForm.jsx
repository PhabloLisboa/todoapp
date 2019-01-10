import React from 'react'
import Grid from '../template/grid'
import Button from '../template/iconButton'

export default props => {
	
	const keyHandler = (e) => {
		if(e.key === 'Enter'){
			e.shiftKey ? props.handleSearch() : props.handleAdd()
		}else if(e.key === 'Escape'){
			props.handleClear()
		}
	}

	return(
		<div role="form"  className="toDoForm row">
		<Grid cols="12 9 10">
			<input id="description" className="form-control" 
			placeholder="Adcione uma tarefa" onChange={props.handleChange} onKeyUp={keyHandler}></input>			
		</Grid>

		<div className="col-12 col-sm-3 col-md-2 d-flex justify-content-end">
			<Button style="primary" onClick={props.handleAdd} icon="plus" />
			<Button style="info" onClick={props.handleSearch} icon="search" />
			<Button style="danger" onClick={props.handleClear} icon="close" />
		</div>
	</div>
	) 
}