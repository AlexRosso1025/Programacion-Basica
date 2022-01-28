let draw = document.getElementById('draw');
let lienzo = draw.getContext('2d');

lienzo.beginPath();
lienzo.strokeStyle = 'orange';
lienzo.moveTo('80','120');
lienzo.lineTo('120','80');
lienzo.lineTo('160','120');
lienzo.lineTo('240','120');
lienzo.lineTo('280','80');
lienzo.lineTo('320','120');
lienzo.lineTo('320','240');
lienzo.lineTo('240','320');
lienzo.lineTo('160','320');
lienzo.lineTo('80','240');
lienzo.lineTo('80','120');
lienzo.stroke();
lienzo.closePath();

const dibujarLinea = ( color, xInicial, yInicial, xFinal, yFinal) => {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo( xInicial, yInicial );
    lienzo.lineTo( xFinal, yFinal );
    lienzo.stroke();
    lienzo.closePath();
};

dibujarLinea( 'blue', 80, 120, 120, 80);
dibujarLinea( 'purple', 120, 80, 160, 120);