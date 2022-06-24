import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../services/counter';
import { categoryApiSlice } from '../services/category';
import { productApiSlice } from '../services/product';
import { productDetailApiSlice } from '../services/product_detail';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		[categoryApiSlice.reducerPath]: categoryApiSlice.reducer,
		[productApiSlice.reducerPath]: productApiSlice.reducer,
		[productDetailApiSlice.reducerPath]: productDetailApiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			categoryApiSlice.middleware,
			productApiSlice.middleware,
			productDetailApiSlice.middleware
		),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
