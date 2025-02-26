import {
  getLivrosPorId,
  getTodosLivros,
  insereLivro,
} from "../servicos/index.js";

export function GetLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
}

export function GetLivro(req, res) {
  try {
    const id = req.params.id;
    const livro = getLivrosPorId(id);
    res.send(livro);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
}

export function CadastraLivro(req, res) {
  try {
    const livroNovo = req.body;
    insereLivro(livroNovo);

    res.status(201).send("Livro inserido com sucesso!");
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
}
