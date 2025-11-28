# 本地开发指南

如果你希望对项目进行二次开发或贡献代码，可以按照本指南配置本地开发环境。

## 前置要求

- Python 3.11+
- Node.js 18+ 和 npm
- PostgreSQL 数据库 (可以通过 Docker 快速启动)
- Git

## 环境准备

### 1. 克隆项目

```bash
git clone https://github.com/xiamuceer-j/MuMuAINovel.git
cd MuMuAINovel
```

### 2. 下载 Embedding 模型

本地开发同样需要 `embedding` 模型文件。请将其下载并放置到 `backend/embedding/models--sentence-transformers--paraphrase-multilingual-MiniLM-L12-v2/` 目录下。

### 3. 启动 PostgreSQL 数据库

我们推荐使用 Docker 启动一个 PostgreSQL 实例，这是最简单的方式。

```bash
docker run -d --name postgres \
  -e POSTGRES_USER=mumuai \
  -e POSTGRES_PASSWORD=your_password \
  -e POSTGRES_DB=mumuai_novel \
  -p 5432:5432 \
  postgres:18-alpine
```
**注意**: 请将 `your_password` 替换为你自己的安全密码，并确保这个密码与后续后端 `.env` 文件中的配置一致。

## 后端配置与启动

1.  **进入后端目录**
    ```bash
    cd backend
    ```

2.  **创建并激活虚拟环境**
    ```bash
    python -m venv .venv
    # Windows
    .venv\Scripts\activate
    # macOS / Linux
    source .venv/bin/activate
    ```

3.  **安装 Python 依赖**
    ```bash
    pip install -r requirements.txt
    ```

4.  **配置 `.env` 文件**
    ```bash
    cp .env.example .env
    ```
    编辑 `.env` 文件，主要修改以下配置：
    - `DATABASE_URL`: 确保主机、端口、用户名和密码与你启动的 PostgreSQL 实例匹配。例如: `postgresql+asyncpg://mumuai:your_password@localhost:5432/mumuai_novel`
    - `OPENAI_API_KEY`: 填入你的 AI API Key。

5.  **启动后端服务**
    ```bash
    uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
    ```
    `--reload` 参数会使服务在代码变更时自动重启，非常适合开发环境。

## 前端配置与启动

1.  **进入前端目录**
    ```bash
    cd frontend
    ```

2.  **安装 Node.js 依赖**
    ```bash
    npm install
    ```

3.  **启动前端开发服务器**
    ```bash
    npm run dev
    ```
    服务启动后，通常会自动在 `http://localhost:5173` (或其他可用端口) 上运行。

现在，你可以通过访问前端的地址来使用应用，前端会自动调用运行在 `http://localhost:8000` 上的后端 API。