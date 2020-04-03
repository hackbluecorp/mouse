document.addEventListener("mousedown", dibujarMouse);
document.addEventListener("mousemove", dibujarMouse);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
 console.log("dibujarLinea", xinicial, yinicial, xfinal, yfinal);
 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.lineWidth = 3;
 lienzo.lineHeight = 3;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();
}

function dibujarMouse(evento)
{
  if (evento.buttons == 1)
  {
    console.log(evento);
    var colorcito = "blue";
    var movimientoX = evento.movementX;
    var movimientoY = evento.movementY;
    var xIni = evento.x;
    var yIni = evento.y;
    var xFin = 0;
    var yFin = 0;
    xFin = xIni + movimientoX;
    yFin = yIni + movimientoY;
    dibujarLinea(colorcito, xIni, yIni, xFin, yFin, papel);
  }
}
