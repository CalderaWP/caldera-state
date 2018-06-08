import {
    SET_FORMS,
    SET_FORM,
    ADD_FORM_PREVIEW,
    NEW_FORM
} from "./actions";

import {SET_FORM_PRIVACY_SETTINGS} from "./actions.privacy";

import {
    setFormInState
} from "./util";


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
    if( ! Array.isArray(forms) ){
        throw 'You must use an array of forms!';
    }
    return Object.assign({}, {forms:forms},DEFAULT_STATE );
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
                forms:action.forms
            };
        case ADD_FORM_PREVIEW:
            state.formPreviews[action.formId] = action.preview;
            return {
                ...state,
                formPreviews: state.formPreviews
            };
        case SET_FORM :
            return( setFormInState(state,action.form));
        case NEW_FORM:
            const newForm = {
                ID: '11',
                name: '...'
            };
            state.forms.push(newForm);
            return Object.assign({},state);

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
export const privacySettingsReducer = ( state = {
    ...DEFAULT_STATE
}, action ) => {
    switch (action.type){
        case SET_FORM_PRIVACY_SETTINGS :
            return setFormInState(state, action.form);
        default:
            return state;
    }
};