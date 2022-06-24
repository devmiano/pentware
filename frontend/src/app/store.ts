import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../services/counter';
import { categoryApiSlice } from '../services/category';
import { productApiSlice } from '../services/product';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		[categoryApiSlice.reducerPath]: categoryApiSlice.reducer,
		[productApiSlice.reducerPath]: productApiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			categoryApiSlice.middleware,
			productApiSlice.middleware
		),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
