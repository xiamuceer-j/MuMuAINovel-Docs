# 登录系统

启动应用后，首次访问会进入登录页面。

![登录界面](/images/login/login.png)

系统支持两种登录方式：

## 本地账户登录

1. 输入在 `.env` 文件中配置的用户名和密码
2. 默认用户名：`admin`
3. 默认密码：在配置文件中设置的 `LOCAL_AUTH_PASSWORD`

## LinuxDO OAuth 登录

如果配置了 LinuxDO OAuth，可以点击"使用 LinuxDO 登录"按钮，系统会跳转到 LinuxDO 进行授权。