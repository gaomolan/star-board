# ⭐ Star 动态看板

> 生成时间：2026-10-29 10:37:46 UTC ｜ 共 183 个项目 ｜ 每 3 小时自动更新

## 🆕 本次新增（10）

### [Xposed-Modules-Repo/com.tianqianguai.xtq](https://github.com/Xposed-Modules-Repo/com.tianqianguai.xtq) `✅ 正式版` `71-12.38.1-prod.01`

发布时间：2026-10-29（3 小时前）｜ [查看 Release](https://github.com/Xposed-Modules-Repo/com.tianqianguai.xtq/releases/tag/71-12.38.1-prod.01)

*（原文，翻译暂不可用）*

# XTQ 12.38.1-prod.01 (71)

- 适配 X 12.38.1-prod.01，更新浏览历史、自动翻译、原图与视频下载、最高画质、广告过滤和自动刷新控制。<br>
  Supports X 12.38.1-prod.01 with updated browsing history, automatic translation, original-image and video downloads, highest-quality playback, ad filtering and automatic refresh control.
- 修复新版视频下载入口与停止自动连播，保留手动切换视频。<br>
  Fixes the video download entry and stop-auto-advance behavior in the new X version while preserving manual video switching.
- 修复新版浏览历史的时钟图标，并清理帖子分享链接新增的归因参数。<br>
  Fixes the browsing-history clock icon in the new X version and removes the new attribution parameter from shared post links.

你的 Star 是我持续适配和更新 XTQ 的最大动力。每一颗 Star 都是对我的鼓励！<br>
Your Star is my biggest motivation to keep XTQ compatible and up to date. Every Star is meaningful encouragement!

项目 / Project: https://github.com/Xposed-Modules-Repo/com.tianqianguai.xtq

交流群 / Group: https://t.me/XTQ_Offical
发布频道 / Release channel: https://t.me/zhongjitianqianguai3

---

### [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) `🧪 测试版` `v1.6.6-beta1`

发布时间：2026-10-29（3 小时前）｜ [查看 Release](https://github.com/1zumiii/AppOpsNext/releases/tag/v1.6.6-beta1)

## 简体中文

本测试版基于 1.6.5，新增“设置守护”和“备份与迁移”功能，支持多用户，并适配 Android 16 QPR2 和 Android 17 的输出格式变化。支持从 1.6.5 覆盖安装升级。

### 新增与改进

- 新增“设置守护”（实验性功能）。修改权限时勾选“守护此设置”，AppOpsNext 会检查系统、厂商策略或其他应用是否改动了该设置，发现改动时发出通知。
  - 检查方式可选“每小时检查”或“实时监听”。实时监听需要常驻通知。
  - 每条规则可单独开启“自动恢复”。每条规则在 24 小时内最多尝试自动恢复 3 次，失败的尝试也计入。达到上限后，该规则暂不恢复并发出提醒。
  - 在 AppOpsNext 中修改受守护的设置后，规则会同步更新，继续守护修改后的模式。取消勾选“守护此设置”会移除该规则。
  - 守护页面列出受守护的设置和最近的改动。
- 新增“备份与迁移”。支持将模板、偏好设置和访问监测中选中的项目导出为文件。导入时先预览将要更改的内容，确认后再应用。导出内容不包含已保存的历史记录和设置守护规则。
- 支持查看和修改其他用户下的应用权限，包括工作资料、应用分身和私密空间。设备上有多个用户时，应用页顶部会显示用户切换入口。模板、新应用默认设置、设置守护和历史记录仍仅适用于当前用户。
- 系统允许时，优先通过系统接口读取权限状态，读取失败时自动回退到文本解析。首次连接时，先比对两种方式的读取结果，结果一致后才启用系统接口。系统或 AppOpsNext 更新后会重新比对。诊断报告会显示各项数据当前使用的读取方式。
- 系统允许时，优先从设备读取权限列表。“按权限”页面会列出 AppOpsNext 尚未收录的权限，并以系统名称显示。
- 对于与运行时权限无关的权限，若系统未保留所选模式，提示会说明系统或厂商策略很可能拒绝了此次修改。

### 修复

- 修复 Android 16 QPR2 及以上版本中“按权限”页面提示“Unexpected AppOps dump”、无法加载的问题（#13）。
- 修复 Android 16 QPR2 及以上版本中访问监测无法确认监听是否注册成功的问题。
- 修复 Android 17 中权限历史无法读取逐条访问记录的问题。Android 17 不再提供汇总统计，因此只有汇总数据的权限（例如读取剪贴板）在 Android 17 上暂不显示历史记录。

<details><summary>查看原文</summary>

## English

This beta is based on 1.6.5. It adds Setting guard and Backup and migration, supports multiple users, and adapts to output format changes in Android 16 QPR2 and Android 17. It can be installed over 1.6.5.

### New and improved

- Added Setting guard (experimental). When you change a permission, select Guard this setting. AppOpsNext then checks whether the system, a vendor policy or another app changes the setting. If it finds a change, it sends a notification.
  - Choose Hourly check or Realtime as the check mode. Realtime needs a persistent notification.
  - You can turn on Restore automatically for each rule. Each rule gets at most 3 restore attempts in 24 hours, and failed attempts also count. At the limit, AppOpsNext does not restore that rule for now and sends a notice.
  - When you change a guarded setting in AppOpsNext, the rule updates to guard the new mode. Clearing Guard this setting removes the rule.
  - The guard page lists the guarded settings and the recent changes.
- Added Backup and migration. You can export templates, preferences and the items selected in Access monitor to a file. An import shows a preview of the changes and applies them only after you confirm. The export does not include saved history or Setting guard rules.
- You can view and change app permissions in other users, including work profiles, app clones and private spaces. When the device has more than one user, the Apps page shows a user switch at the top. Templates, new-app defaults, Setting guard and history still apply to the current user only.
- When the system allows it, AppOpsNext reads permission states through the system interface first. If a read fails, it uses text parsing instead. On the first connection, AppOpsNext compares the results of the two methods and uses the interface only when they agree. It compares again after a system or AppOpsNext update. The diagnostic report shows which method each kind of data uses.
- When the system allows it, AppO

</details>

---

### [dukangalex/HiClash](https://github.com/dukangalex/HiClash) `📝 提交` `5692bd3`

发布时间：2026-10-29（5 分钟前）｜ [查看提交](https://github.com/dukangalex/HiClash/commit/5692bd342b1c5172b0b501177386afe48579c76c)

*（原文，翻译暂不可用）*

feat: sync upstream high-value changes (home broadband group, dedicated GitHub group, zero-width char fix)

---

### [crimera/piko-newx](https://github.com/crimera/piko-newx) `✅ 正式版` `v3.70.0`

发布时间：2026-10-29（5 小时前）｜ [查看 Release](https://github.com/crimera/piko-newx/releases/tag/v3.70.0)

*（原文，翻译暂不可用）*

###  Bug Fixes
* **Twitter - newx:** keep restored timeline positions across server cache trims (ec29bb8)
* **Twitter - newx:** translate only the post text X renders (ba6080a)

###  New Features
* **Twitter - newx:** drop 12.37.2 and older targets (c79b8d0)

---

### [AIsouler/MyClash](https://github.com/AIsouler/MyClash) `📝 提交` `a5943f0`

发布时间：2026-10-29（3 小时前）｜ [查看提交](https://github.com/AIsouler/MyClash/commit/a5943f09b296b5f2a977fcac5f5015e9a7563601)

feat: 补充公共DNS过滤项

---

### [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) `📝 提交` `77577c5`

发布时间：2026-10-29（2 小时前）｜ [查看提交](https://github.com/1c7/chinese-independent-developer/commit/77577c534278784a291a6faed0f1f3180d5f96b9)

*（原文，翻译暂不可用）*

添加：Pixsolo（cena001plus）

---

### [microsoft/PowerToys](https://github.com/microsoft/PowerToys) `🧪 测试版` `v0.103.3012`

发布时间：2026-10-29（1 小时前）｜ [查看 Release](https://github.com/microsoft/PowerToys/releases/tag/v0.103.3012)

*（原文，翻译暂不可用）*

# Dev preview v0.103.3012.0

PowerToys 0.103.3012.0 is a development preview from `main`, containing 19 merged pull requests since v0.103.3006. This prerelease is intended for testing ahead of the next stable release.

## Highlights

- **Settings**: Check for updates now performs a fresh check from the General page instead of showing an older saved result.
- **Settings**: Unchecked boxes no longer show ghost checkmarks after their settings group is disabled and re-enabled.
- **Settings**: What's new automatically retries loading release notes after transient network failures.
- **Image Resizer**: The CLI now honors `--filename` on its first run with a fresh profile.
- **FancyZones and Image Resizer**: Invalid numeric CLI arguments now produce parse errors instead of crashes.
- **Mouse Without Borders**: Kept clipboard helper handoffs within the active session, including through network socket restarts.
- **ZoomIt**: Improved DemoType clipboard text loading for unexpected text layouts and sizes.
- **Command Palette**: Logs now include exit and restart reasons to help troubleshoot shutdowns.

## Command Palette

- Added exit and restart reasons to Command Palette logs to make shutdown troubleshooting easier in #51363.

## FancyZones and Image Resizer

- Fixed the FancyZones and Image Resizer CLIs crashing on non-numeric monitor, size, or quality values; they now report normal parse errors and exit with code 1 in #51322.

## General

- Prevented NuGet build caches from accumulating obsolete package versions by using fresh cache keys without fallback restores in #51593.
- Moved CodeQL scanning to a dedicated nightly pipeline instead of running it in every CI build in #51604.
- Updated the MessagePack dependency from 3.1.7 to 3.1.9 in #51644.

## Image Resizer

- Fixed the Image Resizer CLI ignoring `--filename` on its first run with a fresh profile in #51320.

## Mouse Without Borders

- Improved clipboard helper coordination with the active deskto

---

### [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) `📝 提交` `9edc6ba`

发布时间：2026-10-29（5 小时前）｜ [查看提交](https://github.com/Aethersailor/Custom_OpenClash_Rules/commit/9edc6badd4aef1ddc1d525a9f70d9362106c5f3d)

*（原文，翻译暂不可用）*

chore(rules): auto generate derived rule files

---

### [XTLS/Xray-core](https://github.com/XTLS/Xray-core) `✅ 正式版` `v26.10.29`

发布时间：2026-10-29（1 小时前）｜ [查看 Release](https://github.com/XTLS/Xray-core/releases/tag/v26.10.29)

*（原文，翻译暂不可用）*

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

### [adysec/tracker](https://github.com/adysec/tracker) `📝 提交` `6b62f47`

发布时间：2026-10-29（5 小时前）｜ [查看提交](https://github.com/adysec/tracker/commit/6b62f478391a0820256475e9ad630a3bcb1648d9)

*（原文，翻译暂不可用）*

20261029

---

## 📋 全部项目（按最近更新排序）

| 项目 | 最新版本 | 类型 | 更新时间 | 距今 |
|---|---|---|---|---|
| [dukangalex/HiClash](https://github.com/dukangalex/HiClash) | — | 提交 | 2026-10-29 | 5 分钟前 |
| [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | `v0.103.3012` | 测试版 | 2026-10-29 | 1 小时前 |
| [XTLS/Xray-core](https://github.com/XTLS/Xray-core) | `v26.10.29` | 正式版 | 2026-10-29 | 1 小时前 |
| [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) | — | 提交 | 2026-10-29 | 2 小时前 |
| [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) | `v1.6.6-beta1` | 测试版 | 2026-10-29 | 3 小时前 |
| [AIsouler/MyClash](https://github.com/AIsouler/MyClash) | — | 提交 | 2026-10-29 | 3 小时前 |
| [Xposed-Modules-Repo/com.tianqianguai.xtq](https://github.com/Xposed-Modules-Repo/com.tianqianguai.xtq) | `71-12.38.1-prod.01` | 正式版 | 2026-10-29 | 3 小时前 |
| [adysec/tracker](https://github.com/adysec/tracker) | — | 提交 | 2026-10-29 | 5 小时前 |
| [crimera/piko-newx](https://github.com/crimera/piko-newx) | `v3.70.0` | 正式版 | 2026-10-29 | 5 小时前 |
| [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) | — | 提交 | 2026-10-29 | 5 小时前 |
| [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) | `v2026.10.29-8492.b363780` | 正式版 | 2026-10-29 | 7 小时前 |
| [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) | `latest` | 正式版 | 2026-10-29 | 8 小时前 |
| [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) | `26.10.29-1` | 正式版 | 2026-10-29 | 8 小时前 |
| [XIU2/TrackersListCollection](https://github.com/XIU2/TrackersListCollection) | — | 提交 | 2026-10-29 | 10 小时前 |
| [xiaoyaDev/xiaoya-alist](https://github.com/xiaoyaDev/xiaoya-alist) | — | 提交 | 2026-10-28 | 10 小时前 |
| [ngosang/trackerslist](https://github.com/ngosang/trackerslist) | — | 提交 | 2026-10-28 | 11 小时前 |
| [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) | `draft` | 测试版 | 2026-10-28 | 11 小时前 |
| [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules) | `202610282235` | 正式版 | 2026-10-28 | 12 小时前 |
| [t59688/newsnook](https://github.com/t59688/newsnook) | `v1.9.2-beta.1` | 测试版 | 2026-10-28 | 20 小时前 |
| [JushiZen/Nimbus.Player](https://github.com/JushiZen/Nimbus.Player) | — | 提交 | 2026-10-28 | 20 小时前 |
| [Inginnng/EditHere](https://github.com/Inginnng/EditHere) | `v0.12.3` | 正式版 | 2026-10-28 | 23 小时前 |
| [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) | `v3.1.2` | 正式版 | 2026-10-28 | 1 天前 |
| [myikuns/jichangtz-tuijian](https://github.com/myikuns/jichangtz-tuijian) | — | 提交 | 2026-10-28 | 1 天前 |
| [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) | `v2.3.5` | 正式版 | 2026-10-28 | 1 天前 |
| [hicccc77/WeFlow](https://github.com/hicccc77/WeFlow) | — | 提交 | 2026-10-28 | 1 天前 |
| [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) | — | 提交 | 2026-10-28 | 1 天前 |
| [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) | `v7.3.3.1` | 正式版 | 2026-10-27 | 1 天前 |
| [yigenhuobah/quietbox](https://github.com/yigenhuobah/quietbox) | `v0.8.1` | 正式版 | 2026-10-27 | 1 天前 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | `autogpt-platform-beta-v0.10.0` | 测试版 | 2026-10-27 | 1 天前 |
| [uxgnod/yaf](https://github.com/uxgnod/yaf) | `v0.4.0` | 正式版 | 2026-10-27 | 1 天前 |
| [ArvinLovegood/go-stock](https://github.com/ArvinLovegood/go-stock) | `v2026.10.27.1-release` | 正式版 | 2026-10-27 | 1 天前 |
| [mason173/aira-browser](https://github.com/mason173/aira-browser) | `v3.9.1` | 正式版 | 2026-10-27 | 2 天前 |
| [KaringX/clashmi](https://github.com/KaringX/clashmi) | `v1.0.32.1801` | 测试版 | 2026-10-27 | 2 天前 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | `v0.7.1` | 正式版 | 2026-10-27 | 2 天前 |
| [z-mio/parse_hub_bot](https://github.com/z-mio/parse_hub_bot) | `v2.2.7` | 正式版 | 2026-10-27 | 2 天前 |
| [z-mio/ParseHub](https://github.com/z-mio/ParseHub) | `v2.3.15` | 正式版 | 2026-10-27 | 2 天前 |
| [felinics/Memoh](https://github.com/felinics/Memoh) | `v1.0.0-beta.1` | 测试版 | 2026-10-27 | 2 天前 |
| [T8RIN/ImageToolbox](https://github.com/T8RIN/ImageToolbox) | `4.3.0-beta03` | 测试版 | 2026-10-26 | 2 天前 |
| [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) | `V1.0.322` | 正式版 | 2026-10-26 | 2 天前 |
| [pgntgz/ClipBait](https://github.com/pgntgz/ClipBait) | `3-1.1.1` | 正式版 | 2026-10-26 | 2 天前 |
| [sunisup666/TikTools](https://github.com/sunisup666/TikTools) | `6-0.4.1` | 正式版 | 2026-10-26 | 2 天前 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | `v1.4.3` | 正式版 | 2026-10-26 | 2 天前 |
| [Ajaxc/WeChatList](https://github.com/Ajaxc/WeChatList) | `2.5.4` | 正式版 | 2026-10-26 | 3 天前 |
| [tingaicompass/AI-Compass](https://github.com/tingaicompass/AI-Compass) | — | 提交 | 2026-10-26 | 3 天前 |
| [bilibili/Index-Translate](https://github.com/bilibili/Index-Translate) | — | 提交 | 2026-10-26 | 3 天前 |
| [UniClipboard/UniClipboard](https://github.com/UniClipboard/UniClipboard) | `v1.5.0` | 正式版 | 2026-10-26 | 3 天前 |
| [fankes/TSBattery](https://github.com/fankes/TSBattery) | `5.0.1` | 正式版 | 2026-10-26 | 3 天前 |
| [yagay/ListCleaner](https://github.com/yagay/ListCleaner) | `v1.6.46` | 正式版 | 2026-10-25 | 3 天前 |
| [Lotuszn/piggyhand-fish](https://github.com/Lotuszn/piggyhand-fish) | `v1.1.10` | 正式版 | 2026-10-25 | 3 天前 |
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | `v0.20.0` | 正式版 | 2026-10-25 | 3 天前 |
| [crimera/piko](https://github.com/crimera/piko) | `v3.11.0-dev.3` | 测试版 | 2026-10-25 | 3 天前 |
| [johamwon/wechrss](https://github.com/johamwon/wechrss) | — | 提交 | 2026-10-25 | 3 天前 |
| [ZCShou/GoGoGo](https://github.com/ZCShou/GoGoGo) | `v2.5.2` | 正式版 | 2026-10-25 | 4 天前 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | `v4.29.3` | 正式版 | 2026-10-24 | 4 天前 |
| [komi-store/komi-store](https://github.com/komi-store/komi-store) | `v1.9.4` | 正式版 | 2026-10-24 | 5 天前 |
| [chen08209/FlClash](https://github.com/chen08209/FlClash) | `v0.9.2` | 正式版 | 2026-10-24 | 5 天前 |
| [SagerNet/sing-box](https://github.com/SagerNet/sing-box) | `v1.15.0-alpha.13` | 测试版 | 2026-10-24 | 5 天前 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | `v0.7.39` | 正式版 | 2026-10-23 | 5 天前 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | `v1.6.0` | 正式版 | 2026-10-23 | 6 天前 |
| [joeytoday/obsidian-canvas-enhance](https://github.com/joeytoday/obsidian-canvas-enhance) | `1.0.11` | 正式版 | 2026-10-22 | 7 天前 |
| [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) | `v1.19.7` | 正式版 | 2026-10-22 | 7 天前 |
| [fw876/helloworld](https://github.com/fw876/helloworld) | `v198.2` | 正式版 | 2026-10-22 | 7 天前 |
| [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) | `v1.19.33` | 正式版 | 2026-10-21 | 7 天前 |
| [exteraless/exteraless](https://github.com/exteraless/exteraless) | `ci-8b7ec40` | 测试版 | 2026-10-21 | 7 天前 |
| [LifeArchiveProject/WeChatDataAnalysis](https://github.com/LifeArchiveProject/WeChatDataAnalysis) | `macos-source-runtime-39523784335-3` | 正式版 | 2026-10-21 | 8 天前 |
| [GravityPoet/ChordVox](https://github.com/GravityPoet/ChordVox) | `v1.5.144` | 正式版 | 2026-10-20 | 8 天前 |
| [xgit01/sgkrank](https://github.com/xgit01/sgkrank) | — | 提交 | 2026-10-20 | 9 天前 |
| [Lingyan000/fluxdo](https://github.com/Lingyan000/fluxdo) | `v0.2.29` | 正式版 | 2026-10-20 | 9 天前 |
| [ShareX/ShareX](https://github.com/ShareX/ShareX) | `v22.0.0` | 测试版 | 2026-10-20 | 9 天前 |
| [ZGMFX01A/OrigRead](https://github.com/ZGMFX01A/OrigRead) | `v1.7.1` | 正式版 | 2026-10-18 | 10 天前 |
| [kenischu/ReSource](https://github.com/kenischu/ReSource) | `3.0.8` | 正式版 | 2026-10-18 | 11 天前 |
| [Niklaus88/Clash-Config](https://github.com/Niklaus88/Clash-Config) | — | 提交 | 2026-10-17 | 12 天前 |
| [Teamper/JHS](https://github.com/Teamper/JHS) | `v6.5.2` | 正式版 | 2026-10-16 | 13 天前 |
| [waditu/czsc](https://github.com/waditu/czsc) | `v1.0.2` | 正式版 | 2026-10-16 | 13 天前 |
| [NEORUAA/MeiloX](https://github.com/NEORUAA/MeiloX) | `1.55.1` | 正式版 | 2026-10-16 | 13 天前 |
| [gkd-kit/gkd](https://github.com/gkd-kit/gkd) | `v1.13.0-beta-2` | 测试版 | 2026-10-15 | 13 天前 |
| [jiangrui1994/CloudSaver](https://github.com/jiangrui1994/CloudSaver) | — | 提交 | 2026-10-15 | 14 天前 |
| [daimiaopeng/coolapk-desktop](https://github.com/daimiaopeng/coolapk-desktop) | `v1.35.0` | 正式版 | 2026-10-15 | 14 天前 |
| [xweiba/location-spoofer](https://github.com/xweiba/location-spoofer) | `v1.0.9` | 正式版 | 2026-10-14 | 15 天前 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | — | 提交 | 2026-10-14 | 15 天前 |
| [7723mod/NPatch](https://github.com/7723mod/NPatch) | `v1.0.9` | 正式版 | 2026-10-12 | 16 天前 |
| [dongyubin/IPTV](https://github.com/dongyubin/IPTV) | — | 提交 | 2026-10-11 | 18 天前 |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | `mineru-4.0.12-released` | 正式版 | 2026-10-11 | 18 天前 |
| [pengchujin/livecanvas](https://github.com/pengchujin/livecanvas) | — | 提交 | 2026-10-10 | 19 天前 |
| [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) | `v2.5.8` | 正式版 | 2026-10-09 | 20 天前 |
| [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) | — | 提交 | 2026-10-08 | 20 天前 |
| [jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader) | `desktop-v0.12.5` | 正式版 | 2026-10-08 | 21 天前 |
| [hoothin/UserScripts](https://github.com/hoothin/UserScripts) | — | 提交 | 2026-10-07 | 21 天前 |
| [reeden-org/reeden-app](https://github.com/reeden-org/reeden-app) | `v1.43.1` | 正式版 | 2026-10-07 | 21 天前 |
| [AyuGram/AyuGramDesktop](https://github.com/AyuGram/AyuGramDesktop) | `v7.2.9` | 正式版 | 2026-10-05 | 24 天前 |
| [HyNetworks/hysteria](https://github.com/HyNetworks/hysteria) | `app/v2.13.0` | 正式版 | 2026-10-05 | 24 天前 |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | `v1.15.0` | 正式版 | 2026-10-04 | 24 天前 |
| [linesoft2/TaskMonitor](https://github.com/linesoft2/TaskMonitor) | `v2026.9.30.1` | 正式版 | 2026-09-30 | 28 天前 |
| [xykt/IPQuality](https://github.com/xykt/IPQuality) | — | 提交 | 2026-09-30 | 28 天前 |
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