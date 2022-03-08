import React, { lazy, Suspense } from "react";
// I can load this each componet withi lazy and Suspense
// import { One } from './One';
// import { Two } from './Two';
// import { Three } from './Three';

const One = lazy(() => import("./One"));
const Two = lazy(() => import("./Two"));
const Three = lazy(() => import("./Three"));

export const About = () => {
	return (
		<>
			<h1>About</h1>
			<Suspense fallback={<p>Loading Components...</p>}>
				<One />
				<Two />
				<Three />
			</Suspense>
		</>
	);
};

export default About;
