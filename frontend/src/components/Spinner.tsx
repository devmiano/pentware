import * as React from 'react';
import { SpinnerCircular } from 'spinners-react';

function Spinner() {
	return (
		<div className='flex items-center justify-center h-screen w-screen'>
			<SpinnerCircular
				size={144}
				thickness={91}
				speed={84}
				color='rgba(2, 195, 189, 1)'
				secondaryColor='rgba(23, 37, 59, 1)'
			/>
		</div>
	);
}

export default Spinner;
