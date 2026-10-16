# ⭐ Star 动态看板

> 生成时间：2026-10-16 12:55:27 UTC ｜ 共 172 个项目 ｜ 每 3 小时自动更新

## 🆕 本次新增（8）

### [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) `✅ 正式版` `v1.6.5`

发布时间：2026-10-16（3 小时前）｜ [查看 Release](https://github.com/1zumiii/AppOpsNext/releases/tag/v1.6.5)

## 简体中文

1.6.5 包含 1.6.5-beta1 和 beta2 的全部改动，可直接覆盖安装 1.6.0。

### 新增

- 应用页新增“按权限查看”。选择一项权限后，可查看各应用的权限模式，并单独或批量修改。
- 多选模式新增“全选”，仅作用于当前显示的项目。

### 改进

- 改进多选、批量操作、搜索筛选和刷新的交互。
- 批量操作前列出目标模式和待修改项目，结果可只显示失败项。
- 访问监测记录支持按应用和权限筛选。

### 兼容性

部分 Android 16 设备会限制相机、麦克风和位置等运行时权限的 AppOps 修改。遇到此类限制时，AppOpsNext 通过设置兼容撤销标记（REVOKED_COMPAT）实现“忽略”。

这种方式保留应用已获得的权限，系统权限页面可能仍显示为“已允许”。受影响的权限不支持“拒绝”，选择“拒绝”时会自动改用“忽略”。

### 修复

- 修复部分 Android 16 设备上运行时权限无法修改的问题。
- 修复监听者较多时“权限变更监听者”页面无法加载的问题。

<details><summary>查看原文</summary>

## English

1.6.5 includes all changes from 1.6.5-beta1 and beta2. It installs directly over 1.6.0.

### New

- Added a By permission view to the Apps page. Select a permission to see the mode of each app, then change one app or several apps in a batch.
- Added Select all to multi-select mode. It applies only to the items currently shown.

### Improved

- Improved multi-select, batch operations, search, filters and refreshing.
- Before a batch operation starts, it lists the target mode and the items to change. Batch results can show failures only.
- The access monitor log has filters for app and permission.

### Compatibility

Some Android 16 devices restrict AppOps changes for runtime permissions such as camera, microphone and location. When these restrictions apply, AppOpsNext uses the compatibility revocation flag (REVOKED_COMPAT) to enforce Ignore.

This keeps the app's granted permission. The system permission settings can still show the permission as allowed. Deny is not available for the affected permissions. If you select Deny, AppOpsNext uses Ignore.

### Fixed

- Fixed runtime permission changes that failed on some Android 16 devices.
- Fixed the Permission change listeners page failing to load when there are many listeners.

SHA-256 (AppOpsNext-v1.6.5.apk): `037b871e6ea99ec1e55a8b7414e5558ff8cd0008a840272384ddd631798182ae`

</details>

---

### [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) `🧪 测试版` `v3.0.20-beta.1`

发布时间：2026-10-16（1 小时前）｜ [查看 Release](https://github.com/HuangZhuoRui/LocationSpoofer/releases/tag/v3.0.20-beta.1)

# LocationSpoofer 3.0.20 测试版 1

- 新增对 MuMu Android 15 x86_64 系统传感器的适配功能。经实际测试，运动世界中的路线记录、步频计算及持续运行功能均正常，不再出现“未知错误”。
- 全局安装包内集成了针对不同系统架构的模拟模块，程序会根据实际系统库自动选择相应模块；同时兼容旧版更新入口，用户无需先安装过渡版本即可直接升级。
- 优化了传感器动态匹配机制，并完善了 HyperOS 3 部分固件的结构识别能力。
- 提升了云服务错误提示的兼容性，同时保留了账号管理、会员权限、使用额度及设备限制等相关功能。

我们依旧提供原有的四种安装包类型：全局版与非全局版，以及 32 位与 64 位版本。所有安装包均使用原先的发布签名，并能正常连接官方后端服务器。已适配 MuMu Android 15 的用户可直接更新全局 64 位版本，覆盖安装后只需重启一次即可。不过请注意，这并不代表所有 Android 15 模拟器都经过了验证。

非全局版的安装包仍按照原有方式设置目标应用的作用范围。

版本号：`3.0.20-beta.1`；Android versionCode：`30054`。
更新检查：可下载更新清单以确认最新版本信息。
本版本由自建的 Forgejo CI 系统完成测试、原证书签名、四类安装包的校验及自动发布流程。

所有安装包均由自建 CI 系统构建并校验，GitHub 镜像文件则由发布程序自动上传；四类安装包的内容与自建下载站提供的同版本安装包完全一致。
GitHub 自动附带的源代码归档文件对应当前的公开 main 分支，并非本次 APK 的构建源码；本次构建的相关提交信息及安装包校验值均记录在 build-info.json 与 SHA256SUMS 文件中。

<details><summary>查看原文</summary>

# LocationSpoofer 3.0.20 Beta 1

- 新增 MuMu Android 15 x86_64 系统传感器适配。运动世界的路线、步频和持续运行已通过实测，未再出现“未知错误”。
- 全局安装包内置不同架构的系统模拟模块，按实际系统库选择，兼容旧版更新入口，无需先安装过渡版本。
- 完善传感器动态匹配，补充 HyperOS 3 部分固件的结构识别。
- 完善云服务错误提示兼容，保留账号、会员、额度与设备限制。

继续提供原有全局／非全局、32／64 位四种安装包，均使用原发布签名，连接正式后端。已适配的 MuMu Android 15 可直接更新全局 64 位包，覆盖安装后重启一次。不代表所有 Android 15 模拟器均已验证。

非全局版仍按原方式设置目标应用作用域。

版本号：`3.0.20-beta.1`；Android versionCode：`30054`。
更新检查：下载服务器更新清单。
由自建 Forgejo CI 完成测试、原证书签名、四包校验和自动发布。

安装包由自建 CI 构建和验包，GitHub 镜像由发布程序自动上传，四包与自建下载站的同版本包一致。
GitHub 自动附带的 Source code 归档对应现有公开 main，并非本次 APK 的构建源码；本次构建提交与包摘要记录在 build-info.json 和 SHA256SUMS。

</details>

---

### [hicccc77/WeFlow](https://github.com/hicccc77/WeFlow) `📝 提交` `ad075f7`

发布时间：2026-10-16（1 小时前）｜ [查看提交](https://github.com/hicccc77/WeFlow/commit/ad075f7983fcf5c217b0e305065a7298c005541a)

*（原文，翻译暂不可用）*

docs: announce Alpha as the WeFlow successor

---

### [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) `📝 提交` `e6e9d41`

发布时间：2026-10-16（2 小时前）｜ [查看提交](https://github.com/1c7/chinese-independent-developer/commit/e6e9d41615efe2bfd58d2a2caa9825fdf901e94d)

排序：2026 年 10 月 16 号区块按最新收录在最上重排

---

### [microsoft/PowerToys](https://github.com/microsoft/PowerToys) `🧪 测试版` `v0.102.2883.0`

发布时间：2026-10-16（3 小时前）｜ [查看 Release](https://github.com/microsoft/PowerToys/releases/tag/v0.102.2883.0)

# PowerToys 预览版 v0.102.2883.0

这是 **PowerToys 0.102 版本系列**的预览版构建，由 `stable` 分支生成。该版本继 v0.102.2862.0 之后发布；本说明仅涵盖自该预览版以来的变更内容，并非 0.102 与 0.101 版本间的完整变更日志。此版本并非最终的稳定版。

## 主要更新

- **ZoomIt**：新增离线转录功能，用户可选择性启用，从而将截图与转录后的语音内容一并粘贴。
- **Peek**：新增纯文本预览模式，同时支持通过命令行处理多个文件与文件夹。
- **键盘管理器**：新版编辑器中为未设置映射的按键提供了可搜索功能；此外还限制了仅能在前台编辑器中录制按键操作。
- **命令调色板**：即便视图尚未填满内容，或键盘导航已到达列表末尾时，系统仍会继续加载结果。
- **命令调色板**：修复了正式版中自适应卡片的实时更新问题；现在自定义元素无需重新构建整个卡片即可刷新。
- **命令调色板**：避免了启动时对未发生变化的提供程序及备用设置进行重复写入。
- **设置界面**：新增了交互式动画欢迎界面；修复了在“主页”与“常规”页面间切换时出现的内存占用持续增长问题。
- **通用改进**：防止启动时对只读设置进行刷新操作，从而避免覆盖用户已设定的偏好选项。
- **光标隐藏功能**：重新设计了原“自动隐藏光标”功能的品牌标识、图标及设置选项。

## 高级粘贴功能

- 修复了 CLI 根命令中的 `--version` 选项：现在该选项可正确显示可执行文件的版本信息并正常退出，无需再指定子命令。该修复由 @MuyuanMS 在 #51298 中完成。

## 命令调色板

- 修复了正式版中自适应卡片的实时更新问题；现在自定义元素无需重新构建整个卡片即可刷新。该修复由 @jiripolasek 在 #51204 中完成。
- 当首个列表或网格页面未能填满窗口时，系统会自动加载更多结果批次，从而让更多项目无需滚动即可访问。该优化由 @jiripolasek 在 #51285 中完成。
- 当键盘导航到达当前列表末尾时，系统会自动加载下一批结果，确保用户可继续浏览内容。

<details><summary>查看原文</summary>

# PowerToys Preview v0.102.2883.0

This is a preview-channel build for the **PowerToys 0.102 release train**, produced from the `stable` branch. It follows v0.102.2862.0; these notes cover changes since that preview, not the complete 0.102 versus 0.101 changelog. This is not the final stable release.

## Highlights

- **ZoomIt**: Added opt-in offline snip dictation for pasting screenshots together with transcribed speech.
- **Peek**: Added plain-text fallback previews and command-line support for multiple files and folders.
- **Keyboard Manager**: Added searchable key selection for empty remaps in the new editor and limited recording to the foreground editor.
- **Command Palette**: Continued loading results in underfilled views and when keyboard navigation reaches the loaded end of a list.
- **Command Palette**: Fixed in-place Adaptive Card updates in release builds and enabled custom elements to refresh without rebuilding the card.
- **Command Palette**: Avoided repeated writes of unchanged provider and fallback settings during startup.
- **Settings**: Added an interactive animated welcome scene and fixed memory growth when navigating between Home and General.
- **General**: Prevented startup and read-only Settings refreshes from overwriting existing preferences.
- **CursorHide**: Refreshed the former Auto Hide Cursor branding, icon, and behavior controls in Settings.

## Advanced Paste

- Fixed the CLI root --version option to print the executable version and exit without requiring a subcommand in #51298 by @MuyuanMS

## Command Palette

- Fixed Adaptive Cards updating in place in release builds and enabled custom elements to refresh without rebuilding the entire card in #51204
- Loaded additional result batches when the first list or grid page does not fill the window, so more items remain accessible without a scrollbar in #51285 by @jiripolasek
- Loaded the next result batch when keyboard navigation reaches the end of the current list, preservin

</details>

---

### [adysec/tracker](https://github.com/adysec/tracker) `📝 提交` `4ade48b`

发布时间：2026-10-16（3 小时前）｜ [查看提交](https://github.com/adysec/tracker/commit/4ade48b1a1788b0d805dfc312e9760e33d1032b0)

*（原文，翻译暂不可用）*

20261016

---

### [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) `✅ 正式版` `v2026.10.16-8435.0f184a3`

发布时间：2026-10-16（45 分钟前）｜ [查看 Release](https://github.com/DIYgod/RSSHub/releases/tag/v2026.10.16-8435.0f184a3)

源码提交记录：0f184a37d49cbf1ac0d759aa41fe3b3c1ef25f10

<details><summary>查看原文</summary>

Source commit: 0f184a37d49cbf1ac0d759aa41fe3b3c1ef25f10

</details>

---

### [xiaoyaDev/xiaoya-alist](https://github.com/xiaoyaDev/xiaoya-alist) `📝 提交` `e7df843`

发布时间：2026-10-16（4 小时前）｜ [查看提交](https://github.com/xiaoyaDev/xiaoya-alist/commit/e7df8438d4bc636f01954e597971b84412808e05)

*（原文，翻译暂不可用）*

chore: update embyserver latest version

---

## 📋 全部项目（按最近更新排序）

| 项目 | 最新版本 | 类型 | 更新时间 | 距今 |
|---|---|---|---|---|
| [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) | `v2026.10.16-8435.0f184a3` | 正式版 | 2026-10-16 | 45 分钟前 |
| [hicccc77/WeFlow](https://github.com/hicccc77/WeFlow) | — | 提交 | 2026-10-16 | 1 小时前 |
| [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) | `v3.0.20-beta.1` | 测试版 | 2026-10-16 | 1 小时前 |
| [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) | — | 提交 | 2026-10-16 | 2 小时前 |
| [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) | `v1.6.5` | 正式版 | 2026-10-16 | 3 小时前 |
| [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | `v0.102.2883.0` | 测试版 | 2026-10-16 | 3 小时前 |
| [adysec/tracker](https://github.com/adysec/tracker) | — | 提交 | 2026-10-16 | 3 小时前 |
| [xiaoyaDev/xiaoya-alist](https://github.com/xiaoyaDev/xiaoya-alist) | — | 提交 | 2026-10-16 | 4 小时前 |
| [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) | `v1.19.6` | 正式版 | 2026-10-16 | 5 小时前 |
| [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) | — | 提交 | 2026-10-16 | 5 小时前 |
| [t59688/newsnook](https://github.com/t59688/newsnook) | `v1.9.0-beta.3` | 测试版 | 2026-10-16 | 6 小时前 |
| [Teamper/JHS](https://github.com/Teamper/JHS) | `v6.5.2` | 正式版 | 2026-10-16 | 7 小时前 |
| [waditu/czsc](https://github.com/waditu/czsc) | `v1.0.2` | 正式版 | 2026-10-16 | 8 小时前 |
| [AIsouler/MyClash](https://github.com/AIsouler/MyClash) | — | 提交 | 2026-10-16 | 10 小时前 |
| [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) | `latest` | 正式版 | 2026-10-16 | 12 小时前 |
| [XIU2/TrackersListCollection](https://github.com/XIU2/TrackersListCollection) | — | 提交 | 2026-10-16 | 12 小时前 |
| [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules) | `202610152237` | 正式版 | 2026-10-15 | 14 小时前 |
| [ngosang/trackerslist](https://github.com/ngosang/trackerslist) | — | 提交 | 2026-10-15 | 14 小时前 |
| [crimera/piko-newx](https://github.com/crimera/piko-newx) | `v3.57.0` | 正式版 | 2026-10-15 | 14 小时前 |
| [z-mio/ParseHub](https://github.com/z-mio/ParseHub) | `v2.3.10` | 正式版 | 2026-10-15 | 19 小时前 |
| [z-mio/parse_hub_bot](https://github.com/z-mio/parse_hub_bot) | `v2.2.4` | 正式版 | 2026-10-15 | 19 小时前 |
| [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) | `26.10.16-1` | 正式版 | 2026-10-15 | 20 小时前 |
| [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) | — | 提交 | 2026-10-15 | 23 小时前 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | `v0.7.36` | 正式版 | 2026-10-15 | 1 天前 |
| [gkd-kit/gkd](https://github.com/gkd-kit/gkd) | `v1.13.0-beta-2` | 测试版 | 2026-10-15 | 1 天前 |
| [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) | `v2.2.1` | 正式版 | 2026-10-15 | 1 天前 |
| [jiangrui1994/CloudSaver](https://github.com/jiangrui1994/CloudSaver) | — | 提交 | 2026-10-15 | 1 天前 |
| [joeytoday/obsidian-canvas-enhance](https://github.com/joeytoday/obsidian-canvas-enhance) | `1.0.9` | 正式版 | 2026-10-15 | 1 天前 |
| [JushiZen/Nimbus.Player](https://github.com/JushiZen/Nimbus.Player) | — | 提交 | 2026-10-15 | 1 天前 |
| [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) | `v7.3.1.7` | 正式版 | 2026-10-15 | 1 天前 |
| [ArvinLovegood/go-stock](https://github.com/ArvinLovegood/go-stock) | `v2026.10.15.1-release` | 正式版 | 2026-10-15 | 1 天前 |
| [daimiaopeng/coolapk-desktop](https://github.com/daimiaopeng/coolapk-desktop) | `v1.35.0` | 正式版 | 2026-10-15 | 1 天前 |
| [myikuns/jichangtz-tuijian](https://github.com/myikuns/jichangtz-tuijian) | — | 提交 | 2026-10-15 | 1 天前 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | `autogpt-platform-beta-v0.8.4` | 测试版 | 2026-10-14 | 1 天前 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | `v4.29.0` | 正式版 | 2026-10-14 | 2 天前 |
| [bilibili/Index-Translate](https://github.com/bilibili/Index-Translate) | — | 提交 | 2026-10-14 | 2 天前 |
| [xweiba/location-spoofer](https://github.com/xweiba/location-spoofer) | `v1.0.9` | 正式版 | 2026-10-14 | 2 天前 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | — | 提交 | 2026-10-14 | 2 天前 |
| [Niklaus88/Clash-Config](https://github.com/Niklaus88/Clash-Config) | — | 提交 | 2026-10-14 | 2 天前 |
| [mason173/aira-browser](https://github.com/mason173/aira-browser) | `v3.7.4` | 正式版 | 2026-10-14 | 2 天前 |
| [Ajaxc/WeChatList](https://github.com/Ajaxc/WeChatList) | `2.5.2` | 正式版 | 2026-10-14 | 2 天前 |
| [chen08209/FlClash](https://github.com/chen08209/FlClash) | `v0.9.0` | 正式版 | 2026-10-14 | 2 天前 |
| [exteraless/exteraless](https://github.com/exteraless/exteraless) | `ci-1ad6a60` | 测试版 | 2026-10-13 | 2 天前 |
| [Inginnng/EditHere](https://github.com/Inginnng/EditHere) | `v0.11.1` | 正式版 | 2026-10-13 | 2 天前 |
| [dukangalex/HiClash](https://github.com/dukangalex/HiClash) | — | 提交 | 2026-10-13 | 3 天前 |
| [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) | `V1.0.319` | 正式版 | 2026-10-13 | 3 天前 |
| [7723mod/NPatch](https://github.com/7723mod/NPatch) | `v1.0.9` | 正式版 | 2026-10-12 | 4 天前 |
| [xgit01/sgkrank](https://github.com/xgit01/sgkrank) | — | 提交 | 2026-10-11 | 4 天前 |
| [SagerNet/sing-box](https://github.com/SagerNet/sing-box) | `v1.15.0-alpha.12` | 测试版 | 2026-10-11 | 5 天前 |
| [LifeArchiveProject/WeChatDataAnalysis](https://github.com/LifeArchiveProject/WeChatDataAnalysis) | `macos-source-runtime-38116174842-1` | 正式版 | 2026-10-11 | 5 天前 |
| [dongyubin/IPTV](https://github.com/dongyubin/IPTV) | — | 提交 | 2026-10-11 | 5 天前 |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | `mineru-4.0.12-released` | 正式版 | 2026-10-11 | 5 天前 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | `v1.4.1` | 正式版 | 2026-10-10 | 5 天前 |
| [crimera/piko](https://github.com/crimera/piko) | `v3.10.0` | 正式版 | 2026-10-10 | 5 天前 |
| [johamwon/wechrss](https://github.com/johamwon/wechrss) | — | 提交 | 2026-10-10 | 6 天前 |
| [XTLS/Xray-core](https://github.com/XTLS/Xray-core) | `v26.10.10` | 测试版 | 2026-10-10 | 6 天前 |
| [pengchujin/livecanvas](https://github.com/pengchujin/livecanvas) | — | 提交 | 2026-10-10 | 6 天前 |
| [T8RIN/ImageToolbox](https://github.com/T8RIN/ImageToolbox) | `4.2.1-rc01` | 测试版 | 2026-10-09 | 6 天前 |
| [ZGMFX01A/OrigRead](https://github.com/ZGMFX01A/OrigRead) | `v1.7.0` | 正式版 | 2026-10-09 | 7 天前 |
| [KaringX/clashmi](https://github.com/KaringX/clashmi) | `v1.0.31.1703` | 正式版 | 2026-10-09 | 7 天前 |
| [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) | `v2.5.8` | 正式版 | 2026-10-09 | 7 天前 |
| [UniClipboard/UniClipboard](https://github.com/UniClipboard/UniClipboard) | `v1.1.2` | 正式版 | 2026-10-09 | 7 天前 |
| [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) | — | 提交 | 2026-10-08 | 7 天前 |
| [jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader) | `desktop-v0.12.5` | 正式版 | 2026-10-08 | 8 天前 |
| [hoothin/UserScripts](https://github.com/hoothin/UserScripts) | — | 提交 | 2026-10-07 | 8 天前 |
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | `v0.16.0` | 正式版 | 2026-10-07 | 8 天前 |
| [reeden-org/reeden-app](https://github.com/reeden-org/reeden-app) | `v1.43.1` | 正式版 | 2026-10-07 | 8 天前 |
| [fw876/helloworld](https://github.com/fw876/helloworld) | `v196.19` | 正式版 | 2026-10-07 | 9 天前 |
| [felinics/Memoh](https://github.com/felinics/Memoh) | `v0.21.0` | 正式版 | 2026-10-05 | 11 天前 |
| [AyuGram/AyuGramDesktop](https://github.com/AyuGram/AyuGramDesktop) | `v7.2.9` | 正式版 | 2026-10-05 | 11 天前 |
| [HyNetworks/hysteria](https://github.com/HyNetworks/hysteria) | `app/v2.13.0` | 正式版 | 2026-10-05 | 11 天前 |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | `v1.15.0` | 正式版 | 2026-10-04 | 11 天前 |
| [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) | `draft` | 测试版 | 2026-10-04 | 11 天前 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | `v0.6.0` | 正式版 | 2026-10-03 | 12 天前 |
| [kenischu/ReSource](https://github.com/kenischu/ReSource) | `3.0.7` | 正式版 | 2026-10-03 | 13 天前 |
| [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) | `v1.19.32` | 正式版 | 2026-09-30 | 15 天前 |
| [linesoft2/TaskMonitor](https://github.com/linesoft2/TaskMonitor) | `v2026.9.30.1` | 正式版 | 2026-09-30 | 15 天前 |
| [xykt/IPQuality](https://github.com/xykt/IPQuality) | — | 提交 | 2026-09-30 | 16 天前 |
| [tingaicompass/AI-Compass](https://github.com/tingaicompass/AI-Compass) | — | 提交 | 2026-09-24 | 22 天前 |
| [op7418/Humanizer-zh](https://github.com/op7418/Humanizer-zh) | — | 提交 | 2026-09-23 | 23 天前 |
| [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | — | 提交 | 2026-09-22 | 24 天前 |
| [zhangxiangliang/stock-api](https://github.com/zhangxiangliang/stock-api) | `v2.7.5` | 正式版 | 2026-09-21 | 24 天前 |
| [TG-Twilight/AWAvenue-Ads-Rule](https://github.com/TG-Twilight/AWAvenue-Ads-Rule) | `1.7.8-release` | 正式版 | 2026-09-21 | 24 天前 |
| [yuanzl77/IPTV](https://github.com/yuanzl77/IPTV) | — | 提交 | 2026-09-21 | 25 天前 |
| [zhanghai/MaterialFiles](https://github.com/zhanghai/MaterialFiles) | `v1.7.5` | 正式版 | 2026-09-20 | 26 天前 |
| [black-ant/Ant-Browser](https://github.com/black-ant/Ant-Browser) | `V1.8.0` | 正式版 | 2026-09-19 | 26 天前 |
| [liaoliao666/v2ex](https://github.com/liaoliao666/v2ex) | `1.9.6` | 正式版 | 2026-09-19 | 27 天前 |
| [eternity4719/HowToLiveBetter](https://github.com/eternity4719/HowToLiveBetter) | `epub-latest` | 正式版 | 2026-09-18 | 28 天前 |
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