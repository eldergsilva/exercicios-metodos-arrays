const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(pacientes, paciente) {
    pacientes.push(paciente);
    console.log(`✅ ${paciente} agendado(a)!`);
    console.log(pacientes.join(', '));
}

function atenderPaciente(pacientes) {
    const atendido = pacientes.shift();
    console.log(`🏥 ${atendido} foi atendido(a)!`);
    console.log(pacientes.join(', '));
}

function cancelarAtendimento(pacientes, paciente) {
    const index = pacientes.indexOf(paciente);

    if (index === -1) {
        console.log(`❌ Paciente "${paciente}" não encontrado na fila.`);
        return;
    }

    pacientes.splice(index, 1);
    console.log(`🚫 ${paciente} cancelou o atendimento!`);
    console.log(pacientes.join(', '));
}

// Testes
agendarPaciente(pacientes, 'Carlos');
 
atenderPaciente(pacientes);
 
cancelarAtendimento(pacientes, 'João');
 

cancelarAtendimento(pacientes, 'Lucas');
 