import Player from '@vimeo/player';
import throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate',throttle(timeUpdate, 1000));

function timeUpdate(data) {
    const currentTime = data.seconds;

    localStorage.setItem('videoplayer-current-time', currentTime);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
