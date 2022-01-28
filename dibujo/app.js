let draw = document.getElementById('draw');
let lienzo = draw.getContext('2d');
const lineas = 50;
let l = 0;
let yi, xf = 0;
let globalColor = 'black';

const createLine = ( color, xInitial, yInitial, xFinal, yFinal) => {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo( xInitial, yInitial);
    lienzo.lineTo( xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
};

/*while( l < lineas) {
    yi = l * 10;
    xf = (l + 1) * 10;
    createLine( 'black', 0, yi*2, xf*2, 500);
    createLine( 'blue', 0, yi*4, xf*4, 500);
    l++;
}*/
for ( l=0; l < lineas; l++ ) {
    yi = l * 10;
    xf = (l + 1) * 10;
    createLine( 'black', 0, yi, xf, 500);   
}

for ( l=0; l < lineas; l++ ) {
    yi = 500 - (l * 10);
    xf = (l + 1) * 10;
    createLine( 'blue', 0, yi, xf, 0);
}


createLine( globalColor, 1, 1, 1, 499);
createLine( globalColor, 1, 499, 499, 499);