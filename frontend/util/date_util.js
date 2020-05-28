const formatTime = (hours, minutes) => {
    let formatHours = hours;
    let formatMinutes = minutes;
    
    if (hours < 10) {
        formatHours = `0${hours}`;
    }

    if (minutes < 10) {
        formatMinutes = `0${minutes}`;
    }

    return `${formatHours}:${formatMinutes}`;
};

const formatDate = date => {
    let month = date.toLocaleString('default', { month: 'long' });
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    let time = formatTime(hours, minutes);
    return `${month} ${day}, ${time}`;
};

export default formatDate;