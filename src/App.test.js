import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import {calderaFormsReduxStore} from './state';


describe( 'example',  ()=> {
	it('App renders with state without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Provider store={calderaFormsReduxStore}>
				<App />
			</Provider>, div );
	});
});

