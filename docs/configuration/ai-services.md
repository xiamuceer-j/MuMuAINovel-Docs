# AI 服务配置

配置 AI 模型提供商和默认参数。

## OpenAI

| 变量名 | 默认值 | 必需 | 说明 |
|--------|--------|------|------|
| `OPENAI_API_KEY` | - | ✅ | OpenAI API 密钥 |
| `OPENAI_BASE_URL` | `https://api.openai.com/v1` | ❌ | API 端点地址 |

## Gemini

| 变量名 | 默认值 | 必需 | 说明 |
|--------|--------|------|------|
| `GEMINI_API_KEY` | - | ❌ | Google Gemini API 密钥 |
| `GEMINI_BASE_URL` | - | ❌ | Gemini API 端点地址 |

## Claude (Anthropic)

| 变量名 | 默认值 | 必需 | 说明 |
|--------|--------|------|------|
| `ANTHROPIC_API_KEY` | - | ❌ | Anthropic API 密钥 |
| `ANTHROPIC_BASE_URL` | - | ❌ | Anthropic API 端点地址 |

## 默认模型参数

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| `DEFAULT_AI_PROVIDER` | `openai` | 默认使用的 AI 提供商 |
| `DEFAULT_MODEL` | `gpt-4o-mini` | 默认使用的模型 |
| `DEFAULT_TEMPERATURE` | `0.7` | 生成文本的温度参数 (0-1) |
| `DEFAULT_MAX_TOKENS` | `32000` | 单次生成的最大 token 数 |

::: tip API 中转服务
如果使用 API 中转服务(如 New API)，只需修改 `OPENAI_BASE_URL` 为中转服务地址即可：
```bash
OPENAI_API_KEY=sk-xxxxxxxx
OPENAI_BASE_URL=https://api.new-api.com/v1
```
:::