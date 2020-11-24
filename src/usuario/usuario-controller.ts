import { Request, Response } from "express";
import gerarHash from "../compartilhados/geradorDeHash";
import Usuario from "./usuario-modelo";

export default class UsuarioController {
  static async login(req: Request, res: Response) {
    try {
      const senha = await gerarHash(12, "123");
      const usuario = new Usuario("asdasdasd", senha);
      console.log(usuario.senha);
      res.send("Fim!");
    } catch (erro) {
      res.status(401).send(erro.message);
    }
  }
}
