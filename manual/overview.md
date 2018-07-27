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
`state.calderaFormsReduxStore` exports a Redux-store. This object contains the return value of Redux's [`createStore` function](https://redux.js.org/api-reference/createstore) 
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

### Create Redux Store From Reducers
The object `state.reducers` contains an object of reducers, indexed by their standard identifiers. It is designed to be used with Redux's [`combineReducers`](https://redux.js.org/api-reference/combinereducers) and [`createStore`](https://redux.js.org/api-reference/createstore) functions.

While `state.calderaFormsReduxStore` does this for you automatically, you might want to add other reducers first. For example:

```js
import {state}  from '@caldera-labs/state';
import {createStore,combineReducers} from 'redux';

//Add one new reducer to set
const myReducers = {
	...reducers,
	roy: (state = { mike:true}, action ) => {
		switch (action.type) {
			default:
				return state;
		}
	}
};

//Export store with normal and custom reducers
export const store = createStore(
	combineReducers(myReducers),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
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