var tabela = document.querySelector('table');

tabela.addEventListener('dblclick', function(event) {

  event.target.parentNode.classList.add('fadeOut');
  var alvoEvento = event.target;
  var paiDoAlvo = alvoEvento.parentNode; //pai do alvo é o tr que é igual ao paciente, que é o que queremos remover
  setTimeout(function () {
      paiDoAlvo.remove();
  }, 500)
});

