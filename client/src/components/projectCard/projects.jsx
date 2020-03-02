import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell} from 'react-mdl';
import {Content} from 'react-mdl';
import {projectListData} from '../../Utilities/projectListData';
import ProjectList from './projectList';

class Projects extends Component{
	constructor(props){
		super(props);
		this.state={activeTab:7};
	}
	toggleCategories(){
		if(this.state.activeTab===7){			        
			return(
				<div>
			        <Content>
			            <ProjectList projectListData={projectListData} activeTab={1} />
			            <ProjectList projectListData={projectListData} activeTab={2} />
			            <ProjectList projectListData={projectListData} activeTab={7} />
			            <ProjectList projectListData={projectListData} activeTab={3} />
			            <ProjectList projectListData={projectListData} activeTab={5} />
			            <ProjectList projectListData={projectListData} activeTab={4} />
			            <ProjectList projectListData={projectListData} activeTab={6} />
			        </Content>
				</div>
			)
		} else{
			return(
			<div>
		        <Content>
		            <ProjectList projectListData={projectListData} activeTab={this.state.activeTab+1} />
		        </Content>
			</div>
			)
		}
	}
	render(){
		return(
			<div>
				<Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
					<Tab><b>React</b></Tab>
					<Tab><b>ASP.NET</b></Tab>
					<Tab><b>Android</b></Tab>
					<Tab><b>Python</b></Tab>
					<Tab><b>Java</b></Tab>
					<Tab><b>Access</b></Tab>
					<Tab><b>Testing</b></Tab>
					<Tab><b>All</b></Tab>
				</Tabs>
				<section>
				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
				</section>
			</div>
		)
	}
}

export default Projects;