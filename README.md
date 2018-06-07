Redux(-like) state management for [Caldera Forms](https://github.com/calderawp/caldera-forms).


## Installation
### Add to a Project
Requires npm

`npm i -D caldera-state`

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
- This package has 28 tests at initial commit. CF core does not have Jest setup yet.

## Current Status
* ✔️ State management for forms.
* ✖️ Migrate CF Pro state from Vuex to Redux.
* ✖️ Integration with wp.data. Blocked by https://github.com/WordPress/packages/pull/136
* ✖️ Entries

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
