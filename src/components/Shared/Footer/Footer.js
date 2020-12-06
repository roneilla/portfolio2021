import React from 'react';
import './footer.css';

import footerImg from '../../../assets/icons/footer-img.png';

const Footer = () => {
	return (
		<footer>
			<div className="container copyright">
				<img src={footerImg} className="icon-s" />
				Designed and built by Roneilla Bumanlag 2020 © All Rights Reserved
			</div>
		</footer>
	);
};

export default Footer;
