# ⭐ Star 动态看板

> 生成时间：2026-10-25 20:13:38 UTC ｜ 共 174 个项目 ｜ 每 3 小时自动更新

## 🆕 本次新增（5）

### [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) `✅ 正式版` `v0.20.0`

发布时间：2026-10-25（15 分钟前）｜ [查看 Release](https://github.com/rootSunc/CNEquity/releases/tag/v0.20.0)

CNEquity 0.20.0 已发布至 PyPI。

```bash
python -m pip install --upgrade cnequity==0.20.0
```

- **升级步骤：** `pip install -U cnequity` 后重启 `cne serve` 和已在运行的 `cne mcp`。数据集契约只有兼容变更：`industry_members` 升到 schema 版本 2，新增 6 列层级列（见下文），新写入的东财行 `industry_code` 固定为三级行业；按固定层级统计请读 `l1_*`..`l3_*`。旧湖运行 `cne migrate` 预览、再 `cne migrate --apply`，补齐本版四步一次性迁移：`industry-levels`（在线读取东财当前板块层级）、`sw-delisted`、`offshore-final`（在线读取新浪 COMEX 黄金最终日线）和 `sw-never-listed`。基金派生状态行要标为非 ST 的，另按窗口运行 `cne repair status-traded --start … --end … --apply`。时点读取的截点改按北京时间日期判定，`as_of=T` 不再包含 T 日公告。EquityLab 等下游的消费契约无需改动。
- `load_profile` 新增 `pit_mode="published"`：只认记录了发布时间的值，不用公告日或入湖日代替，且不早于值生效日；`cutoff` 指定截至日的北京时间截点（收盘信号用 15:00），过了截点的发布从下一天起可见。另加 `canonical`（按当日生效代码匹配）、`data_root` 和 `revision_map`（固定版本读取）。
- 新增 `cnequity.query.load_profile`：一次取多只证券、多个截至日的多项时点资料（上市、交易状态与 ST、股本、股东户数、财报科目、申万/东财各级行业），每个值带它描述的日期、最早可知日、来源和时点质量（`strict` / `reconstructed` / `snapshot_only`），缺失的值给出原因（上市前、退市后、超出覆盖、尚未公布、值未知、无时点证据、无记录），过旧的值标 `stale`。每个数据集只读一次，全市场 12 个截至日 8 个字段约 19 秒。
- 申万行业快照不再包含从未上市的证券：申万在 IPO 审核阶段就给公司定行业，且文件没有剔除日期，IPO 未完成的公司会一直留在之后每个月的快照里。本湖有 12 个这样的代码（2010–2023 年定类，如 002525.SZ、601206.SH、874090.BJ），在证券主表、日线、交易状态和公告里都没有任何记录，东财也不列出。只有四类记录全都没有才剔除；回填时剔除，旧湖用 `cne migrate --apply` 删除。剔除的证券记在 `meta/sw_never_listed.json`，`cne verify --industry` 以 `excluded_never_listed` 继续列出。
- 新增 `cne migrate` 一步 `offshore-final`：替换 COMEX 黄金（`GC0.CMX`）在 CME 交易时段结束前存入的日线。写入端已改为收盘后才写、并重读最近 7 天，但更早的盘中值没有被替换；本湖 1,758 行中有 23 行收盘价与新浪最终值不同，最大差 3.5%（2026-08-19 存 4425.6，最终 4580.7），另缺 2026-09-25 一行。迁移在线读取新浪最终日线一次，只改有差异或缺失的行。
- 新增 `cne derive industry_crosswalk`：在申万与东财都有完整快照的同一天，按层级比较两边行业的成员，写出每对行业的成员数、重叠数、Jaccard、相互包含比例和关系（等价、被包含、部分重叠）到 `meta/industry_crosswalk.parquet`。只用同日证据、只比较两边当天都有的股票；0.20 之前的东财快照层级不全，不作证据。每次运行追加当天证据、保留更早的日期，不合并任何行业。
- 申万行业和国证指数成分按月回填只取已经结束的月份：此前当月最后一个已知交易日也被当作“月末”，周日运行会生成日期为下一个（尚未开盘的）交易日的快照。
- 新增 `cne derive industry_taxonomy`：为每个行业写一个稳定身份 `industry_id = 体系:版本:代码` 到 `meta/industry_taxonomy.parquet`，带层级、名称、上级、首末出现日期和最大成员数。申万 2021 年 7

---

### [crimera/piko](https://github.com/crimera/piko) `🧪 测试版` `v3.11.0-dev.3`

发布时间：2026-10-25（2 小时前）｜ [查看 Release](https://github.com/crimera/piko/releases/tag/v3.11.0-dev.3)

## 3.11.0-dev.3 (2026-10-25)

### 错误修复

* **Instagram：** 使用 Patcher 2.0.1 修复隐藏提要帖子 (abfc1c7)

### 改进

* **Instagram：** 尊重设置依赖性 (a9f4ad0)
* **Instagram：** 恢复推荐补丁并完成补丁状态报告 (eb8b4db)

<details><summary>查看原文</summary>

## 3.11.0-dev.3 (2026-10-25)

###  Bug Fixes

* **Instagram:** Fix hide feed posts with Patcher 2.0.1 (abfc1c7)

###  Improvements

* **Instagram:** Respect settings dependencies (a9f4ad0)
* **Instagram:** Restore recommended patches and complete patch status reporting (eb8b4db)

</details>

---

### [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) `📝 提交` `d90e470`

发布时间：2026-10-25（1 小时前）｜ [查看提交](https://github.com/Aethersailor/Custom_OpenClash_Rules/commit/d90e470ddc769bccd518dea5299f3525efddeb3d)

*（原文，翻译暂不可用）*

chore(deps-dev): bump wrangler from 4.151.3 to 4.152.0 in /workers/repository-mirror in the routine-updates group (#426)

---

### [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) `🧪 测试版` `draft`

发布时间：2026-10-25（31 分钟前）｜ [查看 Release](https://github.com/hiddify/hiddify-app/releases/tag/draft)

**根据您的操作系统下载：**

**根据您的操作系统下载：**

## 下载

操作系统
下载
下载
病毒总数

安卓

通用APK 

APK ARMv8 

APK ARMv7 

64位APK 

窗户

设置x64 

macOS（v10.15+）

DMG 通用 

Linux

Deb 包 x64 

**所有更改列表：** 更改日志

<details><summary>查看原文</summary>

**Download based on your OS:**

**بر اساس سیستم عامل خود دانلود کنید:**

## Downloads

OS
Download
Downloads
VirusTotal

Android

APK Universal 

APK ARMv8 

APK ARMv7 

APK x64 

Windows

Setup x64 

macOS (v10.15+)

DMG Universal 

Linux

DebPackage x64 

**List of all changes:** ChangeLog

</details>

---

### [adysec/tracker](https://github.com/adysec/tracker) `📝 提交` `9142b0c`

发布时间：2026-10-25（1 小时前）｜ [查看提交](https://github.com/adysec/tracker/commit/9142b0c15ea11acf8445117ac7564c55c7d08fe8)

*（原文，翻译暂不可用）*

20261025

---

## 📋 全部项目（按最近更新排序）

| 项目 | 最新版本 | 类型 | 更新时间 | 距今 |
|---|---|---|---|---|
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | `v0.20.0` | 正式版 | 2026-10-25 | 15 分钟前 |
| [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) | `draft` | 测试版 | 2026-10-25 | 31 分钟前 |
| [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) | — | 提交 | 2026-10-25 | 1 小时前 |
| [adysec/tracker](https://github.com/adysec/tracker) | — | 提交 | 2026-10-25 | 1 小时前 |
| [crimera/piko](https://github.com/crimera/piko) | `v3.11.0-dev.3` | 测试版 | 2026-10-25 | 2 小时前 |
| [johamwon/wechrss](https://github.com/johamwon/wechrss) | — | 提交 | 2026-10-25 | 6 小时前 |
| [UniClipboard/UniClipboard](https://github.com/UniClipboard/UniClipboard) | `v1.5.0-alpha.3` | 测试版 | 2026-10-25 | 7 小时前 |
| [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) | — | 提交 | 2026-10-25 | 8 小时前 |
| [ArvinLovegood/go-stock](https://github.com/ArvinLovegood/go-stock) | `v2026.10.25.1-release` | 正式版 | 2026-10-25 | 8 小时前 |
| [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) | `v2026.10.25-8479.a8d10ca` | 正式版 | 2026-10-25 | 9 小时前 |
| [Inginnng/EditHere](https://github.com/Inginnng/EditHere) | `v0.12.1` | 正式版 | 2026-10-25 | 11 小时前 |
| [ZCShou/GoGoGo](https://github.com/ZCShou/GoGoGo) | `v2.5.2` | 正式版 | 2026-10-25 | 16 小时前 |
| [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) | `v7.3.1.13` | 正式版 | 2026-10-25 | 18 小时前 |
| [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) | `latest` | 正式版 | 2026-10-25 | 19 小时前 |
| [XIU2/TrackersListCollection](https://github.com/XIU2/TrackersListCollection) | — | 提交 | 2026-10-25 | 19 小时前 |
| [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules) | `202610242236` | 正式版 | 2026-10-24 | 21 小时前 |
| [bilibili/Index-Translate](https://github.com/bilibili/Index-Translate) | — | 提交 | 2026-10-24 | 22 小时前 |
| [ngosang/trackerslist](https://github.com/ngosang/trackerslist) | — | 提交 | 2026-10-24 | 22 小时前 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | `v4.29.3` | 正式版 | 2026-10-24 | 1 天前 |
| [mason173/aira-browser](https://github.com/mason173/aira-browser) | `v3.8.4` | 正式版 | 2026-10-24 | 1 天前 |
| [xiaoyaDev/xiaoya-alist](https://github.com/xiaoyaDev/xiaoya-alist) | — | 提交 | 2026-10-24 | 1 天前 |
| [komi-store/komi-store](https://github.com/komi-store/komi-store) | `v1.9.4` | 正式版 | 2026-10-24 | 1 天前 |
| [crimera/piko-newx](https://github.com/crimera/piko-newx) | `v3.64.0` | 正式版 | 2026-10-24 | 1 天前 |
| [chen08209/FlClash](https://github.com/chen08209/FlClash) | `v0.9.2` | 正式版 | 2026-10-24 | 1 天前 |
| [SagerNet/sing-box](https://github.com/SagerNet/sing-box) | `v1.15.0-alpha.13` | 测试版 | 2026-10-24 | 1 天前 |
| [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) | `v2.3.3` | 正式版 | 2026-10-23 | 2 天前 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | `v0.7.39` | 正式版 | 2026-10-23 | 2 天前 |
| [t59688/newsnook](https://github.com/t59688/newsnook) | `v1.9.1-beta.6` | 测试版 | 2026-10-23 | 2 天前 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | `v1.4.2` | 正式版 | 2026-10-23 | 2 天前 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | `v1.6.0` | 正式版 | 2026-10-23 | 2 天前 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | `autogpt-platform-beta-v0.9.0` | 测试版 | 2026-10-23 | 2 天前 |
| [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) | — | 提交 | 2026-10-23 | 2 天前 |
| [T8RIN/ImageToolbox](https://github.com/T8RIN/ImageToolbox) | `4.3.0-beta02` | 测试版 | 2026-10-22 | 3 天前 |
| [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) | `26.10.22-2` | 正式版 | 2026-10-22 | 3 天前 |
| [joeytoday/obsidian-canvas-enhance](https://github.com/joeytoday/obsidian-canvas-enhance) | `1.0.11` | 正式版 | 2026-10-22 | 3 天前 |
| [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) | `v1.19.7` | 正式版 | 2026-10-22 | 3 天前 |
| [AIsouler/MyClash](https://github.com/AIsouler/MyClash) | — | 提交 | 2026-10-22 | 3 天前 |
| [fw876/helloworld](https://github.com/fw876/helloworld) | `v198.2` | 正式版 | 2026-10-22 | 3 天前 |
| [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) | `v1.19.33` | 正式版 | 2026-10-21 | 4 天前 |
| [exteraless/exteraless](https://github.com/exteraless/exteraless) | `ci-8b7ec40` | 测试版 | 2026-10-21 | 4 天前 |
| [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) | `V1.0.321` | 正式版 | 2026-10-21 | 4 天前 |
| [XTLS/Xray-core](https://github.com/XTLS/Xray-core) | `v26.10.21` | 正式版 | 2026-10-21 | 4 天前 |
| [z-mio/parse_hub_bot](https://github.com/z-mio/parse_hub_bot) | `v2.2.6` | 正式版 | 2026-10-21 | 4 天前 |
| [z-mio/ParseHub](https://github.com/z-mio/ParseHub) | `v2.3.14` | 正式版 | 2026-10-21 | 4 天前 |
| [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | `v0.102.2933.0` | 正式版 | 2026-10-21 | 4 天前 |
| [myikuns/jichangtz-tuijian](https://github.com/myikuns/jichangtz-tuijian) | — | 提交 | 2026-10-21 | 4 天前 |
| [LifeArchiveProject/WeChatDataAnalysis](https://github.com/LifeArchiveProject/WeChatDataAnalysis) | `macos-source-runtime-39523784335-3` | 正式版 | 2026-10-21 | 4 天前 |
| [xgit01/sgkrank](https://github.com/xgit01/sgkrank) | — | 提交 | 2026-10-20 | 5 天前 |
| [Lingyan000/fluxdo](https://github.com/Lingyan000/fluxdo) | `v0.2.29` | 正式版 | 2026-10-20 | 5 天前 |
| [hicccc77/WeFlow](https://github.com/hicccc77/WeFlow) | — | 提交 | 2026-10-20 | 5 天前 |
| [ShareX/ShareX](https://github.com/ShareX/ShareX) | `v22.0.0` | 测试版 | 2026-10-20 | 5 天前 |
| [KaringX/clashmi](https://github.com/KaringX/clashmi) | `v1.0.32.1800` | 测试版 | 2026-10-19 | 6 天前 |
| [felinics/Memoh](https://github.com/felinics/Memoh) | `v0.22.0` | 正式版 | 2026-10-19 | 6 天前 |
| [tingaicompass/AI-Compass](https://github.com/tingaicompass/AI-Compass) | — | 提交 | 2026-10-18 | 7 天前 |
| [ZGMFX01A/OrigRead](https://github.com/ZGMFX01A/OrigRead) | `v1.7.1` | 正式版 | 2026-10-18 | 7 天前 |
| [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) | `v3.0.20` | 正式版 | 2026-10-18 | 7 天前 |
| [kenischu/ReSource](https://github.com/kenischu/ReSource) | `3.0.8` | 正式版 | 2026-10-18 | 7 天前 |
| [Niklaus88/Clash-Config](https://github.com/Niklaus88/Clash-Config) | — | 提交 | 2026-10-17 | 8 天前 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | `v0.7.0` | 正式版 | 2026-10-16 | 8 天前 |
| [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) | `v1.6.5` | 正式版 | 2026-10-16 | 9 天前 |
| [Teamper/JHS](https://github.com/Teamper/JHS) | `v6.5.2` | 正式版 | 2026-10-16 | 9 天前 |
| [waditu/czsc](https://github.com/waditu/czsc) | `v1.0.2` | 正式版 | 2026-10-16 | 9 天前 |
| [NEORUAA/MeiloX](https://github.com/NEORUAA/MeiloX) | `1.55.1` | 正式版 | 2026-10-16 | 9 天前 |
| [gkd-kit/gkd](https://github.com/gkd-kit/gkd) | `v1.13.0-beta-2` | 测试版 | 2026-10-15 | 10 天前 |
| [jiangrui1994/CloudSaver](https://github.com/jiangrui1994/CloudSaver) | — | 提交 | 2026-10-15 | 10 天前 |
| [JushiZen/Nimbus.Player](https://github.com/JushiZen/Nimbus.Player) | — | 提交 | 2026-10-15 | 10 天前 |
| [daimiaopeng/coolapk-desktop](https://github.com/daimiaopeng/coolapk-desktop) | `v1.35.0` | 正式版 | 2026-10-15 | 10 天前 |
| [xweiba/location-spoofer](https://github.com/xweiba/location-spoofer) | `v1.0.9` | 正式版 | 2026-10-14 | 11 天前 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | — | 提交 | 2026-10-14 | 11 天前 |
| [Ajaxc/WeChatList](https://github.com/Ajaxc/WeChatList) | `2.5.2` | 正式版 | 2026-10-14 | 11 天前 |
| [dukangalex/HiClash](https://github.com/dukangalex/HiClash) | — | 提交 | 2026-10-13 | 12 天前 |
| [7723mod/NPatch](https://github.com/7723mod/NPatch) | `v1.0.9` | 正式版 | 2026-10-12 | 13 天前 |
| [dongyubin/IPTV](https://github.com/dongyubin/IPTV) | — | 提交 | 2026-10-11 | 14 天前 |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | `mineru-4.0.12-released` | 正式版 | 2026-10-11 | 14 天前 |
| [pengchujin/livecanvas](https://github.com/pengchujin/livecanvas) | — | 提交 | 2026-10-10 | 15 天前 |
| [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) | `v2.5.8` | 正式版 | 2026-10-09 | 16 天前 |
| [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) | — | 提交 | 2026-10-08 | 17 天前 |
| [jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader) | `desktop-v0.12.5` | 正式版 | 2026-10-08 | 17 天前 |
| [hoothin/UserScripts](https://github.com/hoothin/UserScripts) | — | 提交 | 2026-10-07 | 17 天前 |
| [reeden-org/reeden-app](https://github.com/reeden-org/reeden-app) | `v1.43.1` | 正式版 | 2026-10-07 | 18 天前 |
| [AyuGram/AyuGramDesktop](https://github.com/AyuGram/AyuGramDesktop) | `v7.2.9` | 正式版 | 2026-10-05 | 20 天前 |
| [HyNetworks/hysteria](https://github.com/HyNetworks/hysteria) | `app/v2.13.0` | 正式版 | 2026-10-05 | 20 天前 |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | `v1.15.0` | 正式版 | 2026-10-04 | 20 天前 |
| [linesoft2/TaskMonitor](https://github.com/linesoft2/TaskMonitor) | `v2026.9.30.1` | 正式版 | 2026-09-30 | 25 天前 |
| [xykt/IPQuality](https://github.com/xykt/IPQuality) | — | 提交 | 2026-09-30 | 25 天前 |
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
| [hifengzy/ima-sync](https://github.com/hifengzy/ima-sync) | `0.3.1` | 正式版 | 2026-08-29 | 1 个月前 |
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