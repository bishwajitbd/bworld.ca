import React from 'react';
import FromInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';
import {auth, createUserProfileDocument} from '../../firebase/firebase.util';
import './signup.scss';

class SignUp extends React.Component{
	constructor(){
		super();

		this.state={
			displayName:'',
			email:'',
			password:'',
			confirmPassward:''
		}
	}

	handleSubmit= async event=>{
		event.preventDefault();
		const {displayName, email, password, confirmPassward}=this.state;
		if(password!== confirmPassward)
		{
			alert("Password don't match");
			return;
		}
		try{
			const {user}= await auth.createUserWithEmailAndPassword(email, password);
			createUserProfileDocument(user, {displayName});
			this.setState({
				displayName:'',
				email:'',
				password:'',
				confirmPassward:''	
			})
		}catch(error){
			console.error(error);
		}
	}

	handleChange=event=>{
		const {name, value}= event.target;
		this.setState({[name]:value});
	}

	render(){
		const {displayName, email, password, confirmPassward}=this.state;
		return(
			<div className='signup'>
				<h5 className='title'>I do not have an account</h5>
				<span>Sign up with your email and password</span>
				<form className='signup-form' onSubmit={this.handleSubmit}>
					<FromInput
						type='text'
						name='displayName'
						value={displayName}
						onChange={this.handleChange}
						label='Display Name'
						required
					/>
					<FromInput
						type='email'
						name='email'
						value={email}
						onChange={this.handleChange}
						label='Email'
						required
					/>
					<FromInput
						type='password'
						name='password'
						value={password}
						onChange={this.handleChange}
						label='Password'
						required
					/>
					<FromInput
						type='password'
						name='confirmPassward'
						value={confirmPassward}
						onChange={this.handleChange}
						label='Confirm Passward'
						required
					/>
					<CustomButton type='submit'>SIGN UP</CustomButton>
				</form>
			</div>
		)
	}
}
export default SignUp;