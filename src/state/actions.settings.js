/**
 *
 * @type {string}
 */
export const SETTINGS_STYLE_INCLUDES = 'CALDERA_FORMS/SETTINGS/STYLE_INCLUDES';

/**
 *
 * @type {string}
 */
export const SETTINGS_OTHER = 'CALDERA_FORMS/SETTINGS/OTHER';

/**
 * Action creator for updating style includes settings
 * @param {Object} styleIncludes
 * @return {{type: string, styleIncludes: *}}
 */
export const updateStyleIncludes = (styleIncludes) => {
	return {
		type: SETTINGS_STYLE_INCLUDES,
		styleIncludes
	};

};

/**
 * Action creator for updating other global settings
 *
 * @param {Object} settingsOther
 * @return {{type: string, settingsOther: *}}
 */
export const updateOtherSettings = (settingsOther) => {
	return {
		type: SETTINGS_OTHER,
		settingsOther
	};

};
