import { useRecoilState, useRecoilValue } from "recoil";
import { incrementByState } from "./incrementByState";
import { useSelector, useDispatch } from "react-redux";
import { getNumberOfClicks } from "./selector";
import { counterButtonClicked } from "./action";

export const CounterButton = () => {
	const numberOfClicks = useSelector(getNumberOfClicks);
	const dispatch = useDispatch();
	const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

	return (
		<>
			<p>You have click the button {} times.</p>
			<label>
				Increment By
				<input
					value={incrementBy}
					onChange={(e) => setIncrementBy(Number(e.target.value))}
					type='number'
				/>
			</label>
			<button onClick={() => dispatch(counterButtonClicked(incrementBy))}>
				Clicks
			</button>
		</>
	);
};
