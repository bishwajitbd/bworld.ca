import React from 'react'
import {Card, CardTitle, CardActions, CardText, Button} from 'react-mdl';
//import './services.css';

const ServiceCard=(props)=>{
return(
<Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto', border: '1px solid blue'}}>
			<CardTitle className='center' style={{color: '#fff', height: '110px', width: '110px', 
	    	background: `url(${props.imagelink}) center / cover`}}>
	    	</CardTitle>
    <CardText style={{width: '100%', height: '40%', margin: 'auto'}}>
		<p><b>{props.title}</b></p>
		<p>{props.summary}</p>
    </CardText>
    <CardActions border >
        <Button colored>Details</Button>
    </CardActions>
</Card>
);
}
export default ServiceCard;

