import express from "express";
import { GetLivros, GetLivro, CadastraLivro } from "../controladores/livro.js";

const router = express.Router();

router.get("/cadastro", GetLivros);

router.get("/cadastro/:id", GetLivro);

router.post("/cadastro", CadastraLivro);

export default router;
