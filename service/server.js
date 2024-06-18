const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// 写入节点数据到 node.json
app.post('/write-nodes', (req, res) => {
    fs.writeFile(path.join(__dirname, 'public/data/tupu/node.json'), JSON.stringify(req.body), 'utf8', (err) => {
        if (err) {
            return res.status(500).send('Error writing node.json');
        }
        res.send('Node data written successfully');
    });
});

// 写入链接数据到 links.json
app.post('/write-links', (req, res) => {
    fs.writeFile(path.join(__dirname, 'public/data/tupu/links.json'), JSON.stringify(req.body), 'utf8', (err) => {
        if (err) {
            return res.status(500).send('Error writing links.json');
        }
        res.send('Links data written successfully');
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
