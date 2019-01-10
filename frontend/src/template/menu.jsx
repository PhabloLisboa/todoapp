import React from 'react'
import Routes from '../main/routes'
import {Router, Link} from 'react-router-dom';


export default props=>(
	<nav className=" navbar navbar-expand-lg navbar-dark bg-dark">
		<div className="container">
			<div className="navbar-header">
				<a className="navbar-brand" href="#">
					<i className="fa fa-calendar-check-o"></i>ToDo App
				</a>				
			</div>
			<div id="navbar" className="navbar-collapse">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item"><a className="nav-link" href="#/todos">Tarefas</a></li>
					<li className="nav-item"><a className="nav-link" href="#/about">Sobre</a></li>					
				</ul>	
			</div>
		</div>	
	</nav>
)