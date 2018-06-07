import {
    findFormById,
    mapArrayOfFormsToObject
} from "./util";

/**
 * Selector to find forms in state
 *
 * @param {Object}state
 * @param {String}formId
 * @returns {boolean|*}
 */
export const getForm = ( state, formId )  => {
    return findFormById(state.forms, formId);
};

/**
 * Selector to get all forms in state
 *
 * @param {Object} state
 * @returns {*}
 */
export const getForms = ( state ) => {
    let forms = {};
    if( Array.isArray(state.forms)&&state.forms.length){
        forms = mapArrayOfFormsToObject(state.forms);
    }else{
        forms = state.forms;
    }
    return forms;
};


/**
 * Get a form preview from state
 *
 * @param {Object}state
 * @param {String}formId
 * @returns {string}
 */
export const getFormPreview = ( state,formId ) => {
    return state.formPreviews.hasOwnProperty( formId )
        ?state.formPreviews[ formId ]
        : '';

};

/**
 * Get all form previews in state
 *
 * @param {Object}state
 * @returns {{}|DEFAULT_STATE.formPreviews|formPreviews|{CF2}}
 */
export const getFormPreviews = (state) => {
    return state.formPreviews;
};
