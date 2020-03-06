import React from 'react';
import Contactus from '../../components/contactus/contactus';
import './landingpage.scss';
import Services from '../../components/Services/services';

const Landingpage=()=>{
	return (
		<div>
			<div className="split left">
			  <div className="centered">
			  	<Services />
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