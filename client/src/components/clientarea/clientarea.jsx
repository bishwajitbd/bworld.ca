import React from 'react';
import {auth} from '../../firebase/firebase.util';
import './clientarea.scss';
import { Link } from 'react-router-dom';

const signout=()=>{
	//auth.signOut();
}

const Clientarea=()=>
	<div>
	<h1>Client Area </h1>
	<h1>Under Construction </h1>
	<Link to="/" className='option' onClick={()=>auth.signOut()}>SIGN OUT</Link>
	</div>

export default Clientarea;

