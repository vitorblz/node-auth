import { ArgumentoInvalido } from "../erros/ArgumentoInvalido";

class Usuario {
  email: string;
  senha: string;

  constructor(email: string, senha: string) {
    this.email = email;

    this.valida();
    this.senha = senha;
  }

  valida() {
    if (!this.email || this.email === "")
      throw new ArgumentoInvalido("Email inválido");
  }
}

export default Usuario;
