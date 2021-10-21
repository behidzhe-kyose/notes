import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFavorites } from '../../actions';

class Note extends React.Component {
    setFavorites = (id, favorite) => {
        this.props.setFavorites(id, favorite);
    }

    renderActionButtons = (id) => {
        return (
            <div className="extra content">
                <span className="left floated">
                    <Link to={`/notes/edit/${id}`} className="ui primary basic button"> Edit </Link>
                </span>
                <span className="right floated">
                    <Link to={`/notes/delete/${id}`} className="ui negative basic button"> Delete </Link>
                </span>
            </div>
        )
    }

    renderNotes = () => {
        return _.values(this.props.notes).map(note => {
            const { id, favorite, title, description } = note;
            const starIcon = `${!favorite ? 'outline' : ''}`;

            return (
                <div className="ui item card" key={id}>
                    <div className="content" >
                        <i 
                            onClick={() => this.setFavorites(id, favorite)} 
                            className={`right floated star ${starIcon} icon`}>
                        </i>
                        <h4 className="header"> 
                            <Link to={`/notes/show/${id}`} style={{color: 'inherit'}}>{title}</Link>
                        </h4>
                        <p className="description" > 
                            <Link to={`/notes/show/${id}`} style={{color: 'inherit'}}>
                                {description.length > 80 ? description.substring(0, 80) + '...' : description} 
                            </Link>
                        </p>
                    </div>

                    {this.renderActionButtons(id)}
                </div>
            )
        })
    }

    render() {
        return (
            <>{this.renderNotes()}</>
        )
    }
}


export default connect(null, { setFavorites })(Note);