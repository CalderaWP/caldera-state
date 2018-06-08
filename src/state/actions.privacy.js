export const SET_EDIT_FORM = 'SET_EDIT_FORM';
export const UNSET_EDIT_FORM = 'UNSET_EDIT_FORM';
export const SET_FORM_PRIVACY_SETTINGS = 'SET_FORM_PRIVACY_SETTINGS';

/**
 * Set the current form to edit in privacy settings
 *
 * @param {String} formId
 * @returns {{type: string, formId: *}}
 */
export const setEditForm = (formId ) => {
    return {
        type: SET_EDIT_FORM,
        formId: formId
    }
};

/**
 * Unset the current form to edit in privacy settings
 *
 * @returns {{type: string}}
 */
export const unsetEditForm = () => {
    return {
        type: UNSET_EDIT_FORM,
    }
};

/**
 * Set privacy form settings
 *
 * @param settings
 * @returns {{type: string, form: *}}
 */
export const setFormPrivacyForm = (settings) => {
    return {
        type: SET_FORM_PRIVACY_SETTINGS,
        form: settings
    }
};
