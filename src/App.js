import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { Home } from "./pages/Home";
import { Articles } from "./pages/Articles";
import { About } from "./pages/About";

function App() {
	return (
		<>
			<BrowserRouter>
				<h1>Server-Side Rendering Example</h1>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/articles'>Articles</Link>
					</li>
				</ul>
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/about' exact>
						<About />
					</Route>
					<Route path='/articles' exact>
						<Articles />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
