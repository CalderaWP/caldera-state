/**
 * Get the global CF Pro settings for site
 *
 * @param {Object} state
 * @return {Object}
 */
export const getCfProSettings = (state) => {
	return state.settings;
};

/**
 * Get the CF Pro settings for one form
 * @param {String} formId
 * @param {Object} state
 * @return {Object}
 */
export const getCfProFormSetting = (formId,state) => {
	return state.forms.find( form => form.ID === formId );
};