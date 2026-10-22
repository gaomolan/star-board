# ⭐ Star 动态看板

> 生成时间：2026-10-22 06:55:17 UTC ｜ 共 174 个项目 ｜ 每 3 小时自动更新

## 🆕 本次新增（10）

### [UniClipboard/UniClipboard](https://github.com/UniClipboard/UniClipboard) `✅ 正式版` `v1.3.1`

发布时间：2026-10-22（1 小时前）｜ [查看 Release](https://github.com/UniClipboard/UniClipboard/releases/tag/v1.3.1)

## 1.3.1 - 2026-10-22

### 修复

- 修复了启用减少运动时 Windows 启动崩溃的问题。当动画被禁用时，不确定的进度条现在保持静态。

**变更日志文件**

- 英文变更日志：1.3.1.md
- 中文变更日志: 1.3.1.zh.md

## Windows 软件包没有代码签名

此版本中的 Windows 安装程序、可移植 zip 和 CLI 存档**未经过代码签名**。 Windows SmartScreen 或防病毒软件可能会发出警告。根据“SHA256SUMS.txt”（和“SHA256SUMS.txt.minisig”）验证下载。应用内更新仍通过更新程序签名进行验证。

## 应用程序安装

## 验证

应用内更新工件包括更新程序签名 (`.sig`)。提供“SHA256SUMS.txt”和“SHA256SUMS.txt.minisig”用于下载验证。如上所述，Windows 软件包没有经过 Authenticode 签名。

<details><summary>查看原文</summary>

## 1.3.1 - 2026-10-22

### Fixes

- Fixed a Windows startup crash when reduced motion is enabled. Indeterminate progress bars now remain static when animations are disabled.

**Changelog Files**

- English changelog: 1.3.1.md
- 中文变更日志: 1.3.1.zh.md

##  Windows packages are not code-signed

The Windows installer, portable zip and CLI archive in this release are **not code-signed**. Windows SmartScreen or antivirus software may warn about them. Verify the downloads against `SHA256SUMS.txt` (and `SHA256SUMS.txt.minisig`). In-app updates are still verified with the updater signature.

## App Installation

## Verification

In-app update artifacts include updater signatures (`.sig`). `SHA256SUMS.txt` and `SHA256SUMS.txt.minisig` are provided for download verification. Windows packages are not Authenticode-signed, as stated above.

</details>

---

### [AIsouler/MyClash](https://github.com/AIsouler/MyClash) `📝 提交` `c1de5ac`

发布时间：2026-10-22（1 小时前）｜ [查看提交](https://github.com/AIsouler/MyClash/commit/c1de5acd1dfe7d29eb5af00084e8d93e3b9610c4)

fix: 消除 exclude-type 锚点合并冲突并统一写法 (#62)

---

### [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) `✅ 正式版` `v2.3.1`

发布时间：2026-10-22（5 小时前）｜ [查看 Release](https://github.com/x554960766/wechat-mp-tools/releases/tag/v2.3.1)

*（原文，翻译暂不可用）*

* 统一还原公众号短链中的 ~，并按完整的 MP_WXS_账号ID_ 前缀提取短链，保留下划线
* feat: 抖音批量下载支持断点续传，重启后从上次进度继续
* feat: Add avatar | 增加微信公众号订阅源头像

## New Contributors
* @zhujunkui1-del made their first contribution in https://github.com/x554960766/wechat-mp-tools/pull/30
* @CharlesSong made their first contribution in https://github.com/x554960766/wechat-mp-tools/pull/32

---

### [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) `📝 提交` `6d831e2`

发布时间：2026-10-22（4 小时前）｜ [查看提交](https://github.com/yijixiuxin/chanlun-pro/commit/6d831e2e60f1f3d5a55d01cba6154da4311a3a6d)

*（原文，翻译暂不可用）*

ai install

---

### [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) `✅ 正式版` `v1.19.7`

发布时间：2026-10-22（33 分钟前）｜ [查看 Release](https://github.com/appshubcc/Bettbox/releases/tag/v1.19.7)

*（原文，翻译暂不可用）*

- Fixes and improvements
- Recommended version update
# Bettbox 正式版本发布

---

---
---

| **OS/ 系统** | **Requirements / 版本要求** | **Direct Links / 点击直链下载** |
|:---:|:---|:---|
| | macOS 12.0+ | |
| | Android 8.0+
*(Compatible with Android TV)* | 
|
| | Windows 8.1+
*(Compatible for Older CPU)* | 
|
| | Linux Kernel 5.4+
*(Compatible for Older CPU)* | 
|
---

---

### [t59688/newsnook](https://github.com/t59688/newsnook) `🧪 测试版` `v1.9.1-beta.2`

发布时间：2026-10-22（2 小时前）｜ [查看 Release](https://github.com/t59688/newsnook/releases/tag/v1.9.1-beta.2)

## 有所闻 NewsNook v1.9.1-beta.2

### 内置浏览器 · AI Agent
- 新增端侧 AI 浏览器 Agent（BYOK）：空白页即可自主 ReAct 调用原生工具
- 浮动 ReAct 工作台：可拖拽半屏面板，支持 Markdown 展示
- Agent 可管理浏览器设置与用户脚本；息屏 / 后台由 Foreground Service 维持任务
- 隐私书签改为连点五下揭示，避免误触暴露

### 启动与性能
- 冷启动优化：组件懒加载、WebView 初始化与启动指标
- 启动屏与 WebView 背景色统一，减少首帧闪烁
- 诊断能力与正式包隔离，并加强启动回归测试覆盖

### 其它
- 版本号 1.9.1-beta.2；本版本为 Beta 测试版。

* feat: autonomous ReAct Agent with native tool calling from blank browser

---

### [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) `📝 提交` `0756c0a`

发布时间：2026-10-22（4 小时前）｜ [查看提交](https://github.com/1c7/chinese-independent-developer/commit/0756c0afe94f5c33cb554736274d4e4e1fcbb210)

把 2025 年 1 月的 5 个区块移入更早的项目分册

---

### [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) `📝 提交` `73870d9`

发布时间：2026-10-22（34 分钟前）｜ [查看提交](https://github.com/Aethersailor/Custom_OpenClash_Rules/commit/73870d9d34dd1306490e84577d5f19967a53dc09)

*（原文，翻译暂不可用）*

chore(rules): auto generate derived rule files

---

### [adysec/tracker](https://github.com/adysec/tracker) `📝 提交` `57c77b2`

发布时间：2026-10-22（2 小时前）｜ [查看提交](https://github.com/adysec/tracker/commit/57c77b2053871886f37e1d39c13b08b991629f63)

*（原文，翻译暂不可用）*

20261022

---

### [fw876/helloworld](https://github.com/fw876/helloworld) `✅ 正式版` `v198.2`

发布时间：2026-10-22（3 小时前）｜ [查看 Release](https://github.com/fw876/helloworld/releases/tag/v198.2)

*（原文，翻译暂不可用）*

# helloworld v198.2

Changes since v196.19:

- luci-app-ssr-plus: bump version to v198.2 (`45893d7`)
- xray-core: use selected Go toolchain for ARM64 EIP93 overlay (`bb3bf44`)
- xray-core: document distinct Airoha EIP93 kernel package (`676e99c`)
- luci-app-ssr-plus: bump version to v198.1 (`80d7bff`)
- xray-core: update to 26.10.21 and accelerate AN7581 AES-GCM (`8547820`)
- ci: fix Cronet linker selection and SDK configuration cycle (`b87e1d6`)
- ci: fix Xray preparation and require complete release builds (`4e4dee0`)
- xray-core: add Kcptun transport and LuCI settings (`f681871`)
- xray-core: add ShadowTLS transport and LuCI configuration (`a8d8c74`)
- luci-app-ssr-plus: bump to 197 and disable legacy package defaults (`12b7dd5`)
- xray-core: add ShadowsocksR inbound and consolidate protocol patch (`63a8904`)
- xray-core: add AnyTLS inbound and consolidate protocol patch (`a970802`)
- xray-core: add Mihomo Snell support and LuCI integration (`092886c`)
- xray-core: add Mihomo TUIC v4/v5 support and LuCI integration (`2a70c30`)
- ci: replace naiveproxy release package with SSR Plus Chinese translation (`ac70ddc`)
- xray-core: add Mihomo ShadowsocksR outbound and LuCI support (`1cea3d2`)
- xray-core: add Cronet NaiveProxy support and SSR Plus configuration (`cc3862b`)
- redsocks2: update to 0.72 (`0d24da0`)
- dns2socks-rust: update to 0.2.6 (`1a7a1e4`)
- hysteria: update to 2.13.0 (`0993f66`)
- naiveproxy: update to 154.0.8037.49-4 (`25188df`)
- gn: update to git HEAD (`46eff22`)
- xray-core: update to 26.10.17 (`2e60703`)
- luci-app-ssr-plus: fix: don't pass empty flag vars as empty arguments (`4121799`)
- luci-app-ssr-plus: fix: read custom_ports from global config (`356dd51`)
- luci-app-ssr-plus: fix: drop local keyword outside function scope, (`59b2880`)
- luci-app-ssr-plus: fix: add missing @gmlan6 rule in nftables backend Problem:   ipv6_policy_rules() in ipv6.sh (nftables backend) is missing the   gmlan6 match that the iptables backend already has. In router

---

## 📋 全部项目（按最近更新排序）

| 项目 | 最新版本 | 类型 | 更新时间 | 距今 |
|---|---|---|---|---|
| [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) | `v1.19.7` | 正式版 | 2026-10-22 | 33 分钟前 |
| [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) | — | 提交 | 2026-10-22 | 34 分钟前 |
| [UniClipboard/UniClipboard](https://github.com/UniClipboard/UniClipboard) | `v1.3.1` | 正式版 | 2026-10-22 | 1 小时前 |
| [AIsouler/MyClash](https://github.com/AIsouler/MyClash) | — | 提交 | 2026-10-22 | 1 小时前 |
| [t59688/newsnook](https://github.com/t59688/newsnook) | `v1.9.1-beta.2` | 测试版 | 2026-10-22 | 2 小时前 |
| [adysec/tracker](https://github.com/adysec/tracker) | — | 提交 | 2026-10-22 | 2 小时前 |
| [fw876/helloworld](https://github.com/fw876/helloworld) | `v198.2` | 正式版 | 2026-10-22 | 3 小时前 |
| [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) | — | 提交 | 2026-10-22 | 4 小时前 |
| [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) | — | 提交 | 2026-10-22 | 4 小时前 |
| [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) | `v2.3.1` | 正式版 | 2026-10-22 | 5 小时前 |
| [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) | `latest` | 正式版 | 2026-10-22 | 6 小时前 |
| [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) | `v2026.10.22-8458.ec765d3` | 正式版 | 2026-10-22 | 6 小时前 |
| [XIU2/TrackersListCollection](https://github.com/XIU2/TrackersListCollection) | — | 提交 | 2026-10-22 | 6 小时前 |
| [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules) | `202610212239` | 正式版 | 2026-10-21 | 8 小时前 |
| [ngosang/trackerslist](https://github.com/ngosang/trackerslist) | — | 提交 | 2026-10-21 | 8 小时前 |
| [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) | `v1.19.33` | 正式版 | 2026-10-21 | 14 小时前 |
| [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) | `26.10.22-1` | 正式版 | 2026-10-21 | 14 小时前 |
| [exteraless/exteraless](https://github.com/exteraless/exteraless) | `ci-8b7ec40` | 测试版 | 2026-10-21 | 15 小时前 |
| [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) | `V1.0.321` | 正式版 | 2026-10-21 | 15 小时前 |
| [XTLS/Xray-core](https://github.com/XTLS/Xray-core) | `v26.10.21` | 测试版 | 2026-10-21 | 18 小时前 |
| [ArvinLovegood/go-stock](https://github.com/ArvinLovegood/go-stock) | `v2026.10.21.2-release` | 正式版 | 2026-10-21 | 19 小时前 |
| [z-mio/parse_hub_bot](https://github.com/z-mio/parse_hub_bot) | `v2.2.6` | 正式版 | 2026-10-21 | 20 小时前 |
| [z-mio/ParseHub](https://github.com/z-mio/ParseHub) | `v2.3.14` | 正式版 | 2026-10-21 | 20 小时前 |
| [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | `v0.102.2933.0` | 正式版 | 2026-10-21 | 23 小时前 |
| [myikuns/jichangtz-tuijian](https://github.com/myikuns/jichangtz-tuijian) | — | 提交 | 2026-10-21 | 1 天前 |
| [LifeArchiveProject/WeChatDataAnalysis](https://github.com/LifeArchiveProject/WeChatDataAnalysis) | `macos-source-runtime-39523784335-3` | 正式版 | 2026-10-21 | 1 天前 |
| [xiaoyaDev/xiaoya-alist](https://github.com/xiaoyaDev/xiaoya-alist) | — | 提交 | 2026-10-20 | 1 天前 |
| [johamwon/wechrss](https://github.com/johamwon/wechrss) | — | 提交 | 2026-10-20 | 1 天前 |
| [xgit01/sgkrank](https://github.com/xgit01/sgkrank) | — | 提交 | 2026-10-20 | 1 天前 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | `v0.7.38` | 正式版 | 2026-10-20 | 1 天前 |
| [Lingyan000/fluxdo](https://github.com/Lingyan000/fluxdo) | `v0.2.29` | 正式版 | 2026-10-20 | 1 天前 |
| [hicccc77/WeFlow](https://github.com/hicccc77/WeFlow) | — | 提交 | 2026-10-20 | 1 天前 |
| [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) | `v7.3.1.9` | 正式版 | 2026-10-20 | 2 天前 |
| [ShareX/ShareX](https://github.com/ShareX/ShareX) | `v22.0.0` | 测试版 | 2026-10-20 | 2 天前 |
| [joeytoday/obsidian-canvas-enhance](https://github.com/joeytoday/obsidian-canvas-enhance) | `1.0.10` | 正式版 | 2026-10-19 | 2 天前 |
| [KaringX/clashmi](https://github.com/KaringX/clashmi) | `v1.0.32.1800` | 测试版 | 2026-10-19 | 3 天前 |
| [felinics/Memoh](https://github.com/felinics/Memoh) | `v0.22.0` | 正式版 | 2026-10-19 | 3 天前 |
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | `v0.18.0` | 正式版 | 2026-10-18 | 3 天前 |
| [tingaicompass/AI-Compass](https://github.com/tingaicompass/AI-Compass) | — | 提交 | 2026-10-18 | 3 天前 |
| [ZGMFX01A/OrigRead](https://github.com/ZGMFX01A/OrigRead) | `v1.7.1` | 正式版 | 2026-10-18 | 3 天前 |
| [crimera/piko-newx](https://github.com/crimera/piko-newx) | `v3.59.0` | 正式版 | 2026-10-18 | 3 天前 |
| [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) | `v3.0.20` | 正式版 | 2026-10-18 | 3 天前 |
| [T8RIN/ImageToolbox](https://github.com/T8RIN/ImageToolbox) | `4.3.0-beta01` | 测试版 | 2026-10-18 | 4 天前 |
| [kenischu/ReSource](https://github.com/kenischu/ReSource) | `3.0.8` | 正式版 | 2026-10-18 | 4 天前 |
| [chen08209/FlClash](https://github.com/chen08209/FlClash) | `v0.9.1` | 正式版 | 2026-10-17 | 4 天前 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | `v4.29.1` | 正式版 | 2026-10-17 | 4 天前 |
| [Niklaus88/Clash-Config](https://github.com/Niklaus88/Clash-Config) | — | 提交 | 2026-10-17 | 4 天前 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | `v0.7.0` | 正式版 | 2026-10-16 | 5 天前 |
| [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) | `v1.6.5` | 正式版 | 2026-10-16 | 5 天前 |
| [Teamper/JHS](https://github.com/Teamper/JHS) | `v6.5.2` | 正式版 | 2026-10-16 | 6 天前 |
| [waditu/czsc](https://github.com/waditu/czsc) | `v1.0.2` | 正式版 | 2026-10-16 | 6 天前 |
| [NEORUAA/MeiloX](https://github.com/NEORUAA/MeiloX) | `1.55.1` | 正式版 | 2026-10-16 | 6 天前 |
| [gkd-kit/gkd](https://github.com/gkd-kit/gkd) | `v1.13.0-beta-2` | 测试版 | 2026-10-15 | 6 天前 |
| [jiangrui1994/CloudSaver](https://github.com/jiangrui1994/CloudSaver) | — | 提交 | 2026-10-15 | 6 天前 |
| [JushiZen/Nimbus.Player](https://github.com/JushiZen/Nimbus.Player) | — | 提交 | 2026-10-15 | 7 天前 |
| [daimiaopeng/coolapk-desktop](https://github.com/daimiaopeng/coolapk-desktop) | `v1.35.0` | 正式版 | 2026-10-15 | 7 天前 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | `autogpt-platform-beta-v0.8.4` | 测试版 | 2026-10-14 | 7 天前 |
| [bilibili/Index-Translate](https://github.com/bilibili/Index-Translate) | — | 提交 | 2026-10-14 | 7 天前 |
| [xweiba/location-spoofer](https://github.com/xweiba/location-spoofer) | `v1.0.9` | 正式版 | 2026-10-14 | 7 天前 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | — | 提交 | 2026-10-14 | 7 天前 |
| [mason173/aira-browser](https://github.com/mason173/aira-browser) | `v3.7.4` | 正式版 | 2026-10-14 | 7 天前 |
| [Ajaxc/WeChatList](https://github.com/Ajaxc/WeChatList) | `2.5.2` | 正式版 | 2026-10-14 | 8 天前 |
| [Inginnng/EditHere](https://github.com/Inginnng/EditHere) | `v0.11.1` | 正式版 | 2026-10-13 | 8 天前 |
| [dukangalex/HiClash](https://github.com/dukangalex/HiClash) | — | 提交 | 2026-10-13 | 8 天前 |
| [7723mod/NPatch](https://github.com/7723mod/NPatch) | `v1.0.9` | 正式版 | 2026-10-12 | 9 天前 |
| [SagerNet/sing-box](https://github.com/SagerNet/sing-box) | `v1.15.0-alpha.12` | 测试版 | 2026-10-11 | 11 天前 |
| [dongyubin/IPTV](https://github.com/dongyubin/IPTV) | — | 提交 | 2026-10-11 | 11 天前 |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | `mineru-4.0.12-released` | 正式版 | 2026-10-11 | 11 天前 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | `v1.4.1` | 正式版 | 2026-10-10 | 11 天前 |
| [crimera/piko](https://github.com/crimera/piko) | `v3.10.0` | 正式版 | 2026-10-10 | 11 天前 |
| [pengchujin/livecanvas](https://github.com/pengchujin/livecanvas) | — | 提交 | 2026-10-10 | 12 天前 |
| [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) | `v2.5.8` | 正式版 | 2026-10-09 | 13 天前 |
| [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) | — | 提交 | 2026-10-08 | 13 天前 |
| [jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader) | `desktop-v0.12.5` | 正式版 | 2026-10-08 | 14 天前 |
| [hoothin/UserScripts](https://github.com/hoothin/UserScripts) | — | 提交 | 2026-10-07 | 14 天前 |
| [reeden-org/reeden-app](https://github.com/reeden-org/reeden-app) | `v1.43.1` | 正式版 | 2026-10-07 | 14 天前 |
| [AyuGram/AyuGramDesktop](https://github.com/AyuGram/AyuGramDesktop) | `v7.2.9` | 正式版 | 2026-10-05 | 17 天前 |
| [HyNetworks/hysteria](https://github.com/HyNetworks/hysteria) | `app/v2.13.0` | 正式版 | 2026-10-05 | 17 天前 |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | `v1.15.0` | 正式版 | 2026-10-04 | 17 天前 |
| [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) | `draft` | 测试版 | 2026-10-04 | 17 天前 |
| [linesoft2/TaskMonitor](https://github.com/linesoft2/TaskMonitor) | `v2026.9.30.1` | 正式版 | 2026-09-30 | 21 天前 |
| [xykt/IPQuality](https://github.com/xykt/IPQuality) | — | 提交 | 2026-09-30 | 21 天前 |
| [op7418/Humanizer-zh](https://github.com/op7418/Humanizer-zh) | — | 提交 | 2026-09-23 | 29 天前 |
| [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | — | 提交 | 2026-09-22 | 29 天前 |
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
| [hifengzy/ima-sync](https://github.com/hifengzy/ima-sync) | `0.3.1` | 正式版 | 2026-08-29 | 1 个月前 |
| [Kyant0/AndroidLiquidGlass](https://github.com/Kyant0/AndroidLiquidGlass) | `2.0.1` | 正式版 | 2026-08-26 | 1 个月前 |
| [Conquerer-yinn/Kakaaaa-quant](https://github.com/Conquerer-yinn/Kakaaaa-quant) | `v1.0.0` | 正式版 | 2026-08-24 | 1 个月前 |
| [yeximm/Access_wechat_article](https://github.com/yeximm/Access_wechat_article) | `v2.2.0` | 正式版 | 2026-08-23 | 1 个月前 |
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
| [komi-store/komi-store](https://github.com/komi-store/komi-store) | `v1.9.2` | 正式版 | 2026-06-26 | 3 个月前 |
| [woijfwefw/ZsxqCrawler](https://github.com/woijfwefw/ZsxqCrawler) | — | 提交 | 2026-06-25 | 3 个月前 |
| [yyyyymmmmm/InkRoot](https://github.com/yyyyymmmmm/InkRoot) | `v1.1.13` | 正式版 | 2026-06-22 | 4 个月前 |
| [loc567/loc567](https://github.com/loc567/loc567) | — | 提交 | 2026-06-19 | 4 个月前 |
| [LibChecker/LibChecker](https://github.com/LibChecker/LibChecker) | `2.5.4` | 正式版 | 2026-06-17 | 4 个月前 |
| [echs-top/proxy](https://github.com/echs-top/proxy) | `zashboard` | 正式版 | 2026-06-15 | 4 个月前 |
| [nicejade/wealth-tracker](https://github.com/nicejade/wealth-tracker) | `v5.0.0` | 正式版 | 2026-06-13 | 4 个月前 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | `v1.5.0` | 正式版 | 2026-06-11 | 4 个月前 |
| [foru17/make-x-great-again](https://github.com/foru17/make-x-great-again) | `v0.4.0` | 正式版 | 2026-05-28 | 4 个月前 |
| [gedoor/legado](https://github.com/gedoor/legado) | — | 提交 | 2026-05-27 | 4 个月前 |
| [zjp1997720/wechat-radar](https://github.com/zjp1997720/wechat-radar) | — | 提交 | 2026-05-26 | 4 个月前 |
| [PlexPt/awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh) | — | 提交 | 2026-04-28 | 5 个月前 |
| [tradingeconomics/notebooks](https://github.com/tradingeconomics/notebooks) | — | 提交 | 2026-04-23 | 6 个月前 |
| [wink-wink-wink555/MarkiNote](https://github.com/wink-wink-wink555/MarkiNote) | `v3.0.1` | 正式版 | 2026-04-12 | 6 个月前 |
| [therealXiaomanChu/ex-skill](https://github.com/therealXiaomanChu/ex-skill) | — | 提交 | 2026-04-08 | 6 个月前 |
| [cq0206/wechat2rss](https://github.com/cq0206/wechat2rss) | — | 提交 | 2026-03-20 | 7 个月前 |
| [hzlzh/Best-App](https://github.com/hzlzh/Best-App) | — | 提交 | 2026-03-17 | 7 个月前 |
| [quant-king299/EasyXT](https://github.com/quant-king299/EasyXT) | `v1.0.0` | 正式版 | 2026-03-12 | 7 个月前 |
| [DIYgod/RSSHub-Radar](https://github.com/DIYgod/RSSHub-Radar) | `v2.2.0` | 正式版 | 2026-02-11 | 8 个月前 |
| [Tongyi-MAI/Z-Image](https://github.com/Tongyi-MAI/Z-Image) | — | 提交 | 2026-02-09 | 8 个月前 |
| [koolshare/koolshare.github.io](https://github.com/koolshare/koolshare.github.io) | — | 提交 | 2026-01-27 | 8 个月前 |
| [jbiaojerry/ebook-treasure-chest](https://github.com/jbiaojerry/ebook-treasure-chest) | — | 提交 | 2026-01-13 | 9 个月前 |
| [mpquant/Ashare](https://github.com/mpquant/Ashare) | — | 提交 | 2025-12-24 | 10 个月前 |
| [Yu-Core/SwashbucklerDiary](https://github.com/Yu-Core/SwashbucklerDiary) | `v1.31.5` | 正式版 | 2025-12-10 | 10 个月前 |
| [likeflyme/cloudbak](https://github.com/likeflyme/cloudbak) | — | 提交 | 2025-10-24 | 12 个月前 |
| [xaoyaoo/PyWxDump](https://github.com/xaoyaoo/PyWxDump) | — | 提交 | 2025-10-20 | 1 年前 |
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