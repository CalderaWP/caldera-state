import  React from 'react'
export const Form = (props) => {
    const form = props.form;
    return (
        <div
            id={`form-list-${form.ID}`}
        >
            <h2>
                {form.name}
            </h2>
            <input
                type={'text'}
                value={form.name}
                onChange={(event) => {
                    return props.onFormUpdate(
                        {
                            ...form,
                            name:event.target.value
                        }
                    )
                }
                }
            />
        </div>

    );
};