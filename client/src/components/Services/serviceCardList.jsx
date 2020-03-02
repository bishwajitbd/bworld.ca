import React from 'react';
import ServiceCard from './serviceCard';
import './services.css';

const ServiceCardList=({feedingData})=>{
	const cardComponent=feedingData.map((user, i) =>{
		return <ServiceCard key={i} id={feedingData[i].id} title={feedingData[i].title} summary={feedingData[i].summary} imagelink={feedingData[i].imagelink}/>
	})
	return (
		<div className='card-list2'>
	        {cardComponent}
		</div>
	)
}

export default ServiceCardList;