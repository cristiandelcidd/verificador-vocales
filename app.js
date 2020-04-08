const boton = document.getElementById('btn');

boton.addEventListener('click', function() {
    var palabra = document.getElementById('input');
    var arregloPalabra = palabra.value.split('');
    var vocales = [];
    console.log(arregloPalabra);
    console.log(vocales);
    if(arregloPalabra.length === 0) {
        alert('Ingrese una palabra valida');
    } else {
        for (let i = 0; i < arregloPalabra.length; i++) {
            switch(arregloPalabra[i]) {
                case 'a':
                case 'A':
                    vocales.push(arregloPalabra[i]);
                    break;
                case 'e':
                case 'E':
                    vocales.push(arregloPalabra[i]);
                    break;
                case 'i':
                case 'I':
                    vocales.push(arregloPalabra[i]);
                    break;
                case 'o':
                case 'O':
                    vocales.push(arregloPalabra[i]);
                    break;
                case 'u':
                case 'U':
                    vocales.push(arregloPalabra[i]);           
            }
            document.getElementById('salida-texto').textContent = `${palabra.value} tiene ${vocales.length} vocales (${vocales}).`;

        }
    }
});