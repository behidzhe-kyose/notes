import React from 'react';
import { createNote } from '../../actions';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';


class NoteCreate extends React.Component {
    onSubmit = (formValues) => {
        this.props.createNote(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create Note </h3>
                <NoteForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, {createNote})(NoteCreate)