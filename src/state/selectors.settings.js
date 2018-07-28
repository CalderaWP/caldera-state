/**
 * Select style includes settings
 * @param {Object} state
 * @return {Object}
 */
export const getStyleIncludes = (state) => {
	return state.styleIncludes
		? state.styleIncludes
		: {};
};
/**
 * Select other global form settings
 * @param {Object} state
 * @return {Object}
 */
export const getOtherSettings = (state) => {
	return state.other
		? state.other
		: {};
};