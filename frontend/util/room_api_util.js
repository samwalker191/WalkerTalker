export const fetchRooms = () => (
    $.ajax({
        method: 'GET',
        url: '/api/rooms'
    })
);

export const createRoom = room => (
    $.ajax({
        method: 'POST',
        url: '/api/rooms',
        data: { room }
    })
);