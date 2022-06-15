import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframeEl = document.querySelector('#vimeo-player');

const CURRENT_TIME = 'videoplayer-current-time';
const player = new Player(iframeEl);
const currentTime = localStorage.getItem(CURRENT_TIME);

player.on('timeupdate', throttle(onPlay, 1000));

if (currentTime) {
  player.setCurrentTime(currentTime);
}

function onPlay(data) {
  localStorage.setItem(CURRENT_TIME, data.seconds);
}
