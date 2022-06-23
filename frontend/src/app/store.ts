import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../services/counter';
import { categoryApiSlice } from '../services/category';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		[categoryApiSlice.reducerPath]: categoryApiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(categoryApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
