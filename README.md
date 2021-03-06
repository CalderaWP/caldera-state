Redux(-like) state management for [Caldera Forms](https://github.com/calderawp/caldera-forms).


[![Build Status](https://travis-ci.org/CalderaWP/caldera-state.svg?branch=master)](https://travis-ci.org/CalderaWP/caldera-state)
[![Documentation Status](https://calderalabs.org/caldera-state/badge.svg)](https://calderalabs.org/caldera-state/source.html)
[![Coverage Status](https://coveralls.io/repos/github/CalderaWP/caldera-state/badge.svg?branch=master)](https://coveralls.io/github/CalderaWP/caldera-state?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/ea1e71a99028918cec68/maintainability)](https://codeclimate.com/github/CalderaWP/caldera-state/maintainability)

🌋 👀[Documentation](https://calderalabs.org/caldera-state/)
## Installation
### Add to a Project
Requires npm

`npm i -D caldera-state`

## Usage
### Import With webpack
```js
    import {state} from '@caldera-labs/state';
    const STORE_SLUG = state.CALDERA_FORMS_STORE_SLUG;
```

### Reference Implementations
This module is used was added to Caldera Forms, first for block UI and privacy settings screen. [Pull request](https://github.com/CalderaWP/Caldera-Forms/pull/2611)

### Checkout For Development
Requires git and npm

* Clone from Github
    - `git clone git@github.com:calderawp/caldera-state.git`
* Install
    - `cd caldera-state && npm install`
* See "Available Scripts" below for more information on development

## What Is This?
This package provides Redux(-like) state management for Caldera Forms configurations and other things that need their state managed in a React app, such as Gutenberg.

Also, an example app and test coverage for all of that.

## Why Is This?
* https://github.com/CalderaWP/Caldera-Forms/issues/2564
* Once source of single source of state
    - We need to state management in CF core, pro, and add-ons.
* Isolated testing.
    - Test basic functionality with mocks here.
    - Test that it actually works with CF REST API in CF.


## Usage
### Import Into A webpack Managed Project

`import * as cfStateWebpack from '@caldera-labs/state'`

This import exposes three keys: store,state, and util.
### [`store` - Pure functions for storing state](http://calderalabs.org/caldera-state/identifiers.html#store)
* [Actions]()
* [Selectors]()
* [Reducers]()

### [`state` - Interactions with Redux or wp.data](http://calderalabs.org/caldera-state/identifiers.html#state)
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


### [`util` - Utility functions](http://calderalabs.org/caldera-state/identifiers.html#util)

#### Find the form with a specific ID in an array of forms.
`cfFormsState.util.findFormById(Array,'cf123456');`

#### Check if a  given form config object has an ID
`cfFormsState.util.formHasId(Object,'cf123456');`

## Current Status
* ✔️ State management for forms.
* ✔️ State management for settings.
* ✖️ Migrate CF Pro state from Vuex to Redux.
* ✔️ Integration with wp.data. 
* ✔️ Entries

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

This shows the example app that uses this to show and update a list of forms.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>


### Release To npm
Must be [logged in as project maintainer via npm cli](https://docs.npmjs.com/cli/adduser)

* Patch release:
    - `yarn release`

* Minor release:
    - `yarn release:minor`

* Major release:
    - `yarn release:major`
