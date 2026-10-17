# ⭐ Star 动态看板

> 生成时间：2026-10-17 11:54:17 UTC ｜ 共 172 个项目 ｜ 每 3 小时自动更新

## 🆕 本次新增（9）

### [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) `✅ 正式版` `v4.29.1`

发布时间：2026-10-17（2 小时前）｜ [查看 Release](https://github.com/AstrBotDevs/AstrBot/releases/tag/v4.29.1)

## [4.29.1] - 2026-10-17

### 新增

- 网页搜索：新增 SerpApi 搜索服务（支持 Google 网页搜索、图片搜索、学术搜索及财经搜索）以及 DeepSeek 搜索服务（支持网页搜索与网页内容提取）。 (#10599)
- 插件开发：为插件中的单选/多选配置项（类型为“list”）添加了支持本地化的 `subtitles` 副标题元数据。

### 修复

- ‼ 电脑使用：修复了在特定环境（如 Docker 容器环境）下，当本地隔离功能不可用时无法保存 Local 权限的问题。(#10584)
- 电脑使用：恢复了 Windows 系统下工作区范围内的文件读取、写入与编辑功能；通过原生文件句柄检查机制可拒绝重解析点与硬链接别名的使用。(#10584)
- Core：修复了启用“会话隔离”功能后可能引发的内存泄漏问题。现在会在注册消息处理流水线之前完成群聊会话隔离操作，从而确保正在执行的任务及终止请求均能使用正确的会话。(#10581)

<details><summary>查看原文</summary>

## [4.29.1] - 2026-10-17

### 新增

- 网页搜索：“网页搜索” 能力新增 SerpApi 搜索服务 (Google 网页搜索、图片搜索、学术搜索、财经搜索)、DeepSeek 搜索服务（网页搜索、网页内容提取）。 (#10599)
- 插件开发：为插件的单选/多选配置项（list 类型）添加本地化的 `subtitles` 副标题元数据。

### 修复

- ‼ 电脑使用：修复部分环境（如 Docker 容器环境）下，本地隔离不可用时，无法保存 Local 权限的问题。(#10584)
- 电脑使用：恢复 Windows 下工作区范围内的文件读取、写入和编辑，通过原生文件句柄检查拒绝重解析点和硬链接别名。 (#10584)
- Core：修复开启 “会话隔离” 功能后可能造成的内存泄漏。在注册消息处理流水线之前完成群聊会话隔离，确保运行中的任务及停止请求使用正确的会话。 (#10581)
- Telegram：转换消息时保留隐藏链接。 (#10557)
- Discord：修复全体成员提及。 (#10563)
- WebUI：修复移动端点击插件视图信息后浮层立即关闭的问题。 (#10562)
- Edge TTS：保留原生客户端的 User-Agent，避免请求失败。 (#10588)
- Skills：跳过无法读取的本地及插件技能目录，避免单个目录异常导致整轮 Agent 请求失败。 (#10591)

### Added

- Web Search: Added SerpApi (Google Search, Google Image Search, Google Scholar Search and Google Finance Search) and DeepSeek Search API (web search and page content extraction). (#10599)
- Plugin development: Added localized subtitle metadata for single-select/multi-select configuration options (of type 'list') in plugins.

### Fixed

- ‼ Computer Use: Restored workspace-scoped file reading, writing, and editing on Windows. Native handle checks reject reparse points and hardlink aliases. (#10584)
- Computer Use: Fixed saving Local permissions when isolation is unavailable. File access remains configurable; execution requiring unavailable isolation is blocked at tool execution. Defaults now give members workspace file access without execution, and administrators entire-environment execution with networking. Legacy Windows member policies with all access disabled migrate once to workspace file access, including identical manually disabled policies because their origin was not stored; later choices remain unchanged. (#10584)
- Core: Fixed a potential memory leak that could occur when the "session isolation" feature is enabled. Group chat session isolation is now performed before registering the message-processing pipeline, ensuring that both ongoing tasks and termination requests utilize the correct session. (#10581)
-

</details>

---

### [Niklaus88/Clash-Config](https://github.com/Niklaus88/Clash-Config) `📝 提交` `4e31447`

发布时间：2026-10-17（3 小时前）｜ [查看提交](https://github.com/Niklaus88/Clash-Config/commit/4e314476ec8138fa7e193b90d6e8c318fc6e4a26)

*（原文，翻译暂不可用）*

Update README.md

---

### [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) `🧪 测试版` `v3.0.20-beta.2`

发布时间：2026-10-17（2 小时前）｜ [查看 Release](https://github.com/HuangZhuoRui/LocationSpoofer/releases/tag/v3.0.20-beta.2)

# LocationSpoofer 3.0.20 测试版 2

- 新增独立的 Root 运行服务：即便应用界面进程被系统回收，该服务仍能维持模拟会话并自动续期授权；重新打开应用时可无缝恢复原有模拟路线，且同一次恢复过程不会重复扣费。
- 优化了暂停与继续功能的状态恢复机制：暂停后不再继续累计模拟步数。
- 完善了雷电模拟器及 MIUI 14 环境下的传感器接入功能，同时保留了此前对 ColorOS、HyperOS 和 MuMu 的适配支持。
- 全局版在检测到非推荐作用域时会弹出提示，用户可选择取消本次模拟或确认后继续；非全局版则沿用原有的作用域判定逻辑。
- 当 WiFi 模拟功能无可用数据时，不再弹出 Toast 提示。
- 配套后端服务仍保留旧版接口，会员权限、额度限制以及设备数量限制规则均继续生效。

我们继续提供全局版／非全局版、32位／64位共四种安装包，这些安装包均使用原有的发布签名并连接官方后端服务。全局版安装包内置 x86_64 系统模块，模拟器用户可继续使用原有的全局 64 位安装包。完成覆盖更新后请重启一次设备。

目前独立 Root 会话功能已在雷电模拟器上完成了主进程退出、授权续期、模拟路线恢复、暂停及停止等测试；本轮测试暂未在所有 ColorOS／HyperOS 设备上重新进行实机验证。测试前请先停止运动记录功能。

版本号：`3.0.20-beta.2`；Android versionCode：`30055`。
更新检查：可下载更新清单获取最新信息。
本次发布流程由自研的 Forgejo CI 系统完成测试、原证书签名、四款安装包的校验及自动发布工作。

所有安装包均由自研 CI 系统构建并校验，GitHub 镜像文件由发布程序自动上传，四款安装包的内容与自研下载站提供的同版本安装包完全一致。
GitHub 自动附带的源代码归档文件对应当前的公开 main 分支，并非本次 APK 的构建源码；本次构建的相关提交信息及安装包校验摘要均记录在 build-info.json 与 SHA256SUMS 文件中。

<details><summary>查看原文</summary>

# LocationSpoofer 3.0.20 Beta 2

- 新增独立 Root 运行服务，应用界面进程被回收后继续维持模拟会话与授权续期，重新打开可接回原路线，同次恢复不重复扣费。
- 完善暂停与继续的状态恢复，暂停时不再继续累加模拟步数。
- 完善雷电模拟器与 MIUI 14 的传感器接入，保留已有 ColorOS、HyperOS 和 MuMu 适配。
- 全局版检测到非推荐作用域时增加提示，可取消本次模拟或确认后继续；非全局版沿用原作用域逻辑。
- WiFi 模拟没有可用数据时不再弹出 Toast。
- 配套后端保留旧版接口，会员、额度和设备数量限制继续生效。

继续提供全局／非全局、32／64 位四种安装包，使用原发布签名并连接正式后端。全局包内置 x86_64 系统模块，模拟器继续使用原全局 64 位安装包。覆盖更新后请重启一次。

独立 Root 会话已在雷电进行主进程退出、续期、路线恢复、暂停和停止测试；本轮未重新实机验证所有 ColorOS／HyperOS 设备。请先停止运动记录，再进行测试。

版本号：`3.0.20-beta.2`；Android versionCode：`30055`。
更新检查：下载服务器更新清单。
由自建 Forgejo CI 完成测试、原证书签名、四包校验和自动发布。

安装包由自建 CI 构建和验包，GitHub 镜像由发布程序自动上传，四包与自建下载站的同版本包一致。
GitHub 自动附带的 Source code 归档对应现有公开 main，并非本次 APK 的构建源码；本次构建提交与包摘要记录在 build-info.json 和 SHA256SUMS。

</details>

---

### [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) `📝 提交` `9f947f6`

发布时间：2026-10-17（4 小时前）｜ [查看提交](https://github.com/yijixiuxin/chanlun-pro/commit/9f947f6a23b54ccad25efffb652c24415d00dbcf)

修改图表布局保存方式

---

### [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) `📝 提交` `d4ab6ad`

发布时间：2026-10-17（1 小时前）｜ [查看提交](https://github.com/1c7/chinese-independent-developer/commit/d4ab6ad24ffe5cb074a53f150df15c5582bb1be3)

整理：合并 PR #1586 重复的 10 月 17 号日期区块标题

---

### [xgit01/sgkrank](https://github.com/xgit01/sgkrank) `📝 提交` `880b92d`

发布时间：2026-10-17（37 分钟前）｜ [查看提交](https://github.com/xgit01/sgkrank/commit/880b92dac2bb9e9146bc2b3680de500197b50f4f)

更新 seed社工库

---

### [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) `📝 提交` `f90155b`

发布时间：2026-10-17（3 小时前）｜ [查看提交](https://github.com/Aethersailor/Custom_OpenClash_Rules/commit/f90155ba7d012bbaad1b91d4abde0900194b157d)

*（原文，翻译暂不可用）*

chore(rules): auto generate derived rule files

---

### [adysec/tracker](https://github.com/adysec/tracker) `📝 提交` `f59390e`

发布时间：2026-10-17（3 小时前）｜ [查看提交](https://github.com/adysec/tracker/commit/f59390e07c841def0ceb193e39a7eb72ba3f027a)

*（原文，翻译暂不可用）*

20261017

---

### [chen08209/FlClash](https://github.com/chen08209/FlClash) `✅ 正式版` `v0.9.1`

发布时间：2026-10-17（1 小时前）｜ [查看 Release](https://github.com/chen08209/FlClash/releases/tag/v0.9.1)

### 破坏性变更
- **network** 桌面端的 TUN 设置现在默认遵循当前配置文件；已修改的值也会随之保留

### 新功能
- **l10n** 新增法语、西班牙语和韩语翻译
- **android** 不再使用 Firebase 分析服务及崩溃报告功能
- **network** 支持针对每个键单独配置桌面端 TUN 参数；修复了系统代理与系统托盘相关问题
- **theme** 重新设计了主题颜色与配色方案
- **dashboard** 基于当前所选出口节点重新设计了控制面板界面
- **profiles** 优化了配置文件详情页面的资源加载；支持在自定义分组中启用“包含全部”选项
- **proxies** 代理组以卡片形式展示，分组标签则采用芯片样式呈现
- **views** 连接记录、请求记录及 DNS 记录页面均支持排序功能
- **ui** 新增可选的双层液态玻璃效果界面，以及滑动选择式菜单
- **ui** 采用 iOS 风格的界面元素、提示框与弹窗；优化了电视端的交互焦点显示效果

### 问题修复
- **ui** 修复了文本输入框中无法粘贴内容及中文输入异常的问题
- **core** 现在大型配置文件也不会导致程序崩溃；下载操作会正确信任核心证书颁发机构

### 性能优化
- **android** 代理处于繁忙状态时，Android 端的用户界面响应更加流畅

<details><summary>查看原文</summary>

### Breaking Changes
- **network** Desktop TUN keys follow the profile unless picked; changed values carry over

### Features
- **l10n** French, Spanish and Korean translations
- **android** No more Firebase analytics or crash reporting
- **network** Per-key desktop TUN settings; system proxy and tray fixes
- **theme** Redesigned theme colors and color styles
- **dashboard** A redesigned dashboard around the current exit
- **profiles** Profile-detail resources and include-all in custom groups
- **proxies** Proxy groups as cards, group tabs as chips
- **views** Sortable tables for connections, requests and DNS
- **ui** Optional two-tier Liquid Glass and slide-to-pick menus
- **ui** iOS-style surfaces, alerts and sheets; clearer TV focus

### Bug Fixes
- **ui** Fix pasting and Chinese input in text fields
- **core** Large profiles no longer crash; downloads trust core CAs

### Performance
- **android** Smoother Android UI while the proxy is busy

</details>

---

## 📋 全部项目（按最近更新排序）

| 项目 | 最新版本 | 类型 | 更新时间 | 距今 |
|---|---|---|---|---|
| [xgit01/sgkrank](https://github.com/xgit01/sgkrank) | — | 提交 | 2026-10-17 | 37 分钟前 |
| [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) | — | 提交 | 2026-10-17 | 1 小时前 |
| [chen08209/FlClash](https://github.com/chen08209/FlClash) | `v0.9.1` | 正式版 | 2026-10-17 | 1 小时前 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | `v4.29.1` | 正式版 | 2026-10-17 | 2 小时前 |
| [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) | `v3.0.20-beta.2` | 测试版 | 2026-10-17 | 2 小时前 |
| [adysec/tracker](https://github.com/adysec/tracker) | — | 提交 | 2026-10-17 | 3 小时前 |
| [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) | — | 提交 | 2026-10-17 | 3 小时前 |
| [Niklaus88/Clash-Config](https://github.com/Niklaus88/Clash-Config) | — | 提交 | 2026-10-17 | 3 小时前 |
| [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) | — | 提交 | 2026-10-17 | 4 小时前 |
| [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) | `v2026.10.17-8441.5d47d3a` | 正式版 | 2026-10-17 | 6 小时前 |
| [AIsouler/MyClash](https://github.com/AIsouler/MyClash) | — | 提交 | 2026-10-17 | 7 小时前 |
| [crimera/piko-newx](https://github.com/crimera/piko-newx) | `v3.57.1` | 正式版 | 2026-10-17 | 11 小时前 |
| [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) | `latest` | 正式版 | 2026-10-17 | 11 小时前 |
| [XIU2/TrackersListCollection](https://github.com/XIU2/TrackersListCollection) | — | 提交 | 2026-10-17 | 11 小时前 |
| [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules) | `202610162237` | 正式版 | 2026-10-16 | 13 小时前 |
| [ngosang/trackerslist](https://github.com/ngosang/trackerslist) | — | 提交 | 2026-10-16 | 13 小时前 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | `v0.7.0` | 正式版 | 2026-10-16 | 14 小时前 |
| [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) | `V1.0.320` | 正式版 | 2026-10-16 | 21 小时前 |
| [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) | `26.10.16-2` | 正式版 | 2026-10-16 | 22 小时前 |
| [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) | `v2.2.2` | 正式版 | 2026-10-16 | 22 小时前 |
| [hicccc77/WeFlow](https://github.com/hicccc77/WeFlow) | — | 提交 | 2026-10-16 | 1 天前 |
| [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) | `v1.6.5` | 正式版 | 2026-10-16 | 1 天前 |
| [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | `v0.102.2883.0` | 测试版 | 2026-10-16 | 1 天前 |
| [xiaoyaDev/xiaoya-alist](https://github.com/xiaoyaDev/xiaoya-alist) | — | 提交 | 2026-10-16 | 1 天前 |
| [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) | `v1.19.6` | 正式版 | 2026-10-16 | 1 天前 |
| [t59688/newsnook](https://github.com/t59688/newsnook) | `v1.9.0-beta.3` | 测试版 | 2026-10-16 | 1 天前 |
| [Teamper/JHS](https://github.com/Teamper/JHS) | `v6.5.2` | 正式版 | 2026-10-16 | 1 天前 |
| [waditu/czsc](https://github.com/waditu/czsc) | `v1.0.2` | 正式版 | 2026-10-16 | 1 天前 |
| [z-mio/ParseHub](https://github.com/z-mio/ParseHub) | `v2.3.10` | 正式版 | 2026-10-15 | 1 天前 |
| [z-mio/parse_hub_bot](https://github.com/z-mio/parse_hub_bot) | `v2.2.4` | 正式版 | 2026-10-15 | 1 天前 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | `v0.7.36` | 正式版 | 2026-10-15 | 1 天前 |
| [gkd-kit/gkd](https://github.com/gkd-kit/gkd) | `v1.13.0-beta-2` | 测试版 | 2026-10-15 | 1 天前 |
| [jiangrui1994/CloudSaver](https://github.com/jiangrui1994/CloudSaver) | — | 提交 | 2026-10-15 | 2 天前 |
| [joeytoday/obsidian-canvas-enhance](https://github.com/joeytoday/obsidian-canvas-enhance) | `1.0.9` | 正式版 | 2026-10-15 | 2 天前 |
| [JushiZen/Nimbus.Player](https://github.com/JushiZen/Nimbus.Player) | — | 提交 | 2026-10-15 | 2 天前 |
| [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) | `v7.3.1.7` | 正式版 | 2026-10-15 | 2 天前 |
| [ArvinLovegood/go-stock](https://github.com/ArvinLovegood/go-stock) | `v2026.10.15.1-release` | 正式版 | 2026-10-15 | 2 天前 |
| [daimiaopeng/coolapk-desktop](https://github.com/daimiaopeng/coolapk-desktop) | `v1.35.0` | 正式版 | 2026-10-15 | 2 天前 |
| [myikuns/jichangtz-tuijian](https://github.com/myikuns/jichangtz-tuijian) | — | 提交 | 2026-10-15 | 2 天前 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | `autogpt-platform-beta-v0.8.4` | 测试版 | 2026-10-14 | 2 天前 |
| [bilibili/Index-Translate](https://github.com/bilibili/Index-Translate) | — | 提交 | 2026-10-14 | 3 天前 |
| [xweiba/location-spoofer](https://github.com/xweiba/location-spoofer) | `v1.0.9` | 正式版 | 2026-10-14 | 3 天前 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | — | 提交 | 2026-10-14 | 3 天前 |
| [mason173/aira-browser](https://github.com/mason173/aira-browser) | `v3.7.4` | 正式版 | 2026-10-14 | 3 天前 |
| [Ajaxc/WeChatList](https://github.com/Ajaxc/WeChatList) | `2.5.2` | 正式版 | 2026-10-14 | 3 天前 |
| [exteraless/exteraless](https://github.com/exteraless/exteraless) | `ci-1ad6a60` | 测试版 | 2026-10-13 | 3 天前 |
| [Inginnng/EditHere](https://github.com/Inginnng/EditHere) | `v0.11.1` | 正式版 | 2026-10-13 | 3 天前 |
| [dukangalex/HiClash](https://github.com/dukangalex/HiClash) | — | 提交 | 2026-10-13 | 4 天前 |
| [7723mod/NPatch](https://github.com/7723mod/NPatch) | `v1.0.9` | 正式版 | 2026-10-12 | 4 天前 |
| [SagerNet/sing-box](https://github.com/SagerNet/sing-box) | `v1.15.0-alpha.12` | 测试版 | 2026-10-11 | 6 天前 |
| [LifeArchiveProject/WeChatDataAnalysis](https://github.com/LifeArchiveProject/WeChatDataAnalysis) | `macos-source-runtime-38116174842-1` | 正式版 | 2026-10-11 | 6 天前 |
| [dongyubin/IPTV](https://github.com/dongyubin/IPTV) | — | 提交 | 2026-10-11 | 6 天前 |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | `mineru-4.0.12-released` | 正式版 | 2026-10-11 | 6 天前 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | `v1.4.1` | 正式版 | 2026-10-10 | 6 天前 |
| [crimera/piko](https://github.com/crimera/piko) | `v3.10.0` | 正式版 | 2026-10-10 | 6 天前 |
| [johamwon/wechrss](https://github.com/johamwon/wechrss) | — | 提交 | 2026-10-10 | 6 天前 |
| [XTLS/Xray-core](https://github.com/XTLS/Xray-core) | `v26.10.10` | 测试版 | 2026-10-10 | 7 天前 |
| [pengchujin/livecanvas](https://github.com/pengchujin/livecanvas) | — | 提交 | 2026-10-10 | 7 天前 |
| [T8RIN/ImageToolbox](https://github.com/T8RIN/ImageToolbox) | `4.2.1-rc01` | 测试版 | 2026-10-09 | 7 天前 |
| [ZGMFX01A/OrigRead](https://github.com/ZGMFX01A/OrigRead) | `v1.7.0` | 正式版 | 2026-10-09 | 8 天前 |
| [KaringX/clashmi](https://github.com/KaringX/clashmi) | `v1.0.31.1703` | 正式版 | 2026-10-09 | 8 天前 |
| [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) | `v2.5.8` | 正式版 | 2026-10-09 | 8 天前 |
| [UniClipboard/UniClipboard](https://github.com/UniClipboard/UniClipboard) | `v1.1.2` | 正式版 | 2026-10-09 | 8 天前 |
| [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) | — | 提交 | 2026-10-08 | 8 天前 |
| [jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader) | `desktop-v0.12.5` | 正式版 | 2026-10-08 | 9 天前 |
| [hoothin/UserScripts](https://github.com/hoothin/UserScripts) | — | 提交 | 2026-10-07 | 9 天前 |
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | `v0.16.0` | 正式版 | 2026-10-07 | 9 天前 |
| [reeden-org/reeden-app](https://github.com/reeden-org/reeden-app) | `v1.43.1` | 正式版 | 2026-10-07 | 9 天前 |
| [fw876/helloworld](https://github.com/fw876/helloworld) | `v196.19` | 正式版 | 2026-10-07 | 9 天前 |
| [felinics/Memoh](https://github.com/felinics/Memoh) | `v0.21.0` | 正式版 | 2026-10-05 | 12 天前 |
| [AyuGram/AyuGramDesktop](https://github.com/AyuGram/AyuGramDesktop) | `v7.2.9` | 正式版 | 2026-10-05 | 12 天前 |
| [HyNetworks/hysteria](https://github.com/HyNetworks/hysteria) | `app/v2.13.0` | 正式版 | 2026-10-05 | 12 天前 |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | `v1.15.0` | 正式版 | 2026-10-04 | 12 天前 |
| [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) | `draft` | 测试版 | 2026-10-04 | 12 天前 |
| [kenischu/ReSource](https://github.com/kenischu/ReSource) | `3.0.7` | 正式版 | 2026-10-03 | 14 天前 |
| [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) | `v1.19.32` | 正式版 | 2026-09-30 | 16 天前 |
| [linesoft2/TaskMonitor](https://github.com/linesoft2/TaskMonitor) | `v2026.9.30.1` | 正式版 | 2026-09-30 | 16 天前 |
| [xykt/IPQuality](https://github.com/xykt/IPQuality) | — | 提交 | 2026-09-30 | 17 天前 |
| [tingaicompass/AI-Compass](https://github.com/tingaicompass/AI-Compass) | — | 提交 | 2026-09-24 | 23 天前 |
| [op7418/Humanizer-zh](https://github.com/op7418/Humanizer-zh) | — | 提交 | 2026-09-23 | 24 天前 |
| [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | — | 提交 | 2026-09-22 | 24 天前 |
| [zhangxiangliang/stock-api](https://github.com/zhangxiangliang/stock-api) | `v2.7.5` | 正式版 | 2026-09-21 | 25 天前 |
| [TG-Twilight/AWAvenue-Ads-Rule](https://github.com/TG-Twilight/AWAvenue-Ads-Rule) | `1.7.8-release` | 正式版 | 2026-09-21 | 25 天前 |
| [yuanzl77/IPTV](https://github.com/yuanzl77/IPTV) | — | 提交 | 2026-09-21 | 26 天前 |
| [zhanghai/MaterialFiles](https://github.com/zhanghai/MaterialFiles) | `v1.7.5` | 正式版 | 2026-09-20 | 27 天前 |
| [black-ant/Ant-Browser](https://github.com/black-ant/Ant-Browser) | `V1.8.0` | 正式版 | 2026-09-19 | 27 天前 |
| [liaoliao666/v2ex](https://github.com/liaoliao666/v2ex) | `1.9.6` | 正式版 | 2026-09-19 | 28 天前 |
| [eternity4719/HowToLiveBetter](https://github.com/eternity4719/HowToLiveBetter) | `epub-latest` | 正式版 | 2026-09-18 | 29 天前 |
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
| [loc567/loc567](https://github.com/loc567/loc567) | — | 提交 | 2026-06-19 | 4 个月前 |
| [LibChecker/LibChecker](https://github.com/LibChecker/LibChecker) | `2.5.4` | 正式版 | 2026-06-17 | 4 个月前 |
| [echs-top/proxy](https://github.com/echs-top/proxy) | `zashboard` | 正式版 | 2026-06-15 | 4 个月前 |
| [nicejade/wealth-tracker](https://github.com/nicejade/wealth-tracker) | `v5.0.0` | 正式版 | 2026-06-13 | 4 个月前 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | `v1.5.0` | 正式版 | 2026-06-11 | 4 个月前 |
| [foru17/make-x-great-again](https://github.com/foru17/make-x-great-again) | `v0.4.0` | 正式版 | 2026-05-28 | 4 个月前 |
| [gedoor/legado](https://github.com/gedoor/legado) | — | 提交 | 2026-05-27 | 4 个月前 |
| [zjp1997720/wechat-radar](https://github.com/zjp1997720/wechat-radar) | — | 提交 | 2026-05-26 | 4 个月前 |
| [PlexPt/awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh) | — | 提交 | 2026-04-28 | 5 个月前 |
| [tradingeconomics/notebooks](https://github.com/tradingeconomics/notebooks) | — | 提交 | 2026-04-23 | 5 个月前 |
| [wink-wink-wink555/MarkiNote](https://github.com/wink-wink-wink555/MarkiNote) | `v3.0.1` | 正式版 | 2026-04-12 | 6 个月前 |
| [therealXiaomanChu/ex-skill](https://github.com/therealXiaomanChu/ex-skill) | — | 提交 | 2026-04-08 | 6 个月前 |
| [cq0206/wechat2rss](https://github.com/cq0206/wechat2rss) | — | 提交 | 2026-03-20 | 7 个月前 |
| [hzlzh/Best-App](https://github.com/hzlzh/Best-App) | — | 提交 | 2026-03-17 | 7 个月前 |
| [quant-king299/EasyXT](https://github.com/quant-king299/EasyXT) | `v1.0.0` | 正式版 | 2026-03-12 | 7 个月前 |
| [DIYgod/RSSHub-Radar](https://github.com/DIYgod/RSSHub-Radar) | `v2.2.0` | 正式版 | 2026-02-11 | 8 个月前 |
| [Tongyi-MAI/Z-Image](https://github.com/Tongyi-MAI/Z-Image) | — | 提交 | 2026-02-09 | 8 个月前 |
| [koolshare/koolshare.github.io](https://github.com/koolshare/koolshare.github.io) | — | 提交 | 2026-01-27 | 8 个月前 |
| [jbiaojerry/ebook-treasure-chest](https://github.com/jbiaojerry/ebook-treasure-chest) | — | 提交 | 2026-01-13 | 9 个月前 |
| [mpquant/Ashare](https://github.com/mpquant/Ashare) | — | 提交 | 2025-12-24 | 9 个月前 |
| [Yu-Core/SwashbucklerDiary](https://github.com/Yu-Core/SwashbucklerDiary) | `v1.31.5` | 正式版 | 2025-12-10 | 10 个月前 |
| [likeflyme/cloudbak](https://github.com/likeflyme/cloudbak) | — | 提交 | 2025-10-24 | 11 个月前 |
| [xaoyaoo/PyWxDump](https://github.com/xaoyaoo/PyWxDump) | — | 提交 | 2025-10-20 | 12 个月前 |
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