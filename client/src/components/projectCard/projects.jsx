import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell} from 'react-mdl';
import {Content} from 'react-mdl';
import ProjectList from './projectList';
import ProjectListAll from './projectListAll';

class Projects extends Component{
	constructor(props){
		super(props);
		this.state={
			activeTab:7,
			projectlist:[]
		};
	}
	componentDidMount(){
		fetch('/projects')
		.then(response=>response.json())
		.then(projects=> this.setState({projectlist:projects}));
	}

	toggleCategories(){
		const projectList=this.state.projectlist;
		if(this.state.activeTab===7){	
			return(
				<div>
			        <Content>
			            <ProjectListAll projectListData={projectList}/>
			        </Content>
				</div>
			)
		} else{
			return(
			<div>
		        <Content>
		            <ProjectList projectListData={projectList} activeTab={this.state.activeTab+1} />
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