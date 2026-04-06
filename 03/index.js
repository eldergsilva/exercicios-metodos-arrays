const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function encontraCarro(nomes, posicao) {
    const grupo = nomes.slice(posicao, posicao + 3);
    console.log(grupo.join(' - '));
}

// Testes
encontraCarro(nomes, 3);  
encontraCarro(nomes, 0);  
encontraCarro(nomes, 1);  
encontraCarro(nomes, 4);  