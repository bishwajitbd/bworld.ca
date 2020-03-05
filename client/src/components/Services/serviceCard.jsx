import React from 'react';

import './serviceCards.scss';

const ServiceCard=(props)=>{
	return(
		<div className='service-container'>
			<div className='service-card'>
				<div className='imgBox'>
					<img alt='logo' src={props.imagelink} />
					<p className='service-title'>{props.title}</p>
				</div>
				<div className='service-content'>
					<p className='service-description'>{props.summary}</p>
					<a href="/#">Read More</a>
				</div>
			</div>
		</div>
	);
}
export default ServiceCard;