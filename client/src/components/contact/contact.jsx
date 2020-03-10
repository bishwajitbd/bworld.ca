import React from 'react';
import Image from '../../images/bishwajit.JPG';
import './contact.scss';
import { Link } from 'react-router-dom';
import Logo from '../../components/page/logo';

let linkedinAddress='https://linkedin.com/in/bishwajit-barua-9a2139127';
let githubAddress=`https://github.com/bishwajitbd`;
let emailAddres=`mailto: bishwajitbd@gmail.com`;

const Contact=()=>{
	return (
	<div>
	<div className="profileCard">
	<img src={Image} alt="Bishwajit" width="100%"/>
	  <h4>Bishwajit Barua</h4>
	  <a href={githubAddress} target="_blank" rel="noopener noreferrer"><i className="fa fa-github">&nbsp;</i></a>
	  <a href={linkedinAddress} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin">&nbsp;</i></a>
	  <a href={emailAddres} target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope">&nbsp;</i></a>
	  <p className="title">Full Stack Developer</p>
	  <a href="http://bworld.ca/" target="_blank" rel="noopener noreferrer"><Logo /></a>
	  <hr /><Link to="/" className='linkpage'>CONNECT</Link><br /><br />
	</div><br />
	</div>
	)}

export default Contact;

