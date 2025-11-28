# 用户认证配置

## 本地账户

| 变量名 | 默认值 | 必需 | 说明 |
|--------|--------|------|------|
| `LOCAL_AUTH_ENABLED` | `true` | ❌ | 是否启用本地账户登录 |
| `LOCAL_AUTH_USERNAME` | `admin` | ✅ | 本地管理员用户名 |
| `LOCAL_AUTH_PASSWORD` | - | ✅ | 本地管理员密码 |
| `LOCAL_AUTH_DISPLAY_NAME` | `本地管理员` | ❌ | 显示名称 |

## LinuxDO OAuth

| 变量名 | 默认值 | 必需 | 说明 |
|--------|--------|------|------|
| `LINUXDO_CLIENT_ID` | - | ❌ | LinuxDO 应用 ID |
| `LINUXDO_CLIENT_SECRET` | - | ❌ | LinuxDO 应用密钥 |
| `LINUXDO_REDIRECT_URI` | `http://localhost:8000/api/auth/callback` | ❌ | OAuth 回调地址 |
| `FRONTEND_URL` | `http://localhost:8000` | ❌ | 前端地址 |

## 会话管理

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| `SESSION_EXPIRE_MINUTES` | `120` | 会话过期时间(分钟) |
| `SESSION_REFRESH_THRESHOLD_MINUTES` | `30` | 会话刷新阈值(分钟) |