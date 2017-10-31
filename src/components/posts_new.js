import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{ field.label }</label>
                <input
                    type="text"
                    {...field.input}
                />
                { field.meta.error }
            </div>
        )
    }

    render() {
        return (
            <form>
                <Field 
                    label="Title"
                    name="title"
                    component={this.renderField}
                />

                <Field
                    label="Categories"                
                    name="categories"
                    component={this.renderField}
                />

                <Field 
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    // validate inputs from values object
    if ( !values.title ) {
        errors.title = "Enter a title";
    }

    if ( !values.categories ) {
        errors.title = "Enter some categories please";
    }

    if ( !values.content ) {
        errors.title = "Enter some content please";
    }

    // if errors empty, the form is fine to submit
    // if errors has any properties, redux form assumes the form invalid 
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
}) (PostsNew);