export const SET_EDIT_FORM = 'SET_EDIT_FORM';
export const UNSET_EDIT_FORM = 'UNSET_EDIT_FORM';
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
 * @since 1.7.0
 *
 * @returns {{type: string}}
 */
export const unsetEditForm = () => {
    return {
        type: UNSET_EDIT_FORM,
    }
};
