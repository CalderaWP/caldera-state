import {
    setForm,
    setForms,
    addFormPreview,
    newForm,
    SET_FORMS,
    SET_FORM,
    SET_CURRENT_FORM_ID,
    ADD_FORM_PREVIEW,
    NEW_FORM
} from './actions';


describe('form actions', () => {
    const data = {ID: 1};
    it('creates setForm action', () => {
        const action = setForm(data);
        expect(action.type).toBe(SET_FORM);
        expect(action.form).toBe(data);
    });

    it('creates setForms action', () => {
        const action = setForms(data);
        expect(action.type).toBe(SET_FORMS);
        expect(action.forms).toBe(data);
    });

    it('creates addFormPreview action', () => {
        const formId = 'CF12345';
        const preview = '<form><input /></form>';

        const action = addFormPreview(formId,preview);
        expect(action.type).toBe(ADD_FORM_PREVIEW);
        expect(action.formId).toBe(formId);
        expect(action.preview).toBe(preview);
    });

    it( 'created newForm action',  () => {
        const action = newForm();
        expect(action.type).toBe(NEW_FORM);
    })
});