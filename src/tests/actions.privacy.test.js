import {
    SET_EDIT_FORM,
    UNSET_EDIT_FORM,
    setEditForm,
    unsetEditForm
} from "../state/actions.privacy";


describe('privacy settings actions', () => {
    const data = {ID: 1};
    it('creates setEditForm action', () => {
        const formId = 'CF12345';
        const action = setEditForm(formId);
        expect(action.type).toBe(SET_EDIT_FORM);
        expect(action.formId).toBe(formId);
    });

    it('creates unsetEditForm action', () => {
        const action = unsetEditForm(data);
        expect(action.type).toBe(UNSET_EDIT_FORM);
        expect(Object.keys(action).length).toBe(1);
    });
});