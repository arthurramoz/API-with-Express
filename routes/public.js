import express from "express";
import { GetLivros, GetLivro, CadastraLivro } from "../controladores/livro.js";

const router = express.Router();

router.get("/cadastro", GetLivros);

router.get("/cadastro/:id", GetLivro);

router.post("/cadastro", CadastraLivro);

// router.delete("/cadastro/:id", (req, res) => {
//   try {
//     const id = req.params.id;

//     res.status(201).send("Deletado com sucesso!");
//   } catch (err) {
//     res.status(400).send("Deu errado");
//   }
// });

export default router;
