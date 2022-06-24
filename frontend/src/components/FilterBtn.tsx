import * as React from 'react';

interface CardInterface {
	id: string;
	title: string;
}

function FilterBtn(card: CardInterface) {
	return <button key={card.id}>{card.title}</button>;
}

export default FilterBtn;
