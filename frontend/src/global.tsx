import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import './styles/global.scss';
import { Provider } from 'react-redux';
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('app')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
