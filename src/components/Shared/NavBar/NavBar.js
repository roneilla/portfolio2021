import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';
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
		var bgColor, navHeight;

		const fadeAnimation = keyframes`${fadeInDown}`;

		const FadeDiv = styled.div`
			animation: 3s ${fadeAnimation};
		`;

		const FadeNavItem = styled.div`
			animation: 1s ${fadeAnimation};
			transition-delay: 2s;
		`;

		if (this.state.isToggleOn) {
			bgColor = '#DAC9F8';
			navHeight = '400px';
		} else {
			bgColor = '#f6f6f6';
			navHeight = '4rem';
		}

		return (
			<div>
				<nav style={{ backgroundColor: bgColor, height: navHeight }}>
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
						<FadeDiv>
							<div id="mobile-nav" className="container">
								<FadeNavItem>
									<Link to="/">Work</Link>
								</FadeNavItem>
								<FadeNavItem>
									<Link to="/lab">Lab</Link>
								</FadeNavItem>
								<FadeNavItem>
									<Link to="/about">About</Link>
								</FadeNavItem>
								<FadeNavItem>
									<a href="mailto:roneillabumanlag@gmail.com">Say Hello</a>
								</FadeNavItem>
							</div>
						</FadeDiv>
					) : null}
				</nav>
			</div>
		);
	}
}

export default NavBar;
