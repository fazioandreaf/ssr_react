import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
	Link,
	lazy,
	Suspance,
} from "react-router-dom";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Articles = lazy(() => import("./Articles"));

const App = () => {
	return (
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
			<Suspance fallback={<p>Loading Components...</p>}>
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/articles'>
						<Articles />
					</Route>
				</Switch>
			</Suspance>
		</BrowserRouter>
	);
};

export default App;
