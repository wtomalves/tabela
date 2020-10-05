
//PEGAR ELEMENTO DA PÁGINA UTILIZANDO O quarySelector
/*console.log("Fui carregado de um arquivo externo");*/
var titulo = document.querySelector('.titulo');
//Modificar o texto com textContent
titulo.textContent = 'Aparecida Nutricionista';


//extraindo dados da tabela
var pacientes = document.querySelectorAll('.paciente'); // conter o tr
/*console.log(pacientes);*/
for (let pos = 0; pos < pacientes.length; pos += 1) {


  var paciente = pacientes[pos];

  var tdpeso = paciente.querySelector('.info-peso'); // conter o td
  //pegar o valor que está na variável peso
  var peso = tdpeso.textContent;

  //conter o td
  var tdAltura = paciente.querySelector('.info-altura');
  //pegar o valor que está na variavel altura
  var altura = tdAltura.textContent;

  //colocando o resultado do imc na tabela
  var tdimc = paciente.querySelector('.info-imc');

    /*
  console.log(paciente);
  console.log(tdpeso);
  console.log(peso);//valor 100 que está dentro da variável
  console.log(tdAltura);
  console.log(altura);//valor 2.00 que está dentro da variável
  console.log('o IMC de Paulo é ', imcPaulo)
  */


  var pesoCerto = validaPeso(peso);
  var alturaCerta = validaAltura(altura);

  if (!pesoCerto) {
    pesoCerto = false;
    tdimc.textContent = 'Peso inválido!'
    paciente.classList.add('paciente-invalido');

  }

  if (!alturaCerta) {
    alturaCerta = false;
    tdimc.textContent = 'Altura inválida!'
    paciente.classList.add('paciente-invalido')

  }

  if (pesoCerto && alturaCerta) {
    var imc = calculaImc(peso, altura);
    tdimc.textContent = imc;
    }

  }

function validaPeso(peso){
  if (peso >= 0 && peso < 1000){
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura < 3.0){
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(1);
}










