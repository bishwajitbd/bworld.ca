import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Contact from './components/contact/contact';
import Projects from './components/projectCard/projects';
import Tutorials from './components/tutorials';
import Services from './components/Services/services';
import ClientLogin from './components/signInSignOut/singInSingOut';
import Landingpage from './components/landingpage/landingpage';
import Help from './components/help';
import Privacy from './components/privacy';
import Clientarea from './components/clientarea/clientarea';

const Main=()=>(
	<Switch>
		<Route exact path="/" component={Landingpage} />
		<Route path="/contact" component={Contact} />
		<Route path="/projects" component={Projects} />
		<Route path="/services" component={Services} />
		<Route path="/tutorials" component={Tutorials} />
		<Route path="/customer" component={ClientLogin} />
		<Route path="/help" component={Help} />
		<Route path="/privacy" component={Privacy} />
		<Route path="/about" component={Contact} />
		<Route path="/faq" component={Contact} />
		<Route path="/clientarea" component={Clientarea} />
	</Switch>
)

export default Main;