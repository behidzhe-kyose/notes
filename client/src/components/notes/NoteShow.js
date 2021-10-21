import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNote } from '../../actions';

class NoteShow extends React.Component {
    componentDidMount() {
        this.props.fetchNote(this.props.match.params.id)
    }

    renderNote = () => {
        if(this.props.note) {
            const { title, description } = this.props.note;
            
            return (
                <div className="ui piled segment">
                    <h4 className="header"> {title} </h4>
                    <p> {description} </p>
                </div>
            )
        }
    }

    render() {
        return (
           <> 
            {this.renderNote()} 
            <Link to={'/'}>Back to Notes</Link>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { note: state.notes[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchNote })(NoteShow);