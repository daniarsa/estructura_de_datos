
//ejercicio 1
function obtenerMenor ( numeros ) {
    let  menor  =  Infinito ;
    for (let  i=0;  i<numeros.length; i++ ) {
       if(numeros[i]<=menor){
          menor = números [i]
       }
    }
    return( menor )
}

cconsole.log ( obtenerMenor ([ 5 , 77 , 99 , 6 , 2 , 33 ]))
cconsole.log ( obtenerMenor ([ 576 , 747 , 299 , 632 , 222 , 333 ]))

//ejercicio 2
function sumar(numeroSuma) {
    let resultado = "";

    for (let i = 0; i < numeroSuma.length; i++) {
        resultado = parseInt(resultado + numeroSuma[i])
    }
    return resultado;
}

console.log(sumar([5, 77, 99, 6, 2, 33]))

//ejercicio 3
function invertirCaso(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}

console.log(invertirCaso('Das'))

//ejercicio 4
function gano(tragamonedas) {
    if (tragamonedas.length < 5) {
      return false;
    }
   
    for (let i = 1; i < 5; i++) {
      if (tragamonedas[i] !== tragamonedas[0]) {
        return false;
      }
    }
   
    return true;
  }
 
  let tragamonedas1 = ['!','#','$','%','&'];
  let tragamonedas2 = ['?','?','?','?','?'];
 
  console.log(gano(tragamonedas1));
  console.log(gano(tragamonedas2));

  //ejercicio 5
  const  estarJuntos  =  ( personajes ) => {
    const  frodo  =  personajes . indexOf ( 'frodo' ) ; //buscar por nombres
    const sam  =  personajes . indexOf ( 'sam' ) ;
    return sam  -  frodo  ===  1  ||  sam  -  frodo  ===  - 1 ;
  }
  console.log ( estarJuntos ( 'sam' ,  'frodo' ,  'legolas' ) )
  console.log ( estarJuntos ( 'sam' ,  'legolas' , 'frodo' ) ) ;
