// avery action can change the state on our app

export const counterButtonClicked = (amount) => ({
	type: "COUNTER_BUTTON_CLICKED",
	payload: { amount },
});
