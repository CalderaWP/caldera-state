export const START_SPIN = 'START_SPIN';
export const STOP_SPIN = 'STOP_SPIN';
export const CLOSE_STATUS_INDICATOR = 'CLOSE_STATUS_INDICATOR';
export const UPDATE_STATUS_INDICATOR = 'UPDATE_STATUS_INDICATOR';

/**
 * Dispatch action to start spinner
 * @returns {{type: string}}
 */
export const startSpinner = () => {
	return {
		type: START_SPIN
	}
};

/**
 * Dispatch action to stop spinner
 *
 *
 * @returns {{type: string}}
 */
export const stopSpinner = () => {
	return {
		type: STOP_SPIN
	}
};

/**
 * Dispatch action to close (hide) status indicator
 *
 * @returns {{type: string}}
 */
export const closeStatus = () => {
	return {
		type: CLOSE_STATUS_INDICATOR
	}
};

/**
 * Update the status indicator
 * 
 * @param {String|Boolean} message Message to show in status indicator
 * @param {Boolean} success Optional. If true, the default, background is green for success. If false, red for failure.
 * @param {Boolean} show Optional. If true, the default, status indicator will show
 * @returns {{type: string, message: *, show: boolean, success: boolean}}
 */
export const updateStatus = (message, success = true, show = true) => {
	if( ! message ){
		message = !success ? 'Error' : 'Success';
	}

	return {
		type: UPDATE_STATUS_INDICATOR,
		message,
		show,
		success
	}
};