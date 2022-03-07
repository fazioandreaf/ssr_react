import { selector } from "recoil";
import { counterState } from "./counterState";

export const numberOfClickSelector = selector({
	key: "numberOfClickSelector",
	get: ({ get }) => {
		const clickData = get(counterState);
		const totalClick = clickData.reduce((sum, click) => {
			return sum + click.amount;
		}, 0);

		return totalClick;
	},
});
