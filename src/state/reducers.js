
import {
    SET_FORMS,
    SET_FORM,
    ADD_FORM_PREVIEW,
    NEW_FORM
} from "./actions";

import {
    findFormIndexById
} from "./util";


const printedData = {
    forms:[]
};

export const DEFAULT_STATE = {
    forms: printedData.forms,
    formPreviews: {},
};

/**
 * Reducer for form(s) state
 *
 * @param state
 * @param action
 * @returns {*}
 */
export const formsReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {

        case SET_FORMS:
            return {
                ...state,
                forms:action.forms
            };
        case ADD_FORM_PREVIEW:
            state.formPreviews[action.formId] = action.preview;
            return {
                ...state,
                formPreviews: state.formPreviews
            };
        case SET_FORM :
            if( ! Array.isArray( state.forms) || ! state.forms.length) {
                return {
                    ...state,
                    forms: [action.form]
                }
            }else{
                const index = findFormIndexById(state.forms, action.form.ID);
                if (-1 <= index) {
                    state.forms.splice(index, 1, action.form);
                } else {
                    state.forms.push(action.form);
                }

            }
            return {
                ...state,
                forms:state.forms
            };
        case NEW_FORM:
            const newForm = {
                ID: '11',
                name: '...'
            };
            state.forms.push(newForm);
            return Object.assign({},state);

        default:
            return state;
    }

};