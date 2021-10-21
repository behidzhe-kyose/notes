import React from 'react';
import { Field, reduxForm } from 'redux-form';


class NoteForm extends React.Component {
    renderError = ({ error, touched }) => {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error} </div>
                </div>
            )
        }
    }
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error': ''}`;

        return (
            <div className={className}>
                <label> {label} </label>
                <input {...input }  />
                {this.renderError(meta)}
            </div>
        )
    }

    renderTextArea = ({input, label, placeholder, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error': ''}`;

        return (
            <div className={className}>
                <label> {label} </label>
                <textarea {...input} placeholder={placeholder} rows="5" validate="required" />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field component={this.renderInput} name="title" label="Title" />
                <Field component={this.renderTextArea} name="description" label="Note" placeholder="Add your note.."  />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {};

    if(!formValues.title) {
        errors.title = 'Enter a Title'
    }
    if(!formValues.description) {
        errors.description = 'Enter your Note'
    }
    return errors;
}

export default reduxForm({
    form: 'noteForm',
    validate,
})(NoteForm);
