import React from 'react';

import './serviceCards.scss';

const ServiceCard=(props)=>{
	return(
		<div className='service-container'>
			<div className='service-card'>
				<div className='imgBox'>
					<img alt='logo' src={props.imagelink} />
					<h3>{props.title}</h3>
				</div>
				<div className='service-content'>
					<p>{props.summary}</p>
					<a href="/#">Read More</a>
				</div>
			</div>
		</div>
	);
}
export default ServiceCard;