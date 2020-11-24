import bcrypt from "bcrypt";

export default function gerarHash(custo: number, valor: string) {
  return bcrypt.hash(valor, custo);
}
