export const SET_FORMS = 'SET_FORMS';
export const SET_FORM = 'SET_FORM';
export const ADD_FORM_PREVIEW = 'ADD_FORM_PREVIEW';
export const NEW_FORM = 'NEW_FORM';

/**
 * Action creator for setting a form in state
 *
 * @param form
 * @returns {{type: string, form: *}}
 */
export const setForm = (form) => {
    return {
        type: SET_FORM,
        form: form
    }
};

/**
 * Action creator for setting all forms in state
 *
 * @param forms
 * @returns {{type: string, forms: *}}
 */
export const setForms = ( forms ) => {
    return {
        type: SET_FORMS,
        forms:forms
    };
};

/**
 * Action creator for setting one form in state
 *
 * @param formId
 * @param preview
 * @returns {{type: string, formId: *, preview: *}}
 */
export const  addFormPreview = (formId,preview)=> {
    return {
        type: ADD_FORM_PREVIEW,
        formId: formId,
        preview:preview
    }
};


/**
 * Action creator to add an empty form to state
 *
 * @returns {{type: string}}
 */
export const newForm = () => {
    return {
        type: NEW_FORM
    }
}