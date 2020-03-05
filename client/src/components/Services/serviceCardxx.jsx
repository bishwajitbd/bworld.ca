import React from 'react';

//import './services.css';

const ServiceCard=(props)=>{
	return(
		<div className='container'>
				<div className='card'>
				<img alt='logo' src={props.imagelink} height="50%" width="100%"/>
				<p><b>{props.title}</b></p>
				<p>{props.summary}</p>
				</div>
		</div>
	);
}
export default ServiceCard;