import React from 'react';

function Footer (props) {
		console.log(props.footerLinks)
		return (
			<footer className='footer'>
				<ul>
					{props.footerLinks}
				</ul>
			</footer>
		)
}

export default Footer