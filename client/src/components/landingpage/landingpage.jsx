import React from 'react';
import Contactus from '../../components/contactus/contactus';
import './landingpage.scss';
import {feedingData} from '../../Utilities/feedingData';
import ServiceCardList from '../../components/Services/serviceCardList';

const Landingpage=()=>{
	return (
		<div>
			<div className="split left">
			  <div className="centered">
			  <h3>Our services</h3>
			  	<ServiceCardList feedingData={feedingData} />
			  </div>
			</div>
			<div className="split right">
			  <div className="centered">
				<Contactus />
			  </div>
			</div>
		</div>
	)}
export default Landingpage;