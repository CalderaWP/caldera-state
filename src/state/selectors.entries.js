/**
 * Get one page of a form's entries
 * @param {String} formId ID of form these entries belong to.
 * @param {Number} pageNumber Page number for these entries
 * @param {Object} state Collection of entries, by form Id and page
 * @return {*}
 */
export const getPageOfEntries = (formId,pageNumber,state) =>{
	if( state.hasOwnProperty(formId) && state[formId].hasOwnProperty(pageNumber) ){
		return state[formId][pageNumber];
	}
	return [];
};

