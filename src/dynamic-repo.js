// 动态仓库管理示例代码
const API_BASE = 'http://localhost:3001/api';

async function createRepo(name, description) {
    const response = await fetch(`${API_BASE}/repos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description })
    });
    return await response.json();
}

async function uploadFile(owner, repo, path, content) {
    const response = await fetch(`${API_BASE}/upload`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            owner, repo, path,
            content: btoa(content),
            message: '上传文件'
        })
    });
    return await response.json();
}

console.log('动态仓库管理功能已就绪！');
