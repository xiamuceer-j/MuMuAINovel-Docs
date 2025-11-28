# 高级配置

## 连接池配置

用于优化数据库性能，支持高并发访问。

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| `DATABASE_POOL_SIZE` | `30` | 核心连接池大小 |
| `DATABASE_MAX_OVERFLOW` | `20` | 最大溢出连接数 |
| `DATABASE_POOL_TIMEOUT` | `60` | 获取连接的超时时间(秒) |
| `DATABASE_POOL_RECYCLE` | `1800` | 连接回收时间(秒) |
| `DATABASE_POOL_PRE_PING` | `True` | 连接前是否检测有效性 |
| `DATABASE_POOL_USE_LIFO` | `True` | 是否使用 LIFO 策略 |

::: tip 性能建议
- 小型团队(10-30人): `POOL_SIZE=20`, `MAX_OVERFLOW=10`
- 中型团队(30-80人): `POOL_SIZE=30`, `MAX_OVERFLOW=20` (默认)
- 大型团队(80+人): `POOL_SIZE=50`, `MAX_OVERFLOW=30`
:::

## 监控配置

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| `DATABASE_ENABLE_SLOW_QUERY_LOG` | `True` | 启用慢查询日志 |
| `DATABASE_SLOW_QUERY_THRESHOLD` | `1.0` | 慢查询阈值(秒) |
| `DATABASE_ENABLE_METRICS` | `True` | 启用性能指标收集 |

## 日志配置

应用日志相关设置。

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| `LOG_LEVEL` | `INFO` | 日志级别 (DEBUG/INFO/WARNING/ERROR) |
| `LOG_TO_FILE` | `true` | 是否输出到文件 |
| `LOG_FILE_PATH` | `logs/app.log` | 日志文件路径 |
| `LOG_MAX_BYTES` | `10485760` | 单个日志文件最大大小(字节) |
| `LOG_BACKUP_COUNT` | `30` | 保留的日志文件数量 |

## 网络配置

#### CORS

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| `CORS_ORIGINS` | `["http://localhost:8000"]` | 允许的跨域来源列表 |

#### 代理设置

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| `HTTP_PROXY` | - | HTTP 代理地址 |
| `HTTPS_PROXY` | - | HTTPS 代理地址 |
| `NO_PROXY` | `localhost,127.0.0.1` | 不使用代理的地址 |

## PostgreSQL 性能优化

以下配置在 `docker-compose.yml` 中设置，用于优化 PostgreSQL 性能。

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `max_connections` | `200` | 最大连接数 |
| `shared_buffers` | `256MB` | 共享缓冲区大小 |
| `effective_cache_size` | `1GB` | 有效缓存大小 |
| `maintenance_work_mem` | `64MB` | 维护操作内存 |
| `work_mem` | `4MB` | 单个操作工作内存 |