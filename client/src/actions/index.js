import notes from '../apis/notes';
import history from '../history';

export const createNote = (formValues) => async dispatch => {
    const response = await notes.post('/notes', {...formValues, favorite: false});
    dispatch({ type: 'CREATE_NOTE', payload: response.data});

    history.push('/')
}

export const fetchNotes = () => async dispatch => {
    const response = await notes.get('/notes');
    dispatch({ type: 'FETCH_NOTES', payload: response.data})
}

export const fetchNote = (id) => async dispatch => {
    const response = await notes.get(`/notes/${id}`);
    dispatch({ type: 'FETCH_NOTE', payload: response.data })
}

export const editNote = (id, formValues) => async dispatch => {
    const response = await notes.patch(`/notes/${id}`, formValues);
    dispatch({ type: 'EDIT_NOTE', payload: response.data });
    history.push('/')
}

export const deleteNote = id => async dispatch => {
    await notes.delete(`/notes/${id}`);
    dispatch({ type: 'DELETE_NOTE', payload: id });
    history.push('/')
}

export const setFavorites = (id, favorite, formValues) => async dispatch => {
    const response = await notes.patch(`/notes/${id}`, {...formValues, favorite: !favorite});    
    dispatch({ type: 'SET_FAVORITES', payload: response.data })
}