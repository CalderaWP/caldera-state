import * as calderaState from '../state/module';
describe( 'root export', () => {
	describe( 'exports state', () => {
		it( 'export has state property', () => {
			expect( typeof  calderaState.state ).toBe('object');
		});

		it( 'state exports CALDERA_FORMS_STORE_SLUG', () => {
			expect( typeof  calderaState.state.CALDERA_FORMS_STORE_SLUG).toBe('string');
		});

		it( 'state exports CALDERA_FORMS_PRIVACY_STORE_SLUG', () => {
			expect( typeof  calderaState.state.CALDERA_FORMS_PRIVACY_STORE_SLUG).toBe('string');
		});

		it( 'state exports CALDERA_FORMS_STATUS_STORE_SLUG', () => {
			expect( typeof  calderaState.state.CALDERA_FORMS_STATUS_STORE_SLUG).toBe('string');
		});

		it( 'state exports calderaFormsFormState', () => {
			expect( typeof  calderaState.state.calderaFormsFormState ).toBe('object');
		});

		it( 'state exports calderaFormsReduxStore', () => {
			expect( typeof  calderaState.state.calderaFormsReduxStore ).toBe('object');
		});
		it( 'state exports reducers', () => {
			expect( typeof  calderaState.state.reducers ).toBe('object');
		});


	});
});