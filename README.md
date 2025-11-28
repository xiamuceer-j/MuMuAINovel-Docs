# MuMuAINovel 文档站

<div align="center">
  <img src="docs/public/logo.svg" alt="MuMuAINovel Logo" width="200"/>
  <h3>AI 智能小说创作助手 - 项目文档</h3>
  <p>基于 VitePress 构建的 MuMuAINovel 项目完整文档站</p>
</div>

## 📖 项目简介

这是 [MuMuAINovel](https://github.com/xiamuceer-j/MuMuAINovel) 项目的官方文档站点，提供完整的安装指南、配置说明和使用教程。

MuMuAINovel 是一个强大的 AI 智能小说创作助手，具有以下核心功能：

- 💡 **智能创作** - 从简单想法生成完整的世界观、角色设定和故事大纲
- 🌳 **大纲细化** - 独有的 1→N 大纲模式，智能展开章节规划
- ✍️ **章节生成** - 综合上下文生成连贯的章节内容，支持批量创作
- 📊 **可视化管理** - 直观的角色关系图谱和组织架构管理
- 🎨 **自定义风格** - AI 学习你的文笔，确保文风统一
- 🚀 **一键部署** - Docker Compose 快速部署

## 🚀 快速开始

### 在线访问

访问在线文档站：[https://mumuverse.space:1588/](https://mumuverse.space:1588/)

### 本地开发

#### 环境要求

- Node.js 18+
- npm 或 yarn

#### 安装步骤

1. **克隆仓库**

```bash
git clone https://github.com/xiamuceer-j/MuMuAINovel-Docs.git
cd MuMuAINovel-Docs
```

2. **安装依赖**

```bash
npm install
```

3. **启动开发服务器**

```bash
npm run docs:dev
```

4. **访问文档**

打开浏览器访问 `http://localhost:5173`

### 构建生产版本

```bash
# 构建静态文件
npm run docs:build

# 预览构建结果
npm run docs:preview
```

构建输出位于 `docs/.vitepress/dist` 目录。

## 🐳 Docker 部署

### 使用 Docker Compose（推荐）

1. **启动服务**

```bash
docker-compose up -d
```

2. **访问文档**

打开浏览器访问 `http://localhost:8089`

3. **停止服务**

```bash
docker-compose down
```

### 使用 Docker

```bash
# 构建镜像
docker build -t mumunovel-docs .

# 运行容器
docker run -d -p 8089:80 --name mumunovel-docs mumunovel-docs

# 停止容器
docker stop mumunovel-docs

# 删除容器
docker rm mumunovel-docs
```

## 📁 项目结构

```
MuMuAINovel-Docs/
├── docs/                          # 文档源文件
│   ├── .vitepress/               # VitePress 配置
│   │   ├── config.mts            # 站点配置
│   │   └── theme/                # 主题定制
│   ├── guide/                    # 项目简介
│   │   ├── index.md              # 项目介绍
│   │   ├── quick-start.md        # 快速开始
│   │   └── workflow.md           # 工作流程
│   ├── usage/                    # 使用教程
│   │   ├── login.md              # 登录系统
│   │   ├── api-config.md         # 配置 AI API
│   │   ├── create-project.md     # 创建项目
│   │   ├── project-management.md # 项目管理
│   │   └── writing.md            # 章节撰写
│   ├── deployment/               # 部署指南
│   │   ├── docker.md             # Docker 部署
│   │   └── local.md              # 本地开发
│   ├── configuration/            # 配置参考
│   │   ├── index.md              # 配置首页
│   │   ├── ai-services.md        # AI 服务配置
│   │   ├── authentication.md     # 用户认证
│   │   └── advanced.md           # 高级配置
│   ├── public/                   # 静态资源
│   │   ├── logo.svg              # Logo
│   │   └── images/               # 文档图片
│   └── index.md                  # 首页
├── Dockerfile                    # Docker 镜像配置
├── docker-compose.yml            # Docker Compose 配置
├── package.json                  # 项目依赖
└── README.md                     # 项目说明
```

## 🛠️ 技术栈

- **[VitePress](https://vitepress.dev/)** - 基于 Vite 和 Vue 的静态站点生成器
- **[Medium Zoom](https://github.com/francoischalifour/medium-zoom)** - 图片缩放插件
- **Docker** - 容器化部署
- **Nginx** - 生产环境 Web 服务器

## 📝 文档内容

### 项目简介
- 项目介绍和核心功能
- 快速开始指南
- 创作工作流程

### 使用教程
- 系统登录和账号管理
- AI API 配置指南
- 项目创建和初始化
- 项目管理功能详解
- 章节撰写和 AI 辅助创作

### 部署指南
- Docker 一键部署
- 本地开发环境搭建
- 生产环境配置

### 配置参考
- AI 服务配置（OpenAI、Azure OpenAI 等）
- 用户认证系统配置
- 高级功能配置选项

## 🤝 贡献指南

欢迎贡献文档内容！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

### 文档编写规范

- 使用 Markdown 格式
- 图片统一放在 `docs/public/images/` 目录
- 保持文档结构清晰，层级分明
- 提供清晰的截图和示例
- 中文文档注意排版和标点符号

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🔗 相关链接

- **主项目仓库**: [MuMuAINovel](https://github.com/xiamuceer-j/MuMuAINovel)
- **在线文档**: [https://mumuverse.space:1588/](https://mumuverse.space:1588/)
- **问题反馈**: [GitHub Issues](https://github.com/xiamuceer-j/MuMuAINovel/issues)
- **赞助支持**: [发电赞助](https://mumuverse.space:1588/)

## 💝 赞助

如果这个项目对你有帮助，欢迎赞助支持开发者！

访问 [赞助页面](https://mumuverse.space:1588/) 了解更多。

## 📧 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 [GitHub Issue](https://github.com/xiamuceer-j/MuMuAINovel/issues)
- 查看文档获取更多帮助

---

<div align="center">
  <p>Made with ❤️ by MuMuAINovel Team</p>
  <p>Powered by VitePress</p>
</div>