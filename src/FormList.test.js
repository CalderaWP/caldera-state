import renderer from "react-test-renderer";
import {Form} from "./Form";
import {FormList} from "./FormList";
import React from 'react';
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