# ⭐ star-board

GitHub star 项目动态看板：每 3 小时自动抓取 star 列表的最新 release（含测试版区分），
新增内容自动翻译成中文，生成双语网站（中文在上、原文默认折叠，支持搜索/筛选），并推送 Telegram 汇总。

## 看什么

- **网站**：`https://<你的用户名>.github.io/star-board/` —— 🆕 本次新增 ＋ 📋 全部项目，支持关键词搜索、正式版/测试版/语言筛选
- `DASHBOARD.md`：同上内容的 Markdown 版（仓库内直接看）
- `state.json`：运行状态缓存（已见版本、翻译缓存），请勿手动修改

## 网站部署（GitHub Pages）

1. 仓库设为 Public（Settings → Danger Zone → Change visibility）；
2. Settings → Pages → Source 选 `Deploy from a branch`，分支选 `gh-pages`、目录 `/ (root)`；
3. 工作流每轮运行会自动把新版页面推到 `gh-pages` 分支并发布。

## 需要配置的 Secrets

仓库 Settings → Secrets and variables → Actions → New repository secret：

| Secret | 必填 | 说明 |
|---|---|---|
| `TRANSLATE_API_KEY` | 否 | 主翻译源 key（OpenAI 兼容接口，默认 `https://api.life-pulse.io/v1`，模型 `tencent/Hy-MT2-30B-A3B`） |
| `TRANSLATE_API_URL` | 否 | 主翻译源地址（不填用默认值） |
| `DEEPL_API_KEY` | 否 | 兜底 DeepL key（`:fx` 免费 key 走 `api-free.deepl.com`，每月 50 万字符） |
| `TELEGRAM_BOT_TOKEN` | 否 | @BotFather 创建的 bot token（不填则不推送） |
| `TELEGRAM_CHAT_ID` | 否 | 接收推送的 chat id（给 bot 发条消息后从 `getUpdates` 获取；不填则不推送） |

说明：

- 翻译是"主备自动切换"：主翻译源失败（超时/500/限流）自动切 DeepL；都没配或都失败则只展示原文。
- 翻译结果按 release id 缓存进 `state.json`，只翻新增，不重复花钱。
- 首次运行时只翻译 30 天内的 release（`BACKFILL_DAYS` 可调），且不发 Telegram（避免 171 条刷屏）。
- 无 release 的仓库用最新 commit 时间兜底展示（不翻译）。
- GitHub API 用 `GITHUB_TOKEN` 即可（star 列表是公开数据），无需额外 PAT。

## 手动触发

Actions → star-board → Run workflow，可随时手动刷一次。
