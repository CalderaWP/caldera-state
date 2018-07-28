import {
	setForms,
	setForm,
	addFormPreview
} from './actions';

import {
	getForm,
	getForms,
	getFormPreview,
	getFormPreviews
} from './selectors';

import {
	formsReducer, privacySettingsReducer, statusReducer,
} from './reducers';


import {
	combineReducers,createStore
} from 'redux';

const actionFunctions = {
	setForms,
	setForm,
	addFormPreview
};

const selectorFunctions = {
	getForm,
	getForms,
	getFormPreview,
	getFormPreviews
};

/**
 * The reducer key for the main forms store
 * @type {string}
 */
export const CALDERA_FORMS_STORE_SLUG = 'CALDERA_FORMS/FORMS';
/**
 * The reducer key for the privacy settings store
 * @type {string}
 */
export const CALDERA_FORMS_PRIVACY_STORE_SLUG = `${CALDERA_FORMS_STORE_SLUG}/PRIVACY`;
/**
 * The reducer key for the status store
 * @type {string}
 */
export const CALDERA_FORMS_STATUS_STORE_SLUG = `${CALDERA_FORMS_STORE_SLUG}/STATUS`;
/**
 * Caldera Forms Redux-store
 *
 * @type {{reducer: formsReducer, actions: {setForms: setForms, setForm: setForm, addFormPreview: addFormPreview}, selectors: {getForm: getForm, getForms: getForms, getFormPreview: getFormPreview, getFormPreviews: getFormPreviews}}}
 */
export const calderaFormsFormState = {
	reducer: formsReducer,
	actions: actionFunctions,
	selectors: selectorFunctions,
};

/**
 * All reducers combined to one indexed object
 *
 * Designed to be passed to redux's combineReducers
 * @type {{}}
 */
export const reducers = {};
reducers[CALDERA_FORMS_STORE_SLUG] = formsReducer;
reducers[CALDERA_FORMS_PRIVACY_STORE_SLUG] = privacySettingsReducer;
reducers[CALDERA_FORMS_STATUS_STORE_SLUG] = statusReducer;

/**
 * Redux store with all reducers combined
 *
 * @type {Store<any>}
 */
export const calderaFormsReduxStore = createStore(
	combineReducers(reducers),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

