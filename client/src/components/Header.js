import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <div className="item">
                <Link to='/'>Notes</Link>
            </div>
            <div className="right menu">
                <Link to="/notes/favorites" className="item">Favorites</Link>
            </div>
        </div>
    )
}

export default Header;