# Usage Overview Overview

## Import Into A webpack Managed Project

`import * as cfStateWebpack from '@caldera-labs/state'`

This import exposes three keys: store,state, and util.
## [`store` - Pure functions for storing state](http://calderalabs.org/caldera-state/identifiers.html#store)
* [Actions]()
* [Selectors]()
* [Reducers]()

## Using In React + Redux App

### App.js injecting state into the app.
```js
import React from 'react';
import { connect } from 'react-redux';
import {state,store} from '@caldera-labs/state';
const {CALDERA_FORMS_STORE_SLUG} = state;
const  {getForms} = store.selectors;
const {
	setForms,
	setForm,
	newForm
} = store.actions;

const App = (props) => {
	return (
		<div>
            <select
                onChange={(newValue) => {
                    props.setForm(newValue);
                }}
            >
                {Object.values(props.forms).map(form => {
                    return (
                        <option 
                            value="form.ID"
                        >
                        {form.label}
                    </option>
                    )
                })}
            </select>	
            <button
                onClick={props.addForm}
            >
                Add Form
            </button>

		</div>
	);

};

const mapStateToProps = state => {
	state = state[CALDERA_FORMS_STORE_SLUG];
	let appState = {
		forms: getForms(state)

	};
	return appState;
};

const mapDispatchToProps = (dispatch) => {
	return {
		setForms: (forms) => {
			dispatch(setForms(forms));
		},
		setForm:(form) => {
			dispatch(setForm(form));
		},
		addForm(){
			dispatch(newForm());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
```

### Index.js Wrapping `<App>` In State
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {state} from '@caldera-labs/state';
const {calderaFormsReduxStore} = state;

ReactDOM.render(
	<Provider store={calderaFormsReduxStore}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
```


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
`cfFormsState.util.fo rmHasId(Object,'cf123456');`