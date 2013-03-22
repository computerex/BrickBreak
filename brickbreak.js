var canvas = null;
var context = null;

function init()
{
     canvas = document.getElementById("canvas");
     context = canvas.getContext("2d");
     context.beginPath();
     context.moveTo(0,0);
     context.lineTo(canvas.width, canvas.height);
     context.stroke();
}

init();
