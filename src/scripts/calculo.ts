class Calculadora {
    // Propriedades da classe
    private numero1: number;
    private numero2: number;

    // Construtor da classe
    constructor() {
        this.numero1 = 0;
        this.numero2 = 0;
    }

    // Método para definir os números
    definirNumeros(valor1: number, valor2: number): void {
        this.numero1 = valor1;
        this.numero2 = valor2;
    }

    // Método para realizar a multiplicação
    multiplicar(): number {
        return this.numero1 * this.numero2;
    }

    // Método para realizar a saudação
    saudacao(nome: string): string {
        return "Olá " + nome;
    }
}

function calcular() {
    const numero1Input = <HTMLInputElement>document.getElementById("numero1");
    const numero2Input = <HTMLInputElement>document.getElementById("numero2");

    const numero1 = parseFloat(numero1Input.value);
    const numero2 = parseFloat(numero2Input.value);

    const calculadora = new Calculadora();
    calculadora.definirNumeros(numero1, numero2);

    const resultadoMultiplicacao = calculadora.multiplicar();
    const mensagemSaudacao = calculadora.saudacao("Usuário");

    document.getElementById("resultadoMultiplicacao")!.innerText = `Resultado da multiplicação: ${resultadoMultiplicacao}`;
    document.getElementById("mensagemSaudacao")!.innerText = mensagemSaudacao;

    // Limpa os campos após o cálculo
    numero1Input.value = "";
    numero2Input.value = "";
}

// Adiciona listeners para o evento "keyup" nos campos de entrada
document.getElementById("numero1")!.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        calcular();
    }
});

document.getElementById("numero2")!.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        calcular();
    }
});
