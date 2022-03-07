import { useRecoilState, useRecoilValue } from "recoil";
import { counterState } from "./counterState";
import { incrementByState } from "./incrementByState";
import { numberOfClickSelector } from "./numberOfClickSelector";

export const CounterButton = () => {
	const numberOfClick = useRecoilValue(numberOfClickSelector);
	const [clickData, setClickData] = useRecoilState(counterState);
	const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

	return (
		<>
			<p>You have click the button {numberOfClick} times.</p>
			<label>
				Increment By
				<input
					value={incrementBy}
					onChange={(e) => setIncrementBy(Number(e.target.value))}
					type='number'
				/>
			</label>
			<button
				onClick={() =>
					setClickData([
						...clickData,
						{ timestamp: Date.now(), amount: incrementBy },
					])
				}
			>
				Clicks
			</button>
		</>
	);
};
