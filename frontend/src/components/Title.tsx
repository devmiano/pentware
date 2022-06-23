import * as React from 'react';

interface TitleInterface {
	title: string;
}

function Title(title: TitleInterface) {
	return (
		<h1 className='tracking-wide text-4xl text-smog-200 font-semibold text-center py-4'>
			{title.title}
		</h1>
	);
}

export default Title;
