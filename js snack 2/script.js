// A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
// Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]
// generiamo array numeri da 1 a 10
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(number);

// generiamo array con potenze al quadrato
const number2 = number.map( (element) => element * element);
console.log(number2)

// creare nodo html
const printArray = document.querySelector(".array1")
printArray.innerHTML += `${number}`

const printArray2 = document.querySelector(".array2")
printArray2.innerHTML += `${number2}`



