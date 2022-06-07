const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth - 60;
canvas.height = window.innerHeight - 80;

const c = canvas.getContext("2d");
c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

let drawColor = "black";
let drawWdith = "2";
let drawing = false;

const begin = (e) => {
  drawing = true;
  c.beginPath();
  c.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
};

const draw = (e) => {
  if (drawing === true) {
    c.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    c.strokeStyle = drawColor;
    c.lineWidth = drawWdith;
    c.lineCap = "round";
    c.lineJoin = "round";
    c.stroke();
  }
};

const stop = (e) => {
  if (drawing === true) {
    c.stroke();
    c.closePath();
    drawing = false;
  }
};

const changeColor = (element) => {
  drawColor = element.style.background;
};

const clearCanvas = () => {
  c.fillStyle = "white";
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillRect(0, 0, canvas.width, canvas.height);
};

canvas.addEventListener("mousedown", begin, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);
