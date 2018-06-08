import {
    formHasId,
    findFormById,
    findFormIndexById,
    generateId,
    getFormId,
    mapArrayOfFormsToObject
} from "../state/util";

describe( 'Utility functions', () => {
    const formOne = {
        ID: 'CF1'
    };
    const formTwo = {
        ID: 'CF2'
    };

    const formThree = {
        formId: 'CF3'
    };
    const forms = [ formOne, formTwo, formThree];
    describe( 'Identifies form by ID', () => {
        it( 'Identifies by ID', () => {
            expect( formHasId(formOne, 'CF1')).toBeTruthy();
        });

        it( 'Identifies by id', () => {
            expect( formHasId(formThree, 'CF3')).toBeTruthy();
        });

        it( 'Does not misidentify', () => {
            expect( formHasId(formThree, 'CF1')).not.toBeTruthy();
        });

    });

    describe( 'Finds form form by index', () => {
        it( 'Find correct indexes', () => {
            expect( findFormIndexById(forms, 'CF1')).toBe(0);
            expect( findFormIndexById(forms, 'CF2')).toBe(1);
            expect( findFormIndexById(forms, 'CF3')).toBe(2);
        });

        it( 'False for invalid ID', () => {
            expect( findFormIndexById(formThree, 'CaF3')).toBe(false);
        });

    });

    describe( 'Finds form form by ID', () => {
        it( 'Find correct indexes', () => {
            expect( findFormById(forms, 'CF1')).toBe(formOne);
            expect( findFormById(forms, 'CF2')).toBe(formTwo);
            expect( findFormById(forms, 'CF3')).toBe(formThree);
        });

        it( 'False for invalid ID', () => {
            expect( findFormById(formThree, 'CF5')).toBe(false);
        });

    });

    describe( 'Find form ID ID', () => {
        it( 'Find correct indexes', () => {
            expect( getFormId(formOne)).toBe('CF1');
            expect( getFormId(formTwo)).toBe('CF2');
            expect( getFormId(formThree)).toBe('CF3');
        });

        it( 'False for invalid form', () => {
            expect( getFormId({x:1})).toBe(false);
        });

    });

    describe( 'Map array of forms to object', () => {
        it( 'Has the forms indexed correctly', () => {
            const collection = mapArrayOfFormsToObject(forms);
            expect( collection).toHaveProperty('CF1',formOne);
            expect( collection).toHaveProperty('CF2',formTwo);
            expect( collection).toHaveProperty('CF3',formThree);
        });

        it( 'Passed a valid object unchanged', () => {
            const collection2 = mapArrayOfFormsToObject(forms);
            //test object equality
            expect( mapArrayOfFormsToObject(collection2)).toBe(collection2);
        });

        it( 'Return an empty object when passed undefined', () => {
            const collection3 = mapArrayOfFormsToObject(undefined);
            expect( mapArrayOfFormsToObject(collection3)).toEqual({});
        });

    });
});