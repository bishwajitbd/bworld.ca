import React from 'react';
import FromInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';
import {singInWithGoogle} from '../../firebase/firebase.util';
import './singIn.scss';


class SingIn extends React.Component{
	constructor(props){
		super(props);
		this.state={
			email:'',
			password:''
		}
	}
	handleSubmit=event=>{
		this.setState({email:'', password:''})
	}
	handleChange=event=>{
		const {value, name}=event.target;
	}

	render(){
		return(
			<div className='signIn'>
				<h5><b>Sign In</b></h5>
				<p>I already have an account</p>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FromInput 
						name='email' 
						type='email' 
						value={this.state.email} 
						handleChange={this.handleChange}
						label='Email'
						required/>
					<FromInput 
						name='password'  
						type='password' 
						value={this.state.password} 
						handleChange={this.handleChange}
						label='Password'
						required />
		          <div className='buttons'>
		            <CustomButton type='submit'> Sign in </CustomButton>
		            <CustomButton onClick={singInWithGoogle}>
		              Sign in with Google
		            </CustomButton>
		          </div>
				</form>
				<br />{this.state.status}
			</div>
		)
	}
}

export default SingIn;


