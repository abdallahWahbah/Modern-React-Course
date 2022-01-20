import React from "react";
import {Field, reduxForm} from 'redux-form';

class StreamForm extends React.Component
{
    renderError (meta)
    {
        if(meta.touched && meta.error) 
        {
            return (
                <div className="ui error message">
                    <div className="header">{meta.error}</div>
                </div>
            )
        }
    }

    // the formProps is coming from the component attribute of the Field component (redux-form)
    renderInput = (formProps) => // formProps.input contains (name, value, onChange, onBlur....)
    {
        // console.log(formProps)
        const classes =`field ${formProps.meta.error && formProps.meta.touched ? "error" : ""}`;
        return(
            // <input onChange={formProps.input.onChange} value={formProps.input.value} />
            <div className={classes}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off"/> {/* spread all attributes and add them as properties to the input */}
                {this.renderError(formProps.meta)}
            </div>
        )
    }

    onSubmit = (values) => 
    {
        console.log(values);
        this.props.onSubmit(values); // action creator
    }

    render()
    {
        return (
            // this.props.handleSubmit in coming from "redux-form", we pass a function to it to execute
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title"/> {/* the label is automatically passed to the renderInout method */}
                <Field name="description" component={this.renderInput} label="Enter Description"/>{/* name is like the name of the property that the field is going to manage */}
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (values) => 
{
    const errors={};
    if(!values.title) errors.title = "Please, enter a valid title";
    if(!values.description) errors.description = "Please, enter a valid description";
    return errors;
}

export default reduxForm({ // reduxForm has the same functionality of connect function
    form: "streamForm", // (form is reference to the form reducer) a name (the value) for the form // will appear in redux dev tools
    validate,
})(StreamForm);

