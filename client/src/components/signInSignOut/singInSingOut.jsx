import React from 'react';
import SignIn from '../signIn/singIn';
import SignUp from '../signup/signup';
import './singInSingOut.scss';

const SignInSignOutPage=()=>(
	<div className='signIn-signup'>
		<SignIn />
		<SignUp />
	</div>
)

export default SignInSignOutPage;