import React from 'react';
import {Form} from "./Form";

export const FormList = (props) => {
    if (!Object.values(props.forms).length) {
        return (
            <div>
                <button
                    onClick={() => {
                        const forms = [
                            {
                                ID: 'CF1',
                                name: 'Form One'
                            },
                            {
                                ID: 'CF2',
                                name: 'Form Two'
                            },

                            {
                                ID: 'CF3',
                                name: 'Form Three'
                            }
                        ];
                        props.setForms(forms);
                    }}
                >
                    Add 3 Forms
                </button>
            </div>
        );
    }
    return (
        <div>
            <div>
                {Object.values(props.forms).map((form) => {
                    return (
                        <Form
                            key={form.ID}
                            form={form}
                            onFormUpdate={props.onFormUpdate}
                        />

                    )
                })}
            </div>
        </div>
    )
};


