import React from 'react';
import Contactus from '../../components/contactus/contactus';
import './landingpage.scss';
import Services from '../../components/Services/services';

const Landingpage=()=>{
	return (
		<div>
			<div className="split up">
			  <div className="left">
				<Contactus />
			  </div>
			  <div className="left">
				
			  </div>
			</div>
			<div className="split down">
			  <div className="left">
			  	<Services />
			  </div>
			</div>
		</div>
	)}
export default Landingpage;