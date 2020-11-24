import { Router } from "express";
import UsuarioController from "../usuario/usuario-controller";

const router = Router();

router.get("/login", UsuarioController.login);

export default router;
