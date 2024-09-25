

function verificarNumero() {
    if (numero % 2 === 0) {
        document.getElementById("resultado").innerHTML += "O número é divisível por 2.<br>";
    }
    if (numero % 3 === 0) {
        mensagem += "O número é divisível por 3.<br>";
    }
    if (numero % 5 === 0) {
        mensagem += "O número é divisível por 5.<br>";
    }
    if (numero % 7 === 0) {
        mensagem += "O número é divisível por 7.<br>";
    }

    // Caso o número não seja divisível por nenhum dos anteriores e maior que 1, é considerado primo
    if (mensagem === "" && numero > 1) {
        mensagem = "O número é primo.";
    } else if (mensagem === "") {
        mensagem = "O número não é divisível por 2, 3, 5 ou 7.";
    }

    // Exibe a mensagem
    document.getElementById("resultado").innerHTML = mensagem;
}