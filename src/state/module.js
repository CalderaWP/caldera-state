/*eslint no-undef: "error"*/
/*eslint-env node*/

/** Store**/
//Actions
import {
	setForms,
	setForm,
	addFormPreview
} from './actions';

import {
	setFormPrivacyForm,
	setEditForm,
	unsetEditForm
} from './actions.privacy';

//Selectors
import {
	getForm,
	getForms,
	getFormPreview,
	getFormPreviews
} from './selectors';

import {
	getFormPrivacySettings
} from './selectors.privacy';

//Reducers
import {
	formsReducer,
	privacySettingsReducer,
	initialStateWithForms
} from './reducers';

/** State **/
import {
	CALDERA_FORMS_STORE_SLUG,
	calderaFormsFormState,
	calderaFormsReduxStore
} from './index';

/** Util **/
import  {
	formHasId,
	findFormById,
	setFormInState,
	generateId,
	mapArrayOfFormsToObject,
	getFormId,
	findFormIndexById,
	generateId
} from "./util";

/**
 * All of the package in one export
 *
 * @type {{store: {actions: {setForms: setForms, setForm: setForm, addFormPreview: addFormPreview}, selectors: {getForm: getForm, getForms: getForms, getFormPreview: getFormPreview, getFormPreviews: getFormPreviews}, reducers: {formsReducer: formsReducer}}, state: {CALDERA_FORMS_STORE_SLUG: string, calderaFormsFormState: {reducer: formsReducer, actions: {setForms: setForms, setForm: setForm, addFormPreview: addFormPreview}, selectors: {getForm: getForm, getForms: getForms, getFormPreview: getFormPreview, getFormPreviews: getFormPreviews}}, calderaFormsReduxStore}}}
 */
module.exports  = {
	store : {
		actions: {
			setForms,
			setForm,
			addFormPreview,
			setFormPrivacyForm,
			setEditForm,
			unsetEditForm
		},
		selectors: {
			getForm,
			getForms,
			getFormPreview,
			getFormPreviews,
			getFormPrivacySettings

		},
		reducers: {
			formsReducer,
			initialStateWithForms,
			privacySettingsReducer
		}
	},
	state: {
		CALDERA_FORMS_STORE_SLUG,
		calderaFormsFormState,
		calderaFormsReduxStore
	},
	util: {
		formHasId,
		findFormById,
		setFormInState,
		generateId,
		mapArrayOfFormsToObject,
		getFormId,
		findFormIndexById,
		generateId
	}
};