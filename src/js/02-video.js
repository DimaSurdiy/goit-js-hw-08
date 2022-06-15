import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);
const currentTime = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(onPlay, 1000));

if (currentTime) {
  player.setCurrentTime(currentTime);
}

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
