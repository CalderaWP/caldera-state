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

import {
	updateStyleIncludes,
	updateOtherSettings
} from "./actions.settings";


import {
	updateCfProFormSetting,
	updateCfProSettings
} from "./actions.proLocalSettings";


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

import {
	getStyleIncludes,
	getOtherSettings
} from "./selectors.settings";

import {
	getCfProFormSetting,
	getCfProSettings
} from "./selectors.proLocalSettings";

//Reducers
import {
	formsReducer,
	privacySettingsReducer,
	initialStateWithForms,
	settingsReducer,
	proLocalSettingsReducer
} from './reducers';

/** State **/
import {
	CALDERA_FORMS_STORE_SLUG,
	CALDERA_FORMS_STATUS_STORE_SLUG,
	CALDERA_FORMS_PRIVACY_STORE_SLUG,
	CALDERA_FORMS_SETTINGS_SLUG,
	CALDERA_FORMS_PRO_LOCAL_SETTINGS_SLUG,
	calderaFormsFormState,
	calderaFormsReduxStore,
	reducers
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
			unsetEditForm,
			updateStyleIncludes,
			updateOtherSettings,
			updateCfProFormSetting,
			updateCfProSettings
		},
		selectors: {
			getForm,
			getForms,
			getFormPreview,
			getFormPreviews,
			getFormPrivacySettings,
			getStyleIncludes,
			getOtherSettings,
			getCfProFormSetting,
			getCfProSettings
		},
		reducers: {
			formsReducer,
			initialStateWithForms,
			privacySettingsReducer,
			settingsReducer,
			proLocalSettingsReducer
		}
	},
	state: {
		CALDERA_FORMS_STORE_SLUG,
		CALDERA_FORMS_STATUS_STORE_SLUG,
		CALDERA_FORMS_PRIVACY_STORE_SLUG,
		CALDERA_FORMS_SETTINGS_SLUG,
		CALDERA_FORMS_PRO_LOCAL_SETTINGS_SLUG,
		calderaFormsFormState,
		calderaFormsReduxStore,
		reducers
	},
	util: {
		formHasId,
		findFormById,
		setFormInState,
		generateId,
		mapArrayOfFormsToObject,
		getFormId,
		findFormIndexById
	}
};