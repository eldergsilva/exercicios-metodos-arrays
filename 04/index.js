const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function automatizarProcessos(pacientes, operacao, nome) {
    if (operacao === 'agendar') {
        pacientes.push(nome);
    } else if (operacao === 'atender') {
        const atendido = pacientes.shift();
        console.log(`Atendendo: ${atendido}`);
    } else {
        console.log('Operação inválida!');
        return;
    }

    console.log(pacientes.join(', '));
}

 
automatizarProcessos(pacientes, 'atender');   
 
automatizarProcessos(pacientes, 'agendar', 'Carlos'); 
 

automatizarProcessos(pacientes, 'atender');  
 

automatizarProcessos(pacientes, 'agendar', 'Fernanda');
 