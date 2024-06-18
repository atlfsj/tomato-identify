import axios from 'axios';

// 发送查询请求
/*export const queryNeo4j = async (action) => {
    try {
        const response = await axios.post('http://localhost:5000/api/query', { action });
        return response.data;
    } catch (error) {
        console.error('Error querying Neo4j:', error);
        throw error;
    }
};

// 写入节点数据
export const writeNodes = async (data) => {
    try {
        await axios.post('http://localhost:3000/write-nodes', data);
    } catch (error) {
        console.error('Error writing nodes:', error);
        throw error;
    }
};

// 写入链接数据
export const writeLinks = async (data) => {
    try {
        await axios.post('http://localhost:3000/write-links', data);
    } catch (error) {
        console.error('Error writing links:', error);
        throw error;
    }
};
*/