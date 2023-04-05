//archivo js para la calculadora

function sumaNumeros(){
    //DECLARACION LET Y CONST
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');
    //PROCESO
    const suma = n1 + n2;
    //SALIDA
    //alert('Resultado de la suma: '+suma);
    resultado.innerHTML="Resultado: "+suma;
}

function restaNumeros(){
    //DECLARACION LET Y CONST
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');
    //PROCESO
    const resta = n1 - n2;
    //SALIDA
    //alert('Resultado de la suma: '+suma);
    resultado.innerHTML="Resultado: "+resta;
}

function multplicaNumeros(){
    //DECLARACION LET Y CONST
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');
    //PROCESO
    const multiplica = n1 * n2;
    //SALIDA
    //alert('Resultado de la suma: '+suma);
    resultado.innerHTML="Resultado: "+multiplica;
}

function divideNumeros(){
   //DECLARACION LET Y CONST
   const n1 = parseInt(document.getElementById('ent1').value);
   const n2 = parseInt(document.getElementById('ent2').value);
   const resultado = document.getElementById('resultado');
   //PROCESO
   const divide = n1 / n2;
   //SALIDA
   //alert('Resultado de la suma: '+suma);
   resultado.innerHTML="Resultado: "+divide;
}

