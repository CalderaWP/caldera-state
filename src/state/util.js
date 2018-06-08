/**
 * Check if a form has the provided ID
 *
 * @param {Object} form Form config
 * @param {String} formId
 * @return {boolean}
 */
export const formHasId = ( form, formId ) => {
    if( 'object' !== typeof  form ){
        return false;
    }
    if( form.hasOwnProperty('ID') ){
        return formId === form.ID;
    }
    if( form.hasOwnProperty('formId') ){
        return formId === form.formId;
    }
    return false;
};

/**
 * Get form ID
 *
 * @param {Object} form
 * @returns {String|bool}
 */
export const getFormId = (form) => {
    if( form.hasOwnProperty('ID') ){
        return form.ID;
    }
    if( form.hasOwnProperty('formId') ){
        return form.formId;
    }
    return false;
};

/**
 * Makes sure forms are an array keyed by ID
 *
 * @param {Object|Array}forms
 * @returns {Object}
 */
export const mapArrayOfFormsToObject = (forms ) => {

    if (Array.isArray(forms)) {
        let preparedForms = {};
        forms.map((form) => {
            if (false !== getFormId(form)) {
                preparedForms[getFormId(form)] = form;
            }
            return true;
        });

        return preparedForms;
    }else if( 'object' === typeof forms ){
        return forms;
    }else{
        return {};
    }

};

/**
 * Find form by form ID ID in an array of forms
 *
 * @param {Array} forms
 * @param {String} formId
 */
export const findFormById = (forms, formId,) => {
    if(!Array.isArray(forms) || ! forms.length ){
        return false;
    }
    return forms.find(form => {
        return formHasId(form,formId);
    });
};

/**
 * Find array index  in an array of forms by form ID
 *
 * @param {Array} forms
 * @param {String} formId
 */
export const findFormIndexById = (forms, formId) => {
    if(!Array.isArray(forms) || ! forms.length ){
        return false;
    }
    return forms.findIndex(form => {
        return formHasId(form,formId);
    });
};

/**
 * Generate ID for things
 *
 * @param {String} generateFor
 * @returns {string}
 */
export const generateId = (generateFor) =>{
    const id =  Math.round( Math.random() * 10000000 );
    let prefix = 'cf_';
    switch (generateFor) {
        case 'row':
            prefix = 'row_';
            break;
        case 'column':
            prefix = 'col_';
            break;
        default:
            prefix = 'cf_';
            break;

    }

    return `${prefix}${id}`;
};

export const setFormInState = (state,form) => {
    if( ! Array.isArray( state.forms) || ! state.forms.length) {
        return {
            ...state,
            forms: [form]
        }
    }else{
        const index = findFormIndexById(state.forms, form.ID);
        if (-1 <= index) {
            state.forms.splice(index, 1, form);
        } else {
            state.forms.push(form);
        }

    }
    return {
        ...state,
        forms:state.forms
    };
}