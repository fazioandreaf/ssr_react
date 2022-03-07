import { useRecoilValue } from "recoil";
import { counterState } from "./counterState";

export const DisplayCount = () => {
	const numberOfClick = useRecoilValue(counterState);

	return (
		<>
			<h2>Number of clicks: {numberOfClick}</h2>
		</>
	);
};
