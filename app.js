//alert('Mi mensaje está bien linkeado');

//gritar(str)
//Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

//gritar('hola') // ¡hola!
//gritar('aaaaaa') // ¡aaaaaa!

const str = prompt(`Ingresa una palabra`);
const gritar= (srt)=> {
    return `¡${str}!`
};

console.log(gritar(str));