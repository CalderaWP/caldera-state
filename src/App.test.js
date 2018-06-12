import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import {calderaFormsReduxStore} from './state';
import {Form} from './Form';
import {FormList} from './FormList';

describe( 'example',  ()=> {
	it('App renders with state without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Provider store={calderaFormsReduxStore}>
				<App />
			</Provider>, div );
	});
	const formOne = {
		ID: 'cf1',
		name: 'Form One'
	};

	describe( 'Example component', () => {
		it( 'Shows a form', () => {
			const formSingle = renderer.create(
				<Form
					form={formOne}
					onFormUpdate={()=> {}}
				/>
			);
			expect( formSingle.toJSON() ).toMatchSnapshot();
		});

		it( 'Lists forms', () => {
			const formList = renderer.create(
				<FormList
					forms={[formOne]}
					onFormUpdate={()=> {}}
				/>
			);
			expect( formList.toJSON() ).toMatchSnapshot();
		});

	});
});

