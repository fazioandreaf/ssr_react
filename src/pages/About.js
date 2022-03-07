import React from "react";
import { Provider } from "react-redux";
import { store } from "./../store";
import { CounterButton } from "./../CounterButton";

export const About = () => {
	return (
		<Provider store={store}>
			<h1>About</h1>
			<CounterButton />
		</Provider>
	);
};
