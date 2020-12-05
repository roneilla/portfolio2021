import React from 'react';
import './footer.css';

import FooterImg from '../../../assets/icons/footer-img.png';

const Footer = () => {
	return (
		<footer className="container">
			<div className="copyright">
				<img src={FooterImg} className="icon-s" />
				Designed and built by Roneilla Bumanlag 2020 © All Rights Reserved
			</div>
		</footer>
	);
};

export default Footer;
