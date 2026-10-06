const express = require("express");
const app = express();
const cors = require('cors');

    app.use(express.json());
    app.use(cors());

    app.post("/userData", (req, res) => {

        


        
    })

    const port = 8989;
    app.listen(port || process.env.PORT, () => {
        console.log("Servidor rodadando na porta" + port);
    })