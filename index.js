const inputTarefa = document.querySelector('.input-tarefa');
const inputBotao = document.querySelector('.input-botao');
const tarefasLista = document.querySelector('.tarefas-lista');

inputBotao.addEventListener('click', adicionarTarefa);

function adicionarTarefa(e) {
  const tarefa = document.createElement('div');
  tarefa.classList.add('tarefa');

  const tarefaItem = document.createElement('li');
  tarefaItem.innerText = inputTarefa.value;
  tarefaItem.classList.add('tarefa-item');
  tarefa.appendChild(tarefaItem);

  const botaoConcluido = document.createElement('button');
  botaoConcluido.innerHTML = '<i class="fas fa-check"></i>';
  botaoConcluido.classList.add('botao-concluido');
  tarefa.appendChild(botaoConcluido);

  const botaoExcluir = document.createElement('button');
  botaoExcluir.innerHTML = '<i class="fas fa-trash"></i>';
  botaoExcluir.classList.add('botao-excluir');
  tarefa.appendChild(botaoExcluir);

  tarefasLista.appendChild(tarefa);

  inputTarefa.value = '';
}