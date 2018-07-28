import {
	SET_FORMS,
	SET_FORM,
	ADD_FORM_PREVIEW,
	NEW_FORM
} from './actions';

import {SET_FORM_PRIVACY_SETTINGS} from './actions.privacy';

import {
	setFormInState
} from './util';

import {
	CLOSE_STATUS_INDICATOR,
	START_SPIN, STOP_SPIN,
	UPDATE_STATUS_INDICATOR
} from "./actions.status";

import {
	UPDATE_PRO_FORM_SETTINGS,
	UPDATE_PRO_SETTINGS
} from "./actions.proLocalSettings";
import {SETTINGS_OTHER, SETTINGS_STYLE_INCLUDES} from "./actions.settings";

/**
 * Default state for formsReducer
 *
 * @type {{forms: Array, formPreviews: {}}}
 */
export const DEFAULT_STATE = {
	forms: [],
	formPreviews: {},
};

/**
 * Create inertial state from an array of forms.
 *
 * @param {Object} forms
 * @returns {{} & {forms: *} & {forms: Array, formPreviews: {}}}
 */
export const initialStateWithForms = (forms) => {
	if (!Array.isArray(forms)) {
		throw 'You must use an array of forms!';
	}
	return Object.assign({}, {forms: forms}, DEFAULT_STATE);
};


/**
 * Reducer for form(s) state
 *
 * @param {Object}state
 * @param {Object} action
 * @returns {*}
 */
export const formsReducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_FORMS:
			return {
				...state,
				forms: action.forms
			};
		case ADD_FORM_PREVIEW:
			state.formPreviews[action.formId] = action.preview;
			return {
				...state,
				formPreviews: state.formPreviews
			};
		case SET_FORM :
			return (setFormInState(state, action.form));
		case NEW_FORM:
			const newForm = {
				ID: '11',
				name: '...'
			};
			state.forms.push(newForm);
			return Object.assign({}, state);

		default:
			return state;
	}

};

/**
 * Reducer for form privacy settings state
 *
 * @param {Object}state
 * @param {Object} action
 * @returns {*}
 */
export const privacySettingsReducer = (state = {
	...DEFAULT_STATE
}, action) => {
	switch (action.type) {
		case SET_FORM_PRIVACY_SETTINGS :
			return setFormInState(state, action.form);
		default:
			return state;
	}
};

export const STATUS_DEFULT_STATE = {
	show: false,
	message: '',
	success: true,
	spin: false,
};


/**
 * Reducer for redux(-like) store managing spinner and success
 *
 * @param {Object} state
 * @param {Object} action
 * @returns {*}
 */
export const statusReducer = (state = STATUS_DEFULT_STATE, action) => {
	switch (action.type) {
		case START_SPIN :
			return {
				...state,
				spin: true
			};
		case STOP_SPIN : {
			return {
				...state,
				spin: false
			};
		}
		case CLOSE_STATUS_INDICATOR: {
			return {
				...state,
				show: false
			};
		}
		case UPDATE_STATUS_INDICATOR: {
			return {
				...state,
				show: action.show,
				message: action.message,
				success: action.success,
			};
		}
		default:
			return state;
	}

};

/**
 * Reducer for CF Pro local settings
 *
 * @param {Object} state Current state
 * @param {Object} action
 * @return {Object}
 */
export const proLocalSettingsReducer = (state = {
	settings: {},
	forms: []
}, action) => {
	switch (action.type) {
		case UPDATE_PRO_SETTINGS:
			return {
				...state,
				settings: action.settings
			};
		case UPDATE_PRO_FORM_SETTINGS:
			return setFormInState(state, {
				...action.settings,
				ID: action.formId,
			});
		default:
			return state;
	}
};


/**
 * Reducer for global for settings
 * @param {Object} state Current state
 * @param {Object} action
 * @return {{styleIncludes: {}, other: {}}}
 */
export const settingsReducer = (state = {
	styleIncludes: {},
	other: {}
}, action ) => {
	switch (action.type){
		case SETTINGS_STYLE_INCLUDES:
			return {
				...state,
				styleIncludes: action.styleIncludes
			};
		case SETTINGS_OTHER:
			return {
				...state,
				other: action.settingsOther
			};
		default:
			return state;
	}
};
