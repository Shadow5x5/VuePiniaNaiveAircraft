const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.use(cors());

// Чтение и парсинг JSON файла
const jsonFilePath = path.join(__dirname, "aircrafts.json");
let aircrafts = [];

fs.readFile(jsonFilePath, "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading JSON file:", err);
        return;
    }
    aircrafts = JSON.parse(data);
    console.log(aircrafts);
});

// Маршрут для обработки GET запросов
app.get("/search", (req, res) => {
    const { query } = req.query;
    if (!query) {
        return res.status(400).send("Query parameter is required");
    }
    const results = aircrafts.filter((aircraft) =>
        aircraft.AircraftName.toLowerCase().includes(query.toLowerCase())
    );
    res.json(results);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
