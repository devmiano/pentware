import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const TOKEN = 'Token 557d835e6402604a1f8d28058f12a892e3b81e56';

interface DispCategory {
  slug: string;
	id: string;
	name: string;
	location: string;
	about: string;
	photo: string;
}

export const categoryApiSlice = createApi({
	reducerPath: 'category',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api/shop/',
		prepareHeaders(headers) {
			headers.set('Authorization', TOKEN);
			return headers;
		},
	}),
	endpoints(builder) {
		return {
			fetchCategories: builder.query<DispCategory[], number | void>({
				query() {
					return `categories/`;
				},
			}),
		};
	},
});

export const { useFetchCategoriesQuery } = categoryApiSlice;
