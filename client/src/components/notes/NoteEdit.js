import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editNote, fetchNote } from '../../actions';
import NoteForm from './NoteForm';

const Edit = (props) => {
    const dispatch = useDispatch();
    const note = useSelector(state => (state.notes[props.match.params.id]));

    useEffect(() => {
        dispatch(fetchNote(props.match.params.id))
    }, []);

    const onSubmit = (formValues) => {
        dispatch(editNote(props.match.params.id, formValues))
    }

    return (
        <div>
            <h3>Edit Note</h3>
            <NoteForm initialValues={note} onSubmit={onSubmit} />
        </div>
    )
}

export default Edit;