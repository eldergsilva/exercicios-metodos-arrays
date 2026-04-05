const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;
let contador = 1;

for (let i = 0; i < nomes.length; i += tamanhoDoGrupo) {
  const grupo = nomes.slice(i, i + tamanhoDoGrupo);
  console.log(`Grupo ${contador}:`, grupo);
  contador++;
}

// Grupo 1: [ 'Juninho', 'Vidal', 'Guido', 'Dani' ]
// Grupo 2: [ 'Ruli', 'Diego' ]