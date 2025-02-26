import fs from "fs";

console.log(JSON.parse(fs.readFileSync("livros.json")));
