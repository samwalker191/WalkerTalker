export const fetchRooms = () => (
    $.ajax({
        method: 'GET',
        url: '/api/rooms'
    })
);