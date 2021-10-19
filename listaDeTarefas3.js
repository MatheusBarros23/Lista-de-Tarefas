//ir ate o botao, input. Salvar o input no click /mostrar no console o input- lembrar dos data attributes - IMPEDIR movimento Default button de enviar!
( () => {
const button = document.querySelector('[data-form-button]');
const input = document.querySelector('[data-form-input]');
const valor = input.value

const newTarefa = (evento)=>{
    evento.preventDefault ();

    const input = document.querySelector('[data-form-input]');
    const valor = input.value
    
    const lista = document.querySelector ('[data-list]')
    const tarefa = document.createElement('li')
        lista.appendChild (tarefa)
        tarefa.classList.add('task')
        const conteudo = `<p class ="content"> ${valor} </p>`

    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConclui()) //precisa executar! afinal só cria botao quando a funçao é executada!
    tarefa.appendChild(BotaoDeleta())
    input.value=" ";
}

button.addEventListener('click', newTarefa);

//criar botao conclui

    const BotaoConclui = (evento)=>{
            const botaoConcluido = document.createElement('button')
                    botaoConcluido.innerText = "Concluído";
                    botaoConcluido.classList.add ('check-button')
               
                botaoConcluido.addEventListener ('click', tarefaConcluida)

            return botaoConcluido; //retorna pq vamos usar esse botaoConcluido em outra funçao!
    }
   
//o que vai acontecer ele apertado
    const tarefaConcluida = (evento)=>{
        const botaoClicado = evento.target;
        const tarefaFinalizada = botaoClicado.parentElement

        tarefaFinalizada.classList.toggle('done');
    }

//criar botao deleta
    const BotaoDeleta = ()=> {
        const botaoDeleta = document.createElement('button')
                botaoDeleta.innerText = 'Deletar';
                botaoDeleta.classList.add ('delete-button')

            botaoDeleta.addEventListener('click', tarefaDeletada)

        return botaoDeleta; //retorna pq vamos usar esse botaoDeleta em outra funçao!
    }

//o que vai acontecer quando o botao for apertado
    const tarefaDeletada = (evento)=> {
        const botaoDeletaClicado = evento.target;
        const tarefaExcluida = botaoDeletaClicado.parentElement;

        tarefaExcluida.remove()
    }

})()

//lembrar encapsular funçao! (()=> { ... })() - e executar!