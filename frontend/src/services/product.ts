import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const TOKEN = 'Token 557d835e6402604a1f8d28058f12a892e3b81e56';

interface DispProduct {
	id: string;
	name: string;
	price: string;
	text: string;
	photo: string;
	slug: string;
	category: string;
}

export const productApiSlice = createApi({
	reducerPath: 'product',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api/shop/',
		prepareHeaders(headers) {
			headers.set('Authorization', TOKEN);
			return headers;
		},
	}),
	endpoints(builder) {
		return {
			fetchProducts: builder.query<DispProduct[], number | void>({
				query() {
					return `products/`;
				},
			}),
		};
	},
});

export const { useFetchProductsQuery } = productApiSlice;
