import {
	newForm,
	setForm,
	setForms
} from '../state/actions';

import {
	findFormIndexById
} from '../state/util';
import {
	formsReducer,
	initialStateWithForms,
	DEFAULT_STATE,
	privacySettingsReducer,
	statusReducer,
	STATUS_DEFULT_STATE,
	proLocalSettingsReducer,
	settingsReducer,
	entriesReducer
} from '../state/reducers';

import {
	stopSpinner,
	startSpinner,
	closeStatus,
	updateStatus
} from "../state/actions.status";

import {
	setFormPrivacyForm
} from '../state/actions.privacy';


import {
	updateCfProFormSetting,
	updateCfProSettings
} from "../state/actions.proLocalSettings";

import {
	updateStyleIncludes,
	updateOtherSettings
} from "../state/actions.settings";
import {setEntries} from "../state/actions.entries";

describe( 'entriesReducer', () => {
	it( 'does not effect other actions', () => {
		expect( entriesReducer({a:1},{type:'INIT'})).toEqual({a:1});
	});
	it( 'adds a page of entries', () => {
		const state = entriesReducer({}, setEntries(
			'CF1',
			2,
			[
				{
					id: 33,
					fields: {}
				}

			]
		));
		expect(  state['CF1'][2]).toEqual(
			[{"fields": {}, "id": 33}]
		)
	});
	it( 'updates', () => {
		const state = entriesReducer({
			'CF1' : {
				2: []

			}
		}, setEntries(
			'CF1',
			2,
			[
				{
					id: 33,
					fields: {}
				}

			]
		));
		expect(  state['CF1'][2]).toEqual(
			[{"fields": {}, "id": 33}]
		)
	});
});

describe( 'settingsReducer', () => {
	it( 'updates styleIncludes settings', () => {
		expect(settingsReducer({}, updateStyleIncludes(
			{forms: false}
		)).styleIncludes.forms).toEqual(false);
	});

	it( 'updates other settings', () => {
		expect(settingsReducer({}, updateOtherSettings(
			{cdnEnable: false}
		)).other.cdnEnable).toEqual(false);
	});

	it( 'Does nothing to state when other actions are passed', () => {
		const mockState = {
			other:{
				cdnEnable:true
			}
		}
		expect(settingsReducer(mockState, {type: 'hiRoy'})).toEqual(mockState);
	});
});

describe( 'proLocalSettingsReducer', () => {
	const formOne = {
		ID: 'CF1',
		name: 'Form One',
		sendLocal: false
	};
	const formTwo = {
		ID: 'CF2',
		name: 'Form Two',
		sendLocal: false

	};
	const mockState = {
		settings:{
			connected: false,
		},
		forms: [formOne,formTwo]
	}
	it( 'updates settings', () => {
		expect( proLocalSettingsReducer(
			mockState, updateCfProSettings({connected:true})
		).settings.connected).toEqual(true);
	} );

	it( 'updates forms', () => {
		expect( proLocalSettingsReducer(
			mockState, updateCfProFormSetting('CF2', {sendLocal:true})
		).forms.find(form => 'CF2' === form.ID ).sendLocal).toEqual(true);
	});

	it( 'Does nothing to state when other actions are passed', () => {
		expect(proLocalSettingsReducer(mockState, {type: 'hiRoy'})).toEqual(mockState);
	});
});
describe('Main form reducer', () => {
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

	const forms = [
		formOne,
		formTwo,
		formThree
	];

	it('Adds a form to state', () => {
		const addAction = setForm(formTwo);
		const state = formsReducer(DEFAULT_STATE, addAction);
		expect(findFormIndexById(state.forms, 'CF1')).not.toBeFalsy();
		expect(findFormIndexById(state.forms, 'CF2')).toBeFalsy();
	});

	it('Sets all forms in state', () => {
		const addAction = setForms(forms);
		const state = formsReducer(DEFAULT_STATE, addAction);
		expect(state.forms).toEqual(forms);
	});

	it( 'Adds new forms to state', () => {
		const action = newForm();
		let formState = formsReducer(
			DEFAULT_STATE,
			action
		);
		expect(formState.forms).toHaveLength(1);
		formState = formsReducer(formState, action);
		expect(formState.forms).toHaveLength(2);
	});

	describe( 'Form reducer from array', () => {
		it( 'Still has form previews', () => {
			expect(initialStateWithForms([formOne,formThree])).toHaveProperty('formPreviews');
		});

		it( 'Works with defaults', () => {
			expect(initialStateWithForms([formOne,formThree])).toHaveProperty('forms');
		});
	});
});

describe( 'Privacy settings reducer', () => {
	const settings = {
		ID: 'CF5b19489a0e09f',
		emailIdentifyingFields: [],
		fields: {
			fld_6544758:
				{
					ID: 'fld_6544758',
					name: 'Multiple Mailer Not Add To Media',
					type: 'advanced_file'
				}
		},
		name: 'File Multiple Upload',
		piiFields: ['fld_6544758'],
		privacyExporterEnabled: true
	};

	it( 'Adds the settings', () => {
		const action = setFormPrivacyForm(settings);
		expect(
			privacySettingsReducer({
				forms:[]
			},action)
		).toEqual({
			forms: [settings]
		});
	});
});

describe('Status reducer', () => {
	it( 'starts spinner', () => {
		expect(statusReducer(STATUS_DEFULT_STATE,startSpinner()).spin).toEqual(true);
	});

	it( 'stops spinner', () => {
		const defaultState = {
			...STATUS_DEFULT_STATE,
			spin:true,
		}
		expect(statusReducer(defaultState,stopSpinner()).spin).toEqual(false);
	});

	it( 'close status indicator', () => {
		expect(statusReducer(STATUS_DEFULT_STATE,closeStatus()).show).toEqual(false);
	});
	it( 'Creates error status', () => {
		const state = statusReducer(STATUS_DEFULT_STATE,updateStatus(
			'Fail', false,true
		));
		expect(state.show).toEqual(true);
		expect(state.success).toEqual(false);
		expect(state.message).toEqual('Fail');
	});
});