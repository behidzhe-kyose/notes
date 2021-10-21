import React from "react";
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import NoteCreate from './notes/NoteCreate';
import NoteDelete from './notes/NoteDelete';
import NoteEdit from './notes/NoteEdit';
import NoteList from './notes/NoteList';
import NoteShow from './notes/NoteShow';
import NoteFavorites from './notes/NoteFavorites';
import history from '../history';

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={NoteList} />
            <Route path='/notes/new' component={NoteCreate} />
            <Route path='/notes/edit/:id' component={NoteEdit} />
            <Route path='/notes/delete/:id' component={NoteDelete} />
            <Route path='/notes/show/:id' component={NoteShow} />
            <Route path='/notes/favorites' component={NoteFavorites} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
