/* Select elements */
const videoPlayer = document.querySelector('.player');
const video = videoPlayer.querySelector('.viewer');
const progress = videoPlayer.querySelector('.progress');
const progressBar = videoPlayer.querySelector('.progress__filled');
const togglePlayBtn = videoPlayer.querySelector('.toggle');
const skipBtns = videoPlayer.querySelectorAll('[data-skip]');
const ranges = videoPlayer.querySelectorAll('.player__slider');
const fullscreenBtn = videoPlayer.querySelector('.fullscreen__button');

/* app logic */
function togglePlay() {
  if (video.paused) {
    video.play();
    return;
  }
  video.pause();
}

function updateButton() {
  togglePlayBtn.textContent = video.paused ? '❚ ❚' : '►';
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleSlider() {
  video[this.name] = this.value;
}

function handleProgress() {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progress}%`
}

function updateProgress(e) {
  const progressTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = progressTime;
  console.log(video);
}

function toggleFullScreen() {
  video.requestFullscreen();
}


/* event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

togglePlayBtn.addEventListener('click', togglePlay);

skipBtns.forEach( btn => btn.addEventListener('click', skip));

ranges.forEach( slider => slider.addEventListener('change', handleSlider ))

progress.addEventListener('click', updateProgress);
let mousedown = false;
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousemove', (e) => mousedown && updateProgress(e));

fullscreenBtn.addEventListener('click', toggleFullScreen);
