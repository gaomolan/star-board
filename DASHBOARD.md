# ⭐ Star 动态看板

> 生成时间：2026-10-16 07:46:19 UTC ｜ 共 172 个项目 ｜ 每 3 小时自动更新

## 🆕 本次新增（9）

### [Teamper/JHS](https://github.com/Teamper/JHS) `✅ 正式版` `v6.5.2`

发布时间：2026-10-16（1 小时前）｜ [查看 Release](https://github.com/Teamper/JHS/releases/tag/v6.5.2)

### 新增

- 列表“更多筛选”新增“全部未下载”，排除屏蔽项和已下载作品，保留未下载的待鉴定、收藏和已看内容。
- 设置中的“默认显示选项卡”支持全部筛选，包括“屏蔽项”和“全部未下载”等智能筛选，下次进入列表页生效；保留原有默认设置，选项与列表共用同一份筛选定义。

### 修复

- 启用“浏览后自动移除新作品标记”后，已浏览卡片渐隐移除，后续作品按原有筛选、排序和分页规则补位；保留其他卡片及封面节点、浏览位置和选择项，避免整体刷新回到顶部。
- 新作品手动移除和状态标记移除共用局部更新逻辑；处理连续移除、动画期间翻页或切换筛选和关闭重开弹窗，避免已移除卡片重新出现、页码越界或旧回调覆盖新界面。
- 最后一页移空时回到上一页，全部移空时显示原有空状态；减少动态效果时直接完成补位。

---

### [AIsouler/MyClash](https://github.com/AIsouler/MyClash) `📝 提交` `decc398`

发布时间：2026-10-16（5 小时前）｜ [查看提交](https://github.com/AIsouler/MyClash/commit/decc398cffd432cd1e374cebd964fbc67363cd8a)

perf: 优化倍率匹配 #58

---

### [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) `✅ 正式版` `v3.0.19`

发布时间：2026-10-16（5 小时前）｜ [查看 Release](https://github.com/HuangZhuoRui/LocationSpoofer/releases/tag/v3.0.19)

# v3.0.19

- 修复了部分模拟器在开始模拟时误判为版本过旧并导致账号退出的问题，同时优化了安装包的架构识别功能。
- 当运行配置暂时不可用时，系统会保留已登录的账号信息，从而避免不必要的重复登录操作。
- 完善了 OS4 和 Android 17 环境下的系统传感器动态匹配机制，提升了对结构相似设备的兼容性。
- 新增了传感器接入状态诊断功能，便于排查系统更新后出现的适配问题。

本次更新提供了全局版与非全局版两种版本，每种版本均包含 ARM 64 位与 32 位两种安装包。更新完成后请重启设备，以便新系统模块顺利加载。

版本号：`3.0.19`；Android versionCode：`30053`。
更新检查：可下载更新清单以确认最新版本信息。
本次发布流程由自建的 Forgejo CI 系统完成测试、原证书签名、安装包校验以及自动发布操作。

所有安装包均由自建 CI 系统构建并校验，GitHub 镜像亦由发布程序自动上传，其内容与自建下载站上的同版本安装包完全一致。
GitHub 自动附带的源代码归档对应的是公开的 main 分支代码，并非本次 APK 的构建源码；本次构建的提交记录与安装包校验信息均记录在 build-info.json 及 SHA256SUMS 文件中。

<details><summary>查看原文</summary>

# v3.0.19

- 修复部分模拟器开始模拟时误报版本过旧并退出账号的问题，完善安装包架构识别。
- 运行配置暂不可用时保留已登录账号，避免无关的重复登录。
- 完善 OS4、Android 17 的系统传感器动态匹配，兼容更多相似结构。
- 补充传感器接入状态诊断，便于定位系统更新后的适配问题。

提供全局、非全局两种版本，各含 ARM 64 位和 32 位安装包。更新后请重启设备，以加载新的系统模块。

版本号：`3.0.19`；Android versionCode：`30053`。
更新检查：下载服务器更新清单。
由自建 Forgejo CI 完成测试、原证书签名、四包校验和自动发布。

安装包由自建 CI 构建和验包，GitHub 镜像由发布程序自动上传，四包与自建下载站的同版本包一致。
GitHub 自动附带的 Source code 归档对应现有公开 main，并非本次 APK 的构建源码；本次构建提交与包摘要记录在 build-info.json 和 SHA256SUMS。

</details>

---

### [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) `✅ 正式版` `v1.19.6`

发布时间：2026-10-16（32 分钟前）｜ [查看 Release](https://github.com/appshubcc/Bettbox/releases/tag/v1.19.6)

- 可按需禁用 Impeller，修复了部分桌面端的渲染异常问题  
- 新增配置项：在启用脚本后，支持单独覆写相关逻辑  
- 修复了部分 Android 设备无法使用自定义字体的问题  
- 重构了首页中“出站运行模式”选择卡片及其视觉布局  
- 在 Linux 版本的打包包中内嵌了 Polkit 授权规则，并进一步收紧了权限范围，由 VillagerTom 完成  
- 优化了 Linux 端 Appimage 的右键菜单重启逻辑  
- 优化了移动端导航栏的平滑滚动效果，并统一了动画开关的设置  
- 全面统一了各类卡片与对话框的主题风格，提升了 UI 的精致度  
- 优化了编辑器的全选功能；桌面端现支持通过触控板双指手势或快捷键进行缩放操作  
- 优化了详情页面中应用进程图标的提取与加载性能  

- 注意：由于 Google 账号相关原因，此版本暂时禁用了 Windows 数字签名流程  
# Bettbox 正式版本发布

---

---
---

| **操作系统** | **版本要求** | **直接下载链接** |
|:---:|:---|:---|
| | macOS 12.0 及以上 | |
| | Android 8.0 及以上  
*(兼容 Android TV)* | 
|
| | Windows 8.1 及以上  
*(兼容较旧的 CPU)* | 
|
| | Linux 内核 5.4 及以上  
*(兼容较旧的 CPU)* | 
|
---

<details><summary>查看原文</summary>

- 按需禁用 Impeller，修复部分桌面端渲染异常
- 新增配置开启脚本后，支持独立覆写逻辑
- 修复部分Android设备无法使用自定义字体
- 重构首页出站运行模式选择卡片与视觉布局
- Linux 打包内嵌 Polkit 授权规则并收紧权限范围 by VillagerTom
- 优化 Linux 端Appimage右键重启逻辑
- 优化移动端导航栏的平滑滚动并统一动画开关
- 全面统一卡片、对话框主题风格，提升UI精致度
- 编辑器全选优化，桌面端支持触控板双指及快捷键缩放
- 优化详情页面中应用进程图标的提取与加载性能

- 注意：因Google账号原因，此版本临时禁用了Windows数字签名流程
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

</details>

---

### [t59688/newsnook](https://github.com/t59688/newsnook) `🧪 测试版` `v1.9.0-beta.3`

发布时间：2026-10-16（54 分钟前）｜ [查看 Release](https://github.com/t59688/newsnook/releases/tag/v1.9.0-beta.3)

## 有所闻 NewsNook v1.9.0-beta.3

### Linux.do 工作区
- 优化了账户页与用户资料页的布局：关键数据得以突出显示，终端风格的指标卡片让操作更加便捷。
- 完善了帖子串楼功能：帖主标识、站长标记以及用户角色的展示更加清晰明了。
- 改进了搜索、私信与通知列表中信息的呈现方式及操作入口。
- 在话题卡片及发现流等位置，用户资料更易点击访问，徽章与内容摘要的展示也更加完整。

### 其它
- 补充了与 Linux.do 资料区、帖子串楼及话题卡片相关的测试内容。
- 当前版本号为 1.9.0-beta.3，此版本为 Beta 测试版。

<details><summary>查看原文</summary>

## 有所闻 NewsNook v1.9.0-beta.3

### Linux.do 工作区
- 优化账户页与用户资料页布局：关键数据高亮、终端风格指标卡片，交互更顺手。
- 完善帖子串楼：楼主标识、站长角标与角色展示更清晰。
- 改进搜索、私信与通知行的信息呈现与操作入口。
- 话题卡片 / 发现流等处更易点开用户资料，徽章与摘要展示更完整。

### 其它
- 补充 Linux.do 资料区、串楼与话题卡片相关测试。
- 版本号 1.9.0-beta.3；本版本为 Beta 测试版。

</details>

---

### [waditu/czsc](https://github.com/waditu/czsc) `✅ 正式版` `v1.0.2`

发布时间：2026-10-16（3 小时前）｜ [查看 Release](https://github.com/waditu/czsc/releases/tag/v1.0.2)

czsc 1.0.2

### 更新内容
详细的变更信息请查阅提交历史及 `docs/MIGRATION_NOTES.md` 文件。

### 安装方式
```bash
pip install czsc==1.0.2
```

### 文档
- 项目文档: README.md

<details><summary>查看原文</summary>

czsc 1.0.2

### 更新内容
详细变更请查看提交历史以及 `docs/MIGRATION_NOTES.md`。

### 安装方式
```bash
pip install czsc==1.0.2
```

### 文档
- 项目文档: README.md

</details>

---

### [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) `📝 提交` `4ac0a1c`

发布时间：2026-10-16（38 分钟前）｜ [查看提交](https://github.com/Aethersailor/Custom_OpenClash_Rules/commit/4ac0a1cd9e22b2d1ecdd6cb3fddf3a93e8f21941)

*（原文，翻译暂不可用）*

chore(rules): auto generate derived rule files

---

### [adysec/tracker](https://github.com/adysec/tracker) `📝 提交` `097d6fa`

发布时间：2026-10-16（3 小时前）｜ [查看提交](https://github.com/adysec/tracker/commit/097d6fa374f36c3aca6f5f9b1ab18f2425b944b9)

*（原文，翻译暂不可用）*

20261016

---

### [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) `✅ 正式版` `v2026.10.16-8433.8aeca4c`

发布时间：2026-10-16（1 小时前）｜ [查看 Release](https://github.com/DIYgod/RSSHub/releases/tag/v2026.10.16-8433.8aeca4c)

源码提交记录：8aeca4cf7360a21651bf332d8363b4c1d45c003e

<details><summary>查看原文</summary>

Source commit: 8aeca4cf7360a21651bf332d8363b4c1d45c003e

</details>

---

## 📋 全部项目（按最近更新排序）

| 项目 | 最新版本 | 类型 | 更新时间 | 距今 |
|---|---|---|---|---|
| [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) | `v1.19.6` | 正式版 | 2026-10-16 | 32 分钟前 |
| [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) | — | 提交 | 2026-10-16 | 38 分钟前 |
| [t59688/newsnook](https://github.com/t59688/newsnook) | `v1.9.0-beta.3` | 测试版 | 2026-10-16 | 54 分钟前 |
| [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) | `v2026.10.16-8433.8aeca4c` | 正式版 | 2026-10-16 | 1 小时前 |
| [Teamper/JHS](https://github.com/Teamper/JHS) | `v6.5.2` | 正式版 | 2026-10-16 | 1 小时前 |
| [waditu/czsc](https://github.com/waditu/czsc) | `v1.0.2` | 正式版 | 2026-10-16 | 3 小时前 |
| [adysec/tracker](https://github.com/adysec/tracker) | — | 提交 | 2026-10-16 | 3 小时前 |
| [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) | `v3.0.19` | 正式版 | 2026-10-16 | 5 小时前 |
| [AIsouler/MyClash](https://github.com/AIsouler/MyClash) | — | 提交 | 2026-10-16 | 5 小时前 |
| [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) | — | 提交 | 2026-10-16 | 5 小时前 |
| [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) | `latest` | 正式版 | 2026-10-16 | 7 小时前 |
| [XIU2/TrackersListCollection](https://github.com/XIU2/TrackersListCollection) | — | 提交 | 2026-10-16 | 7 小时前 |
| [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules) | `202610152237` | 正式版 | 2026-10-15 | 9 小时前 |
| [ngosang/trackerslist](https://github.com/ngosang/trackerslist) | — | 提交 | 2026-10-15 | 9 小时前 |
| [crimera/piko-newx](https://github.com/crimera/piko-newx) | `v3.57.0` | 正式版 | 2026-10-15 | 9 小时前 |
| [z-mio/ParseHub](https://github.com/z-mio/ParseHub) | `v2.3.10` | 正式版 | 2026-10-15 | 14 小时前 |
| [z-mio/parse_hub_bot](https://github.com/z-mio/parse_hub_bot) | `v2.2.4` | 正式版 | 2026-10-15 | 14 小时前 |
| [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) | `26.10.16-1` | 正式版 | 2026-10-15 | 15 小时前 |
| [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) | — | 提交 | 2026-10-15 | 18 小时前 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | `v0.7.36` | 正式版 | 2026-10-15 | 19 小时前 |
| [gkd-kit/gkd](https://github.com/gkd-kit/gkd) | `v1.13.0-beta-2` | 测试版 | 2026-10-15 | 19 小时前 |
| [hicccc77/WeFlow](https://github.com/hicccc77/WeFlow) | — | 提交 | 2026-10-15 | 20 小时前 |
| [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) | `v2.2.1` | 正式版 | 2026-10-15 | 23 小时前 |
| [jiangrui1994/CloudSaver](https://github.com/jiangrui1994/CloudSaver) | — | 提交 | 2026-10-15 | 1 天前 |
| [joeytoday/obsidian-canvas-enhance](https://github.com/joeytoday/obsidian-canvas-enhance) | `1.0.9` | 正式版 | 2026-10-15 | 1 天前 |
| [JushiZen/Nimbus.Player](https://github.com/JushiZen/Nimbus.Player) | — | 提交 | 2026-10-15 | 1 天前 |
| [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) | `v7.3.1.7` | 正式版 | 2026-10-15 | 1 天前 |
| [ArvinLovegood/go-stock](https://github.com/ArvinLovegood/go-stock) | `v2026.10.15.1-release` | 正式版 | 2026-10-15 | 1 天前 |
| [daimiaopeng/coolapk-desktop](https://github.com/daimiaopeng/coolapk-desktop) | `v1.35.0` | 正式版 | 2026-10-15 | 1 天前 |
| [myikuns/jichangtz-tuijian](https://github.com/myikuns/jichangtz-tuijian) | — | 提交 | 2026-10-15 | 1 天前 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | `autogpt-platform-beta-v0.8.4` | 测试版 | 2026-10-14 | 1 天前 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | `v4.29.0` | 正式版 | 2026-10-14 | 1 天前 |
| [bilibili/Index-Translate](https://github.com/bilibili/Index-Translate) | — | 提交 | 2026-10-14 | 1 天前 |
| [xweiba/location-spoofer](https://github.com/xweiba/location-spoofer) | `v1.0.9` | 正式版 | 2026-10-14 | 1 天前 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | — | 提交 | 2026-10-14 | 1 天前 |
| [Niklaus88/Clash-Config](https://github.com/Niklaus88/Clash-Config) | — | 提交 | 2026-10-14 | 2 天前 |
| [mason173/aira-browser](https://github.com/mason173/aira-browser) | `v3.7.4` | 正式版 | 2026-10-14 | 2 天前 |
| [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | `v0.102.2862.0` | 测试版 | 2026-10-14 | 2 天前 |
| [Ajaxc/WeChatList](https://github.com/Ajaxc/WeChatList) | `2.5.2` | 正式版 | 2026-10-14 | 2 天前 |
| [chen08209/FlClash](https://github.com/chen08209/FlClash) | `v0.9.0` | 正式版 | 2026-10-14 | 2 天前 |
| [exteraless/exteraless](https://github.com/exteraless/exteraless) | `ci-1ad6a60` | 测试版 | 2026-10-13 | 2 天前 |
| [Inginnng/EditHere](https://github.com/Inginnng/EditHere) | `v0.11.1` | 正式版 | 2026-10-13 | 2 天前 |
| [dukangalex/HiClash](https://github.com/dukangalex/HiClash) | — | 提交 | 2026-10-13 | 3 天前 |
| [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) | `V1.0.319` | 正式版 | 2026-10-13 | 3 天前 |
| [7723mod/NPatch](https://github.com/7723mod/NPatch) | `v1.0.9` | 正式版 | 2026-10-12 | 3 天前 |
| [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) | `v1.6.5-beta2` | 测试版 | 2026-10-12 | 3 天前 |
| [xiaoyaDev/xiaoya-alist](https://github.com/xiaoyaDev/xiaoya-alist) | — | 提交 | 2026-10-11 | 4 天前 |
| [xgit01/sgkrank](https://github.com/xgit01/sgkrank) | — | 提交 | 2026-10-11 | 4 天前 |
| [SagerNet/sing-box](https://github.com/SagerNet/sing-box) | `v1.15.0-alpha.12` | 测试版 | 2026-10-11 | 5 天前 |
| [LifeArchiveProject/WeChatDataAnalysis](https://github.com/LifeArchiveProject/WeChatDataAnalysis) | `macos-source-runtime-38116174842-1` | 正式版 | 2026-10-11 | 5 天前 |
| [dongyubin/IPTV](https://github.com/dongyubin/IPTV) | — | 提交 | 2026-10-11 | 5 天前 |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | `mineru-4.0.12-released` | 正式版 | 2026-10-11 | 5 天前 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | `v1.4.1` | 正式版 | 2026-10-10 | 5 天前 |
| [crimera/piko](https://github.com/crimera/piko) | `v3.10.0` | 正式版 | 2026-10-10 | 5 天前 |
| [johamwon/wechrss](https://github.com/johamwon/wechrss) | — | 提交 | 2026-10-10 | 5 天前 |
| [XTLS/Xray-core](https://github.com/XTLS/Xray-core) | `v26.10.10` | 测试版 | 2026-10-10 | 5 天前 |
| [pengchujin/livecanvas](https://github.com/pengchujin/livecanvas) | — | 提交 | 2026-10-10 | 6 天前 |
| [T8RIN/ImageToolbox](https://github.com/T8RIN/ImageToolbox) | `4.2.1-rc01` | 测试版 | 2026-10-09 | 6 天前 |
| [ZGMFX01A/OrigRead](https://github.com/ZGMFX01A/OrigRead) | `v1.7.0` | 正式版 | 2026-10-09 | 6 天前 |
| [KaringX/clashmi](https://github.com/KaringX/clashmi) | `v1.0.31.1703` | 正式版 | 2026-10-09 | 7 天前 |
| [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) | `v2.5.8` | 正式版 | 2026-10-09 | 7 天前 |
| [UniClipboard/UniClipboard](https://github.com/UniClipboard/UniClipboard) | `v1.1.2` | 正式版 | 2026-10-09 | 7 天前 |
| [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) | — | 提交 | 2026-10-08 | 7 天前 |
| [jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader) | `desktop-v0.12.5` | 正式版 | 2026-10-08 | 8 天前 |
| [hoothin/UserScripts](https://github.com/hoothin/UserScripts) | — | 提交 | 2026-10-07 | 8 天前 |
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | `v0.16.0` | 正式版 | 2026-10-07 | 8 天前 |
| [reeden-org/reeden-app](https://github.com/reeden-org/reeden-app) | `v1.43.1` | 正式版 | 2026-10-07 | 8 天前 |
| [fw876/helloworld](https://github.com/fw876/helloworld) | `v196.19` | 正式版 | 2026-10-07 | 8 天前 |
| [felinics/Memoh](https://github.com/felinics/Memoh) | `v0.21.0` | 正式版 | 2026-10-05 | 10 天前 |
| [AyuGram/AyuGramDesktop](https://github.com/AyuGram/AyuGramDesktop) | `v7.2.9` | 正式版 | 2026-10-05 | 11 天前 |
| [HyNetworks/hysteria](https://github.com/HyNetworks/hysteria) | `app/v2.13.0` | 正式版 | 2026-10-05 | 11 天前 |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | `v1.15.0` | 正式版 | 2026-10-04 | 11 天前 |
| [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) | `draft` | 测试版 | 2026-10-04 | 11 天前 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | `v0.6.0` | 正式版 | 2026-10-03 | 12 天前 |
| [kenischu/ReSource](https://github.com/kenischu/ReSource) | `3.0.7` | 正式版 | 2026-10-03 | 13 天前 |
| [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) | `v1.19.32` | 正式版 | 2026-09-30 | 15 天前 |
| [linesoft2/TaskMonitor](https://github.com/linesoft2/TaskMonitor) | `v2026.9.30.1` | 正式版 | 2026-09-30 | 15 天前 |
| [xykt/IPQuality](https://github.com/xykt/IPQuality) | — | 提交 | 2026-09-30 | 15 天前 |
| [tingaicompass/AI-Compass](https://github.com/tingaicompass/AI-Compass) | — | 提交 | 2026-09-24 | 22 天前 |
| [op7418/Humanizer-zh](https://github.com/op7418/Humanizer-zh) | — | 提交 | 2026-09-23 | 23 天前 |
| [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | — | 提交 | 2026-09-22 | 23 天前 |
| [zhangxiangliang/stock-api](https://github.com/zhangxiangliang/stock-api) | `v2.7.5` | 正式版 | 2026-09-21 | 24 天前 |
| [TG-Twilight/AWAvenue-Ads-Rule](https://github.com/TG-Twilight/AWAvenue-Ads-Rule) | `1.7.8-release` | 正式版 | 2026-09-21 | 24 天前 |
| [yuanzl77/IPTV](https://github.com/yuanzl77/IPTV) | — | 提交 | 2026-09-21 | 24 天前 |
| [zhanghai/MaterialFiles](https://github.com/zhanghai/MaterialFiles) | `v1.7.5` | 正式版 | 2026-09-20 | 26 天前 |
| [black-ant/Ant-Browser](https://github.com/black-ant/Ant-Browser) | `V1.8.0` | 正式版 | 2026-09-19 | 26 天前 |
| [liaoliao666/v2ex](https://github.com/liaoliao666/v2ex) | `1.9.6` | 正式版 | 2026-09-19 | 27 天前 |
| [eternity4719/HowToLiveBetter](https://github.com/eternity4719/HowToLiveBetter) | `epub-latest` | 正式版 | 2026-09-18 | 27 天前 |
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
| [loc567/loc567](https://github.com/loc567/loc567) | — | 提交 | 2026-06-19 | 3 个月前 |
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