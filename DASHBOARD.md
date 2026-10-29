# ⭐ Star 动态看板

> 生成时间：2026-10-29 17:14:08 UTC ｜ 共 183 个项目 ｜ 每 3 小时自动更新

## 🆕 本次新增（10）

### [yigenhuobah/quietbox](https://github.com/yigenhuobah/quietbox) `✅ 正式版` `v0.9.0`

发布时间：2026-10-29（2 小时前）｜ [查看 Release](https://github.com/yigenhuobah/quietbox/releases/tag/v0.9.0)

适配小红书 9.52.0（9520807）。**master 只支持 9.52.0，不再支持 9.51.0**：旧版本仍会 fail-open 运行并提示「未适配」，但挂载点未按旧版维护，大部分功能可能失效。
### 适配
- 小红书 9.52.0 全量适配：按 9.52.0 APK 用 DexSQL 结构比对（方法体/签名形状一致）重定位 17 个 GONE/SIG 挂载点（14 个唯一锚点，信息流三项在 AD-02 与 AD-08/09/10 两处登记）：
  - 信息流：`l8d/m0#Q/#A0/#e0` → `ExploreView#S/#C0/#g0`；`g8d/s#Yd` → `vha/s#Pd`
  - 外跳汇聚：`k1e/i0#b` → `XYWebViewUtil#b`
  - 剪贴板：`u0b/e#b` → `jv8/e#b`；复制链接收口 `o92/q#a` → `redutils/q#a`
  - 水印：`ce8/j#a` → `jn6/j#a`；`ce8/i#i` → `jn6/i#i`（旧 ce8 类名被 R8 复用给无关 lambda）
  - 搜索广告：`hl0/f0#o` → `pc0/c0#o`
  - EX-01：`sr9/o#invoke` → `yr7/o#invoke`
  - AB：`tq/h#f/#b` → `XYExperimentImpl#f/#b`；`mb6/o#l` → `XYConfigCenterImpl#l`
- `VersionGate` 适配版本改为 9.52.0 / 9520807；`tools/check-mounts.sh` 的 MOUNTS 表与版本提示同步到 9.52.0，58 项全部补上参数个数（签名形状）校验。
- EX-01 取值改为 NoteFeed 字段优先（`modelType`/`id`），旧混淆 getter `c1`/`u0` 仅作兜底：9.52.0 中这两个 getter 的返回类型已被 R8 改掉。
### 修复
- EX-01 使用 PASSTHROUGH 异常模式：hook 内抛出 `IOException` 时原样传给宿主调用方，让 RxJava 走 `onError` 的离线/错误分支；其余 hook 仍保持 PROTECTIVE。
- 旧会话诊断残留：`HookState.enable` 现在创建空 State，已启用但安装阶段完全没有 touch 的功能也会回传空 `reg`/`skip`，清掉上一会话的旧 skip；水印挂载点全部缺失时改用 `markNotFound` 记录。
- 诊断回传区分 critical skip：只有类级主锚点缺失才计入失败横幅，方法级 skip 只用于诊断展示，避免可选方法改名就把整个功能判死。
- 回传增加 `meta.session` 会话标识与 `meta.updated_at` 落盘时间：新会话首次写入前清空上一会话的 `reg`/`hit`/`skip`/`crit`，迟到的旧会话整批丢弃，不能覆盖新会话。
- 回传增加 10 分钟 TTL：超时未更新按「未知」处理，失败计数归零；内容无变化时每 60 秒发一次心跳刷新 `meta.updated_at`，避免正常会话被误判过期。
- provider 调用改为有界单线程池 + 2 秒超时（超时取消），模块 App 卡死时不会永久阻塞诊断线程；失败仍按 60 秒退避。
- PV-03 只净化小红书链接：仅 `xiaohongshu.com` / `xhslink.com` / `xhslink.cn` / `xhs.cn` 及其子域，或 label 为 `ug-share-copy-link` 的复制生效；未知 host 与非 http(s) 文本原样放行，避免用户复制外部链接时误删 `sid` 等通用参数。
- PV-03 参数名解码改用 JDK `URLDecoder`，不再依赖 `android.net.Uri#decode`（JVM 单测里是 stub）。
### 变更
- Phase 3 配置写入：`ConfigStore` / `AbConfigStore` 的 `commit()` 统一排到后台单线程（`ConfigWrites`），主线程不再做磁盘/binder I/O；remote prefs 不可用时直接拒绝，不再回退本地冒充成功。
- 写入结果以真实 `commit()` 为准：设置页与 AB 面板先乐观显示，失败回调回滚 UI 并 Toast；每个 key 用写入序号防止旧回调覆盖新状态；`store` 在同一 service 实例内复用，换绑后重建。
- 设置页后台 I/O：状态卡读取、`failed

---

### [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) `🧪 测试版` `v1.6.6-beta2`

发布时间：2026-10-29（54 分钟前）｜ [查看 Release](https://github.com/1zumiii/AppOpsNext/releases/tag/v1.6.6-beta2)

## 简体中文

本测试版基于 1.6.6-beta1，新增主题选择和应用列表排序，并改进新装应用默认模板的自动套用。支持从 1.6.5 和 1.6.6-beta1 覆盖安装升级。

### 新增与改进

- 新增“安装后立即套用”。启用“自动套用到新装应用”和此选项后，Shizuku 中的常驻进程会监听应用安装，并触发默认模板套用，无需手动打开 AppOpsNext。
  - 功能保持开启且 Shizuku 授权有效时，监听进程会在 Shizuku 重新启动后恢复。
  - 自动套用开启时，后台还会定期检查并补处理新装应用。检查间隔设为 15 分钟，实际执行时间受系统调度影响，套用时需要 Shizuku 正在运行。
  - 允许通知后，处理结果发生变化时会发送通知，重复检查不会反复发送相同结果。
- 新增主题设置，可选择跟随系统、浅色或深色。切换主题时保持当前页面，状态栏图标随主题调整。
- 新增应用列表排序，支持按名称、安装时间或更新时间排序（#19）。排序适用于“按应用”列表、“按权限”中的应用列表，以及访问监测的应用选择列表。
- 工作资料、私密空间等其他用户下的应用也支持排序和批量修改。其他用户下的批量修改不会添加设置守护规则。
- 设置守护开启时，批量套用模板可勾选“应用后守护这些设置”，为成功应用的设置添加守护规则。
- 备份与迁移新增对设置守护规则和检查方式的支持。导入时，备份中的规则会替换同一设置的现有规则，其他规则保留。当前用户下未安装的应用所对应的规则会被跳过。
- 改进了部分 UI 设计。

### 修复

- 修复 GitHub API 达到访问频率上限时检查更新失败的问题。遇到限流时，改用 GitHub 最新发布页面查询最新正式版。

<details><summary>查看原文</summary>

## English

This beta builds on 1.6.6-beta1. It adds a theme selector and app list sorting, and it improves the automatic application of new app defaults. You can install it over 1.6.5 or 1.6.6-beta1.

### New and improved

- Added Apply right after install. When both Automatically apply to new apps and this option are on, a persistent Shizuku process watches for app installs and applies the default template. You do not need to open AppOpsNext.
  - The watcher starts again after Shizuku restarts, if the feature stays on and the Shizuku authorization is still valid.
  - While automatic application is on, a periodic background check also handles new apps that were missed. The interval is set to 15 minutes, and the actual time depends on system scheduling. Shizuku must be running to apply the rules.
  - With notifications allowed, AppOpsNext sends a notification when the result changes. Repeated checks do not send the same result again.
- Added a Theme setting with Follow system, Light and Dark. A theme change keeps the current page, and the status bar icons follow the theme.
- Added app list sorting by name, install time or update time (#19). Sorting is available in By app, in the app lists of By permission and in the app selection list of Access monitor.
- Apps in other users, such as a work profile or a private space, also support sorting and batch changes. A batch change in another user does not add Setting guard rules.
- When Setting guard is on and you apply a template to several apps, you can select Guard these settings after applying. AppOpsNext then adds guard rules for the settings that it applied successfully.
- Backup and migration now includes Setting guard rules and the check mode. On import, a rule from the backup replaces the existing rule for the same setting, and other rules stay. AppOpsNext skips rules for apps that are not installed in the current user.
- Improved parts of the UI design.

### Fixed

- Fixed the update check failing whe

</details>

---

### [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) `✅ 正式版` `v7.3.3.2`

发布时间：2026-10-29（6 小时前）｜ [查看 Release](https://github.com/Kindness-Kismet/AstraGram-Desktop/releases/tag/v7.3.3.2)

- 对系统材质菜单进行了改善，这使得附件菜单、图片和视频查看器操作及播放设置的云母、亚克力样式更加统一，过渡更平稳，加载提示更清晰
- 对对话区底部控件进行了改善，这使得频道通知条、加入按钮、置顶消息操作和管理日志控件采用一致的悬浮磨砂背景
- 对设置选项的图标进行了改善，这使得图标缩放后的边缘更平滑
- 修复了关于缓存历史过渡的错误，该问题曾导致旧画面中的图片、说明文字和相册按钮与滚动中的消息重叠
- 修复了关于聊天重新联网的错误，该问题曾导致缓存历史之后的新消息需要滚动会话才能补齐
- 修复了关于图片缓存的错误，该问题曾导致重新打开聊天时，近期查看过的图片和相册再次变模糊
- 修复了关于聊天搜索的错误，该问题曾导致返回聊天或置顶消息页面后搜索条件和结果位置丢失，输入区域还会错误地出现在搜索界面上
- 修复了关于文字复制的错误，该问题曾导致折叠引用和图片说明的菜单中缺少复制文字选项
- 修复了关于 Windows 启动后首次打开媒体查看器的错误，该问题曾导致主窗口先闪动，再显示查看器

<details><summary>查看原文</summary>

- Improved system-material menus, which now use consistent Mica and Acrylic styles across attachment menus, photo/video viewer actions and playback settings, with smoother transitions and clearer loading text
- Improved chat bottom controls, which now use consistent floating frosted backgrounds for channel notifications, join buttons, pinned-message actions and admin-log controls
- Improved icons in settings rows, which now have smoother edges when scaled
- Fixed an issue with cached history transitions that previously caused old message images, captions and album buttons to overlap scrolling messages
- Fixed an issue with reconnecting chats that previously caused new messages after the cached history to remain missing until the conversation was scrolled
- Fixed an issue with cached photos that previously caused recently viewed images and albums to become blurred again when reopening a chat
- Fixed an issue with in-chat search that previously caused search filters and result positions to be lost when returning to a chat or pinned-message page, with compose controls incorrectly appearing over search
- Fixed an issue with text copying that previously caused the Copy Text action to be missing over collapsed quotes and photo captions
- Fixed an issue with the first media viewer opening after startup on Windows that previously caused the main window to flash before the viewer appeared

</details>

---

### [crimera/piko-newx](https://github.com/crimera/piko-newx) `✅ 正式版` `v3.71.1`

发布时间：2026-10-29（6 小时前）｜ [查看 Release](https://github.com/crimera/piko-newx/releases/tag/v3.71.1)

### 错误修复
* **Twitter - newx:** 使用永久个人资料共享 URL (0bfa362)

<details><summary>查看原文</summary>

###  Bug Fixes
* **Twitter - newx:** use permanent profile share URLs (0bfa362)

</details>

---

### [opendatalab/MinerU](https://github.com/opendatalab/MinerU) `✅ 正式版` `mineru-4.1.2-released`

发布时间：2026-10-29（3 分钟前）｜ [查看 Release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.1.2-released)

## 中文

- **硬件诊断效率与输出**：`mineru-kit hardware info` 并行执行隔离的运行时探测，文本报告按固定顺序逐节输出并刷新；统一容量显示，精简设备与运行时摘要，JSON 保留完整诊断信息并补充 ONNX 只读候选设备及原因。
- **CLI 帮助按需加载**：根帮助、硬件帮助和版本查询不再初始化运行环境或读取用户配置，仅在实际执行命令时加载对应入口。
- **问题反馈表单**：提供独立的中英文表单，精简必填信息，解析档位默认选中“未知”；发布后自动同步最近三个稳定版本供选择。
- **CI 与发布流程**：问题表单变更使用轻量检查，发布重跑仍执行完整测试，避免被后续分支提交取消。

<details><summary>查看原文</summary>

## English

- **Hardware diagnostics and output:** `mineru-kit hardware info` runs isolated runtime probes concurrently and flushes text sections in a fixed order as they become available. Capacity formatting and device summaries are clearer, while JSON retains full diagnostics and adds the read-only ONNX device candidate and selection reason.
- **On-demand CLI help:** Root help, hardware help, and version queries no longer initialize the runtime or read user configuration. Command entry points load only when executed.
- **Issue reporting:** Separate English and Chinese forms require less information, default the parsing tier to “Unknown,” and automatically offer the three most recent stable versions after each release.
- **CI and release workflows:** Issue-form changes use lightweight checks, while release reruns retain the full test suite and are protected from cancellation by later branch pushes.

</details>

---

### [t59688/newsnook](https://github.com/t59688/newsnook) `🧪 测试版` `v1.9.2-beta.2`

发布时间：2026-10-29（1 小时前）｜ [查看 Release](https://github.com/t59688/newsnook/releases/tag/v1.9.2-beta.2)

## 有所闻 NewsNook v1.9.2-beta.2

### 阅读与媒体
- 调整内置播放器控件显隐逻辑，暂停时点击更稳定地显示/隐藏控件。

### 其它
- 版本号 1.9.2-beta.2

---

### [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) `📝 提交` `c43ef8d`

发布时间：2026-10-29（1 小时前）｜ [查看提交](https://github.com/1c7/chinese-independent-developer/commit/c43ef8da51e2645054b06922ab17f7d0bd662b67)

修正：清除 16 条描述开头的「一站式/一体化」，规范扩到句首数量词全禁

---

### [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) `📝 提交` `fea549b`

发布时间：2026-10-29（1 小时前）｜ [查看提交](https://github.com/Aethersailor/Custom_OpenClash_Rules/commit/fea549b946e960c88e9465550e9f829b87042b7e)

*（原文，翻译暂不可用）*

chore(rules): auto generate derived rule files

---

### [adysec/tracker](https://github.com/adysec/tracker) `📝 提交` `28b0b64`

发布时间：2026-10-29（2 小时前）｜ [查看提交](https://github.com/adysec/tracker/commit/28b0b649bfeca57f99fa37d6695296aeaa80eac3)

*（原文，翻译暂不可用）*

20261029

---

### [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) `✅ 正式版` `v2026.10.29-8493.156c586`

发布时间：2026-10-29（3 小时前）｜ [查看 Release](https://github.com/DIYgod/RSSHub/releases/tag/v2026.10.29-8493.156c586)

源提交：156c586ecb694bec4c9919a671b3fea2a6c67bce

<details><summary>查看原文</summary>

Source commit: 156c586ecb694bec4c9919a671b3fea2a6c67bce

</details>

---

## 📋 全部项目（按最近更新排序）

| 项目 | 最新版本 | 类型 | 更新时间 | 距今 |
|---|---|---|---|---|
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | `mineru-4.1.2-released` | 正式版 | 2026-10-29 | 3 分钟前 |
| [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) | `v1.6.6-beta2` | 测试版 | 2026-10-29 | 54 分钟前 |
| [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) | — | 提交 | 2026-10-29 | 1 小时前 |
| [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) | — | 提交 | 2026-10-29 | 1 小时前 |
| [t59688/newsnook](https://github.com/t59688/newsnook) | `v1.9.2-beta.2` | 测试版 | 2026-10-29 | 1 小时前 |
| [adysec/tracker](https://github.com/adysec/tracker) | — | 提交 | 2026-10-29 | 2 小时前 |
| [yigenhuobah/quietbox](https://github.com/yigenhuobah/quietbox) | `v0.9.0` | 正式版 | 2026-10-29 | 2 小时前 |
| [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) | `v2026.10.29-8493.156c586` | 正式版 | 2026-10-29 | 3 小时前 |
| [crimera/piko-newx](https://github.com/crimera/piko-newx) | `v3.71.1` | 正式版 | 2026-10-29 | 6 小时前 |
| [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) | `v7.3.3.2` | 正式版 | 2026-10-29 | 6 小时前 |
| [dukangalex/HiClash](https://github.com/dukangalex/HiClash) | — | 提交 | 2026-10-29 | 6 小时前 |
| [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | `v0.103.3012` | 测试版 | 2026-10-29 | 7 小时前 |
| [XTLS/Xray-core](https://github.com/XTLS/Xray-core) | `v26.10.29` | 正式版 | 2026-10-29 | 8 小时前 |
| [AIsouler/MyClash](https://github.com/AIsouler/MyClash) | — | 提交 | 2026-10-29 | 10 小时前 |
| [Xposed-Modules-Repo/com.tianqianguai.xtq](https://github.com/Xposed-Modules-Repo/com.tianqianguai.xtq) | `71-12.38.1-prod.01` | 正式版 | 2026-10-29 | 10 小时前 |
| [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) | `latest` | 正式版 | 2026-10-29 | 15 小时前 |
| [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) | `26.10.29-1` | 正式版 | 2026-10-29 | 15 小时前 |
| [XIU2/TrackersListCollection](https://github.com/XIU2/TrackersListCollection) | — | 提交 | 2026-10-29 | 17 小时前 |
| [xiaoyaDev/xiaoya-alist](https://github.com/xiaoyaDev/xiaoya-alist) | — | 提交 | 2026-10-28 | 17 小时前 |
| [ngosang/trackerslist](https://github.com/ngosang/trackerslist) | — | 提交 | 2026-10-28 | 18 小时前 |
| [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) | `draft` | 测试版 | 2026-10-28 | 18 小时前 |
| [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules) | `202610282235` | 正式版 | 2026-10-28 | 18 小时前 |
| [JushiZen/Nimbus.Player](https://github.com/JushiZen/Nimbus.Player) | — | 提交 | 2026-10-28 | 1 天前 |
| [Inginnng/EditHere](https://github.com/Inginnng/EditHere) | `v0.12.3` | 正式版 | 2026-10-28 | 1 天前 |
| [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) | `v3.1.2` | 正式版 | 2026-10-28 | 1 天前 |
| [myikuns/jichangtz-tuijian](https://github.com/myikuns/jichangtz-tuijian) | — | 提交 | 2026-10-28 | 1 天前 |
| [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) | `v2.3.5` | 正式版 | 2026-10-28 | 1 天前 |
| [hicccc77/WeFlow](https://github.com/hicccc77/WeFlow) | — | 提交 | 2026-10-28 | 1 天前 |
| [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) | — | 提交 | 2026-10-28 | 1 天前 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | `autogpt-platform-beta-v0.10.0` | 测试版 | 2026-10-27 | 2 天前 |
| [uxgnod/yaf](https://github.com/uxgnod/yaf) | `v0.4.0` | 正式版 | 2026-10-27 | 2 天前 |
| [ArvinLovegood/go-stock](https://github.com/ArvinLovegood/go-stock) | `v2026.10.27.1-release` | 正式版 | 2026-10-27 | 2 天前 |
| [mason173/aira-browser](https://github.com/mason173/aira-browser) | `v3.9.1` | 正式版 | 2026-10-27 | 2 天前 |
| [KaringX/clashmi](https://github.com/KaringX/clashmi) | `v1.0.32.1801` | 测试版 | 2026-10-27 | 2 天前 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | `v0.7.1` | 正式版 | 2026-10-27 | 2 天前 |
| [z-mio/parse_hub_bot](https://github.com/z-mio/parse_hub_bot) | `v2.2.7` | 正式版 | 2026-10-27 | 2 天前 |
| [z-mio/ParseHub](https://github.com/z-mio/ParseHub) | `v2.3.15` | 正式版 | 2026-10-27 | 2 天前 |
| [felinics/Memoh](https://github.com/felinics/Memoh) | `v1.0.0-beta.1` | 测试版 | 2026-10-27 | 2 天前 |
| [T8RIN/ImageToolbox](https://github.com/T8RIN/ImageToolbox) | `4.3.0-beta03` | 测试版 | 2026-10-26 | 2 天前 |
| [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) | `V1.0.322` | 正式版 | 2026-10-26 | 3 天前 |
| [pgntgz/ClipBait](https://github.com/pgntgz/ClipBait) | `3-1.1.1` | 正式版 | 2026-10-26 | 3 天前 |
| [sunisup666/TikTools](https://github.com/sunisup666/TikTools) | `6-0.4.1` | 正式版 | 2026-10-26 | 3 天前 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | `v1.4.3` | 正式版 | 2026-10-26 | 3 天前 |
| [Ajaxc/WeChatList](https://github.com/Ajaxc/WeChatList) | `2.5.4` | 正式版 | 2026-10-26 | 3 天前 |
| [tingaicompass/AI-Compass](https://github.com/tingaicompass/AI-Compass) | — | 提交 | 2026-10-26 | 3 天前 |
| [bilibili/Index-Translate](https://github.com/bilibili/Index-Translate) | — | 提交 | 2026-10-26 | 3 天前 |
| [UniClipboard/UniClipboard](https://github.com/UniClipboard/UniClipboard) | `v1.5.0` | 正式版 | 2026-10-26 | 3 天前 |
| [fankes/TSBattery](https://github.com/fankes/TSBattery) | `5.0.1` | 正式版 | 2026-10-26 | 3 天前 |
| [yagay/ListCleaner](https://github.com/yagay/ListCleaner) | `v1.6.46` | 正式版 | 2026-10-25 | 3 天前 |
| [Lotuszn/piggyhand-fish](https://github.com/Lotuszn/piggyhand-fish) | `v1.1.10` | 正式版 | 2026-10-25 | 3 天前 |
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | `v0.20.0` | 正式版 | 2026-10-25 | 3 天前 |
| [crimera/piko](https://github.com/crimera/piko) | `v3.11.0-dev.3` | 测试版 | 2026-10-25 | 3 天前 |
| [johamwon/wechrss](https://github.com/johamwon/wechrss) | — | 提交 | 2026-10-25 | 4 天前 |
| [ZCShou/GoGoGo](https://github.com/ZCShou/GoGoGo) | `v2.5.2` | 正式版 | 2026-10-25 | 4 天前 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | `v4.29.3` | 正式版 | 2026-10-24 | 5 天前 |
| [komi-store/komi-store](https://github.com/komi-store/komi-store) | `v1.9.4` | 正式版 | 2026-10-24 | 5 天前 |
| [chen08209/FlClash](https://github.com/chen08209/FlClash) | `v0.9.2` | 正式版 | 2026-10-24 | 5 天前 |
| [SagerNet/sing-box](https://github.com/SagerNet/sing-box) | `v1.15.0-alpha.13` | 测试版 | 2026-10-24 | 5 天前 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | `v0.7.39` | 正式版 | 2026-10-23 | 6 天前 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | `v1.6.0` | 正式版 | 2026-10-23 | 6 天前 |
| [joeytoday/obsidian-canvas-enhance](https://github.com/joeytoday/obsidian-canvas-enhance) | `1.0.11` | 正式版 | 2026-10-22 | 7 天前 |
| [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) | `v1.19.7` | 正式版 | 2026-10-22 | 7 天前 |
| [fw876/helloworld](https://github.com/fw876/helloworld) | `v198.2` | 正式版 | 2026-10-22 | 7 天前 |
| [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) | `v1.19.33` | 正式版 | 2026-10-21 | 8 天前 |
| [exteraless/exteraless](https://github.com/exteraless/exteraless) | `ci-8b7ec40` | 测试版 | 2026-10-21 | 8 天前 |
| [LifeArchiveProject/WeChatDataAnalysis](https://github.com/LifeArchiveProject/WeChatDataAnalysis) | `macos-source-runtime-39523784335-3` | 正式版 | 2026-10-21 | 8 天前 |
| [GravityPoet/ChordVox](https://github.com/GravityPoet/ChordVox) | `v1.5.144` | 正式版 | 2026-10-20 | 8 天前 |
| [xgit01/sgkrank](https://github.com/xgit01/sgkrank) | — | 提交 | 2026-10-20 | 9 天前 |
| [Lingyan000/fluxdo](https://github.com/Lingyan000/fluxdo) | `v0.2.29` | 正式版 | 2026-10-20 | 9 天前 |
| [ShareX/ShareX](https://github.com/ShareX/ShareX) | `v22.0.0` | 测试版 | 2026-10-20 | 9 天前 |
| [ZGMFX01A/OrigRead](https://github.com/ZGMFX01A/OrigRead) | `v1.7.1` | 正式版 | 2026-10-18 | 11 天前 |
| [kenischu/ReSource](https://github.com/kenischu/ReSource) | `3.0.8` | 正式版 | 2026-10-18 | 11 天前 |
| [Niklaus88/Clash-Config](https://github.com/Niklaus88/Clash-Config) | — | 提交 | 2026-10-17 | 12 天前 |
| [Teamper/JHS](https://github.com/Teamper/JHS) | `v6.5.2` | 正式版 | 2026-10-16 | 13 天前 |
| [waditu/czsc](https://github.com/waditu/czsc) | `v1.0.2` | 正式版 | 2026-10-16 | 13 天前 |
| [NEORUAA/MeiloX](https://github.com/NEORUAA/MeiloX) | `1.55.1` | 正式版 | 2026-10-16 | 13 天前 |
| [gkd-kit/gkd](https://github.com/gkd-kit/gkd) | `v1.13.0-beta-2` | 测试版 | 2026-10-15 | 14 天前 |
| [jiangrui1994/CloudSaver](https://github.com/jiangrui1994/CloudSaver) | — | 提交 | 2026-10-15 | 14 天前 |
| [daimiaopeng/coolapk-desktop](https://github.com/daimiaopeng/coolapk-desktop) | `v1.35.0` | 正式版 | 2026-10-15 | 14 天前 |
| [xweiba/location-spoofer](https://github.com/xweiba/location-spoofer) | `v1.0.9` | 正式版 | 2026-10-14 | 15 天前 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | — | 提交 | 2026-10-14 | 15 天前 |
| [7723mod/NPatch](https://github.com/7723mod/NPatch) | `v1.0.9` | 正式版 | 2026-10-12 | 17 天前 |
| [dongyubin/IPTV](https://github.com/dongyubin/IPTV) | — | 提交 | 2026-10-11 | 18 天前 |
| [pengchujin/livecanvas](https://github.com/pengchujin/livecanvas) | — | 提交 | 2026-10-10 | 19 天前 |
| [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) | `v2.5.8` | 正式版 | 2026-10-09 | 20 天前 |
| [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) | — | 提交 | 2026-10-08 | 20 天前 |
| [jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader) | `desktop-v0.12.5` | 正式版 | 2026-10-08 | 21 天前 |
| [hoothin/UserScripts](https://github.com/hoothin/UserScripts) | — | 提交 | 2026-10-07 | 21 天前 |
| [reeden-org/reeden-app](https://github.com/reeden-org/reeden-app) | `v1.43.1` | 正式版 | 2026-10-07 | 22 天前 |
| [AyuGram/AyuGramDesktop](https://github.com/AyuGram/AyuGramDesktop) | `v7.2.9` | 正式版 | 2026-10-05 | 24 天前 |
| [HyNetworks/hysteria](https://github.com/HyNetworks/hysteria) | `app/v2.13.0` | 正式版 | 2026-10-05 | 24 天前 |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | `v1.15.0` | 正式版 | 2026-10-04 | 24 天前 |
| [linesoft2/TaskMonitor](https://github.com/linesoft2/TaskMonitor) | `v2026.9.30.1` | 正式版 | 2026-09-30 | 29 天前 |
| [xykt/IPQuality](https://github.com/xykt/IPQuality) | — | 提交 | 2026-09-30 | 29 天前 |
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
| [tradingeconomics/tradingeconomics](https://github.com/tradingeconomics/tradingeconomics) | — | 提交 | 2026-08-31 | 1 个月前 |
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
| [thedjchi/Shizuku](https://github.com/thedjchi/Shizuku) | `v13.7.0-thedjchi` | 正式版 | 2026-07-02 | 3 个月前 |
| [woijfwefw/ZsxqCrawler](https://github.com/woijfwefw/ZsxqCrawler) | — | 提交 | 2026-06-25 | 4 个月前 |
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