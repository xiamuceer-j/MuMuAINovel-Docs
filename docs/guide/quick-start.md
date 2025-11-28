# 快速开始

## 前置要求

- [Docker](https://www.docker.com/) 和 [Docker Compose](https://docs.docker.com/compose/)
- 至少一个 AI 服务的 API Key (OpenAI/Gemini/Claude)

## 部署步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/xiamuceer-j/MuMuAINovel.git
   cd MuMuAINovel
   ```

2. **配置环境变量**
   ```bash
   cp backend/.env.example .env
   # 编辑 .env 文件，填入必要配置
   ```

3. **启动服务**
   ```bash
   docker-compose up -d
   ```

4. **访问应用**
   
   打开浏览器访问 `http://localhost:8000`

::: tip 详细部署指南
- [Docker 部署完整指南](/deployment/docker) - 推荐生产环境使用
- [本地开发环境配置](/deployment/local) - 适合二次开发
:::