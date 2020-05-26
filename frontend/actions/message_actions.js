export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MY_MESSAGE = 'RECEIVE_MY_MESSAGE';

export const receiveMessage = message => ({
    type: RECEIVE_MESSAGE,
    message
});

export const receiveMyMessage = message => ({
    type: RECEIVE_MY_MESSAGE,
    message
});