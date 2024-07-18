const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// 路由：接收处理后的数据并写入文件
app.post('/updateFiles', (req, res) => {
    const links = req.body.links;
    const nodes = req.body.nodes;

    const linksPath = path.join(__dirname, 'path/to/links.json');
    const nodesPath = path.join(__dirname, 'path/to/nodes.json');

    // 写入 links.json
    fs.writeFile(linksPath, JSON.stringify(links, null, 2), 'utf8', (err) => {
        if (err) {
            console.error('写入 links.json 时出现错误:', err);
            return res.status(500).send('写入 links.json 时出现错误');
        }

        // 写入 nodes.json
        fs.writeFile(nodesPath, JSON.stringify(nodes, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('写入 nodes.json 时出现错误:', err);
                return res.status(500).send('写入 nodes.json 时出现错误');
            }

            res.send('文件已成功更新');
        });
    });
});

const port = 5001;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
