# 配置参考

本页面详细说明了 MuMuAINovel 项目所有可用的环境变量配置选项。

## 配置文件

所有配置通过项目根目录的 `.env` 文件进行管理。首次部署时，请从模板文件创建：

```bash
cp backend/.env.example .env
```

## 应用配置

基础应用设置。

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| `APP_NAME` | `MuMuAINovel` | 应用名称 |
| `APP_VERSION` | `1.0.0` | 应用版本号 |
| `APP_HOST` | `0.0.0.0` | 应用监听地址 |
| `APP_PORT` | `8000` | 应用监听端口 |
| `DEBUG` | `false` | 是否启用调试模式 |
| `TZ` | `Asia/Shanghai` | 时区设置 |

## 数据库配置

PostgreSQL 数据库相关配置。

## 基础连接

| 变量名 | 默认值 | 必需 | 说明 |
|--------|--------|------|------|
| `POSTGRES_DB` | `mumuai_novel` | ✅ | 数据库名称 |
| `POSTGUS_USER` | `mumuai` | ✅ | 数据库用户名 |
| `POSTGRES_PASSWORD` | - | ✅ | 数据库密码 |
| `POSTGRES_PORT` | `5432` | ❌ | 数据库端口 |
| `DATABASE_URL` | 自动生成 | ✅ | 完整的数据库连接字符串 |

::: warning 重要
`DATABASE_URL` 格式：`postgresql+asyncpg://用户名:密码@主机:端口/数据库名`
:::