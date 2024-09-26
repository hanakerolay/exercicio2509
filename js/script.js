

function calcularMedia() {
    // ENTRADA
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    // PROCESSAMENTO
    let media = (nota1 + nota2 + nota3) / 3
    if (media >= 6.0) {
         // SAÍDA VERDADEIRA CONDIÇÃO 1
        document.getElementById("mediaarit").innerText = `O aluno foi APROVADO com média ${media.toFixed(1)}`
    }
    else if (media >= 5.0 & media < 6.0) {
        // SAÍDA VERDADEIRA CONDIÇÃO 2
        document.getElementById("mediaarit").innerText = `O aluno está em RECUPERAÇÃO com média ${media.toFixed(1)}`
    }
    else {
        // SAÍDA FALSA
        document.getElementById("mediaarit").innerText = `O aluno foi REPROVADO com média ${media.toFixed(1)}`
    }
}

function verificarNumPrimo() {
    document.getElementById("resposta").innerHTML = ""
    let num = Number(document.getElementById("num").value)
    if (num % 2 == 0) {
        document.getElementById("resposta").innerHTML += `<p> ${num} é divisível por 2</p>`
    }
    if (num % 3 == 0) {
        document.getElementById("resposta").innerHTML += `<p> ${num} é divisível por 3</p>`
    }
    if (num % 5 == 0) {
        document.getElementById("resposta").innerHTML += `<p> ${num} é divisível por 5</p>`
    }
    if (num % 7 == 0) {
        document.getElementById("resposta").innerHTML += `<p> ${num} é divisível por 7</p>`
    }
    if (
        (num % 2 != 0 && num % 3 != 0 && num % 5 != 0 && num % 7 != 0)
        ||
        (num == 2 || num == 3 || num == 5 || num == 7)
    ) {
        document.getElementById("resposta").innerHTML += "<p>é um número primo</p>"
    }
}

function classificarAtleta() {
    const idade = Number(document.getElementById('idade').value);

    if (isNaN(idade) || idade < 0) {
        document.getElementById("resultado").innerText = " Insira uma idade válida.";
    } else if (idade >= 6 && idade <= 11) {
        document.getElementById("resultado").innerText = " Infantil de 6 até 11 anos";
    } else if (idade >= 12 && idade <= 17) {
        document.getElementById("resultado").innerText = " Juvenil de 12 até 17 anos";
    } else if (idade >= 18 && idade <= 34) {
        document.getElementById("resultado").innerText = " Adulto 18 anos a 34 anos";
    } else {
        document.getElementById("resultado").innerText = "O atleta não poderá competir.";
        
    }
}

function verificarPoluição() {
    const indice = Number(document.getElementById('indice').value);


    if (isNaN(indice) || indice < 0) {
        document.getElementById("resultadoPolu").innerText = " Insira um índice de poluição válido.";
    } else if (indice > 50) {
        document.getElementById("resultadoPolu").innerText = " Todos os grupos devem paralisarem suas atividades.";
    } else if (indice > 40) {
        document.getElementById("resultadoPolu").innerText = " Indústrias do 1º e 2º grupo devem suspenderem suas atividades.";
    } else if (indice > 30) {
        document.getElementById("resultadoPolu").innerText = "Indústria do 1º grupo deve suspender suas atividades.";
    } else if (indice >= 5 && indice <= 30) {
        document.getElementById("resultadoPolu").innerText = " Índice de poluição aceitável.";
    } else {
        document.getElementById("resultadoPolu").innerText = " Índice fora do intervalo aceitável.";
    }
}

function verificarAposentadoria() {
    let codigo = document.getElementById('codigo').value;
    let anoNascimento = Number(document.getElementById('anoNascimento').value);
    let anoIngresso = Number(document.getElementById('anoIngresso').value);
    let resultadoApo = document.getElementById('resultadoApo');

    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;
    let tempoTrabalho = anoAtual - anoIngresso;

    let podeAposentar = false;

    // Verifica os critérios de aposentadoria
    if (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)) {
        podeAposentar = true;
    }

    // Gera o resultado
    resultadoApo.textContent = `Código do Empregado: ${codigo}\nIdade: ${idade} anos\nTempo de Trabalho: ${tempoTrabalho} anos\n` +
    (podeAposentar ? "O empregado pode requerer a aposentadoria." : "O empregado NÃO pode requerer a aposentadoria.");
}


function segundograu() {
    let valorA = Number(document.getElementById("A1").value);
    let valorB = Number(document.getElementById("B1").value);
    let valorC = Number(document.getElementById("C1").value);

    let delta = (valorB ** 2) - (4 * valorA * valorC);
    if (delta < 0) {
        document.getElementById("segundograu").innerText = "A equação não possui raízes reais.";
    } else {
        let x1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
        let x2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
        document.getElementById("segundograu").innerText = "x1 = " + x1 + " -- " + "x2 = " + x2;
    }
}