import React, {Component} from 'react';
import { Content } from 'react-mdl';
//import {feedingData} from '../../Utilities/feedingData';
import ServiceCardList from './serviceCardList';
import './services.css';


class Services extends Component{
constructor(){
	super();
	this.state={
		servicelist:[]
	}
}

componentDidMount(){
	fetch('/servicesdata')
	.then(response=>response.json())
	.then(services=> this.setState({servicelist:services}));
}

	render(){
		return(
			<div>
			<h2>Our Services</h2>
			<div>
		        <Content className='content-views'>
		            <ServiceCardList feedingData={this.state.servicelist} />
		        </Content>
		    </div>
			</div>
		)
	}
}

export default Services;




