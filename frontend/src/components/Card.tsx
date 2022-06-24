import * as React from 'react';
import { Link } from 'react-router-dom';

interface CardInterface {
	id: string;
	name: string;
	price: string;
	text: string;
	photo: string;
	slug: string;
	category: string;
}

function Card(card: CardInterface) {
	return (
		<div key={card.id} className='p-4 w-1/4'>
			<div className='h-full rounded-md bg-smog-600 overflow-hidden'>
				<img
					className='lg:h-64 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100'
					src={`https://res.cloudinary.com/devmiano/${card.photo}`}
					alt={card.name}
				/>
				<div className='p-6'>
					<h2 className='tracking-widest text-xs title-font font-base text-gray-400 mb-1'>
						KES {card.price}
					</h2>
					<h1 className='title-font text-lg font-medium text-smog-300 mb-3'>
						{card.name}
					</h1>
					<p className='leading-relaxed mb-3'>{card.text}</p>
					<div className='flex items-center flex-wrap '>
						<Link
							to={`/product/${card.slug}`}
							className='bg-smog-400 text-smog-700 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-md'>
							Learn more
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
