# ⭐ Star 动态看板

> 生成时间：2026-10-30 16:24:26 UTC ｜ 共 187 个项目 ｜ 每 3 小时自动更新

## 🆕 本次新增（10）

### [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) `✅ 正式版` `v2.3.6`

发布时间：2026-10-30（1 小时前）｜ [查看 Release](https://github.com/x554960766/wechat-mp-tools/releases/tag/v2.3.6)

*（原文，翻译暂不可用）*

Release v2.3.6: enhance RSS proxy URL generation, token validation, and reverse proxy security

---

### [opendatalab/MinerU](https://github.com/opendatalab/MinerU) `✅ 正式版` `mineru-4.1.3-released`

发布时间：2026-10-30（5 小时前）｜ [查看 Release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.1.3-released)

*（原文，翻译暂不可用）*

中文

* Router 动态节点管理：支持运行时注册、查看和注销远程节点，通过独立管理密钥控制访问，无需重启即可调整节点池。
* 节点平滑退出：注销节点后停止分配新任务，等待已有任务、请求、下载及结果保留引用释放后再移除。
* API 过期时间精度：内部保留亚秒级时间精度，避免短保留期因整秒取整而提前失效；公开时间戳保持整数格式。
* 请求与运行时稳定性：修复重复文件传输可能触发的连接重置，改善反向代理路径前缀与 Unicode URL 兼容性，并优化空闲模型运行时的退出清理。
* 文档与集成示例：整理用户文档和历史资料，增加旧链接重定向与站点检查，补充 Tasks API、Router 管理、curl 和 n8n 示例。

English

* Dynamic Router upstreams: Register, inspect, and deregister remote workers at runtime using an independent management key.
* Graceful worker draining: Deregistered workers stop receiving new tasks and remain available until existing tasks, requests, downloads, and retained resource references are released.
* Precise API expiration: Preserve subsecond precision internally to prevent short retention periods from expiring early, while keeping public timestamps as integers.
* Request and runtime stability: Fix connection resets during duplicate file transfers, improve reverse-proxy path prefix and Unicode URL handling, and refine idle model runtime cleanup.
* Documentation and integration examples: Reorganize current and historical documentation, add redirects and site checks, and expand Tasks API, Router management, curl, and n8n examples.

---

### [z-mio/ParseHub](https://github.com/z-mio/ParseHub) `✅ 正式版` `v2.3.16`

发布时间：2026-10-30（46 分钟前）｜ [查看 Release](https://github.com/z-mio/ParseHub/releases/tag/v2.3.16)

*  fix: 匿名改用新版 GraphQL 并以 embed 兜底, 单视频优先 yt-dlp 下载最高画质

---

### [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) `📝 提交` `4068d56`

发布时间：2026-10-30（1 小时前）｜ [查看提交](https://github.com/1c7/chinese-independent-developer/commit/4068d56021ce635850cbe443f8e9cebbb9fbcc76)

*（原文，翻译暂不可用）*

添加：AloneMonkey 的 HotRepo（Issue #1708）

---

### [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) `✅ 正式版` `v0.8.0`

发布时间：2026-10-30（1 小时前）｜ [查看 Release](https://github.com/EKKOLearnAI/ekko-studio/releases/tag/v0.8.0)

## 更新日志

1. 新增个人助理 BOT：首条消息即可创建，可命名、搜索、切换和批量删除；各 BOT 独立保存对话，共享账户记忆、Agent 预设和工作区 (#3552, #3568, #3575)
2. 新增十款角色及循环角色选择器，支持鼠标、触摸和键盘；完善首次设置提示、重名反馈和草稿保留 (#3581, #3583)
3. 个人助理后台任务支持排队追加要求、继续原任务和查看实时工具调用；执行指令以可读文本展示 (#3566, #3580)
4. 个人助理支持串行与并行角色协作、结果交接及紧凑进度列表；协作失败后自动释放角色，可查看错误并恢复未完成分支 (#3571, #3585, #3592)
5. 个人助理定时计划支持唤醒助理或运行任务，每次触发隔离执行对话；支持删除计划，并保留已有任务和执行记录 (#3578, #3579)
6. 完善个人助理上下文压缩、账户记忆和停止控制；按用户要求记住任务返回结果，并避免日常回复重复自我介绍 (#3554, #3565, #3576)
7. JEV 改为 Studio 全局配置，由超级管理员管理；新增可独立开启的个人助理记忆增强，默认关闭 (#3562)
8. 个人助理接入完成、失败、审批和澄清通知；新增后台任务浮动提示，跨设备同步会话活动、未读状态和已读回执 (#3560, #3563, #3582)
9. 用量统计单独标识个人助理 zhezhe，显示对应 Agent 图标；后台任务仍按实际执行 Agent 统计 (#3564)
10. 个人助理后台并发默认提高至 6、最高 12，同一账户的所有 BOT 共享额度，保留已保存的自定义限制 (#3584)
11. 个人助理主对话和任务对话新增工作区、终端与浏览器工具面板，支持文件预览、编辑及浏览器标注，并保留未保存内容 (#3591, #3593)
12. 修复个人助理与普通聊天切换时的会话隔离；删除最后一个普通会话后显示新建页，避免全盘或主目录工作区快照阻塞服务 (#3572, #3573, #3577)
13. 任务列表支持手动设为未完成、已完成或已关闭，关闭后可手动重开；默认按更新时间排序，不再让旧未完成任务置顶 (#3535, #3590)
14. 任务卡步骤和说明遵循当前对话语言；任务计划 ID 与每轮授权上下文分离，改善过期上下文提示 (#3542, #3544)
15. 内置浏览器跟随 Studio 明暗主题，并用 Chromium 原生自动深色渲染改善固定浅色网页 (#3504, #3517)
16. 桌面远程模式登录后自动共享内置浏览器，断线后自动重连；同步授权失效状态，修复路由导航误撤销共享 (#3514, #3519)
17. 浏览器 Agent 新增文件上传与下载、悬停、选项选择和等待文本；上传无需系统文件框，下载可返回至 MCP 所在主机 (#3522)
18. 浏览器 Agent 新增页面弹窗处理、跨域 iframe、双击、右键、拖拽、坐标操作、文件框拦截及脱敏网络记录；修复富文本输入与 macOS Cmd 快捷键 (#3518, #3523)
19. 浏览器记住各设备和配置的下载目录，新增搜索、日期分组和安全清理下载历史；清理记录保留文件和活动下载 (#3536)
20. 设备可在当前窗口或独立窗口打开，重复打开复用已有窗口；隔离设备的登录、浏览器和存储，并协调多窗口更新 (#3521)
21. 修复 Codex 在兼容接口中丢失已发现 MCP 工具命名空间的问题；Pi 的 Studio 会话读取工具改为常驻可用 (#3533, #3315)
22. Claude 在启动和提示刷新后保留用户指令；DSH 改善非 DeepSeek 模型的工具续执行提示，并支持可配置的启动等待时间 (#3548, #3553, #3326, #3526)
23. MiniMax 优先推荐 M3.1 Flash 和 M3，完善推理参数与历史兼容；聊天、群聊和工作流默认选用最低可用推理等级，保留显式设置 (#3476, #3554)
24. 修复普通用户在群聊和工作流中无法选择可用 Agent 的问题；补充群聊路由异常诊断日志 (#3546, #3498)
25. 修复 Edge TTS WebSocket 握手失败；Hermes 运行时显示规范版本身份，避免将占位版本 0.0.0 当作实际版本 (#3444, #3557)
26. MCU 可显式订阅现有 Webhook 事件，支持过滤和正文开关；沿用账户权限校验，未订阅设备不受影响 (#3541)
27. 统一 MCU 固件项目目录并补充 StackChan 实时语音与 Agent 控制规划文档，精简重复测试；固件二进制未改变，规划功能尚未实现 (#3537, #35

---

### [xgit01/sgkrank](https://github.com/xgit01/sgkrank) `📝 提交` `80d8c94`

发布时间：2026-10-30（3 小时前）｜ [查看提交](https://github.com/xgit01/sgkrank/commit/80d8c942c751c2c6f675598a5df3b95da5be78a6)

新增新之助社工库

---

### [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) `📝 提交` `8d4e039`

发布时间：2026-10-30（3 小时前）｜ [查看提交](https://github.com/Aethersailor/Custom_OpenClash_Rules/commit/8d4e03994736538f1471f0b9f9066df60db8e9d7)

*（原文，翻译暂不可用）*

chore(rules): auto generate derived rule files

---

### [adysec/tracker](https://github.com/adysec/tracker) `📝 提交` `d24cff8`

发布时间：2026-10-30（1 小时前）｜ [查看提交](https://github.com/adysec/tracker/commit/d24cff87601907b7156426033dfcb6558367babe)

*（原文，翻译暂不可用）*

20261030

---

### [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) `✅ 正式版` `v2026.10.30-8498.c175b17`

发布时间：2026-10-30（43 分钟前）｜ [查看 Release](https://github.com/DIYgod/RSSHub/releases/tag/v2026.10.30-8498.c175b17)

*（原文，翻译暂不可用）*

Source commit: c175b17e121bb2c58af0b7772f6311a8b4217309

---

### [gkd-kit/gkd](https://github.com/gkd-kit/gkd) `🧪 测试版` `v1.13.0-beta-3`

发布时间：2026-10-30（1 小时前）｜ [查看 Release](https://github.com/gkd-kit/gkd/releases/tag/v1.13.0-beta-3)

# 更新内容

- 新增匹配运行诊断，支持采集、管理和分享诊断记录，方便排查规则未生效、误触及执行缓慢等问题
- 新增透明悬浮窗保活开关，完善保活策略引导与状态展示
- 新增本地订阅应用规则组拖动排序
- 支持中断正在执行的滑动，避免页面切换或规则失效后继续滑动
- 优化匹配调度与窗口识别，减少应用切换时的匹配延迟，修复重复窗口事件导致匹配中断的问题
- 完善规则坐标表达式校验与错误提示
- 优化订阅下载进度提示、类别状态图标及帮助说明
- 优化设置页面布局、日志导出与分享体验
- 调整快照卡片缩略图比例
- 修复追加规则组时 `scopeKeys` 引用未同步更新的问题
- 修复应用 ID 列表编辑与保存问题
- 限制普通提示仅在应用前台显示，减少后台打扰

## 更新方式

- GKD - 设置 - 关于 - 检测更新
- 下列方式之一

---

## 📋 全部项目（按最近更新排序）

| 项目 | 最新版本 | 类型 | 更新时间 | 距今 |
|---|---|---|---|---|
| [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) | `v2026.10.30-8498.c175b17` | 正式版 | 2026-10-30 | 43 分钟前 |
| [z-mio/ParseHub](https://github.com/z-mio/ParseHub) | `v2.3.16` | 正式版 | 2026-10-30 | 46 分钟前 |
| [gkd-kit/gkd](https://github.com/gkd-kit/gkd) | `v1.13.0-beta-3` | 测试版 | 2026-10-30 | 1 小时前 |
| [adysec/tracker](https://github.com/adysec/tracker) | — | 提交 | 2026-10-30 | 1 小时前 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | `v0.8.0` | 正式版 | 2026-10-30 | 1 小时前 |
| [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) | — | 提交 | 2026-10-30 | 1 小时前 |
| [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) | `v2.3.6` | 正式版 | 2026-10-30 | 1 小时前 |
| [xgit01/sgkrank](https://github.com/xgit01/sgkrank) | — | 提交 | 2026-10-30 | 3 小时前 |
| [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) | — | 提交 | 2026-10-30 | 3 小时前 |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | `mineru-4.1.3-released` | 正式版 | 2026-10-30 | 5 小时前 |
| [AIsouler/MyClash](https://github.com/AIsouler/MyClash) | — | 提交 | 2026-10-30 | 7 小时前 |
| [DUNHKpcc/Claude-Guardian](https://github.com/DUNHKpcc/Claude-Guardian) | — | 提交 | 2026-10-30 | 8 小时前 |
| [t59688/newsnook](https://github.com/t59688/newsnook) | `v1.9.2-beta.4` | 测试版 | 2026-10-30 | 8 小时前 |
| [tradingeconomics/tradingeconomics](https://github.com/tradingeconomics/tradingeconomics) | — | 提交 | 2026-10-30 | 9 小时前 |
| [KaringX/clashmi](https://github.com/KaringX/clashmi) | `v1.0.32.1802` | 测试版 | 2026-10-30 | 9 小时前 |
| [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) | `v7.3.3.4` | 正式版 | 2026-10-30 | 10 小时前 |
| [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) | `latest` | 正式版 | 2026-10-30 | 12 小时前 |
| [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) | `v3.1.3` | 正式版 | 2026-10-30 | 13 小时前 |
| [tingaicompass/AI-Compass](https://github.com/tingaicompass/AI-Compass) | — | 提交 | 2026-10-30 | 14 小时前 |
| [XIU2/TrackersListCollection](https://github.com/XIU2/TrackersListCollection) | — | 提交 | 2026-10-30 | 16 小时前 |
| [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) | `draft` | 测试版 | 2026-10-29 | 16 小时前 |
| [crimera/piko-newx](https://github.com/crimera/piko-newx) | `v3.72.3` | 正式版 | 2026-10-29 | 16 小时前 |
| [ngosang/trackerslist](https://github.com/ngosang/trackerslist) | — | 提交 | 2026-10-29 | 17 小时前 |
| [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules) | `202610292235` | 正式版 | 2026-10-29 | 17 小时前 |
| [Niklaus88/Clash-Config](https://github.com/Niklaus88/Clash-Config) | — | 提交 | 2026-10-29 | 22 小时前 |
| [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) | `v1.6.6-beta2` | 测试版 | 2026-10-29 | 1 天前 |
| [yigenhuobah/quietbox](https://github.com/yigenhuobah/quietbox) | `v0.9.0` | 正式版 | 2026-10-29 | 1 天前 |
| [dukangalex/HiClash](https://github.com/dukangalex/HiClash) | — | 提交 | 2026-10-29 | 1 天前 |
| [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | `v0.103.3012` | 测试版 | 2026-10-29 | 1 天前 |
| [XTLS/Xray-core](https://github.com/XTLS/Xray-core) | `v26.10.29` | 正式版 | 2026-10-29 | 1 天前 |
| [Xposed-Modules-Repo/com.tianqianguai.xtq](https://github.com/Xposed-Modules-Repo/com.tianqianguai.xtq) | `71-12.38.1-prod.01` | 正式版 | 2026-10-29 | 1 天前 |
| [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) | `26.10.29-1` | 正式版 | 2026-10-29 | 1 天前 |
| [xiaoyaDev/xiaoya-alist](https://github.com/xiaoyaDev/xiaoya-alist) | — | 提交 | 2026-10-28 | 1 天前 |
| [JushiZen/Nimbus.Player](https://github.com/JushiZen/Nimbus.Player) | — | 提交 | 2026-10-28 | 2 天前 |
| [Inginnng/EditHere](https://github.com/Inginnng/EditHere) | `v0.12.3` | 正式版 | 2026-10-28 | 2 天前 |
| [myikuns/jichangtz-tuijian](https://github.com/myikuns/jichangtz-tuijian) | — | 提交 | 2026-10-28 | 2 天前 |
| [hicccc77/WeFlow](https://github.com/hicccc77/WeFlow) | — | 提交 | 2026-10-28 | 2 天前 |
| [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) | — | 提交 | 2026-10-28 | 2 天前 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | `autogpt-platform-beta-v0.10.0` | 测试版 | 2026-10-27 | 2 天前 |
| [uxgnod/yaf](https://github.com/uxgnod/yaf) | `v0.4.0` | 正式版 | 2026-10-27 | 3 天前 |
| [ArvinLovegood/go-stock](https://github.com/ArvinLovegood/go-stock) | `v2026.10.27.1-release` | 正式版 | 2026-10-27 | 3 天前 |
| [mason173/aira-browser](https://github.com/mason173/aira-browser) | `v3.9.1` | 正式版 | 2026-10-27 | 3 天前 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | `v0.7.1` | 正式版 | 2026-10-27 | 3 天前 |
| [z-mio/parse_hub_bot](https://github.com/z-mio/parse_hub_bot) | `v2.2.7` | 正式版 | 2026-10-27 | 3 天前 |
| [felinics/Memoh](https://github.com/felinics/Memoh) | `v1.0.0-beta.1` | 测试版 | 2026-10-27 | 3 天前 |
| [T8RIN/ImageToolbox](https://github.com/T8RIN/ImageToolbox) | `4.3.0-beta03` | 测试版 | 2026-10-26 | 3 天前 |
| [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) | `V1.0.322` | 正式版 | 2026-10-26 | 4 天前 |
| [pgntgz/ClipBait](https://github.com/pgntgz/ClipBait) | `3-1.1.1` | 正式版 | 2026-10-26 | 4 天前 |
| [sunisup666/TikTools](https://github.com/sunisup666/TikTools) | `6-0.4.1` | 正式版 | 2026-10-26 | 4 天前 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | `v1.4.3` | 正式版 | 2026-10-26 | 4 天前 |
| [Ajaxc/WeChatList](https://github.com/Ajaxc/WeChatList) | `2.5.4` | 正式版 | 2026-10-26 | 4 天前 |
| [bilibili/Index-Translate](https://github.com/bilibili/Index-Translate) | — | 提交 | 2026-10-26 | 4 天前 |
| [UniClipboard/UniClipboard](https://github.com/UniClipboard/UniClipboard) | `v1.5.0` | 正式版 | 2026-10-26 | 4 天前 |
| [fankes/TSBattery](https://github.com/fankes/TSBattery) | `5.0.1` | 正式版 | 2026-10-26 | 4 天前 |
| [yagay/ListCleaner](https://github.com/yagay/ListCleaner) | `v1.6.46` | 正式版 | 2026-10-25 | 4 天前 |
| [Lotuszn/piggyhand-fish](https://github.com/Lotuszn/piggyhand-fish) | `v1.1.10` | 正式版 | 2026-10-25 | 4 天前 |
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | `v0.20.0` | 正式版 | 2026-10-25 | 4 天前 |
| [crimera/piko](https://github.com/crimera/piko) | `v3.11.0-dev.3` | 测试版 | 2026-10-25 | 4 天前 |
| [johamwon/wechrss](https://github.com/johamwon/wechrss) | — | 提交 | 2026-10-25 | 5 天前 |
| [morluto/rea](https://github.com/morluto/rea) | `rea-agents-6.8.0` | 正式版 | 2026-10-25 | 5 天前 |
| [ZCShou/GoGoGo](https://github.com/ZCShou/GoGoGo) | `v2.5.2` | 正式版 | 2026-10-25 | 5 天前 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | `v4.29.3` | 正式版 | 2026-10-24 | 6 天前 |
| [komi-store/komi-store](https://github.com/komi-store/komi-store) | `v1.9.4` | 正式版 | 2026-10-24 | 6 天前 |
| [chen08209/FlClash](https://github.com/chen08209/FlClash) | `v0.9.2` | 正式版 | 2026-10-24 | 6 天前 |
| [SagerNet/sing-box](https://github.com/SagerNet/sing-box) | `v1.15.0-alpha.13` | 测试版 | 2026-10-24 | 6 天前 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | `v1.6.0` | 正式版 | 2026-10-23 | 7 天前 |
| [joeytoday/obsidian-canvas-enhance](https://github.com/joeytoday/obsidian-canvas-enhance) | `1.0.11` | 正式版 | 2026-10-22 | 8 天前 |
| [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) | `v1.19.7` | 正式版 | 2026-10-22 | 8 天前 |
| [fw876/helloworld](https://github.com/fw876/helloworld) | `v198.2` | 正式版 | 2026-10-22 | 8 天前 |
| [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) | `v1.19.33` | 正式版 | 2026-10-21 | 8 天前 |
| [exteraless/exteraless](https://github.com/exteraless/exteraless) | `ci-8b7ec40` | 测试版 | 2026-10-21 | 9 天前 |
| [LifeArchiveProject/WeChatDataAnalysis](https://github.com/LifeArchiveProject/WeChatDataAnalysis) | `macos-source-runtime-39523784335-3` | 正式版 | 2026-10-21 | 9 天前 |
| [GravityPoet/ChordVox](https://github.com/GravityPoet/ChordVox) | `v1.5.144` | 正式版 | 2026-10-20 | 9 天前 |
| [Lingyan000/fluxdo](https://github.com/Lingyan000/fluxdo) | `v0.2.29` | 正式版 | 2026-10-20 | 10 天前 |
| [ShareX/ShareX](https://github.com/ShareX/ShareX) | `v22.0.0` | 测试版 | 2026-10-20 | 10 天前 |
| [ZGMFX01A/OrigRead](https://github.com/ZGMFX01A/OrigRead) | `v1.7.1` | 正式版 | 2026-10-18 | 12 天前 |
| [kenischu/ReSource](https://github.com/kenischu/ReSource) | `3.0.8` | 正式版 | 2026-10-18 | 12 天前 |
| [Teamper/JHS](https://github.com/Teamper/JHS) | `v6.5.2` | 正式版 | 2026-10-16 | 14 天前 |
| [waditu/czsc](https://github.com/waditu/czsc) | `v1.0.2` | 正式版 | 2026-10-16 | 14 天前 |
| [NEORUAA/MeiloX](https://github.com/NEORUAA/MeiloX) | `1.55.1` | 正式版 | 2026-10-16 | 14 天前 |
| [jiangrui1994/CloudSaver](https://github.com/jiangrui1994/CloudSaver) | — | 提交 | 2026-10-15 | 15 天前 |
| [daimiaopeng/coolapk-desktop](https://github.com/daimiaopeng/coolapk-desktop) | `v1.35.0` | 正式版 | 2026-10-15 | 15 天前 |
| [xweiba/location-spoofer](https://github.com/xweiba/location-spoofer) | `v1.0.9` | 正式版 | 2026-10-14 | 16 天前 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | — | 提交 | 2026-10-14 | 16 天前 |
| [7723mod/NPatch](https://github.com/7723mod/NPatch) | `v1.0.9` | 正式版 | 2026-10-12 | 18 天前 |
| [dongyubin/IPTV](https://github.com/dongyubin/IPTV) | — | 提交 | 2026-10-11 | 19 天前 |
| [pengchujin/livecanvas](https://github.com/pengchujin/livecanvas) | — | 提交 | 2026-10-10 | 20 天前 |
| [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) | `v2.5.8` | 正式版 | 2026-10-09 | 21 天前 |
| [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) | — | 提交 | 2026-10-08 | 21 天前 |
| [jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader) | `desktop-v0.12.5` | 正式版 | 2026-10-08 | 22 天前 |
| [hoothin/UserScripts](https://github.com/hoothin/UserScripts) | — | 提交 | 2026-10-07 | 22 天前 |
| [reeden-org/reeden-app](https://github.com/reeden-org/reeden-app) | `v1.43.1` | 正式版 | 2026-10-07 | 23 天前 |
| [AyuGram/AyuGramDesktop](https://github.com/AyuGram/AyuGramDesktop) | `v7.2.9` | 正式版 | 2026-10-05 | 25 天前 |
| [HyNetworks/hysteria](https://github.com/HyNetworks/hysteria) | `app/v2.13.0` | 正式版 | 2026-10-05 | 25 天前 |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | `v1.15.0` | 正式版 | 2026-10-04 | 25 天前 |
| [linesoft2/TaskMonitor](https://github.com/linesoft2/TaskMonitor) | `v2026.9.30.1` | 正式版 | 2026-09-30 | 1 个月前 |
| [xykt/IPQuality](https://github.com/xykt/IPQuality) | — | 提交 | 2026-09-30 | 1 个月前 |
| [op7418/Humanizer-zh](https://github.com/op7418/Humanizer-zh) | — | 提交 | 2026-09-23 | 1 个月前 |
| [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | — | 提交 | 2026-09-22 | 1 个月前 |
| [zhangxiangliang/stock-api](https://github.com/zhangxiangliang/stock-api) | `v2.7.5` | 正式版 | 2026-09-21 | 1 个月前 |
| [TG-Twilight/AWAvenue-Ads-Rule](https://github.com/TG-Twilight/AWAvenue-Ads-Rule) | `1.7.8-release` | 正式版 | 2026-09-21 | 1 个月前 |
| [yuanzl77/IPTV](https://github.com/yuanzl77/IPTV) | — | 提交 | 2026-09-21 | 1 个月前 |
| [zhanghai/MaterialFiles](https://github.com/zhanghai/MaterialFiles) | `v1.7.5` | 正式版 | 2026-09-20 | 1 个月前 |
| [black-ant/Ant-Browser](https://github.com/black-ant/Ant-Browser) | `V1.8.0` | 正式版 | 2026-09-19 | 1 个月前 |
| [liaoliao666/v2ex](https://github.com/liaoliao666/v2ex) | `1.9.6` | 正式版 | 2026-09-19 | 1 个月前 |
| [eternity4719/HowToLiveBetter](https://github.com/eternity4719/HowToLiveBetter) | `epub-latest` | 正式版 | 2026-09-18 | 1 个月前 |
| [j4Uq/TVBoxOSC](https://github.com/j4Uq/TVBoxOSC) | `20260914-1520` | 正式版 | 2026-09-14 | 1 个月前 |
| [shufflewzc/faker3](https://github.com/shufflewzc/faker3) | — | 提交 | 2026-09-14 | 1 个月前 |
| [wcq-glhf/prex-quant](https://github.com/wcq-glhf/prex-quant) | — | 提交 | 2026-09-13 | 1 个月前 |
| [HsukqiLee/MediaUnlockTest](https://github.com/HsukqiLee/MediaUnlockTest) | `v1.9.10-1788951725` | 正式版 | 2026-09-09 | 1 个月前 |
| [XIaodou0416/Beans-Music](https://github.com/XIaodou0416/Beans-Music) | `v1.6.6` | 正式版 | 2026-09-06 | 1 个月前 |
| [guangxiangdebizi/FinanceMCP](https://github.com/guangxiangdebizi/FinanceMCP) | `v4.11.2` | 正式版 | 2026-09-04 | 1 个月前 |
| [xykt/NetQuality](https://github.com/xykt/NetQuality) | — | 提交 | 2026-09-01 | 1 个月前 |
| [hifengzy/ima-sync](https://github.com/hifengzy/ima-sync) | `0.3.1` | 正式版 | 2026-08-29 | 2 个月前 |
| [Kyant0/AndroidLiquidGlass](https://github.com/Kyant0/AndroidLiquidGlass) | `2.0.1` | 正式版 | 2026-08-26 | 2 个月前 |
| [Conquerer-yinn/Kakaaaa-quant](https://github.com/Conquerer-yinn/Kakaaaa-quant) | `v1.0.0` | 正式版 | 2026-08-24 | 2 个月前 |
| [yeximm/Access_wechat_article](https://github.com/yeximm/Access_wechat_article) | `v2.2.0` | 正式版 | 2026-08-23 | 2 个月前 |
| [liuran001/mihomo](https://github.com/liuran001/mihomo) | `Prerelease-Alpha` | 测试版 | 2026-08-20 | 2 个月前 |
| [bozhouDev/codex-orange-book](https://github.com/bozhouDev/codex-orange-book) | — | 提交 | 2026-08-14 | 2 个月前 |
| [SMNETSTUDIO/WeChat-AI](https://github.com/SMNETSTUDIO/WeChat-AI) | `v0.12.0` | 正式版 | 2026-08-13 | 2 个月前 |
| [bbstom/TelegramGroup](https://github.com/bbstom/TelegramGroup) | — | 提交 | 2026-08-10 | 2 个月前 |
| [ka-pi-ba-la/awesome-ai-tools](https://github.com/ka-pi-ba-la/awesome-ai-tools) | — | 提交 | 2026-08-08 | 2 个月前 |
| [clashproxy/clash-download](https://github.com/clashproxy/clash-download) | — | 提交 | 2026-08-07 | 2 个月前 |
| [codeman008/Financial_freedom](https://github.com/codeman008/Financial_freedom) | — | 提交 | 2026-08-06 | 2 个月前 |
| [zjssun/TradeMirror](https://github.com/zjssun/TradeMirror) | `v1.2` | 正式版 | 2026-08-04 | 2 个月前 |
| [Cyrene963/hermes-patches](https://github.com/Cyrene963/hermes-patches) | — | 提交 | 2026-08-03 | 2 个月前 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | `latest` | 测试版 | 2026-07-21 | 3 个月前 |
| [pengchujin/jzsub](https://github.com/pengchujin/jzsub) | `v1.8.1` | 正式版 | 2026-07-13 | 3 个月前 |
| [thedjchi/Shizuku](https://github.com/thedjchi/Shizuku) | `v13.7.0-thedjchi` | 正式版 | 2026-07-02 | 4 个月前 |
| [cinit/QAuxiliary](https://github.com/cinit/QAuxiliary) | `v1.6.1` | 正式版 | 2026-06-30 | 4 个月前 |
| [woijfwefw/ZsxqCrawler](https://github.com/woijfwefw/ZsxqCrawler) | — | 提交 | 2026-06-25 | 4 个月前 |
| [LibChecker/tgbot](https://github.com/LibChecker/tgbot) | `nightly` | 测试版 | 2026-06-23 | 4 个月前 |
| [yyyyymmmmm/InkRoot](https://github.com/yyyyymmmmm/InkRoot) | `v1.1.13` | 正式版 | 2026-06-22 | 4 个月前 |
| [loc567/loc567](https://github.com/loc567/loc567) | — | 提交 | 2026-06-19 | 4 个月前 |
| [LibChecker/LibChecker](https://github.com/LibChecker/LibChecker) | `2.5.4` | 正式版 | 2026-06-17 | 4 个月前 |
| [echs-top/proxy](https://github.com/echs-top/proxy) | `zashboard` | 正式版 | 2026-06-15 | 4 个月前 |
| [nicejade/wealth-tracker](https://github.com/nicejade/wealth-tracker) | `v5.0.0` | 正式版 | 2026-06-13 | 4 个月前 |
| [foru17/make-x-great-again](https://github.com/foru17/make-x-great-again) | `v0.4.0` | 正式版 | 2026-05-28 | 5 个月前 |
| [gedoor/legado](https://github.com/gedoor/legado) | — | 提交 | 2026-05-27 | 5 个月前 |
| [zjp1997720/wechat-radar](https://github.com/zjp1997720/wechat-radar) | — | 提交 | 2026-05-26 | 5 个月前 |
| [PlexPt/awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh) | — | 提交 | 2026-04-28 | 6 个月前 |
| [tradingeconomics/notebooks](https://github.com/tradingeconomics/notebooks) | — | 提交 | 2026-04-23 | 6 个月前 |
| [wink-wink-wink555/MarkiNote](https://github.com/wink-wink-wink555/MarkiNote) | `v3.0.1` | 正式版 | 2026-04-12 | 6 个月前 |
| [therealXiaomanChu/ex-skill](https://github.com/therealXiaomanChu/ex-skill) | — | 提交 | 2026-04-08 | 6 个月前 |
| [cq0206/wechat2rss](https://github.com/cq0206/wechat2rss) | — | 提交 | 2026-03-20 | 7 个月前 |
| [hzlzh/Best-App](https://github.com/hzlzh/Best-App) | — | 提交 | 2026-03-17 | 7 个月前 |
| [quant-king299/EasyXT](https://github.com/quant-king299/EasyXT) | `v1.0.0` | 正式版 | 2026-03-12 | 7 个月前 |
| [DIYgod/RSSHub-Radar](https://github.com/DIYgod/RSSHub-Radar) | `v2.2.0` | 正式版 | 2026-02-11 | 8 个月前 |
| [Tongyi-MAI/Z-Image](https://github.com/Tongyi-MAI/Z-Image) | — | 提交 | 2026-02-09 | 8 个月前 |
| [koolshare/koolshare.github.io](https://github.com/koolshare/koolshare.github.io) | — | 提交 | 2026-01-27 | 9 个月前 |
| [jbiaojerry/ebook-treasure-chest](https://github.com/jbiaojerry/ebook-treasure-chest) | — | 提交 | 2026-01-13 | 9 个月前 |
| [mpquant/Ashare](https://github.com/mpquant/Ashare) | — | 提交 | 2025-12-24 | 10 个月前 |
| [Yu-Core/SwashbucklerDiary](https://github.com/Yu-Core/SwashbucklerDiary) | `v1.31.5` | 正式版 | 2025-12-10 | 10 个月前 |
| [likeflyme/cloudbak](https://github.com/likeflyme/cloudbak) | — | 提交 | 2025-10-24 | 1 年前 |
| [xaoyaoo/PyWxDump](https://github.com/xaoyaoo/PyWxDump) | — | 提交 | 2025-10-20 | 1 年前 |
| [TonyJiangWJ/Ant-Forest](https://github.com/TonyJiangWJ/Ant-Forest) | `v1.5.5.4` | 正式版 | 2025-08-31 | 1 年前 |
| [huiyadanli/RevokeMsgPatcher](https://github.com/huiyadanli/RevokeMsgPatcher) | `2.1` | 正式版 | 2025-08-03 | 1 年前 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | `v2.16.1` | 正式版 | 2025-07-29 | 1 年前 |
| [Xposed-Modules-Repo/com.skyhand.sinahelper](https://github.com/Xposed-Modules-Repo/com.skyhand.sinahelper) | `331-2.5.1` | 正式版 | 2025-06-23 | 1 年前 |
| [RikkaApps/Shizuku](https://github.com/RikkaApps/Shizuku) | `v13.6.0` | 正式版 | 2025-05-25 | 1 年前 |
| [Momo707577045/m3u8-downloader](https://github.com/Momo707577045/m3u8-downloader) | — | 提交 | 2025-04-22 | 1 年前 |
| [TonyJiangWJ/Unify-Sign](https://github.com/TonyJiangWJ/Unify-Sign) | `v2.4.2.2` | 正式版 | 2025-04-18 | 1 年前 |
| [cooderl/wewe-rss](https://github.com/cooderl/wewe-rss) | `release-20241215130232` | 正式版 | 2024-12-15 | 1 年前 |
| [Max-Tortoise/DouyinLiveRecorder](https://github.com/Max-Tortoise/DouyinLiveRecorder) | — | 提交 | 2024-07-13 | 2 年前 |
| [jm199504/Financial-Time-Series](https://github.com/jm199504/Financial-Time-Series) | — | 提交 | 2024-07-10 | 2 年前 |
| [zmqcherish/proxy-script](https://github.com/zmqcherish/proxy-script) | — | 提交 | 2024-05-15 | 2 年前 |
| [Hackl0us/GeoIP2-CN](https://github.com/Hackl0us/GeoIP2-CN) | — | 提交 | 2024-05-13 | 2 年前 |
| [hamibot/hamibot](https://github.com/hamibot/hamibot) | — | 提交 | 2023-11-01 | 2 年前 |
| [zzzgydi/clash-verge](https://github.com/zzzgydi/clash-verge) | `v1.3.8` | 正式版 | 2023-10-30 | 3 年前 |
| [create-codeless/spider2023](https://github.com/create-codeless/spider2023) | — | 提交 | 2023-08-16 | 3 年前 |
| [MustangYM/WeChatExtension-ForMac](https://github.com/MustangYM/WeChatExtension-ForMac) | `v3.8.2.1` | 正式版 | 2023-07-18 | 3 年前 |
| [NAStool/nas-tools](https://github.com/NAStool/nas-tools) | `v3.2.3` | 正式版 | 2023-05-15 | 3 年前 |
| [moyuweiqing/A-stock-prediction-algorithm-based-on-machine-learning](https://github.com/moyuweiqing/A-stock-prediction-algorithm-based-on-machine-learning) | — | 提交 | 2023-03-30 | 3 年前 |
| [clearw5/Auto.js](https://github.com/clearw5/Auto.js) | — | 提交 | 2023-02-11 | 3 年前 |
| [ZainCheung/helper-618](https://github.com/ZainCheung/helper-618) | — | 提交 | 2022-10-10 | 4 年前 |
| [shufflewzc/faker2](https://github.com/shufflewzc/faker2) | `publish` | 正式版 | 2022-08-31 | 4 年前 |
| [YaoZeyuan/stablog](https://github.com/YaoZeyuan/stablog) | `mac-3.3.7` | 正式版 | 2022-08-03 | 4 年前 |
| [Qv2ray/Qv2ray](https://github.com/Qv2ray/Qv2ray) | `v2.7.0` | 正式版 | 2021-08-17 | 5 年前 |
| [sunnyswag/StockRL](https://github.com/sunnyswag/StockRL) | `1.0` | 正式版 | 2021-05-18 | 5 年前 |
| [zarkin404/sweater](https://github.com/zarkin404/sweater) | — | 提交 | 2020-10-27 | 6 年前 |
| [ritz078/moose](https://github.com/ritz078/moose) | `v0.6.2` | 正式版 | 2020-06-24 | 6 年前 |
| [QuantFans/quantdigger](https://github.com/QuantFans/quantdigger) | — | 提交 | 2020-05-02 | 6 年前 |
| [privacy-protection-tools/anti-AD](https://github.com/privacy-protection-tools/anti-AD) | `v4.3` | 正式版 | 2020-02-04 | 6 年前 |
| [qinyuhang/ShadowsocksX-NG-R](https://github.com/qinyuhang/ShadowsocksX-NG-R) | `1.4.4-r8-resigning` | 测试版 | 2018-12-20 | 7 年前 |
| [imharryzhu/AndroidControl](https://github.com/imharryzhu/AndroidControl) | `1.0.1` | 正式版 | 2018-01-24 | 8 年前 |
| [shadowsocks/shadowsocks-iOS](https://github.com/shadowsocks/shadowsocks-iOS) | `2.6.3` | 正式版 | 2015-06-28 | 11 年前 |
| [waditu/tushare](https://github.com/waditu/tushare) | `0.2.0` | 正式版 | 2015-03-23 | 11 年前 |

---
*由 star-board 每 3 小时自动更新，也可在 Actions 页手动触发。*