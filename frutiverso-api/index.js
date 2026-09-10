const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

//conexion a mysql
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err)=>{
    if(err){
        console.error("❌ Error al conectar MySQL:", err);
        return;
    }
    console.log("✅ MySQL conectado");
});

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("🍍 API Frutiverso funcionando!");
});

//traer prodcutos

app.get("/api/productos", (req, res) =>{
    db.query("SELECT * FROM productos", (err, results) =>{
        if(err) return res.status(500).json({error: err.message});
        res.json(results)
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Servidor en http://localhost:${PORT}`)); 