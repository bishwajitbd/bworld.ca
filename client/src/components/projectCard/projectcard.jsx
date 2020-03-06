import React from 'react';

import './projectCard.scss';

const ProjectCard=(props)=>{
	return(
		<div className='maincontainer'>
			<div className='thecard'>
				<div className='thefront'>
				<img alt='logo' src={props.imagelink} height="50%" width="100%"/>
				<p className='project-title'><b><u>{props.projectTite}</u></b></p>
				<p className='project-summary'>{props.summary}</p>
				</div>
				<div className='theback'>
				<p>Tools used </p><hr />
				<p className='tools-description'>{props.tools}</p><hr />
				<div className='btn_group'>
				<a className='buttonShade' href={props.github} target="_blank" rel="noopener noreferrer" text-left='true'>GitHub</a>
		        <a className='buttonShade' href={props.liveLink} target="_blank" rel="noopener noreferrer" text-right='true'>{props.liveLinkTitle}</a>
		        <a className='buttonShade' href={props.projectdemo} target="_blank" rel="noopener noreferrer" text-right='true'>{props.projectdemoTitle}</a>
				</div>
				</div>
			</div>
		</div>
	);
}
export default ProjectCard;