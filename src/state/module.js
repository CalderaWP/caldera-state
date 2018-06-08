import {
    setForms,
    setForm,
    addFormPreview
} from './actions'

import {
    getForm,
    getForms,
    getFormPreview,
    getFormPreviews
} from "./selectors";

import {
    formsReducer,
} from "./reducers";


import {
    CALDERA_FORMS_STORE_SLUG,
    calderaFormsFormState,
    calderaFormsReduxStore
} from "./index";

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