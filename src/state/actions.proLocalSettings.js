/**
 *
 * @type {string}
 */
export const UPDATE_PRO_SETTINGS = 'CALDERA_FORMS/PRO/SETTINGS/UPDATE';

/**
 *
 * @type {string}
 */
export const UPDATE_PRO_FORM_SETTINGS = 'CALDERA_FORMS/PRO/SETTINGS/FORM/UPDATE';

/**
 * Action creator for updating the CF Pro settings
 * @param  {Object} settings
 * @return {{type: string, settings: *}}
 */
export const updateCfProSettings = (settings)  => {
	return {
		type: UPDATE_PRO_SETTINGS,
		settings
	}
};

/**
 * Action creator for updating the CF Pro settings for one form
 * @param {String} formId
 * @param  {Object} settings
 * @return {{type: string, formId: *, settings: *}}
 */
export const updateCfProFormSetting = (formId,settings) => {
	return {
		type: UPDATE_PRO_FORM_SETTINGS,
		formId,
		settings
	}
};