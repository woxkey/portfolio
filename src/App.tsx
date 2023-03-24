import React from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import HomePage from './components/HomePage/HomePage';
import Projects from './components/Projects/Projects';
import Sidenav from './components/Sidenav/Sidenav';

const App: React.FunctionComponent = (): React.ReactElement => {
	return (
		<div>
			<Sidenav />
			<HomePage />
			<AboutMe />
			<Projects />
			<Contact />
		</div>
	);
};

export default App;
