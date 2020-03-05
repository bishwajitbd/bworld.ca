import React from 'react';
import './navigationmunu.scss'

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const Navigationmenu=()=>
<div className="topnav" id="myTopnav">
	<a href="/" class="active">Home</a>
	<a href="/services">Services</a>
	<a href="/customer">Client area</a>
	<a href="/tutorials">Tutorials</a>
	<a href="/projects">Projects</a>
	<a href="/contact">Contact</a>
  	<a href="#about">About</a>
  <a href="javascript:void(0);" className="icon" onclick="myFunction()">&#9776;</a>
</div>

export default Navigationmenu;