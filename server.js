const express = require("express");
const compression = require("compression");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

// Porta padrão para o EasyPanel é 80
const port = process.env.PORT || 80;

// Configurações importantes para proxy
app.set("trust proxy", true);

// Configurar body-parser para JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração de compressão Brotli/Gzip
app.use(
  compression({
    level: 9,
    threshold: 0,
  })
);

// Cache-Control para recursos estáticos
const cacheTime = 31536000; // 1 ano em segundos
app.use(
  express.static(path.join(__dirname, "."), {
    maxAge: cacheTime * 1000,
    immutable: true,
  })
);

// Headers de segurança e performance
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.setHeader("Content-Security-Policy", "upgrade-insecure-requests");
  next();
});

// Middleware para logging básico
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Middleware para redirecionar WWW para non-WWW (SEO)
app.use((req, res, next) => {
  if (req.hostname.startsWith('www.')) {
    const newUrl = `https://${req.hostname.slice(4)}${req.originalUrl}`;
    return res.redirect(301, newUrl);
  }
  next();
});

// Middleware para remover barras finais (SEO)
app.use((req, res, next) => {
  if (req.path.length > 1 && req.path.endsWith('/')) {
    const newPath = req.path.slice(0, -1);
    const query = req.url.slice(req.path.length);
    return res.redirect(301, newPath + query);
  }
  next();
});

// Rota principal para o hinário
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Rotas otimizadas para SEO CCB
app.get("/hinario-ccb", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/regencia-congregacao-crista", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/encarregado-orquestra-ccb", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/instrutor-musica-ccb", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/musico-ccb", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Rotas para arquivos especiais
app.get("/sitemap.xml", (req, res) => {
  res.sendFile(path.join(__dirname, "sitemap.xml"));
});

app.get("/robots.txt", (req, res) => {
  res.sendFile(path.join(__dirname, "robots.txt"));
});

// Tratamento para qualquer outra rota
app.use((req, res) => {
  res.redirect('/');
});

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo deu errado!");
});

// Iniciar o servidor
app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${port}`);
}); 