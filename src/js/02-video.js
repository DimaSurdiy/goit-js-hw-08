import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onTimeupdate, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(savedTime);

function onTimeupdate(currentTime) {
  const timeValue = currentTime.seconds;

  localStorage.setItem('videoplayer-current-time', timeValue);
}
