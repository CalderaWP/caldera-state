/** Store**/
//Actions
import {
    setForms,
    setForm,
    addFormPreview
} from './actions'

//Selectors
import {
    getForm,
    getForms,
    getFormPreview,
    getFormPreviews
} from "./selectors";

//Reducers
import {
    formsReducer,
} from "./reducers";

/** State **/
import {
    CALDERA_FORMS_STORE_SLUG,
    calderaFormsFormState,
    calderaFormsReduxStore
} from "./index";

/**
 * All of the package in one export
 *
 * @type {{store: {actions: {setForms: setForms, setForm: setForm, addFormPreview: addFormPreview}, selectors: {getForm: getForm, getForms: getForms, getFormPreview: getFormPreview, getFormPreviews: getFormPreviews}, reducers: {formsReducer: formsReducer}}, state: {CALDERA_FORMS_STORE_SLUG: string, calderaFormsFormState: {reducer: formsReducer, actions: {setForms: setForms, setForm: setForm, addFormPreview: addFormPreview}, selectors: {getForm: getForm, getForms: getForms, getFormPreview: getFormPreview, getFormPreviews: getFormPreviews}}, calderaFormsReduxStore}}}
 */
module.exports  = {
    store : {
        actions: {
            setForms,
            setForm,
            addFormPreview
        },
        selectors: {
            getForm,
            getForms,
            getFormPreview,
            getFormPreviews
        },
        reducers: {
            formsReducer
        }
    },
    state: {
        CALDERA_FORMS_STORE_SLUG,
        calderaFormsFormState,
        calderaFormsReduxStore
    }
};