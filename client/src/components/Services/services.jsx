import React, {Component} from 'react';
import { Content } from 'react-mdl';
import {feedingData} from '../../Utilities/feedingData';
import ServiceCardList from './serviceCardList';
import './services.css';

class Services extends Component{
	render(){
		return(
			<div>
			<h2>Our Services</h2>
			<div>
		        <Content className='content-views'>
		            <ServiceCardList feedingData={feedingData} />
		        </Content>
		    </div>
			</div>
		)
	}
}

export default Services;




