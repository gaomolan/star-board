# ⭐ Star 动态看板

> 生成时间：2026-10-31 14:08:38 UTC ｜ 共 191 个项目 ｜ 每 3 小时自动更新

## 🆕 本次新增（10）

### [DUNHKpcc/Claude-Guardian](https://github.com/DUNHKpcc/Claude-Guardian) `📝 提交` `316ca20`

发布时间：2026-10-31（1 小时前）｜ [查看提交](https://github.com/DUNHKpcc/Claude-Guardian/commit/316ca20602887a672a3b8fcecc7f397f7109351f)

*（原文，翻译暂不可用）*

docs: Windows cleanup keeps quarantine on the source drive and stops on host policy blocks (#16)

---

### [yigenhuobah/quietbox](https://github.com/yigenhuobah/quietbox) `✅ 正式版` `v0.9.1`

发布时间：2026-10-31（23 分钟前）｜ [查看 Release](https://github.com/yigenhuobah/quietbox/releases/tag/v0.9.1)

*（原文，翻译暂不可用）*

新增 EN-03 实况图（Live Photo）保存去水印（Issue #3 承诺项），已真机验证。默认关闭：开启后会切换实况保存链路。
### 新增
- EN-03「实况图去水印」，默认关闭，需在设置页手动开启：
  - `p32.h#a(1) → false`（ConfigCenter `android_feature_close_switch_by_code`，dexsql
    反汇编确认 `zm7.j#c` 内 `const 1` 传入）：实况视频强制走旧链路 `g42.e#d(url, Z)`，
    直接下载与笔记详情预览同源的 `dg7.h.g`（livePhotoVideoPath），不再请求
    `POST /api/sns/v1/note/live_photo/save` 服务端渲染视频（可能带烧录水印）；
  - `dg7.h`（FeedbackDownloadImage）的 `e`/`h`（disableWaterMark / disableAiWaterMark）
    在 `zm7.j#c` before 反射置 true：静态帧复用 EN-01 的 Canvas 跳绘路径
    （`jn6.i` → `jn6.j#a`），同时绕过 `jn6.i` 的 fail(-4) 守卫；
  - 挂载点选择 `p32.h#a` 而不是 hook 新链路响应类 `zp8.a#d()` 换 URL：后者与 `dg7.h`
    无引用关系、需跨 hook 传状态、时序脆弱；前者是链路分叉的唯一判定点，无状态。
    其余 code 一律 proceed 原值，不影响其他功能的关闭开关判断。
- `tools/check-mounts.sh` MOUNTS 清单 58 → 62 项：新增 `zm7.j#c`(3 参)、`p32.h#a`(1 参)
  两个功能挂载点，补 `dg7.h#<init>`(8 参，锁定 e/f/g/h 字段形状) 与 `g42.e#d`(2 参)
  两个链路形状锚点；对小红书 9.52.0 体检 62/62 OK，GONE/SIG=0。
- 新增 `LivePhotoWatermarkHooksTest`（8 项）；`FeatureTest` 同步 24 → 25、
  `ReportProtocolTest` 键数 72 → 75。
### 验证
- `testDebugUnitTest` 116 项全部通过（0 失败 / 0 跳过）；`lintDebug` 0 errors /
  23 warnings（均为既有 warning）；`tools/verify-apk.sh` 17 项全部通过。
- 真机 25102RKBEC / 小红书 9.52.0：同一条实况笔记开/关对比——EN-03 开 → 3/3 段内嵌
  视频无水印，关 → 3/3 段有「小红书」logo + 小红书号水印；静态帧两组均无水印
  （EN-01 覆盖）；批量保存 11 张 JPG 全部含 MotionPhoto 元数据；无崩溃、无 -4 失败、
  无 FATAL/ANR；日志证实 `p32.h#a(1)→false` 与 `dg7.h.e/h set=2` 均命中，
  `zm7.j#c` 在 9.52.0 实况保存路径真实执行。
### 已知限制
- 开启后实况保存走预览同源视频：宿主后续若改保存链路（如下线 livePhotoVideoPath），
  本功能可能失效或回退到带水印的新链路。
- `p32.h#a(1)` 强制 false 会作用于该 code 的所有读点（当前无全量 xref 手段），
  真机验证未观察到其他功能受影响。
APK: quietbox-0.9.1.apk
versionCode: 15
大小: 2,909,422 字节
SHA-256: 2978745940c78097e8ad273f0f50a7d518613d1b443474bb79b9a84aefe4a9c6

---

### [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) `✅ 正式版` `V1.0.323`

发布时间：2026-10-31（4 小时前）｜ [查看 Release](https://github.com/Monica-Pass/Monica/releases/tag/V1.0.323)

# Monica for Android 1.0.323

> 发布日期 / Released: 2026-10-31

## 中文

本次附件使用开发者提供的 arm64-v8a 与 armeabi-v7a 两个现成安装包，构建版本 `1.0.323-26103112-97`（versionCode `12`）；发布时未重新打包。

- **本版本支持原生管理 KeePass（KDBX）数据库**：直接在 Monica 界面打开、浏览、编辑和保存原库，支持当前库合并、重新加载、分组、历史、附件及自定义图标。

- 改进网页自动填充保存：补齐表单不可见时的系统保存标志，允许从系统快照读取已隐藏的原字段；保留保存开关、排除规则、表单边界和新密码一致性检查。实际提示仍依赖浏览器上报；全部自动填充后未修改，以及未上报提交或可见性的页面，仍可能不弹提示。生成密码历史不等于账号已保存。

- ZIP 导出新增默认关闭的“Monica 配置”选项，勾选后使用加密备份，包含应用设置、常用账号、自动填充规则、安全问题及 WebDAV/Bitwarden 配置；记录仍限于选中的来源数据库，也可仅备份配置。ZIP 导入可选择同时恢复配置，默认保留本机配置；沿用已有连接保护与 Bitwarden 恢复后锁定规则。修正导入/导出入口仅提及 CSV 的误导说明，明确支持 ZIP、KDBX 等格式。

- 修正 Monica 键盘触感调用：开启按键震动后，通过当前输入法窗口请求系统键盘反馈；保留默认关闭、即时开关和系统触感设置。

- “HyperOS 1 保存兼容模式”改为独立悬浮中转面板：授予悬浮窗权限后，点击系统保存先显示面板，再点“继续保存”进入原有身份验证与编辑；关闭开关保持直接跳转。取消、熄屏、锁定或超时释放临时请求，不要求切换键盘。旧参数方案经用户反馈无效，新方案仍需故障真机复测；保留无凭据阶段日志。

- 修复系统自动填充在“用户名、邮箱或手机号”等混合账号提示下漏填普通用户名，以及虚拟 HTML 输入框复用 WebView 类名时把账号、密码错误拆开的问题；通用登录表单可一次填写两项，保留跨域、跨表单及验证码/新密码保护。

- KDBX 文件管理新增“保存数据”“合并数据”“重新加载数据”，移除单库菜单中多余的手动 Wi-Fi 同步。修复本地原库重新加载未生效、关闭回收站后旧回收条目混入普通列表，以及冷启动解锁后列表偶发空白的问题；前台检查外部文件变化并更新列表和状态，保留旧编辑冲突保护。“合并数据”直接重读当前原库，复用现有解锁凭据合并其他客户端版本，不再弹出选库窗口；云端库读取绑定远端并按版本条件写入。合并按 UUID、修改/移动时间和删除记录处理，保留条目历史、附件与图标，写入前保存恢复副本。文件状态临时替换面包屑路径，普通成功提示 3 秒后恢复路径，错误/合并冲突可关闭；修复大字号路径文字裁切，同一区域平滑展开/收缩，下方列表连续移动。界面覆盖全部 13 种语言，保留跨库复制/移动规则。

- 物理 Passkey 管理、注册位置、PIN 操作、帮助及错误提示补齐全部 13 种语言，并修正繁体中文中混用简体的问题。

- Monica Plus 诚信付款解锁前新增确认弹窗，取消或关闭弹窗不解锁；正文与确认按钮覆盖应用全部 13 种语言。

- 增强本地启动与异常诊断：LogFox 可按 MonicaDiag 标签抓取完整构建版本、启动阶段、耗时、异常类型链和系统 Keystore 错误码；Android 11+ 补充系统保存的上次进程退出原因。新增日志不记录密码、密钥、PIN、密文或异常原文，保留既有锁定、恢复与崩溃处理。

- 安全存储启动增加 15 秒等待上限，异常或超时后保持锁定并提供重试；未退出的底层调用不会重复启动，迟到结果不会放行后台维护。读取失败保留密文、旧密钥包装与恢复材料，不自动重建丢失密钥；系统密钥永久丢失时仍需原密码及已有恢复材料。
- Passkey 管理页新增“物理密钥”FAB，密钥信息改为紧凑两列，PIN 操作分组显示；支持 USB/NFC FIDO2 信息、PIN 设置与更改、只读查看可发现凭据。Android 14 及以上注册到 Monica 时，可在保存位置选择已检测到的物理密钥；断开或取消不会自动改存软件库，也可通过系统入口注册或登录。标准 FIDO2 无法导入现有私钥，硬件 PIN 和凭据不保存到 Monica；本次通过合成协议与模拟器验证，尚未实体密钥实测。
- 支持在 Monica 密码列表、密码库、详情和编辑预览中显示已解锁 KDBX 的条目自定义图标，并显示原库分组图标；编辑保存保留图标 UUID、图片和历史。锁库时隐藏原库图标，缺失或损坏的图片回退

<details><summary>查看原文</summary>

## English

The two attached APKs are the developer-provided arm64-v8a and armeabi-v7a builds, `1.0.323-26103112-97` (versionCode `12`). They were not rebuilt for publication.

- **This release supports native KeePass (KDBX) database management**: open, browse, edit and save the original database in Monica, with current-file merging, reloading, groups, history, attachments and custom icons.

- Improve web autofill save handling with the all-fields-invisible framework flag and exact-field reads from captured structures after fields become hidden. Keep save preferences, exclusions, form boundaries and new-password consistency checks. Prompts still depend on browser notifications and may remain suppressed for unchanged autofilled values or unreported submission/visibility changes. Generated-password history is not a saved account.

- ZIP export now offers an opt-in Monica configuration backup with required encryption: app settings, common accounts, autofill rules, security questions and WebDAV/Bitwarden configuration. Records remain scoped to the selected database, and configuration-only exports are supported. ZIP import can restore configuration when selected, keeping local settings by default and preserving existing connection safeguards and locked Bitwarden restoration. Import/export descriptions now identify ZIP, KDBX and other supported formats instead of suggesting CSV only.

- Corrected Monica keyboard haptic routing: enabling key vibration now requests system keyboard feedback through the active IME window. The default remains off, with live toggling and system haptic settings respected.

- HyperOS 1 save compatibility now uses a separate floating panel. With display-over-other-apps permission, system Save opens the panel; Continue saving enters the existing authentication and editor flow. The default-off switch preserves direct launch when disabled. Cancel, screen-off, locking or timeout releases the temporary request; no keyboard switching is needed. Th

</details>

---

### [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) `✅ 正式版` `v4.29.4`

发布时间：2026-10-31（2 小时前）｜ [查看 Release](https://github.com/AstrBotDevs/AstrBot/releases/tag/v4.29.4)

## [4.29.4] - 2026-10-31

### 新增

- 消息按钮：新增跨平台按钮组件，支持链接、消息发送和插件回调，并提供交互超时提示。各平台支持的按钮类型以文档为准。 (#9809)
- 决策模型：新增独立于聊天模型的 Decision Provider 和 System One 适配器，供插件调用结构化选择、布尔判断和评分。 (#10775)
- 网络搜索：接入 SerpApi Google News，支持新闻来源、作者、发布时间和 WebUI 引用展示。 (#10773)
- 会话与用户选择：统一会话来源选择弹窗，支持昵称搜索、平台标识、分页及 ID 复制；记录发送者信息并补全飞书、QQ 官方群名称。管理员配置入口由“添加更多 → 编辑列表项”改为“选择用户”；原会话下拉框和列表编辑入口统一为“选择会话来源”，“已知会话”改为“已记录的会话来源”。 (#10747)
- 机器人管理：删除机器人时可选择清理配置、定时任务、会话、消息记录、追踪和用量数据；默认保留对话与历史数据。 (#10761)
- 定时任务：支持查看群内共享任务列表，并允许管理员删除群任务。 (#10785)
- 网络设置：新增 PyPI 镜像选择器与测速功能。 (#10657)

### 优化与修复

- 稳定性：修复日志输出受阻时 WebUI 和 WebChat 可能无响应的问题，并在诊断包中提供控制台日志丢弃统计。 (#10902)
- 上下文压缩：简化设置，将“历史记录达到上限或上下文窗口紧张时的处理方式”改为“压缩策略”，“上下文压缩模型提供商 ID”改为“压缩模型”；最大轮数、丢弃轮数、压缩指令、近期上下文比例及回退窗口大小移至“更多设置”，保留现有配置和运行行为。 (#10753)
- 模型服务：保留 Anthropic 兼容服务所需的 API Key 请求头；修复 DashScope Agent 超时配置未生效的问题。 (#10787, #10868)
- Gemini：提供原生参数快捷模板，并修正原生工具配置提示。 (#10771, #10875)
- 插件与技能：修复 NAS 等环境中临时目录与 `.astrbot` 标记文件冲突导致的插件安装失败；报告插件配置重载失败；加载技能时优先使用文件读取工具。 (#10784, #10788, #10789)
- 安全：为默认 PyPI 镜像启用 TLS 证书校验。 (#10685)
- 音频：支持带 `0x03` 前缀的腾讯 SILK 音频。 (#10744)
- ChatUI：文件面板使用当前会话的工作目录。 (#10883)
- WebUI：优化追踪列表实时更新、统一配置表单样式、移除自定义规则中不受支持的“全部”选项，并限制原生滚动条样式仅在 Firefox 生效。 (#10748, #10755, #10757, #10760)

### Added

- Message buttons: Added portable button components for links, sending messages, and plugin callbacks, with interaction timeout notices. Supported action types vary by platform; see the documentation. (#9809)
- Decision models: Added a Decision Provider independent of chat models and a System One adapter for structured choices, boolean questions, and scores in plugins. (#10775)
- Web search: Integrated SerpApi Google News with publisher, author, publication time, and WebUI citations. (#10773)
- Session and user selection: Unified session-source selection with nickname search, platform labels, pagination, and ID copying; recorded sender information and enriched Lark and QQ Official group names. Administrator settings move from Add More → E

---

### [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) `📦 规则集` `latest`

发布时间：2026-10-31（2 小时前）｜ [查看 Release](https://github.com/appshubcc/bett-rules/releases/tag/latest)

*（无更新说明）*

---

### [t59688/newsnook](https://github.com/t59688/newsnook) `🧪 测试版` `v1.9.2-beta.6`

发布时间：2026-10-31（49 分钟前）｜ [查看 Release](https://github.com/t59688/newsnook/releases/tag/v1.9.2-beta.6)

## 有所闻 NewsNook v1.9.2-beta.6

### 浏览器

- 标签页列表新增页面预览，更方便辨认已打开的页面。
- 优化标签页打开、关闭时的数量提示和动画。
- 默认搜索引擎调整为 Google，仍可自行选择其他搜索引擎。
- 改善浏览器主题颜色随应用主题变化的表现。

### 其它

- 版本号：1.9.2-beta.6。

---

### [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) `📝 提交` `29753df`

发布时间：2026-10-31（2 小时前）｜ [查看提交](https://github.com/1c7/chinese-independent-developer/commit/29753dfecbde5154c5a07915334a74c130489988)

第 21 次存档搬迁：2025-05-18 ~ 05-20 三个区块入分册

---

### [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) `✅ 正式版` `v0.8.11`

发布时间：2026-10-31（1 小时前）｜ [查看 Release](https://github.com/EKKOLearnAI/ekko-studio/releases/tag/v0.8.11)

## 更新内容

日期：2026-10-31

1. 个人助理任务支持将选中的排队消息插队执行：先中断当前回合并等待其结束，再优先处理该消息，保留其余队列和附件，并抑制被中断回合的结果投递 (#3607)
2. 支持安全删除单条尚未开始的任务排队消息及其结果投递，不停止当前工作 Agent、不清空其他输入；加入归属、版本和幂等校验，并保护正在插队的目标 (#3610)
3. 任务队列新增逐条删除按钮，按服务端能力显示；删除期间禁用冲突操作，失败可恢复，后续刷新失败仍保留服务端已确认的队列，重新打开抽屉可继续同步 (#3611)
4. 修复任务详情和会话加载失败后一直转圈的问题，支持错误重试；列表与详情读取设置 15 秒超时，取消过时请求并合并高频刷新，后台刷新失败时保留已有列表 (#3609)
5. 优化个人助理任务列表与执行历史查询，补充数据库索引并减少重复查找；读取会话快照不再改写共享会话表，保留任务优先级、排序和账号隔离规则 (#3609)
6. 统一任务抽屉与普通聊天的消息正文主题文字颜色，改善浅色和深色模式下的一致性 (#3607)
7. 修复 Windows 桌面更新被退出辅助进程阻塞的问题：退出命令优先通知现有实例并退出；安装器最多等待辅助进程 5 秒后继续清理，兼容从受影响旧版升级 (#3608)
8. 修复 macOS 本地内置浏览器一直提示正在启动的问题，兼容原有浏览器配置目录并保留登录与存储路径，同时维持远程及独立设备会话的目录隔离 (#3612)

## 下载说明

桌面安装包和 Web UI 产物由发布工作流上传。默认 Hermes runtime 为 0.22.5，首次启动时按平台下载。

完整变更：https://github.com/EKKOLearnAI/ekko-studio/compare/v0.8.1...v0.8.11

---

### [XTLS/Xray-core](https://github.com/XTLS/Xray-core) `✅ 正式版` `v26.10.31`

发布时间：2026-10-31（31 分钟前）｜ [查看 Release](https://github.com/XTLS/Xray-core/releases/tag/v26.10.31)

*（原文，翻译暂不可用）*

紧急安全更新：由于 Linux 内核刚被爆出监听 IPv4 MPTCP 极易被远程拿 root，且 Go 1.24+ 默认开了 MPTCP，本版本默认关闭了 MPTCP 以显著减小攻击面（v26.10.29 让位，已被撤版），用户应尽快升级到该版本（该漏洞不止影响 Linux 服务端，安卓客户端的 Socks/HTTP 入站若开启了“允许来自局域网的连接”则也有点危险），并尽快更新 Linux 内核以从根源上修复漏洞

## Sponsors

## Donation & NFTs

### Collect a Project X NFT to support the development of Project X!

<img alt="Project X NFT" width="150px" src="https://raw2.seadn.io/ethereum/0x5ee362866001613093361eb8569d59c4141b76d1/7fa9ce900fb39b44226348db330e32/8b7fa9ce900fb39b44226348db330e32.svg" />

- **TRX(Tron)/USDT/USDC: `TNrDh5VSfwd4RPrwsohr6poyNTfFefNYan`**
- **TON: `UQApeV-u2gm43aC1uP76xAC1m6vCylstaN1gpfBmre_5IyTH`**
- **BTC: `1JpqcziZZuqv3QQJhZGNGBVdCBrGgkL6cT`**
- **XMR: `4ABHQZ3yJZkBnLoqiKvb3f8eqUnX4iMPb6wdant5ZLGQELctcerceSGEfJnoCk6nnyRZm73wrwSgvZ2WmjYLng6R7sR67nq`**
- **SOL/USDT/USDC: `3x5NuXHzB5APG6vRinPZcsUv5ukWUY1tBGRSJiEJWtZa`**
- **ETH/USDT/USDC: `0xDc3Fe44F0f25D13CACb1C4896CD0D321df3146Ee`**
- **Project X NFT: https://opensea.io/item/ethereum/0x5ee362866001613093361eb8569d59c4141b76d1/1**
- **VLESS NFT: https://opensea.io/collection/vless**
- **REALITY NFT: https://opensea.io/item/ethereum/0x5ee362866001613093361eb8569d59c4141b76d1/2**
- **Related links: VLESS Post-Quantum Encryption, XHTTP: Beyond REALITY, Announcement of NFTs by Project X**

---

### [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) `✅ 正式版` `v2026.10.31-8506.4c14d05`

发布时间：2026-10-31（1 小时前）｜ [查看 Release](https://github.com/DIYgod/RSSHub/releases/tag/v2026.10.31-8506.4c14d05)

*（原文，翻译暂不可用）*

Source commit: 4c14d05cd1522db6a4353219e2d48c4abbe3687b

---

## 📋 全部项目（按最近更新排序）

| 项目 | 最新版本 | 类型 | 更新时间 | 距今 |
|---|---|---|---|---|
| [yigenhuobah/quietbox](https://github.com/yigenhuobah/quietbox) | `v0.9.1` | 正式版 | 2026-10-31 | 23 分钟前 |
| [XTLS/Xray-core](https://github.com/XTLS/Xray-core) | `v26.10.31` | 正式版 | 2026-10-31 | 31 分钟前 |
| [t59688/newsnook](https://github.com/t59688/newsnook) | `v1.9.2-beta.6` | 测试版 | 2026-10-31 | 49 分钟前 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | `v0.8.11` | 正式版 | 2026-10-31 | 1 小时前 |
| [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) | `v2026.10.31-8506.4c14d05` | 正式版 | 2026-10-31 | 1 小时前 |
| [DUNHKpcc/Claude-Guardian](https://github.com/DUNHKpcc/Claude-Guardian) | — | 提交 | 2026-10-31 | 1 小时前 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | `v4.29.4` | 正式版 | 2026-10-31 | 2 小时前 |
| [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) | — | 提交 | 2026-10-31 | 2 小时前 |
| [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) | `latest` | 正式版 | 2026-10-31 | 2 小时前 |
| [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) | `V1.0.323` | 正式版 | 2026-10-31 | 4 小时前 |
| [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) | — | 提交 | 2026-10-31 | 7 小时前 |
| [xiaoyaDev/xiaoya-alist](https://github.com/xiaoyaDev/xiaoya-alist) | — | 提交 | 2026-10-31 | 7 小时前 |
| [ArvinLovegood/go-stock](https://github.com/ArvinLovegood/go-stock) | `v2026.10.31.1-release` | 正式版 | 2026-10-31 | 8 小时前 |
| [adysec/tracker](https://github.com/adysec/tracker) | — | 提交 | 2026-10-31 | 9 小时前 |
| [Xposed-Modules-Repo/com.tianqianguai.xtq](https://github.com/Xposed-Modules-Repo/com.tianqianguai.xtq) | `72-12.39.0-prod.01` | 正式版 | 2026-10-31 | 9 小时前 |
| [paipiange/nvzhuang](https://github.com/paipiange/nvzhuang) | — | 提交 | 2026-10-31 | 9 小时前 |
| [Jasonzhu1207/ZenConverter](https://github.com/Jasonzhu1207/ZenConverter) | `pre-release` | 测试版 | 2026-10-31 | 10 小时前 |
| [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) | `draft` | 测试版 | 2026-10-31 | 12 小时前 |
| [z-mio/ParseHub](https://github.com/z-mio/ParseHub) | `v2.3.17` | 正式版 | 2026-10-31 | 13 小时前 |
| [XIU2/TrackersListCollection](https://github.com/XIU2/TrackersListCollection) | — | 提交 | 2026-10-31 | 13 小时前 |
| [ngosang/trackerslist](https://github.com/ngosang/trackerslist) | — | 提交 | 2026-10-30 | 14 小时前 |
| [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules) | `202610302234` | 正式版 | 2026-10-30 | 15 小时前 |
| [GravityPoet/ChordVox](https://github.com/GravityPoet/ChordVox) | `v1.5.145` | 正式版 | 2026-10-30 | 16 小时前 |
| [etherfunlab/eros-engine](https://github.com/etherfunlab/eros-engine) | `v2.6.1` | 正式版 | 2026-10-30 | 18 小时前 |
| [nerkeler/exam2pdf](https://github.com/nerkeler/exam2pdf) | `v0.1.5-preview.1` | 测试版 | 2026-10-30 | 21 小时前 |
| [gkd-kit/gkd](https://github.com/gkd-kit/gkd) | `v1.13.0-beta-3` | 测试版 | 2026-10-30 | 22 小时前 |
| [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) | `v2.3.6` | 正式版 | 2026-10-30 | 23 小时前 |
| [xgit01/sgkrank](https://github.com/xgit01/sgkrank) | — | 提交 | 2026-10-30 | 1 天前 |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | `mineru-4.1.3-released` | 正式版 | 2026-10-30 | 1 天前 |
| [AIsouler/MyClash](https://github.com/AIsouler/MyClash) | — | 提交 | 2026-10-30 | 1 天前 |
| [tradingeconomics/tradingeconomics](https://github.com/tradingeconomics/tradingeconomics) | — | 提交 | 2026-10-30 | 1 天前 |
| [KaringX/clashmi](https://github.com/KaringX/clashmi) | `v1.0.32.1802` | 测试版 | 2026-10-30 | 1 天前 |
| [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) | `v7.3.3.4` | 正式版 | 2026-10-30 | 1 天前 |
| [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) | `v3.1.3` | 正式版 | 2026-10-30 | 1 天前 |
| [tingaicompass/AI-Compass](https://github.com/tingaicompass/AI-Compass) | — | 提交 | 2026-10-30 | 1 天前 |
| [crimera/piko-newx](https://github.com/crimera/piko-newx) | `v3.72.3` | 正式版 | 2026-10-29 | 1 天前 |
| [Niklaus88/Clash-Config](https://github.com/Niklaus88/Clash-Config) | — | 提交 | 2026-10-29 | 1 天前 |
| [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) | `v1.6.6-beta2` | 测试版 | 2026-10-29 | 1 天前 |
| [dukangalex/HiClash](https://github.com/dukangalex/HiClash) | — | 提交 | 2026-10-29 | 2 天前 |
| [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | `v0.103.3012` | 测试版 | 2026-10-29 | 2 天前 |
| [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) | `26.10.29-1` | 正式版 | 2026-10-29 | 2 天前 |
| [JushiZen/Nimbus.Player](https://github.com/JushiZen/Nimbus.Player) | — | 提交 | 2026-10-28 | 2 天前 |
| [Inginnng/EditHere](https://github.com/Inginnng/EditHere) | `v0.12.3` | 正式版 | 2026-10-28 | 3 天前 |
| [myikuns/jichangtz-tuijian](https://github.com/myikuns/jichangtz-tuijian) | — | 提交 | 2026-10-28 | 3 天前 |
| [hicccc77/WeFlow](https://github.com/hicccc77/WeFlow) | — | 提交 | 2026-10-28 | 3 天前 |
| [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) | — | 提交 | 2026-10-28 | 3 天前 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | `autogpt-platform-beta-v0.10.0` | 测试版 | 2026-10-27 | 3 天前 |
| [uxgnod/yaf](https://github.com/uxgnod/yaf) | `v0.4.0` | 正式版 | 2026-10-27 | 4 天前 |
| [mason173/aira-browser](https://github.com/mason173/aira-browser) | `v3.9.1` | 正式版 | 2026-10-27 | 4 天前 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | `v0.7.1` | 正式版 | 2026-10-27 | 4 天前 |
| [z-mio/parse_hub_bot](https://github.com/z-mio/parse_hub_bot) | `v2.2.7` | 正式版 | 2026-10-27 | 4 天前 |
| [felinics/Memoh](https://github.com/felinics/Memoh) | `v1.0.0-beta.1` | 测试版 | 2026-10-27 | 4 天前 |
| [T8RIN/ImageToolbox](https://github.com/T8RIN/ImageToolbox) | `4.3.0-beta03` | 测试版 | 2026-10-26 | 4 天前 |
| [pgntgz/ClipBait](https://github.com/pgntgz/ClipBait) | `3-1.1.1` | 正式版 | 2026-10-26 | 4 天前 |
| [sunisup666/TikTools](https://github.com/sunisup666/TikTools) | `6-0.4.1` | 正式版 | 2026-10-26 | 4 天前 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | `v1.4.3` | 正式版 | 2026-10-26 | 4 天前 |
| [Ajaxc/WeChatList](https://github.com/Ajaxc/WeChatList) | `2.5.4` | 正式版 | 2026-10-26 | 5 天前 |
| [bilibili/Index-Translate](https://github.com/bilibili/Index-Translate) | — | 提交 | 2026-10-26 | 5 天前 |
| [UniClipboard/UniClipboard](https://github.com/UniClipboard/UniClipboard) | `v1.5.0` | 正式版 | 2026-10-26 | 5 天前 |
| [fankes/TSBattery](https://github.com/fankes/TSBattery) | `5.0.1` | 正式版 | 2026-10-26 | 5 天前 |
| [yagay/ListCleaner](https://github.com/yagay/ListCleaner) | `v1.6.46` | 正式版 | 2026-10-25 | 5 天前 |
| [Lotuszn/piggyhand-fish](https://github.com/Lotuszn/piggyhand-fish) | `v1.1.10` | 正式版 | 2026-10-25 | 5 天前 |
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | `v0.20.0` | 正式版 | 2026-10-25 | 5 天前 |
| [crimera/piko](https://github.com/crimera/piko) | `v3.11.0-dev.3` | 测试版 | 2026-10-25 | 5 天前 |
| [johamwon/wechrss](https://github.com/johamwon/wechrss) | — | 提交 | 2026-10-25 | 6 天前 |
| [morluto/rea](https://github.com/morluto/rea) | `rea-agents-6.8.0` | 正式版 | 2026-10-25 | 6 天前 |
| [ZCShou/GoGoGo](https://github.com/ZCShou/GoGoGo) | `v2.5.2` | 正式版 | 2026-10-25 | 6 天前 |
| [komi-store/komi-store](https://github.com/komi-store/komi-store) | `v1.9.4` | 正式版 | 2026-10-24 | 7 天前 |
| [chen08209/FlClash](https://github.com/chen08209/FlClash) | `v0.9.2` | 正式版 | 2026-10-24 | 7 天前 |
| [SagerNet/sing-box](https://github.com/SagerNet/sing-box) | `v1.15.0-alpha.13` | 测试版 | 2026-10-24 | 7 天前 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | `v1.6.0` | 正式版 | 2026-10-23 | 8 天前 |
| [joeytoday/obsidian-canvas-enhance](https://github.com/joeytoday/obsidian-canvas-enhance) | `1.0.11` | 正式版 | 2026-10-22 | 9 天前 |
| [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) | `v1.19.7` | 正式版 | 2026-10-22 | 9 天前 |
| [fw876/helloworld](https://github.com/fw876/helloworld) | `v198.2` | 正式版 | 2026-10-22 | 9 天前 |
| [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) | `v1.19.33` | 正式版 | 2026-10-21 | 9 天前 |
| [exteraless/exteraless](https://github.com/exteraless/exteraless) | `ci-8b7ec40` | 测试版 | 2026-10-21 | 9 天前 |
| [LifeArchiveProject/WeChatDataAnalysis](https://github.com/LifeArchiveProject/WeChatDataAnalysis) | `macos-source-runtime-39523784335-3` | 正式版 | 2026-10-21 | 10 天前 |
| [Lingyan000/fluxdo](https://github.com/Lingyan000/fluxdo) | `v0.2.29` | 正式版 | 2026-10-20 | 11 天前 |
| [ShareX/ShareX](https://github.com/ShareX/ShareX) | `v22.0.0` | 测试版 | 2026-10-20 | 11 天前 |
| [ZGMFX01A/OrigRead](https://github.com/ZGMFX01A/OrigRead) | `v1.7.1` | 正式版 | 2026-10-18 | 13 天前 |
| [kenischu/ReSource](https://github.com/kenischu/ReSource) | `3.0.8` | 正式版 | 2026-10-18 | 13 天前 |
| [Teamper/JHS](https://github.com/Teamper/JHS) | `v6.5.2` | 正式版 | 2026-10-16 | 15 天前 |
| [waditu/czsc](https://github.com/waditu/czsc) | `v1.0.2` | 正式版 | 2026-10-16 | 15 天前 |
| [NEORUAA/MeiloX](https://github.com/NEORUAA/MeiloX) | `1.55.1` | 正式版 | 2026-10-16 | 15 天前 |
| [jiangrui1994/CloudSaver](https://github.com/jiangrui1994/CloudSaver) | — | 提交 | 2026-10-15 | 16 天前 |
| [daimiaopeng/coolapk-desktop](https://github.com/daimiaopeng/coolapk-desktop) | `v1.35.0` | 正式版 | 2026-10-15 | 16 天前 |
| [xweiba/location-spoofer](https://github.com/xweiba/location-spoofer) | `v1.0.9` | 正式版 | 2026-10-14 | 17 天前 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | — | 提交 | 2026-10-14 | 17 天前 |
| [7723mod/NPatch](https://github.com/7723mod/NPatch) | `v1.0.9` | 正式版 | 2026-10-12 | 19 天前 |
| [dongyubin/IPTV](https://github.com/dongyubin/IPTV) | — | 提交 | 2026-10-11 | 20 天前 |
| [pengchujin/livecanvas](https://github.com/pengchujin/livecanvas) | — | 提交 | 2026-10-10 | 21 天前 |
| [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) | `v2.5.8` | 正式版 | 2026-10-09 | 22 天前 |
| [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) | — | 提交 | 2026-10-08 | 22 天前 |
| [jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader) | `desktop-v0.12.5` | 正式版 | 2026-10-08 | 23 天前 |
| [hoothin/UserScripts](https://github.com/hoothin/UserScripts) | — | 提交 | 2026-10-07 | 23 天前 |
| [reeden-org/reeden-app](https://github.com/reeden-org/reeden-app) | `v1.43.1` | 正式版 | 2026-10-07 | 23 天前 |
| [AyuGram/AyuGramDesktop](https://github.com/AyuGram/AyuGramDesktop) | `v7.2.9` | 正式版 | 2026-10-05 | 26 天前 |
| [HyNetworks/hysteria](https://github.com/HyNetworks/hysteria) | `app/v2.13.0` | 正式版 | 2026-10-05 | 26 天前 |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | `v1.15.0` | 正式版 | 2026-10-04 | 26 天前 |
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
| [xykt/NetQuality](https://github.com/xykt/NetQuality) | — | 提交 | 2026-09-01 | 2 个月前 |
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
| [hamibot/hamibot](https://github.com/hamibot/hamibot) | — | 提交 | 2023-11-01 | 3 年前 |
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