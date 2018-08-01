/**
 * Name of action to set a page of entries
 *
 * @type {string}
 */
export const SET_ENTRIES = 'SET_ENTRIES';

/**
 * Action to set a page of entries
 * @param {String} formId ID of form these entries belong to.
 * @param {Number} pageNumber Page number for these entries
 * @param {Array} entries Collection of entries
 * @return {{type: string, formId: *, pageNumber: *, entries: *}}
 */
export const setEntries = (formId, pageNumber, entries) => {
	return {
		type: SET_ENTRIES,
		formId,
		pageNumber,
		entries
	};
};

