import React from 'react';
import { Navigation } from 'react-mdl';
import './header.scss';

const WebHeader=()=>
<div>
    <Navigation className="navbar">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/customer">Client area</a>
        <a href="/tutorials">Tutorials</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
    </Navigation>
</div>


export default WebHeader;