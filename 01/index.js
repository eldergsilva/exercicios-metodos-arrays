const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

 
frutas.reverse();
const frutasInvertidas = frutas.join(', ');
console.log(frutasInvertidas); 

 
frutas.reverse();
frutas.splice(frutas.length - 1, 1);      
frutas.splice(0, 1);                       
frutas.splice(frutas.length, 0, 'Melão');  

console.log(frutas);  