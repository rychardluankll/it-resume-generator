const express = require("express");
const app = express();
const cors = require('cors');

    app.use(express.json());
    app.use(cors());

    app.post("/informacoesIniciais", (req, res) => {
        const {nomeCompleto, dataNascimento, cidade, estado, telefone, whatsapp, linkedin, github} = req.body;

        res.json("dados recebidos");
    })

    const port = 8989;
    app.listen(port || process.env.PORT, () => {
        console.log("Servidor rodadando na porta" + port);
    })