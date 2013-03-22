var canvas = null;
var context = null;
var batwidth=100;
var batheight=20;
var batx = 0;
var baty = 0;

function update()
{
}

function draw()
{
     context.clearRect(0,0,canvas.width,canvas.height);
     context.fillRect(batx, baty, batwidth, batheight);
     
     context.strokeText("x: " + batx + "y: " + baty, 10, 10);
}

function mouseMove(e)
{
     var halfwidth = batwidth/2;
     var halfheight = batheight/2;
     
     batx=e.pageX-halfwidth;
     //baty=e.pageY-halfheight;
     
     if ( batx < 0 )
          batx = 0;
     if ( batx > canvas.width-batwidth )
          batx=canvas.width-batwidth;
     draw();
}

function init()
{
     canvas = document.getElementById("canvas");
     canvas.style.cursor="none";
     baty=canvas.height-batheight;
     context = canvas.getContext("2d");
     context.fillStyle="red";
     jQuery("#canvas").mousemove(mouseMove);
}

init();
