import React from 'react';
import './contactus.scss';
import FromInput from './form-input';
import FormTextarea from './form-textarea';
import CustomButton from '../../components/custom-button/custom-button';

class Contactus extends React.Component{
	constructor(props){
		super(props);

		this.state={
			fullname:'',
			email:'',
			message:'',
			status:''
		}
	}

	handleSubmit=event=>{
		this.setState({status:'Email sent.'});
		//Data conneciton
	    fetch('/send', {
	    	method:'POST',
	    	headers: {'content-Type':'application/json'},
	    	body: JSON.stringify({
	    		fullname: this.state.fullname,
	    		email: this.state.email,
	    		message: this.state.message
	    	})
	    })
	    .then(response=>response.json())
	    .then(data=>{
	    	if(data==='Success'){
	    		console.log('success');
	    		//this.setState({status:'Success'});
	    	} else {
	    		console.log('Error');
	    	}
	    })

	    console.log(this.state);

		event.preventDefault();
		this.setState({fullname:'', email:'', message:''})
	}
	handleChange=event=>{
		const {value, name}=event.target;
		this.setState({[name]:value})
	}
	render(){
		return(
			<div className='contactus'>
				<h5><b>Contact Us</b></h5>
				<form onSubmit={this.handleSubmit}>
					<FromInput 
						name='fullname' 
						type='text' 
						value={this.state.fullname} 
						handleChange={this.handleChange}
						label='Full Name'
						required/>
					<FromInput 
						name='email' 
						type='email' 
						value={this.state.email} 
						handleChange={this.handleChange}
						label='Email'
						required/>
					<FormTextarea 
						name='message'  
						rows='4'
						value={this.state.message} 
						handleChange={this.handleChange}
						label='Message'
						required />
					<CustomButton type='submit'>Send</CustomButton>
				</form>
				<br />{this.state.status}
			</div>
		)
	}
}
export default Contactus;