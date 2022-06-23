import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 10,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		incremented(state: { value: number }) {
			state.value++;
		},
		amountAdded(state: { value: number }, action: PayloadAction<number>) {
			state.value += action.payload;
		},
	},
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
