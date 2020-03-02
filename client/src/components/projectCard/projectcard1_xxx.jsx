import React from 'react';
import {Card, CardTitle, CardActions, CardText} from 'react-mdl';
//import './projectcard.scss';

const ProjectCard=(props)=>{
	return(
		<div >
			<Card shadow={2} style={{width: '300px', margin: '5px'}}>
			<CardTitle style={{color: '#fff', height: '100px',  
	    	background: `url(${props.imagelink}) center / cover`}}>
	    	</CardTitle>
			<CardText>
					<p><b><u>{props.projectTite}</u></b></p>
					<p>{props.summary}</p>
		    </CardText>

			<CardActions border>
		        <a className='buttonShade' href={props.github} target="_blank" rel="noopener noreferrer" text-left>GitHub</a>
		        <a className='buttonShade' href={props.liveLink} target="_blank" rel="noopener noreferrer" text-right>{props.liveLinkTitle}</a>
		        <a className='buttonShade' href={props.projectdemo} target="_blank" rel="noopener noreferrer" text-right>{props.projectdemoTitle}</a>
		    </CardActions>
			</Card>
		</div>
	);
}
export default ProjectCard;