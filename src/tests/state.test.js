import {
	reducers,
	CALDERA_FORMS_STORE_SLUG,
	CALDERA_FORMS_PRIVACY_STORE_SLUG,
	CALDERA_FORMS_STATUS_STORE_SLUG, CALDERA_FORMS_PRO_LOCAL_SETTINGS_SLUG, CALDERA_FORMS_SETTINGS_SLUG
} from "../state";

describe( 'state exports', () => {
	describe( 'Reducer combining', () => {
		it( 'Has forms reducer', () => {
			expect( typeof reducers[CALDERA_FORMS_STORE_SLUG] ).toBe('function');
		});
		it( 'Has privacy reducer', () => {
			expect( typeof reducers[CALDERA_FORMS_PRIVACY_STORE_SLUG] ).toBe('function');
		});
		it( 'Has status reducer', () => {
			expect( typeof reducers[CALDERA_FORMS_STATUS_STORE_SLUG] ).toBe('function');
		});
		it( 'Has pro local settings reducer', () => {
			expect( typeof reducers[CALDERA_FORMS_PRO_LOCAL_SETTINGS_SLUG] ).toBe('function');
		});
		it( 'Has settings reducer', () => {
			expect( typeof reducers[CALDERA_FORMS_SETTINGS_SLUG] ).toBe('function');
		});
	});
});