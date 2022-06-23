import * as React from 'react';

interface CardInterface {
	id: string;
	title: string;
	subtitle: string;
	text: string;
	photo: string;
	link: string;
}

function LongCard(card: CardInterface) {
	return (
		<div
			key={card.id}
			className='max-w-md mx-auto bg-smog-600 rounded-lg shadow-md overflow-hidden md:max-w-2xl m-2 h-36'>
			<div className='md:flex'>
				<div className='md:shrink-0'>
					<img
						className='h-36 w-48 object-cover'
						src={`https://res.cloudinary.com/devmiano/${card.photo}`}
						alt={card.title}
					/>
				</div>
				<div className='p-8'>
					<h3 className='tracking-wide text-2xl text-smog-200 font-medium'>
						{card.title}
					</h3>
					<h2 className='text-smog-300 text-xs uppercase'>{card.subtitle}</h2>
					<p className='mt-2 text-ash-500'>{card.text}</p>
					<a
						href='#'
						className='block mt-3 text-sm leading-tight font-medium text-ash-300 hover:underline uppercase'>
						{card.link}
					</a>
				</div>
			</div>
		</div>
	);
}

export default LongCard;
