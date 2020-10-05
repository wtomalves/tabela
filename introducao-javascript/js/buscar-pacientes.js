var botaoAdicionar = document.querySelector('#buscar-pacientes');

//evento de clique
botaoAdicionar.addEventListener('click', function() {
  console.log('Busqueiiiiii!!!!!');

  var xhr = new XMLHttpRequest(); // objeto do java script responsável por fazer requisições Http

  //Temos que informar qual o tipo de requisição queremos fazer, então vamos criar uma função

  xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes');//função que abre a conexão com o endereço que a gente deseja acessar, dentro da função vamos especificar que o tipo de requisição é o tradicional, comum do tipo GET e devemos informar qual o endereço que queremos acessar.

  xhr.addEventListener('load', function() { // Aqui é para quando a resposta estiver carregada, execulta uma função pra mim, para que eu consiga visualizar.
    var erroAjax = document.querySelector('#erro-ajax');
    if (xhr.status == 200) {
        erroAjax.classList.add('invisivel');
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        pacientes.forEach( function(paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      erroAjax.classList.remove('invisivel');
    }


  });

  xhr.send();//é o que vai pegar nossa requisição que acabamos de criar e aqui vai enviar ela

});
