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
	formsReducer,
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


export const CALDERA_FORMS_STORE_SLUG = 'CALDERA_FORMS/FORMS';
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

const reducers = {};
reducers[CALDERA_FORMS_STORE_SLUG] = calderaFormsFormState.reducer;

export const calderaFormsReduxStore = createStore(
	combineReducers(reducers),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

