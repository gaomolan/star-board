# ⭐ Star 动态看板

> 生成时间：2026-10-14 19:06:32 UTC ｜ 共 172 个项目 ｜ 每 3 小时自动更新

## 🆕 本次新增（7）

### [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) `✅ 正式版` `V1.0.319`

发布时间：2026-10-13（1 天前）｜ [查看 Release](https://github.com/Monica-Pass/Monica/releases/tag/V1.0.319)

# Monica for Android 1.0.319

## 中文

- 新增“附近设备同步”：在同一可互通 Wi-Fi／局域网中扫码或使用链接配对，加密同步本地或受支持的 MDBX 数据库，包含密码、独立验证器、Steam 本地账户、通行密钥、笔记、卡片、文件夹、标签和附件。同步库默认“本地”；Bitwarden／Vaultwarden 与 KeePass 外部库继续使用各自的同步方式。附近同步无需云中转。
- 支持双向、仅发送和仅接收，可选择自动或手动同步。自动同步开关随时可切换，关闭后当前传输正常收尾；配对后也可从主要页面右上角菜单手动同步或查看进度，两端均关闭自动同步时需分别点击。
- 自动同步仅在两端 Monica 均处于前台且已解锁时进行，退到后台后暂停；未发现对方时不反复探测，数据未变化时重新打开不会强制重传。系统仍有少量设备发现报文，服务发现受限时可在两端手动同步。
- 同步前说明通行密钥的跨设备限制，可勾选“不再提醒”，并在诊断中查看限制及恢复提醒。签名计数非零的 Passkey 会跳过；不可导出的系统／硬件密钥仅同步凭据信息，可导出密钥在接收端重新加密保存。跨端使用需双方安装兼容版本。
- 提供同步进度、连接诊断和失败处理建议；校验及保存完成后才确认成功，离线冲突保留副本。

- 移除喵喵语、芝士雪豹语和雪豹彩蛋图标，原始语言与图标资源归档至“彩蛋语言备份”；旧语言设置自动恢复简体中文，保留升级后的正常桌面入口。

- 修复 MDBX 格式检查遇到损坏数据库时的错误分类，并禁止 Android 默认损坏处理器删除原文件，保留后续恢复所需的数据。

- Steam 筛选复用密码与通行密钥页面的数据库／文件夹菜单，支持本地分类、MDBX 文件夹、KeePass 分组及 Bitwarden／Vaultwarden 文件夹；记住所选文件夹，并可与搜索组合。切换同库文件夹不重复加载或同步账户，共用菜单支持从 MDBX 子文件夹逐级返回。

- Passkey 和 Steam 支持选择数据库内的文件夹进行移动或复制，也可在当前数据库中整理归属；修复 Passkey 目标选择器未加载 MDBX 文件夹的问题。
- Passkey 复制保留源记录；操作前检查绑定、引用、私钥及目标限制，遇到无法处理的条目可取消或跳过后继续，并显示逐项结果。要求凭据 ID 唯一的 KeePass／MDBX 不支持同库复制，可改选其他数据库。
- Steam 复制生成独立条目，同库移动保留原记录；新增本地分类归属并迁移旧数据，修复 MDBX 后续编辑或刷新会话时回到根目录的问题。跨库移动在目标写入成功后才清理源记录。

- 修复通行密钥本地数据库页面反复出现同步状态：按当前数据库和文件夹范围触发刷新，跳过无目标、无法读取或已更新的 KeePass 索引；本地页面不再显示其他 Bitwarden／Vaultwarden 账户的同步进度。
- 缓存通行密钥的“密钥不可用”“跨端受限”等标记，返回列表或打开详情时立即复用检查结果；密钥删除、恢复、兼容性参数或解锁会话变化后重新检查，减少重复加载与标记闪烁。

- 修复通行密钥列表进入详情后返回会重置为“全部”的问题：保留所选数据库及文件夹，重新打开后恢复上次选择，避免页面重建时用默认值覆盖筛选设置。

- 修复旧 Passkey 在刷新或合并时可能改变已使用的备份资格标志：保留既有凭据的注册属性，冲突时保留原数据；新导入仍遵循来源标志。
- 修复修改 Bitwarden／Vaultwarden Passkey 时可能覆盖同一登录项中的其他密钥、密码、网址和自定义字段；更新前读取完整条目，使用版本校验并回读确认，失败或冲突时保留本地数据；保留用户主动移动文件夹和移回根目录的操作。
- 通行密钥列表在格式旁标记“仅本地”“跨端受限”或“密钥不可用”，详情解释限制原因；支持小屏及大字体换行。

- 修复仅绑定 Bitwarden／Vaultwarden 时密码库首页和搜索可能看不到已同步条目：未保存数据库范围时默认显示“全部”，旧版省略范围的设置同步采用该默认值；明确保存的本地库或具体数据库选择继续保留，锁定库仍不参与展示与搜索。

<details><summary>查看原文</summary>

## English

- Added Nearby device sync: pair by QR code or link on the same reachable Wi-Fi/LAN to securely sync Local or supported MDBX vaults, including passwords, standalone authenticators, local Steam accounts, Passkeys, notes, cards, folders, tags and attachments. The default sync database is Local; external Bitwarden/Vaultwarden and KeePass vaults keep their own sync mechanisms. Nearby sync needs no cloud relay.
- Choose bidirectional, send-only or receive-only transfers, with automatic or manual sync. The automatic toggle works at any time; switching it off lets the current transfer finish. After pairing, main-page menus offer manual sync and progress access. When automatic sync is off on both devices, start a manual round on each.
- Automatic sync runs while both Monica apps are visible and unlocked, pausing in the background. Unavailable peers are not repeatedly probed, and reopening unchanged data does not force a resend. Small system discovery messages remain; use manual sync on both devices if service discovery is restricted.
- Passkey review explains cross-device restrictions, offers a persistent “Don’t show again” choice and lets you inspect limits or restore reminders in diagnostics. Passkeys with nonzero signature counters are skipped. Non-exportable system/hardware keys sync credential metadata only; exportable keys are encrypted again on receipt. Both devices need compatible app versions.
- View sync progress, connection diagnostics and failure guidance. Success is confirmed after validation and saving; offline conflicts retain copies.

- Removed the Nya and Snow Leopard Easter egg languages and Snow Leopard icon. Original resources are archived in “彩蛋语言备份”; existing selections migrate to Simplified Chinese while preserving a working launcher entry.

- Fixed MDBX format checks misclassifying corrupt databases and prevented Android's default corruption handler from deleting the original file, preserving it for recovery.

- Steam now shares t

</details>

---

### [LifeArchiveProject/WeChatDataAnalysis](https://github.com/LifeArchiveProject/WeChatDataAnalysis) `✅ 正式版` `macos-source-runtime-38116174842-1`

发布时间：2026-10-11（3 天前）｜ [查看 Release](https://github.com/LifeArchiveProject/WeChatDataAnalysis/releases/tag/macos-source-runtime-38116174842-1)

针对公开的 WCDA 源代码检出提供的受限编译运行时。有效期固定为 45 天；并非打包应用程序。

<details><summary>查看原文</summary>

Restricted compiled runtime for public WCDA source checkouts. Fixed 45-day validity; not a packaged application.

</details>

---

### [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) `✅ 正式版` `v3.0.17`

发布时间：2026-10-14（1 小时前）｜ [查看 Release](https://github.com/HuangZhuoRui/LocationSpoofer/releases/tag/v3.0.17)

# v3.0.17

正式版，版本代码 30049，连接正式后端。提供全局、非全局方案，各有 64 位 ARM 和 32 位 ARM 安装包，沿用原发布签名，可覆盖升级并保留账号、配置与本地数据。

- 路线模拟新增“录制实际路线”：使用真实 GPS 记录行走轨迹，支持暂停、继续、结束、命名保存并用于模拟。录制与定位模拟互斥，过滤过期、低精度、模拟来源及异常跳点；进程中断后保留本机草稿，主动继续录制。已保存路线沿用原有导出及云同步设置。
- 自定义速度支持直接输入数字和小数，并显示速度换算；修正运行时自定义速度显示为 0 的问题。
- 删除路线前增加二次确认，按路线唯一标识删除，避免同名路线误删。修复录制入口透明背景，适配浅色、深色及禁用状态。
- 全局版忽略历史应用坐标系覆盖，云同步、导入、旧配置恢复及模块重连不会重新启用这些覆盖，修复从非全局升级后可能出现的坐标偏移；非全局保留原功能。不会自动修改已保存点位或路线的原始坐标。
- 补齐账号登录的本地密钥恢复：临时读取及普通签名失败保留原钥，确认密钥丢失或永久失效后才准备新候选，通过账号密码和服务端设备检查后恢复绑定。失败重试复用候选，会员、额度、设备名额及模拟器并发限制继续由后端执行。
- 完善失钥、读取、签名以及候选准备和提交的故障记录，登录成功后自动补传脱敏诊断，不增加“已上报”提示。
- 合并已发布 Beta 的 MuMu Android 12 ARM64 全局传感器及定位首帧适配，修复相关步频缺失、运动世界未知错误和闪动校园路线模拟“定位失败 62”。相近 HyperOS 固件按实际函数、UID 字段、事件结构和已加载代码匹配，不按版本名称猜测偏移；未知结构安全停止该原生接入。
- 未取得 Root 授权或模块未启用时，仅开放数据采集与导出，拦截其他入口；授权后可重试。

本地数据库由 10 升级至 11，为保存路线增加录制来源标记，保留旧数据。全局版本更新后请重启设备，使系统模块完整加载。实际路线录制效果取决于设备 GPS 和系统后台策略；已知固件静态匹配不代表所有相近机型均已实机验证。

通过自建 Forgejo CI 执行完整测试、原证书签名及四包核验后自动发布，下载站激活正式更新，普通账号和 Beta 账号均可按现有权限检查更新。GitHub 仅镜像发行版与附件，不推送源码。本次不部署后端，也不提前启用仍在独立构建的美国地图。

版本号：`3.0.17`；Android versionCode：`30049`。
更新检查：下载服务器更新清单。
由自建 Forgejo CI 完成测试、原证书签名、四包校验和自动发布。

安装包由自建 CI 构建和验包，GitHub 镜像由发布程序自动上传，四包与自建下载站的同版本包一致。
GitHub 自动附带的 Source code 归档对应现有公开 main，并非本次 APK 的构建源码；本次构建提交与包摘要记录在 build-info.json 和 SHA256SUMS。

---

### [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) `✅ 正式版` `v1.19.32`

发布时间：2026-09-30（14 天前）｜ [查看 Release](https://github.com/MetaCubeX/mihomo/releases/tag/v1.19.32)

*（原文，翻译暂不可用）*

* 3025efad feat: add load-balance hash-key to pin a session on the inbound user (#3133) by @简直蠢丶

## BUG & Fix
* 409ee57e fix: populate HWCap from auxv on linux by @artbred
* 41b8a059 fix: account for TCP options in effective MSS by @wwqgtxx
* 5019cc09 fix: potential race condition in c.idleSession.Len() in idleCleanupExpTime() for anytls (#3225) by @Chenx Dust
* 60f70cec fix: align unconnected UDP and raw IP ICMP errors with Linux for mipstack by @wwqgtxx
* 88dcbf7f fix: default listener tun to mips stack (#3264) by @Jiawen Geng
* 8d57a8c5 fix: exclude opcode from P_DATA_V1 AEAD additional data for OpenVPN (#3237) by @FlyingSB
* 8fa048d3 fix: half-close in sing-mux by @proxi
* ac652970 fix: nil pconn deref when ctx is canceled during h2 ClientConn setup by @BESTRUI
* afe94daf fix: set udp InUser metadata for mieru inbound (#3236) by @Ryoma Dev
* fbb67422 fix: restart EasyTier outbound after silent overlay failure (#3215) by @MiaM1ku

## Maintenance
* 13417699 chore: support RX checksum offload for mipstack by @wwqgtxx
* 3c947c76 chore: convert support xhttp `extra.headers` (#3230) by @Peter Solomon
* 63bd52ec chore: change default IP stack mode to mips and support `congestion-controller` option for tun by @wwqgtxx
* 91dd03a9 chore: support lazy receive buffer reads for mipstack and gvisor by @wwqgtxx
* f103639c chore: update mieru version (#3242) by @enfein

---

### [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) `🧪 测试版` `autogpt-platform-beta-v0.8.4`

发布时间：2026-10-14（2 小时前）｜ [查看 Release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.8.4)

# 发布 `autogpt-platform-beta-v0.8.4`

**日期：** 2026 年 10 月

---

## 有什么新内容？

### 新功能
- **#15089** - 在回合运行时运行 Copilot 聊天，该聊天在一个连接上的光标处恢复（由 @Pwuts 提供）
- **#15199** - 专家集成首先通过 MCP 连接（由 @0ubbe）
- **#15248** - 将“提供反馈”添加到帐户菜单（修补程序）（由@kcze）
- **#15216** - 奥托和专家的回复要简短（@0ubbe）
- **#15217** - 使专家聘用卡简短并类似于 Typeform（作者：@0ubbe）
- **#15249** - 将入职角色发送到 MailerLite 和 PostHog；从 MailerLite 中排除伊朗和俄罗斯（作者：@ntindle）
- **#15204** - 重新设计带有聊天用途和积分的钱包（由@Torantulino）
- **#15196** - 个性化后移动入职付费墙（由@Torantulino）
- **#15061** - 工具模式中的批准卡标签/单词工具参数（由 @Pwuts 提供）
- **#15358** - 取消试用会保留访问权限，直至试用结束（作者：@itsababseh）
- **#15361** - 当用户的槽已满时，子会话等待槽（由@Pwuts）
- **#15043** - 批准的调用链行展开以显示运行的内容（由@Pwuts）
- **#15349** - 将“聊天”添加到折叠的侧边栏（由 @itsababseh 提供）
- **#15441** - 在 Copilot 中显示“正在思考...”而不是后端状态行（由 @0ubbe 提供）
- **#15442** - 重新设计聊天 Markdown 表格（由 @0ubbe 提供）
- **#15462** - 让 Copilot 轮流，图形节点运行自己的哨兵跟踪（由 @ntindle）
- **#15460** - 标记 Sentry 事件并部署提交并允许环境覆盖（由 @ntindle 提供）
- **#15213** - 通过我们自己的域路由浏览器 PostHog 流量（由 @kcze 提供）
- **#15480** - 添加 Meta Muse Wonder 支持（由 @ntindle 提供）
- **#15466** - 也将 MailerLite 分段字段发送到 PostHog（由 @ntindle）
- **#15496** - 添加 Google Gemini 4 Argon 支持（由 @ntindle 提供）
- **#15498** - 在 PostHog 中设置 AutoPilot 代的属性并在那里发送回复反馈（由 @kcze 提供）

### 增强功能
- **#15461** - 添加共享的 Sentry 性能比较配方以获取性能

<details><summary>查看原文</summary>

#  Release `autogpt-platform-beta-v0.8.4`

**Date:** October 2026

---

##  What's New?

### New Features
- **#15089** - Run Copilot chat on a turn runtime that resumes at its cursor on one connection (by @Pwuts)
- **#15199** - Expert integrations connect through MCP first (by @0ubbe)
- **#15248** - Add “Give feedback” to the account menu (hotfix) (by @kcze)
- **#15216** - Keep Otto and expert replies short (by @0ubbe)
- **#15217** - Make the expert hire card short and Typeform-like (by @0ubbe)
- **#15249** - Send onboarding role to MailerLite and PostHog; exclude Iran and Russia from MailerLite (by @ntindle)
- **#15204** - Redesign wallet with chat usage and credits (by @Torantulino)
- **#15196** - Move onboarding paywall after personalization (by @Torantulino)
- **#15061** - Approval cards label/word tool arguments from the tool schema (by @Pwuts)
- **#15358** - Canceling a trial keeps access until the trial ends (by @itsababseh)
- **#15361** - Sub-session waits for a slot when the user’s slots are full (by @Pwuts)
- **#15043** - Approved call chain row expands to show what ran (by @Pwuts)
- **#15349** - Add “Chats” to the collapsed sidebar (by @itsababseh)
- **#15441** - Show “Thinking…” instead of backend status lines in Copilot (by @0ubbe)
- **#15442** - Restyle chat markdown tables (by @0ubbe)
- **#15462** - Give Copilot turns and graph node runs their own Sentry traces (by @ntindle)
- **#15460** - Tag Sentry events with deployed commit and allow environment overrides (by @ntindle)
- **#15213** - Route browser PostHog traffic through our own domain (by @kcze)
- **#15480** - Add Meta Muse Wonder support (by @ntindle)
- **#15466** - Send MailerLite segmentation fields to PostHog too (by @ntindle)
- **#15496** - Add Google Gemini 4 Argon support (by @ntindle)
- **#15498** - Attribute AutoPilot generations in PostHog and send reply feedback there (by @kcze)

### Enhancements
- **#15461** - Add shared Sentry perf-compare recipe for perfo

</details>

---

### [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) `✅ 正式版` `v2026.10.14-8427.8f7d429`

发布时间：2026-10-14（6 分钟前）｜ [查看 Release](https://github.com/DIYgod/RSSHub/releases/tag/v2026.10.14-8427.8f7d429)

源提交：8f7d4292620b805bd8fa7e682f662608f026b737

<details><summary>查看原文</summary>

Source commit: 8f7d4292620b805bd8fa7e682f662608f026b737

</details>

---

### [YaoZeyuan/stablog](https://github.com/YaoZeyuan/stablog) `✅ 正式版` `mac-3.3.7`

发布时间：2022-08-03（4 年前）｜ [查看 Release](https://github.com/YaoZeyuan/stablog/releases/tag/mac-3.3.7)

支持intel/m1两种芯片

---

## 📋 全部项目（按最近更新排序）

| 项目 | 最新版本 | 类型 | 更新时间 | 距今 |
|---|---|---|---|---|
| [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) | `v2026.10.14-8427.8f7d429` | 正式版 | 2026-10-14 | 6 分钟前 |
| [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) | `v3.0.17` | 正式版 | 2026-10-14 | 1 小时前 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | `autogpt-platform-beta-v0.8.4` | 测试版 | 2026-10-14 | 2 小时前 |
| [t59688/newsnook](https://github.com/t59688/newsnook) | `v1.8.12-beta.7` | 测试版 | 2026-10-14 | 3 小时前 |
| [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) | — | 提交 | 2026-10-14 | 4 小时前 |
| [adysec/tracker](https://github.com/adysec/tracker) | — | 提交 | 2026-10-14 | 5 小时前 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | `v4.29.0` | 正式版 | 2026-10-14 | 6 小时前 |
| [z-mio/parse_hub_bot](https://github.com/z-mio/parse_hub_bot) | `v2.2.1` | 正式版 | 2026-10-14 | 7 小时前 |
| [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) | — | 提交 | 2026-10-14 | 7 小时前 |
| [bilibili/Index-Translate](https://github.com/bilibili/Index-Translate) | — | 提交 | 2026-10-14 | 8 小时前 |
| [ArvinLovegood/go-stock](https://github.com/ArvinLovegood/go-stock) | `v2026.10.14.3-release` | 正式版 | 2026-10-14 | 8 小时前 |
| [z-mio/ParseHub](https://github.com/z-mio/ParseHub) | `v2.3.5` | 正式版 | 2026-10-14 | 9 小时前 |
| [daimiaopeng/coolapk-desktop](https://github.com/daimiaopeng/coolapk-desktop) | `v1.35.0-beta.4` | 测试版 | 2026-10-14 | 9 小时前 |
| [xweiba/location-spoofer](https://github.com/xweiba/location-spoofer) | `v1.0.9` | 正式版 | 2026-10-14 | 9 小时前 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | — | 提交 | 2026-10-14 | 10 小时前 |
| [Niklaus88/Clash-Config](https://github.com/Niklaus88/Clash-Config) | — | 提交 | 2026-10-14 | 11 小时前 |
| [mason173/aira-browser](https://github.com/mason173/aira-browser) | `v3.7.4` | 正式版 | 2026-10-14 | 11 小时前 |
| [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) | `v7.3.1.5` | 正式版 | 2026-10-14 | 11 小时前 |
| [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | `v0.102.2862.0` | 测试版 | 2026-10-14 | 12 小时前 |
| [Ajaxc/WeChatList](https://github.com/Ajaxc/WeChatList) | `2.5.2` | 正式版 | 2026-10-14 | 13 小时前 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | `v0.7.35` | 正式版 | 2026-10-14 | 16 小时前 |
| [chen08209/FlClash](https://github.com/chen08209/FlClash) | `v0.9.0` | 正式版 | 2026-10-14 | 17 小时前 |
| [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) | `latest` | 正式版 | 2026-10-14 | 17 小时前 |
| [XIU2/TrackersListCollection](https://github.com/XIU2/TrackersListCollection) | — | 提交 | 2026-10-14 | 18 小时前 |
| [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules) | `202610132237` | 正式版 | 2026-10-13 | 20 小时前 |
| [ngosang/trackerslist](https://github.com/ngosang/trackerslist) | — | 提交 | 2026-10-13 | 20 小时前 |
| [exteraless/exteraless](https://github.com/exteraless/exteraless) | `ci-1ad6a60` | 测试版 | 2026-10-13 | 22 小时前 |
| [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) | — | 提交 | 2026-10-13 | 23 小时前 |
| [JushiZen/Nimbus.Player](https://github.com/JushiZen/Nimbus.Player) | — | 提交 | 2026-10-13 | 1 天前 |
| [Inginnng/EditHere](https://github.com/Inginnng/EditHere) | `v0.11.1` | 正式版 | 2026-10-13 | 1 天前 |
| [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) | `v1.19.5` | 正式版 | 2026-10-13 | 1 天前 |
| [AIsouler/MyClash](https://github.com/AIsouler/MyClash) | — | 提交 | 2026-10-13 | 1 天前 |
| [joeytoday/obsidian-canvas-enhance](https://github.com/joeytoday/obsidian-canvas-enhance) | `1.0.8` | 正式版 | 2026-10-13 | 1 天前 |
| [dukangalex/HiClash](https://github.com/dukangalex/HiClash) | — | 提交 | 2026-10-13 | 1 天前 |
| [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) | `V1.0.319` | 正式版 | 2026-10-13 | 1 天前 |
| [7723mod/NPatch](https://github.com/7723mod/NPatch) | `v1.0.9` | 正式版 | 2026-10-12 | 2 天前 |
| [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) | `v2.2.0` | 正式版 | 2026-10-12 | 2 天前 |
| [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) | `v1.6.5-beta2` | 测试版 | 2026-10-12 | 2 天前 |
| [crimera/piko-newx](https://github.com/crimera/piko-newx) | `v3.56.1` | 正式版 | 2026-10-12 | 2 天前 |
| [gkd-kit/gkd](https://github.com/gkd-kit/gkd) | `v1.13.0-beta-1` | 测试版 | 2026-10-11 | 3 天前 |
| [xiaoyaDev/xiaoya-alist](https://github.com/xiaoyaDev/xiaoya-alist) | — | 提交 | 2026-10-11 | 3 天前 |
| [xgit01/sgkrank](https://github.com/xgit01/sgkrank) | — | 提交 | 2026-10-11 | 3 天前 |
| [SagerNet/sing-box](https://github.com/SagerNet/sing-box) | `v1.15.0-alpha.12` | 测试版 | 2026-10-11 | 3 天前 |
| [LifeArchiveProject/WeChatDataAnalysis](https://github.com/LifeArchiveProject/WeChatDataAnalysis) | `macos-source-runtime-38116174842-1` | 正式版 | 2026-10-11 | 3 天前 |
| [dongyubin/IPTV](https://github.com/dongyubin/IPTV) | — | 提交 | 2026-10-11 | 3 天前 |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | `mineru-4.0.12-released` | 正式版 | 2026-10-11 | 3 天前 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | `v1.4.1` | 正式版 | 2026-10-10 | 4 天前 |
| [crimera/piko](https://github.com/crimera/piko) | `v3.10.0` | 正式版 | 2026-10-10 | 4 天前 |
| [johamwon/wechrss](https://github.com/johamwon/wechrss) | — | 提交 | 2026-10-10 | 4 天前 |
| [XTLS/Xray-core](https://github.com/XTLS/Xray-core) | `v26.10.10` | 测试版 | 2026-10-10 | 4 天前 |
| [pengchujin/livecanvas](https://github.com/pengchujin/livecanvas) | — | 提交 | 2026-10-10 | 4 天前 |
| [T8RIN/ImageToolbox](https://github.com/T8RIN/ImageToolbox) | `4.2.1-rc01` | 测试版 | 2026-10-09 | 4 天前 |
| [myikuns/jichangtz-tuijian](https://github.com/myikuns/jichangtz-tuijian) | — | 提交 | 2026-10-09 | 5 天前 |
| [hicccc77/WeFlow](https://github.com/hicccc77/WeFlow) | — | 提交 | 2026-10-09 | 5 天前 |
| [ZGMFX01A/OrigRead](https://github.com/ZGMFX01A/OrigRead) | `v1.7.0` | 正式版 | 2026-10-09 | 5 天前 |
| [KaringX/clashmi](https://github.com/KaringX/clashmi) | `v1.0.31.1703` | 正式版 | 2026-10-09 | 5 天前 |
| [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) | `v2.5.8` | 正式版 | 2026-10-09 | 5 天前 |
| [UniClipboard/UniClipboard](https://github.com/UniClipboard/UniClipboard) | `v1.1.2` | 正式版 | 2026-10-09 | 5 天前 |
| [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) | — | 提交 | 2026-10-08 | 6 天前 |
| [jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader) | `desktop-v0.12.5` | 正式版 | 2026-10-08 | 6 天前 |
| [hoothin/UserScripts](https://github.com/hoothin/UserScripts) | — | 提交 | 2026-10-07 | 6 天前 |
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | `v0.16.0` | 正式版 | 2026-10-07 | 6 天前 |
| [reeden-org/reeden-app](https://github.com/reeden-org/reeden-app) | `v1.43.1` | 正式版 | 2026-10-07 | 7 天前 |
| [fw876/helloworld](https://github.com/fw876/helloworld) | `v196.19` | 正式版 | 2026-10-07 | 7 天前 |
| [felinics/Memoh](https://github.com/felinics/Memoh) | `v0.21.0` | 正式版 | 2026-10-05 | 9 天前 |
| [AyuGram/AyuGramDesktop](https://github.com/AyuGram/AyuGramDesktop) | `v7.2.9` | 正式版 | 2026-10-05 | 9 天前 |
| [HyNetworks/hysteria](https://github.com/HyNetworks/hysteria) | `app/v2.13.0` | 正式版 | 2026-10-05 | 9 天前 |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | `v1.15.0` | 正式版 | 2026-10-04 | 9 天前 |
| [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) | `draft` | 测试版 | 2026-10-04 | 9 天前 |
| [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) | `26.10.4-1` | 正式版 | 2026-10-04 | 10 天前 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | `v0.6.0` | 正式版 | 2026-10-03 | 10 天前 |
| [kenischu/ReSource](https://github.com/kenischu/ReSource) | `3.0.7` | 正式版 | 2026-10-03 | 11 天前 |
| [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) | `v1.19.32` | 正式版 | 2026-09-30 | 14 天前 |
| [linesoft2/TaskMonitor](https://github.com/linesoft2/TaskMonitor) | `v2026.9.30.1` | 正式版 | 2026-09-30 | 14 天前 |
| [xykt/IPQuality](https://github.com/xykt/IPQuality) | — | 提交 | 2026-09-30 | 14 天前 |
| [Teamper/JHS](https://github.com/Teamper/JHS) | `v6.5.1` | 正式版 | 2026-09-25 | 19 天前 |
| [tingaicompass/AI-Compass](https://github.com/tingaicompass/AI-Compass) | — | 提交 | 2026-09-24 | 20 天前 |
| [op7418/Humanizer-zh](https://github.com/op7418/Humanizer-zh) | — | 提交 | 2026-09-23 | 21 天前 |
| [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | — | 提交 | 2026-09-22 | 22 天前 |
| [zhangxiangliang/stock-api](https://github.com/zhangxiangliang/stock-api) | `v2.7.5` | 正式版 | 2026-09-21 | 23 天前 |
| [TG-Twilight/AWAvenue-Ads-Rule](https://github.com/TG-Twilight/AWAvenue-Ads-Rule) | `1.7.8-release` | 正式版 | 2026-09-21 | 23 天前 |
| [yuanzl77/IPTV](https://github.com/yuanzl77/IPTV) | — | 提交 | 2026-09-21 | 23 天前 |
| [zhanghai/MaterialFiles](https://github.com/zhanghai/MaterialFiles) | `v1.7.5` | 正式版 | 2026-09-20 | 24 天前 |
| [black-ant/Ant-Browser](https://github.com/black-ant/Ant-Browser) | `V1.8.0` | 正式版 | 2026-09-19 | 25 天前 |
| [liaoliao666/v2ex](https://github.com/liaoliao666/v2ex) | `1.9.6` | 正式版 | 2026-09-19 | 25 天前 |
| [eternity4719/HowToLiveBetter](https://github.com/eternity4719/HowToLiveBetter) | `epub-latest` | 正式版 | 2026-09-18 | 26 天前 |
| [j4Uq/TVBoxOSC](https://github.com/j4Uq/TVBoxOSC) | `20260914-1520` | 正式版 | 2026-09-14 | 1 个月前 |
| [shufflewzc/faker3](https://github.com/shufflewzc/faker3) | — | 提交 | 2026-09-14 | 1 个月前 |
| [wcq-glhf/prex-quant](https://github.com/wcq-glhf/prex-quant) | — | 提交 | 2026-09-13 | 1 个月前 |
| [HsukqiLee/MediaUnlockTest](https://github.com/HsukqiLee/MediaUnlockTest) | `v1.9.10-1788951725` | 正式版 | 2026-09-09 | 1 个月前 |
| [XIaodou0416/Beans-Music](https://github.com/XIaodou0416/Beans-Music) | `v1.6.6` | 正式版 | 2026-09-06 | 1 个月前 |
| [Lingyan000/fluxdo](https://github.com/Lingyan000/fluxdo) | `v0.2.28` | 正式版 | 2026-09-04 | 1 个月前 |
| [guangxiangdebizi/FinanceMCP](https://github.com/guangxiangdebizi/FinanceMCP) | `v4.11.2` | 正式版 | 2026-09-04 | 1 个月前 |
| [xykt/NetQuality](https://github.com/xykt/NetQuality) | — | 提交 | 2026-09-01 | 1 个月前 |
| [tradingeconomics/tradingeconomics](https://github.com/tradingeconomics/tradingeconomics) | — | 提交 | 2026-08-31 | 1 个月前 |
| [hifengzy/ima-sync](https://github.com/hifengzy/ima-sync) | `0.3.1` | 正式版 | 2026-08-29 | 1 个月前 |
| [Kyant0/AndroidLiquidGlass](https://github.com/Kyant0/AndroidLiquidGlass) | `2.0.1` | 正式版 | 2026-08-26 | 1 个月前 |
| [Conquerer-yinn/Kakaaaa-quant](https://github.com/Conquerer-yinn/Kakaaaa-quant) | `v1.0.0` | 正式版 | 2026-08-24 | 1 个月前 |
| [yeximm/Access_wechat_article](https://github.com/yeximm/Access_wechat_article) | `v2.2.0` | 正式版 | 2026-08-23 | 1 个月前 |
| [liuran001/mihomo](https://github.com/liuran001/mihomo) | `Prerelease-Alpha` | 测试版 | 2026-08-20 | 1 个月前 |
| [bozhouDev/codex-orange-book](https://github.com/bozhouDev/codex-orange-book) | — | 提交 | 2026-08-14 | 2 个月前 |
| [SMNETSTUDIO/WeChat-AI](https://github.com/SMNETSTUDIO/WeChat-AI) | `v0.12.0` | 正式版 | 2026-08-13 | 2 个月前 |
| [bbstom/TelegramGroup](https://github.com/bbstom/TelegramGroup) | — | 提交 | 2026-08-10 | 2 个月前 |
| [waditu/czsc](https://github.com/waditu/czsc) | `v1.0.1` | 正式版 | 2026-08-09 | 2 个月前 |
| [ka-pi-ba-la/awesome-ai-tools](https://github.com/ka-pi-ba-la/awesome-ai-tools) | — | 提交 | 2026-08-08 | 2 个月前 |
| [clashproxy/clash-download](https://github.com/clashproxy/clash-download) | — | 提交 | 2026-08-07 | 2 个月前 |
| [codeman008/Financial_freedom](https://github.com/codeman008/Financial_freedom) | — | 提交 | 2026-08-06 | 2 个月前 |
| [zjssun/TradeMirror](https://github.com/zjssun/TradeMirror) | `v1.2` | 正式版 | 2026-08-04 | 2 个月前 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | `latest` | 测试版 | 2026-07-21 | 2 个月前 |
| [pengchujin/jzsub](https://github.com/pengchujin/jzsub) | `v1.8.1` | 正式版 | 2026-07-13 | 3 个月前 |
| [ShareX/ShareX](https://github.com/ShareX/ShareX) | `v21.0.0` | 正式版 | 2026-07-03 | 3 个月前 |
| [thedjchi/Shizuku](https://github.com/thedjchi/Shizuku) | `v13.7.0-thedjchi` | 正式版 | 2026-07-02 | 3 个月前 |
| [komi-store/komi-store](https://github.com/komi-store/komi-store) | `v1.9.2` | 正式版 | 2026-06-26 | 3 个月前 |
| [2977094657/ZsxqCrawler](https://github.com/2977094657/ZsxqCrawler) | — | 提交 | 2026-06-25 | 3 个月前 |
| [yyyyymmmmm/InkRoot](https://github.com/yyyyymmmmm/InkRoot) | `v1.1.13` | 正式版 | 2026-06-22 | 3 个月前 |
| [loc567/loc567](https://github.com/loc567/loc567) | — | 提交 | 2026-06-19 | 3 个月前 |
| [LibChecker/LibChecker](https://github.com/LibChecker/LibChecker) | `2.5.4` | 正式版 | 2026-06-17 | 3 个月前 |
| [echs-top/proxy](https://github.com/echs-top/proxy) | `zashboard` | 正式版 | 2026-06-15 | 4 个月前 |
| [nicejade/wealth-tracker](https://github.com/nicejade/wealth-tracker) | `v5.0.0` | 正式版 | 2026-06-13 | 4 个月前 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | `v1.5.0` | 正式版 | 2026-06-11 | 4 个月前 |
| [foru17/make-x-great-again](https://github.com/foru17/make-x-great-again) | `v0.4.0` | 正式版 | 2026-05-28 | 4 个月前 |
| [gedoor/legado](https://github.com/gedoor/legado) | — | 提交 | 2026-05-27 | 4 个月前 |
| [zjp1997720/wechat-radar](https://github.com/zjp1997720/wechat-radar) | — | 提交 | 2026-05-26 | 4 个月前 |
| [PlexPt/awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh) | — | 提交 | 2026-04-28 | 5 个月前 |
| [tradingeconomics/notebooks](https://github.com/tradingeconomics/notebooks) | — | 提交 | 2026-04-23 | 5 个月前 |
| [jiangrui1994/CloudSaver](https://github.com/jiangrui1994/CloudSaver) | — | 提交 | 2026-04-20 | 5 个月前 |
| [wink-wink-wink555/MarkiNote](https://github.com/wink-wink-wink555/MarkiNote) | `v3.0.1` | 正式版 | 2026-04-12 | 6 个月前 |
| [therealXiaomanChu/ex-skill](https://github.com/therealXiaomanChu/ex-skill) | — | 提交 | 2026-04-08 | 6 个月前 |
| [cq0206/wechat2rss](https://github.com/cq0206/wechat2rss) | — | 提交 | 2026-03-20 | 6 个月前 |
| [hzlzh/Best-App](https://github.com/hzlzh/Best-App) | — | 提交 | 2026-03-17 | 7 个月前 |
| [quant-king299/EasyXT](https://github.com/quant-king299/EasyXT) | `v1.0.0` | 正式版 | 2026-03-12 | 7 个月前 |
| [DIYgod/RSSHub-Radar](https://github.com/DIYgod/RSSHub-Radar) | `v2.2.0` | 正式版 | 2026-02-11 | 8 个月前 |
| [Tongyi-MAI/Z-Image](https://github.com/Tongyi-MAI/Z-Image) | — | 提交 | 2026-02-09 | 8 个月前 |
| [koolshare/koolshare.github.io](https://github.com/koolshare/koolshare.github.io) | — | 提交 | 2026-01-27 | 8 个月前 |
| [jbiaojerry/ebook-treasure-chest](https://github.com/jbiaojerry/ebook-treasure-chest) | — | 提交 | 2026-01-13 | 9 个月前 |
| [mpquant/Ashare](https://github.com/mpquant/Ashare) | — | 提交 | 2025-12-24 | 9 个月前 |
| [Yu-Core/SwashbucklerDiary](https://github.com/Yu-Core/SwashbucklerDiary) | `v1.31.5` | 正式版 | 2025-12-10 | 10 个月前 |
| [likeflyme/cloudbak](https://github.com/likeflyme/cloudbak) | — | 提交 | 2025-10-24 | 11 个月前 |
| [xaoyaoo/PyWxDump](https://github.com/xaoyaoo/PyWxDump) | — | 提交 | 2025-10-20 | 11 个月前 |
| [TonyJiangWJ/Ant-Forest](https://github.com/TonyJiangWJ/Ant-Forest) | `v1.5.5.4` | 正式版 | 2025-08-31 | 1 年前 |
| [ZCShou/GoGoGo](https://github.com/ZCShou/GoGoGo) | `ReleaseV1.12.3` | 正式版 | 2025-08-09 | 1 年前 |
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
| [zzzgydi/clash-verge](https://github.com/zzzgydi/clash-verge) | `v1.3.8` | 正式版 | 2023-10-30 | 2 年前 |
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
| [zarkin404/sweater](https://github.com/zarkin404/sweater) | — | 提交 | 2020-10-27 | 5 年前 |
| [ritz078/moose](https://github.com/ritz078/moose) | `v0.6.2` | 正式版 | 2020-06-24 | 6 年前 |
| [QuantFans/quantdigger](https://github.com/QuantFans/quantdigger) | — | 提交 | 2020-05-02 | 6 年前 |
| [privacy-protection-tools/anti-AD](https://github.com/privacy-protection-tools/anti-AD) | `v4.3` | 正式版 | 2020-02-04 | 6 年前 |
| [qinyuhang/ShadowsocksX-NG-R](https://github.com/qinyuhang/ShadowsocksX-NG-R) | `1.4.4-r8-resigning` | 测试版 | 2018-12-20 | 7 年前 |
| [imharryzhu/AndroidControl](https://github.com/imharryzhu/AndroidControl) | `1.0.1` | 正式版 | 2018-01-24 | 8 年前 |
| [shadowsocks/shadowsocks-iOS](https://github.com/shadowsocks/shadowsocks-iOS) | `2.6.3` | 正式版 | 2015-06-28 | 11 年前 |
| [waditu/tushare](https://github.com/waditu/tushare) | `0.2.0` | 正式版 | 2015-03-23 | 11 年前 |

---
*由 star-board 每 3 小时自动更新，也可在 Actions 页手动触发。*