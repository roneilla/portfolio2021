import React, { Component } from 'react';
import './home.css';
import '../../styles/grid.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projectsData from '../../projectsData';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bgColor: 'transparent',
		};
	}

	changeBg = () => {
		if (window.scrollY > 600) {
			this.setState({ bgColor: '#193A67' });
		} else {
			this.setState({ bgColor: '#f6f6f6' });
		}
		if (window.scrollY > 1200) {
			this.setState({ bgColor: '#E5F2FF' });
		}

		console.log(window.scrollY + this.state.bgColor);
	};

	componentDidMount() {
		window.addEventListener('scroll', this.changeBg);
	}

	render() {
		return (
			<div
				className="home-container"
				style={{
					backgroundColor: this.state.bgColor,
				}}>
				<div className="header container align-ctr jus-left grid">
					<div className="grid-12col tab-12col">
						{/* <h1>Hello, I'm Roneilla!</h1>
						<h4>
							I’m an Interaction Designer &amp; Creative Technologist based in
							Toronto currently open to freelance projects.
						</h4>
						<h1>
							I'm an Interaction Designer and Creative Technologist passionate
							about enhancing experiences
						</h1> */}
					</div>
				</div>
				<div className="project-cards-wrapper">
					{projectsData.map((project) => (
						<ProjectCard
							name={project.name}
							key={project.id}
							title={project.title}
							description={project.description}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Home;
