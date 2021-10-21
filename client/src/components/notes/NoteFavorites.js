import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotes } from '../../actions';
import Note from './Note';

const NoteFavorites = () => {
    const dispatch = useDispatch();

    const notes = useSelector(state => Object.values(state.notes));
    const favorites = notes.filter(note => note.favorite);

    useEffect(() => {
        dispatch(fetchNotes());
    }, []);

    return (
        <div>
            <h3>Favorites</h3>
            <div className="ui middle aligned list ui cards" style={{paddingTop: '20px'}}>
                <Note notes={favorites} />
            </div>
        </div>
    )
}

export default NoteFavorites;