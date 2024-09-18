const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/movies', (req, res) => {
    const movies = [
        { id: 1, title: 'หนังเรื่องที่ 1', genre: 'แอ็คชั่น' },
        { id: 2, title: 'หนังเรื่องที่ 2', genre: 'ตลก' },
        // เพิ่มข้อมูลหนังเพิ่มเติมได้ที่นี่
    ];
    res.json(movies);
});

module.exports = app;
