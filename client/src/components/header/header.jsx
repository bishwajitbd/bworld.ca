import React from 'react';
import { Navigation } from 'react-mdl';
//import {auth} from '../../firebase/firebase.util';
import './header.scss';

const WebHeader=({currentUser})=>
<div>
    <Navigation className="navbar">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        {
        	currentUser ?
        	<a href="/clientarea">{currentUser.displayName.toUpperCase()}</a>
        	:
         	<a href="/customer">CLIENT AREA</a>
        }
        <a href="/tutorials">Tutorials</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
    </Navigation>

</div>


export default WebHeader;

