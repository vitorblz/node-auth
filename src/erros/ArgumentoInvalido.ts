export class ArgumentoInvalido extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "ArgumentoInvalido";
  }
}
