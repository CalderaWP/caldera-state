# Usage Overview Overview

## Import Into A webpack Managed Project

`import * as cfStateWebpack from '@caldera-labs/state'`

This import exposes three keys: store,state, and util.
## [`store` - Pure functions for storing state](http://calderalabs.org/caldera-state/identifiers.html#store)
* [Actions]()
* [Selectors]()
* [Reducers]()

## [`state` - Interactions with Redux or wp.data](http://calderalabs.org/caldera-state/identifiers.html#state)
```js
import * as cfFormsState from '@caldera-labs/state';
export const STORE = {
    reducer( state = DEFAULT_STATE, action ) {
        return cfFormsState.store.reducers.formsReducer(DEFAULT_STATE,action);
    },
    actions: cfFormsState.store.actions,
    selectors: cfFormsState.store.selectors,
};

```


## [`util` - Utility functions](http://calderalabs.org/caldera-state/identifiers.html#util)

### Find the form with a specific ID in an array of forms.
`cfFormsState.util.findFormById(Array,'cf123456');`

### Check if a  given form config object has an ID
`cfFormsState.util.formHasId(Object,'cf123456');`