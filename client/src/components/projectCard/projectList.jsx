import React from 'react';
import ProjectCard from '../../components/projectCard/projectcard';
import './projectCard1.css';

const ProjectList=({projectListData, activeTab})=>{
	const projectComponent=projectListData.map((project, i) =>{
		if(project.projectId===activeTab){
		return <ProjectCard key={i} 
		id={projectListData[i].id} 
		projectTite={projectListData[i].projectTite} 
		summary={projectListData[i].summary} 
		imagelink={projectListData[i].imagelink} 
		github={projectListData[i].github} 
		liveLink={projectListData[i].liveLink} 
		projectdemo={projectListData[i].projectdemo}
		liveLinkTitle={projectListData[i].liveLinkTitle}
		projectdemoTitle={projectListData[i].projectdemoTitle}
		projectAll={projectListData[i].projectAll}
		tools={projectListData[i].tools}/>
	} else if(project.projectId===8){
		return <ProjectCard key={i} 
		id={projectListData[i].id} 
		projectTite={projectListData[i].projectTite} 
		summary={projectListData[i].summary} 
		imagelink={projectListData[i].imagelink} 
		github={projectListData[i].github} 
		liveLink={projectListData[i].liveLink} 
		projectdemo={projectListData[i].projectdemo}
		liveLinkTitle={projectListData[i].liveLinkTitle}
		projectdemoTitle={projectListData[i].projectdemoTitle}
		projectAll={projectListData[i].projectAll}
		tools={projectListData[i].tools}/>
	}
	else {return false};
	});
	return (
		<div className='card-list'>
	        {projectComponent}
		</div>
	)
}

export default ProjectList;
