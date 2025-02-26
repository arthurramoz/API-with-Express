import fs from "fs";

export function getTodosLivros() {
  return JSON.parse(fs.readFileSync("livros.json"));
}

export function getLivrosPorId(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));

  const livroFiltrado = livros.filter((livro) => livro.id === id)[0];

  return livroFiltrado;
}

export function insereLivro(novo) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));

  const novaLista = [...livros, novo];

  fs.writeFileSync("livros.json", JSON.stringify(novaLista));
}
