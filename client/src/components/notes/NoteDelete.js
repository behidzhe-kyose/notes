import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNote, deleteNote } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class NoteDelete extends React.Component {
    componentDidMount() {
        this.props.fetchNote(this.props.match.params.id)
    }

    renderContent = () => {
        if(!this.props.note) {
            return "Are you sure you want to delete";
        }
        return `Are you sure you want to delete a ${this.props.note.title}`;
    }


    renderActions = () => {
        return (
            <>
                <button onClick={() => this.props.deleteNote(this.props.match.params.id)} className="ui button negative">Delete</button>
                <Link to={'/'} className="ui button primary">Cancel</Link>
            </>
        )
    }

    render() {
        return (
            <div>
                <Modal 
                    title="Delete a Note"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { note: state.notes[ownProps.match.params.id] }
}


export default connect (mapStateToProps, { fetchNote, deleteNote })(NoteDelete);