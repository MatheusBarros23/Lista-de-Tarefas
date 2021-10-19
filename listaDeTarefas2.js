
//.preventDefault botao - evitar o comportamento default do botao enviar (de ir pra outra pagina) - so guardar a informaçao/input

//pegar o valor de input!

// .value - comando para pegarmos o valor do que queremos!

( ()=> { const novaTarefa = document.querySelector('[data-form-button]')/*data attribute da <button>*/

 const criarTarefa = (evento)=> {
    evento.preventDefault ();
    
    const input = document.querySelector('[data-form-input]') /*data attribute da <input> do usuario*/
    const valor = input.value

    const lista = document.querySelector('[data-list]') /*data attribute da <ul>*/
    
    const tarefa = document.createElement('li');
    tarefa.className = "task"
        /*ou tarefa.classList.add("task") */
    
    const conteudo = `<p class="content"> ${valor} </p>`
    
    tarefa.innerHTML = conteudo
    
    tarefa.appendChild(BotaoConclui()) /*aqui a funcao executavel para que seja criado o botao - e seja escutado*/
    tarefa.appendChild(BotaoDeletar())

    lista.appendChild (tarefa) /* ".appendChild = " Serve para anexarmos a li que criamos (c/ tarefa) dentro da ul que ja existe no .html! para criarmos uma hierarquia! */
    
                /*tarefa.innerHTML = conteudo;*/ //.innerHTML eh uma propriedade utilizada para entrar em um objeto HTML e altera-lo de forma dinamica! (pelo JAVA! sem mexer no arquivo .html)


    input.value = " "; // serve para resetar o "valor de input" no final da funcao

}

novaTarefa.addEventListener ('click', criarTarefa)


    /*criar botao de conclui*/

const BotaoConclui = () => {
    const botaoConclui = document.createElement("button");
        botaoConclui.classList.add('check-button')
        botaoConclui.innerText = "Concluído"

    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui; /*Como o botao foi criado aqui dentro, temos que retorna-lo para fora, para colocarmos dentro da li*/

}

    /*o que fazer quando aperta o botao de concluir*/

const concluirTarefa = (evento) => { /*O que vai acontecer como consequencia do evento click do botaoConcluir*/
    const botaoConclui = evento.target
    
    const tarefaCompleta = botaoConclui.parentElement /*qual é o elemento pai do botaoConclui? a tag <li>!*/

     tarefaCompleta.classList.toggle ('done')
}
    //criar botao Deletar

const BotaoDeletar = ()=> {
    const botaoDeletar = document.createElement('button');
            botaoDeletar.innerText= 'Deletar'
            botaoDeletar.classList.add('delete-button')

        botaoDeletar.addEventListener('click', tarefaExcluida)
        
        return botaoDeletar;   
}   
    //resultado click botao Deletar

const tarefaExcluida = (evento)=> {
    const botaoDeletar = evento.target; 
    const tarefaDeletada = botaoDeletar.parentElement;

    tarefaDeletada.remove(); //para remover o elemento da arvore!
}

}) ()

