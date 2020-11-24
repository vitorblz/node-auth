import app from "./app";

const serverPort = 3010;

app.listen(serverPort, () =>
  console.log(`Servidor rodando na porta ${serverPort}`)
);
