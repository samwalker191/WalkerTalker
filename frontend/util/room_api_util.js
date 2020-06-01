export const fetchRooms = () => (
    $.ajax({
        method: 'GET',
        url: '/api/rooms'
    })
);

export const fetchRoom = roomId => (
    $.ajax({
        method: 'GET',
        url: `/api/rooms/${roomId}`
    })
);

export const createRoom = room => (
    $.ajax({
        method: 'POST',
        url: '/api/rooms',
        data: { room }
    })
);

export const searchRooms = query => (
    $.ajax({
        method: 'GET',
        url: `/api/search/${query}`
    })
);

export const joinRoom = roomId => (
    $.ajax({
        method: 'POST',
        url: '/api/room_memberships',
        data: { roomId },
    })
);