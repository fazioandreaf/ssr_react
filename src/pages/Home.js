import React from "react";
import { CounterButton } from "../CounterButton";
import { CounterProvider } from "../CounterProvider";

export const Home = () => {
	return (
		<CounterProvider>
			<h1>Home</h1>
			<CounterButton />
		</CounterProvider>
	);
};
