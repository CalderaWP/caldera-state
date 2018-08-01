/*eslint no-undef: "error"*/
/*eslint-env node*/

/** Store**/
//Actions
import {
	setForms,
	setForm,
	addFormPreview,
	newForm
} from './actions';

import {
	setFormPrivacyForm,
	setEditForm,
	unsetEditForm
} from './actions.privacy';


import {
	startSpinner,
	stopSpinner,
	closeStatus,
	updateStatus
} from "./actions.status";

import {
	updateStyleIncludes,
	updateOtherSettings
} from "./actions.settings";


import {
	updateCfProFormSetting,
	updateCfProSettings
} from "./actions.proLocalSettings";

import {setEntries} from "./actions.entries";
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

import {
	getPageOfEntries
} from "./selectors.entries";

//Reducers
import {
	formsReducer,
	privacySettingsReducer,
	initialStateWithForms,
	settingsReducer,
	proLocalSettingsReducer,
	statusReducer,
	entriesReducer
} from './reducers';

/** State **/
import {
	CALDERA_FORMS_STORE_SLUG,
	CALDERA_FORMS_STATUS_STORE_SLUG,
	CALDERA_FORMS_PRIVACY_STORE_SLUG,
	CALDERA_FORMS_SETTINGS_SLUG,
	CALDERA_FORMS_PRO_LOCAL_SETTINGS_SLUG,
	CALDERA_FORMS_ENTRIES_SLUG,
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
			newForm,
			setFormPrivacyForm,
			setEditForm,
			unsetEditForm,
			updateStyleIncludes,
			updateOtherSettings,
			updateCfProFormSetting,
			updateCfProSettings,
			startSpinner,
			stopSpinner,
			closeStatus,
			updateStatus,
			setEntries
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
			getCfProSettings,
			getPageOfEntries
		},
		reducers: {
			formsReducer,
			initialStateWithForms,
			privacySettingsReducer,
			settingsReducer,
			proLocalSettingsReducer,
			statusReducer,
			entriesReducer
		}
	},
	state: {
		CALDERA_FORMS_STORE_SLUG,
		CALDERA_FORMS_STATUS_STORE_SLUG,
		CALDERA_FORMS_PRIVACY_STORE_SLUG,
		CALDERA_FORMS_SETTINGS_SLUG,
		CALDERA_FORMS_PRO_LOCAL_SETTINGS_SLUG,
		CALDERA_FORMS_ENTRIES_SLUG,
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