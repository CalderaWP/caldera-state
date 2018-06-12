import {findFormById} from './util';

/**
 * Get all of a form's privacy settings.

 * @param {String} formId
 * @param {Object} state
 * @returns {*}
 */
export const getFormPrivacySettings = (formId,state) =>{
	const settings = findFormById(state.forms, formId);
	return 'object' === typeof settings ? settings : false;
};

