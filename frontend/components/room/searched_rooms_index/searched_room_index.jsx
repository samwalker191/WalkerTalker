import React, { useState, useEffect } from 'react';
import SearchedRoomIndexItem from './searched_room_index_item';
import styles from './searched_room_index.module.css';

const SearchedRoomIndex = ({ 
    rooms, 
    searchRooms, 
    closeModal, 
    joinRoom,
    receiveMessage,
    receiveMyMessage,
    currentUserId 
}) => {
    const [query, setQuery] = useState('');
    useEffect(() => {
        if (query) {
            searchRooms(query);
        }
    }, [query]);
    
    function showRooms() {
        if (rooms.length > 0) {
            return (
                <ul className={styles.searchResults}>
                    {rooms.map(room => {
                        return <SearchedRoomIndexItem 
                            room={room}
                            joinRoom={joinRoom}
                            searchRooms={searchRooms}
                            query={query}
                            receiveMessage={receiveMessage}
                            receiveMyMessage={receiveMyMessage}
                            currentUserId={currentUserId} 
                            key={room.id} 
                        />
                    })}
                </ul>
            );
        } else {
            return null;
        }
    };

    return (
        <div className={styles.searchIndex}>
            <form>
                <input 
                    type="text" 
                    value={query}
                    placeholder='Search Rooms'
                    onChange={(e) => setQuery(e.currentTarget.value)}
                />
            </form>
            {showRooms()}
        </div>
    );
};

export default SearchedRoomIndex;