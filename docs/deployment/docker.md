# Docker 部署指南

我们强烈推荐使用 Docker 和 Docker Compose 进行部署，这是最简单、最稳定且开箱即用的方式。

## 部署方式

我们提供两种基于 Docker 的部署选项：

1.  **使用 Docker Hub 镜像 (推荐)**: 无需本地构建，直接使用我们为你构建好的最新镜像，已包含所有依赖和模型文件。
2.  **使用 Docker Compose 构建**: 从项目源码进行构建，适合需要自定义修改的用户。

### 选项一：使用 Docker Hub 镜像 (推荐新手)

这是最快捷的部署方式。

1.  **拉取最新镜像**

    ```bash
    docker pull mumujie/mumuainovel:latest
    ```

2.  **下载 `docker-compose.yml` 和 `.env` 模板**

    你需要从项目的 GitHub 仓库获取 `docker-compose.yml` 文件和 `backend/.env.example` 文件。

3.  **创建并配置 `.env` 文件**

    ```bash
    cp backend/.env.example .env
    ```
    编辑 `.env` 文件，填入你的数据库密码和 AI API Key 等必要信息。

4.  **启动服务**

    确保 `docker-compose.yml` 和 `.env` 文件在同一目录下，然后运行：
    ```bash
    docker-compose up -d
    ```

### 选项二：使用 Docker Compose 从源码构建

1.  **克隆项目**
    ```bash
    git clone https://github.com/xiamuceer-j/MuMuAINovel.git
    cd MuMuAINovel
    ```

2.  **配置 `.env` 文件**
    ```bash
    cp backend/.env.example .env
    ```
    编辑 `.env` 文件，填入必要配置。

3.  **下载 Embedding 模型文件 (重要)**
    如果从源码构建，你需要手动下载 `embedding` 模型文件 (约 400MB)，并将其放置到正确的位置：
    - **目标路径**: `backend/embedding/models--sentence-transformers--paraphrase-multilingual-MiniLM-L12-v2/`
    - **获取方式**: 请访问项目 GitHub 页面或加入社区群组获取下载链接。

4.  **启动服务**
    ```bash
    docker-compose up -d --build
    ```
    `--build` 参数会强制 Docker 从源码构建镜像。

## Docker 服务架构

`docker-compose.yml` 文件定义了两个核心服务：

- `postgres`: PostgreSQL 18 数据库服务。
  - **数据持久化**: 数据库文件存储在名为 `postgres_data` 的 Docker 卷中，确保数据在容器重启后不丢失。
  - **端口**: 默认映射到宿主机的 `5432` 端口。
- `mumuainovel`: 主应用服务。
  - **配置挂载**: 将宿主机根目录的 `.env` 文件以只读方式挂载到容器内，实现配置的动态加载。
  - **日志挂载**: 将容器内的日志目录挂载到宿主机的 `./logs` 目录，方便查看和管理。
  - **端口**: 默认映射到宿主机的 `8000` 端口。

## 常用命令

- **启动服务**: `docker-compose up -d`
- **查看状态**: `docker-compose ps`
- **实时查看日志**: `docker-compose logs -f`
- **停止并移除容器**: `docker-compose down`
- **更新镜像并重启**: `docker-compose pull && docker-compose up -d`