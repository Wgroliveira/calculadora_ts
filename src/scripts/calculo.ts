function multiplicacao(a: number, b: number): number {
    return a * b;
  }
  function saudacao(nome: string): string {
    return "Olá " + nome;
  }
  const resultadoMultiplicacao = multiplicacao(3, 5);
  console.log("Resultado da multiplicação:", resultadoMultiplicacao);
  const mensagemSaudacao = saudacao("Maria");
  console.log(mensagemSaudacao);
  