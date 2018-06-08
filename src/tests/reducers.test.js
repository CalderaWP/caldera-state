import {
    newForm,
    setForm,
    setForms
} from "../state/actions";

import {
    findFormIndexById
} from "../state/util";
import {
    formsReducer,
    DEFAULT_STATE
} from "../state/reducers";

describe('Main form reducer', () => {
    const formOne = {
        ID: 'CF1',
        name: 'Form One'
    };
    const formTwo = {
        ID: 'CF2',
        name: 'Form Two'
    };

    const formThree = {
        ID: 'CF3',
        name: 'Form Three'
    };

    const forms = [
        formOne,
        formTwo,
        formThree
    ];

    it('Adds a form to state', () => {
        const addAction = setForm(formTwo);
        const state = formsReducer(DEFAULT_STATE, addAction);
        expect(findFormIndexById(state.forms, 'CF1')).not.toBeFalsy();
        expect(findFormIndexById(state.forms, 'CF2')).toBeFalsy();
    })

    it('Sets all forms in state', () => {
        const addAction = setForms(forms);
        const state = formsReducer(DEFAULT_STATE, addAction);
        expect(state.forms).toEqual(forms);
    });

    it( 'Adds new forms to state', () => {
        const action = newForm();
        let formState = formsReducer(
            DEFAULT_STATE,
            action
        );
        expect(formState.forms.length).toEqual(1);
        formState = formsReducer(formState, action);
        expect(formState.forms.length).toEqual(2);
    });
});