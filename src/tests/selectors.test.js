import {
	getForm,
	getForms,
	getFormPreview,
	getFormPreviews,
} from '../state/selectors';

import {mapArrayOfFormsToObject} from '../state/util';

import {
	getFormPrivacySettings
} from '../state/selectors.privacy';

import {
	getCfProFormSetting,
	getCfProSettings
} from "../state/selectors.proLocalSettings";

import {
	getStyleIncludes,
	getOtherSettings
} from "../state/selectors.settings";
import {entriesReducer} from "../state/reducers";
import {getPageOfEntries} from "../state/selectors.entries";

describe( 'settings selectors', () => {
	const mockState = {
		styleIncludes:{
			form:false
		},
		other: {
			cdnEnabled:true
		}
	};

	it( 'selects styleIncludes settings', () => {
		expect(getStyleIncludes(mockState)).toEqual(mockState.styleIncludes);
	});

	it( 'selects styleIncludes defaults', () => {
		expect(getStyleIncludes({})).toEqual({});
	});

	it( 'selects other settings', () => {
		expect(getOtherSettings(mockState)).toEqual(mockState.other);
	});

	it( 'selects other settings defaults', () => {
		expect(getOtherSettings({})).toEqual({});
	});

});
describe( 'CF Pro local settings selectors', () => {
	const mockState = {
		settings:{
			connected: false,
		},
		forms: [
			{
				ID: 'CF1'
			}
		]
	};

	it( 'selects settings', () => {
		expect(getCfProSettings(mockState)).toEqual(mockState.settings);
	});

	it( 'selects a form by ID', () => {
		expect(getCfProFormSetting('CF1',mockState)).toEqual(mockState.forms[0]);
	});
});
describe('Form selectors', () => {
	const formOne = {
		ID: 'CF1',
		name: 'Form One'
	};
	const formTwo = {
		ID: 'CF2',
		name: 'Form Two'
	};

	const formThree = {
		ID: 'CF3',
		name: 'Form Three'
	};

	const preview = '<p>HTML</p>';
	const state = {
		forms: [
			formOne,
			formTwo,
			formThree
		],
		formPreviews: {
			CF2: preview
		}
	};

	describe('getForm selector', () => {
		it('Finds a valid form ', () => {
			expect(getForm(state, 'CF1')).toBe(formOne);
			expect(getForm(state, 'CF2')).toBe(formTwo);
		});

		it('Returns false for invalid form ', () => {
			expect(getForms(state.forms, 'CFa')).toBeFalsy();
		});
	});

	describe('getForms selector', () => {
		it('Finds the forms ', () => {
			expect(getForms(state)).toEqual(mapArrayOfFormsToObject(state.forms));
		});
	});


	describe('getFormPreview selector', () => {
		it('Finds a valid preview ', () => {
			expect(getFormPreview(state, 'CF2')).toBe(preview);
		});

		it('Returns false for invalid preview ', () => {
			expect(getFormPreview(state, 'CF1')).toBeFalsy();
		});
	});

	describe('getFormPreviews selector', () => {
		it('Finds all previews ', () => {
			expect(getFormPreviews(state)).toBe(state.formPreviews);
		});
	});
});

describe('Privacy settings selectors', () => {
	const formOne = {
		ID: 'CF1'
	};
	const formTwo = {
		ID: 'CF2'
	};

	const formThree = {
		formId: 'CF3'
	};
	const forms = [ formOne, formTwo, formThree];
	const state = {
		forms: forms
	};
	it('Finds a valid form', () => {
		expect(getFormPrivacySettings( 'CF1', state ) ).toBe(formOne);
		expect(getFormPrivacySettings( 'CF3', state ) ).toBe(formThree);
	});
	it('Returns false for invalid form', () => {
		expect(getFormPrivacySettings( 'CF7', state ) ).toBe(false);
	});
});

describe( 'entries selector', () => {
	it( 'finds entries', () => {
		expect( getPageOfEntries(
			'CF1',
			2,
			{
				CF1 :{
					2: {
						a:1
					}
				}
			}

		) ).toEqual( {a:1})
	});

	it( 'Returns empty array for invalid page', () => {
		expect(  getPageOfEntries(
			'CF1',
			2,
			{
				CF1 :{
					1: {
						a:1
					}
				}
			}

		) ).toEqual([]);
	})
});


