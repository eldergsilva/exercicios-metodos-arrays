const usuarios = [
    { nome: "João",    pets: ["Max"] },
    { nome: "Ana",     pets: ["Pingo", "Lulu"] },
    { nome: "Beatriz", pets: ["Lessie"] },
    { nome: "Carlos",  pets: ["Farofa", "Salsicha", "Batata"] },
    { nome: "Antonio", pets: ["Naninha"] },
];

function encontrarDonoDoPet(usuarios, nomePet) {
    let donoEncontrado = null;

    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];

         
        const petsString = usuario.pets.join(',');

        if (petsString.indexOf(nomePet) !== -1) {
            donoEncontrado = usuario.nome;
            break;
        }
    }

    if (donoEncontrado) {
        console.log(`O dono(a) do(a) ${nomePet} é o(a) ${donoEncontrado}`);
    } else {
        console.log(`Que pena ${nomePet}, não encontramos seu dono(a)`);
    }
}

// Testes
encontrarDonoDoPet(usuarios, 'Max');       
encontrarDonoDoPet(usuarios, 'Lulu');      
encontrarDonoDoPet(usuarios, 'Batata');    
encontrarDonoDoPet(usuarios, 'Rex');       
encontrarDonoDoPet(usuarios, 'Naninha');   