function removeTransition(e) {
  if (e.propertyName != 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  sound(key, audio);
}

function mousePlaySound(e) {
  let audio = document.querySelector(
    `audio[data-key="${e.target.getAttribute('data-key')}"]`
  );
  let key = document.querySelector(
    `div[data-key="${e.target.getAttribute('data-key')}"]`
  );
  if (!audio) {
    audio = document.querySelector(
      `audio[data-key="${e.target.parentNode.getAttribute('data-key')}"]`
    );
    key = document.querySelector(
      `div[data-key="${e.target.parentNode.getAttribute('data-key')}"]`
    );
  }
  if (!audio) return;

  sound(key, audio);
}

function sound(key, audio) {
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
window.addEventListener('mousedown', mousePlaySound);
