import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Anime, { anime } from 'react-anime';

import './navBar.css';

import Logo from '../../../assets/icons/logo.svg';
import Menu from '../../../assets/icons/menu.svg';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: false, enter: true };
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		this.setState((prevState) => ({
			isToggleOn: !prevState.isToggleOn,
			enter: !prevState.enter,
		}));
		console.log('enter' + this.state.enter);
		console.log('toggle' + this.state.isToggleOn);
	}

	render() {
		var bgColor;

		if (this.state.isToggleOn) {
			bgColor = '#DAC9F8';
		} else {
			bgColor = '#f6f6f6';
		}

		// let navAnime = {
		// 	duration: 400,
		// 	height: [0, '50vh'],
		// 	scaleY: [0, 1],
		// 	easing: 'easeInQuad',
		// 	translateY: [50, 0],
		// 	opacity: [0, 1],
		// };

		let navItemAnime = {
			duration: 500,
			delay: anime.stagger(100),
			height: [0, '5vh'],
			easing: 'easeInQuad',
			translateY: [50, 0],
			opacity: [0, 1],
		};

		return (
			<div>
				<nav style={{ backgroundColor: bgColor }}>
					<div className="nav container">
						<Link to="/">
							<img src={Logo} />
						</Link>
						<ul>
							<Link to="/">Work</Link>
							<Link to="/contact">Lab</Link>
							<Link to="/about">About</Link>
							<Link to="/contsaact">Say Hello</Link>
						</ul>

						<button onClick={this.toggleMenu} id="toggle-menu">
							<img src={Menu} alt="" className="menu-icon" />
						</button>
					</div>
					{this.state.isToggleOn ? (
						<div id="mobile-nav" className="container">
							<Anime {...navItemAnime}>
								<Link to="/">Work</Link>
								<Link to="/lab">Lab</Link>
								<Link to="/about">About</Link>
								<a href="mailto:roneillabumanlag@gmail.com">Say Hello</a>
							</Anime>
						</div>
					) : null}
				</nav>
			</div>
		);
	}
}

export default NavBar;
