import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FormList} from './FormList';
import { connect } from 'react-redux';
import {CALDERA_FORMS_STORE_SLUG} from './state';
import  {
	getForms,
} from './state/selectors';
import {
	setForms,
	setForm,
	newForm
} from './state/actions';

const App = (props) => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Caldera State Example</h1>
			</header>
			<div>
				<FormList
					forms={props.forms}
					setForms={props.setForms}
					onFormUpdate={(newValue) => {
						props.setForm(newValue);
					}}
				/>
				<button
					onClick={props.addForm}
				>
                Add Form
				</button>
			</div>
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

