import * as calderaState from '../state/module';
import {closeStatus, startSpinner, stopSpinner, updateStatus} from "../state/actions.status";
import {setEntries} from "../state/actions.entries";
import {getPageOfEntries} from "../state/selectors.entries";

describe('root export', () => {

	describe('exports actions', () => {
		it('exports object of actions', () => {
			expect(typeof calderaState.store.actions).toBe('object');
		});
		it('exports newForm action', () => {
			expect(typeof calderaState.store.actions.newForm).toBe('function');
		});
		it('exports startSpinner action', () => {
			expect(typeof calderaState.store.actions.startSpinner).toBe('function');
		});
		it('exports stopSpinner action', () => {
			expect(typeof calderaState.store.actions.stopSpinner).toBe('function');
		});
		it('exports closeStatus action', () => {
			expect(typeof calderaState.store.actions.closeStatus).toBe('function');
		});
		it('exports updateStatus action', () => {
			expect(typeof calderaState.store.actions.updateStatus).toBe('function');
		});
		it('exports setEntries action', () => {
			expect(typeof calderaState.store.actions.setEntries).toBe('function');
		});
	});

	describe( 'exports reducers', () => {
		it( 'exports status reducer', () => {
			expect(typeof calderaState.store.reducers.statusReducer).toBe('function');
		});
	});

	describe( 'exports selectors', () => {
		it( 'exports object of selectors reducer', () => {
			expect(typeof calderaState.store.selectors).toBe('object');
		});

		it( 'exports getPageOfEntries reducer', () => {
			expect(typeof calderaState.store.selectors.getPageOfEntries).toBe('function');
		});
	});
	describe('exports state', () => {
		it('export has state property', () => {
			expect(typeof  calderaState.state).toBe('object');
		});

		it('state exports CALDERA_FORMS_STORE_SLUG', () => {
			expect(typeof  calderaState.state.CALDERA_FORMS_STORE_SLUG).toBe('string');
		});

		it('state exports CALDERA_FORMS_PRIVACY_STORE_SLUG', () => {
			expect(typeof  calderaState.state.CALDERA_FORMS_PRIVACY_STORE_SLUG).toBe('string');
		});

		it('state exports CALDERA_FORMS_STATUS_STORE_SLUG', () => {
			expect(typeof  calderaState.state.CALDERA_FORMS_STATUS_STORE_SLUG).toBe('string');
		});

		it('state exports CALDERA_FORMS_SETTINGS_SLUG', () => {
			expect(typeof  calderaState.state.CALDERA_FORMS_SETTINGS_SLUG).toBe('string');
		});

		it('state exports CALDERA_FORMS_PRO_LOCAL_SETTINGS_SLUG', () => {
			expect(typeof  calderaState.state.CALDERA_FORMS_PRO_LOCAL_SETTINGS_SLUG).toBe('string');
		});

		it('state exports calderaFormsFormState', () => {
			expect(typeof  calderaState.state.calderaFormsFormState).toBe('object');
		});

		it('state exports calderaFormsReduxStore', () => {
			expect(typeof  calderaState.state.calderaFormsReduxStore).toBe('object');
		});
		it('state exports reducers', () => {
			expect(typeof  calderaState.state.reducers).toBe('object');
		});


	});
});