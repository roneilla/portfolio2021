import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/grid.css';
import './projectCard.css';

class ProjectCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Link to={this.props.name}>
				<section className="project-card" id={this.props.name}>
					<div className="card container grid">
						<div className="grid-6col">
							<img
								src={'../../../assets/img/' + this.props.name + '-card.png'}
								alt={'The project title is ' + this.props.title}
							/>
						</div>
						<div className="grid-6col">
							<h1>{this.props.title}</h1>
							<p>{this.props.description}</p>
						</div>
					</div>
				</section>
			</Link>
		);
	}
}

export default ProjectCard;
