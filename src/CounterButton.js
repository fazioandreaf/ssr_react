import { useRecoilState } from "recoil";
import { incrementByState } from "./incrementByState";
import { useDispatch } from "react-redux";
import { counterButtonClicked } from "./action";

export const CounterButton = () => {
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
