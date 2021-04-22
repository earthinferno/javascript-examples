/** @type {HTMLCanvasElement} */
const canvas = document.querySelector("#draw");

function setCanvasDimensions() {
  canvas.width = window.innerWidth - 10;
  canvas.height = window.innerHeight - 10;
}
setCanvasDimensions();

const ctx = canvas.getContext('2d');

//ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
//ctx.lineWidth = 100;

let isDrawing = false;
let sizeGrowing = false;
let [lastX, lastY] = [0,0];
let hue = 0;
ctx.lineWidth = hue;

function draw(e) {
  if (!isDrawing) return;
  console.log(e);

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX,lastY);
  ctx.lineTo(e.offsetX,e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX,e.offsetY]
  hue++;
  if (hue >= 360) hue = 0;

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    sizeGrowing = !sizeGrowing;
  }
  if (sizeGrowing){
    ctx.lineWidth++
  } else {
    ctx.lineWidth--;
  }



}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX,e.offsetY]
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

//window.addEventListener('resize', setCanvasDimensions);