import React from "react";
import { RecoilRoot } from "recoil";
import { CounterButton } from "../CounterButton";

export const Home = () => {
	return (
		<RecoilRoot>
			<h1>Home</h1>
			<CounterButton />
		</RecoilRoot>
	);
};
