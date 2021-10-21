import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNotes, setFavorites } from '../../actions';
import Note from './Note';

class NoteList extends React.Component {
    componentDidMount() {
        this.props.fetchNotes();
    }
    
    render() {
        return (
            <div>
                <Link to='/notes/new' className="ui button primary">
                    <i className="plus icon"></i>
                    Create note
                </Link>
                <div className="ui middle aligned list cards" style={{paddingTop: '20px'}}>
                    <Note notes={this.props.notes} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
   return { notes: Object.values(state.notes) }
}

export default connect(mapStateToProps, { fetchNotes, setFavorites })(NoteList);