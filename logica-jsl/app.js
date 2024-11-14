alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
    break; 
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }

        // tentativas = tentativas + 1;
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

















// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }





// alert('Bem-vindo ao jogo do número secreto')
// let chute = prompt('Escolha um número entre 1 e 10')

// let numeroSecreto = 4

// console.log(chute == numeroSecreto)
// if (chute == numeroSecreto) {
//     alert('Acertou')
// } else {
//     alert('O número secreto era ' + numeroSecreto)
// }

// let idade = prompt("Digite sua idade:");

// if (idade >= 18) {
//   console.log("Você é maior de idade.");
// } else {
//   console.log("Você é menor de idade.");
// }






// alert("Boas vindas ao nosso site!");

// let nome = "Lua";
// let idade = 25;
// let numeroDeVendas = 50;
// let saldoDisponivel =1000;

// alert("Erro! Preencha todos os campos");

// let mensagemDeErro = "Erro! Preencha todos os campos";
// alert(mensagemDeErro);

// let nome = prompt('Digite o seu nome');

// let idade = prompt('Digite a sua idade');

// let idade = prompt('Digite a sua idade');
// if (idade >= 18) {
//     alert('Pode tirar a habilitação!'); 
// }

