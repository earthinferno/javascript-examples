const panels = document.querySelectorAll('.panel');
const panelchildren = document.querySelectorAll('.panel p');


function focus (e) {
  console.log(this);
  this.classList.toggle('open');
}

function focusActive (e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', focus))
panels.forEach(panel => panel.addEventListener('transitionend', focusActive))

panelchildren.forEach(child => child.addEventListener('click', focus))