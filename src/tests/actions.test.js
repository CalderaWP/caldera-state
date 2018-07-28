import {
	setForm,
	setForms,
	addFormPreview,
	newForm,
	SET_FORMS,
	SET_FORM,
	ADD_FORM_PREVIEW,
	NEW_FORM
} from '../state/actions';

import {
	START_SPIN,
	STOP_SPIN,
	CLOSE_STATUS_INDICATOR,
	UPDATE_STATUS_INDICATOR,
	startSpinner,
	stopSpinner,
	closeStatus,
	updateStatus
} from "../state/actions.status";


import {
	SET_EDIT_FORM,
	UNSET_EDIT_FORM,
	SET_FORM_PRIVACY_SETTINGS,
	setEditForm,
	unsetEditForm,
	setFormPrivacyForm
} from '../state/actions.privacy';


describe('form actions', () => {
	const data = {ID: 1};
	it('creates setForm action', () => {
		const action = setForm(data);
		expect(action.type).toBe(SET_FORM);
		expect(action.form).toBe(data);
	});

	it('creates setForms action', () => {
		const action = setForms(data);
		expect(action.type).toBe(SET_FORMS);
		expect(action.forms).toBe(data);
	});

	it('creates addFormPreview action', () => {
		const formId = 'CF12345';
		const preview = '<form><input /></form>';

		const action = addFormPreview(formId,preview);
		expect(action.type).toBe(ADD_FORM_PREVIEW);
		expect(action.formId).toBe(formId);
		expect(action.preview).toBe(preview);
	});

	it( 'created newForm action',  () => {
		const action = newForm();
		expect(action.type).toBe(NEW_FORM);
	});
});


describe('privacy settings actions', () => {
	const data = {ID: 1};
	it('creates setEditForm action', () => {
		const formId = 'CF12345';
		const action = setEditForm(formId);
		expect(action.type).toBe(SET_EDIT_FORM);
		expect(action.formId).toBe(formId);
	});

	it('creates unsetEditForm action', () => {
		const action = unsetEditForm(data);
		expect(action.type).toBe(UNSET_EDIT_FORM);
		expect(Object.keys(action)).toHaveLength(1);
	});
	it('creates setFormPrivacyForm action', () => {
		const settings = {
			form: {ID:1}
		};
		const action = setFormPrivacyForm(settings);
		expect(action.type).toBe(SET_FORM_PRIVACY_SETTINGS);
		expect(Object.keys(action)).toHaveLength(2);
		expect(action.form).toBe(settings);
	});
});

describe( 'Status indicator actions', () => {
	it( 'creates START_SPIN action with the right type', () => {
		expect(startSpinner().type).toBe(START_SPIN);
	});

	it( 'creates STOP_SPIN action with the right type', () => {
		expect(stopSpinner().type).toBe(STOP_SPIN);
	});

	it( 'creates CLOSE_STATUS_INDICATOR action with the right type', () => {
		expect(closeStatus().type).toBe(CLOSE_STATUS_INDICATOR);
	});

	it( 'creates UPDATE_STATUS_INDICATOR action with the right type', () => {
		expect(updateStatus({
			message: 'Hi Roy'
		}).type).toBe(UPDATE_STATUS_INDICATOR);
	});

	it( 'creates UPDATE_STATUS_INDICATOR action with the nessage ', () => {
		expect(updateStatus('Hi Roy').message).toBe('Hi Roy');
	});

	it( 'creates UPDATE_STATUS_INDICATOR action with the right details ', () => {
		const data = {
			message: 'fails',
			show: true,
			success: false,
		}

		expect(updateStatus(
			data.message,
			data.success,
			data.show
		)).toEqual({
			type:UPDATE_STATUS_INDICATOR,
			...data
		});
	});

});