import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { fetchRooms, searchRooms } from './actions/room_actions';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // begin testing 
    window.store = store;
    window.fetchRooms = fetchRooms;
    window.searchRooms = searchRooms;
    // end testing
    
    ReactDOM.render(<Root store={store}/>, root);
});