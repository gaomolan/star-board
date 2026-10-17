# ⭐ Star 动态看板

> 生成时间：2026-10-17 17:41:17 UTC ｜ 共 172 个项目 ｜ 每 3 小时自动更新

## 🆕 本次新增（4）

### [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) `✅ 正式版` `v0.17.0`

发布时间：2026-10-17（54 分钟前）｜ [查看 Release](https://github.com/rootSunc/CNEquity/releases/tag/v0.17.0)

CNEquity 0.17.0 已发布至 PyPI。

```bash
python -m pip install --upgrade cnequity==0.17.0
```

- **升级步骤：** `pip install -U cnequity` 后重启 `cne serve` 和已在运行的 `cne mcp`。除 `institutional_holdings` 的单位声明外，数据集契约没有变化，不需要迁移数据或改配置。经历过东财中断的湖，升级后对受影响窗口运行一次 `cne repair status-outages --start <起> --end <止>`（先预览，再加 `--apply`）；补跑过估值的湖运行 `cne repair misdated-valuation`。两条命令都发布新版本，旧版本保留。
- **数据契约变化：** `institutional_holdings` schema 升至 2，`holding_ratio` 的单位声明由比例改为百分数（`8.5` 即 8.5%），与已存值及字段文档一致；已存值不缩放，需要比例的读者自行除以 100，见迁移与回滚说明。
- 第一次建湖不再被非关键阶段挡住：公司行为、指数日线或交易状态阶段失败时，`cne init` 照常抓日线、入湖并派生复权因子，退出码为 0，结束时列出没完成的步骤；重跑同一条 `cne init` 只补这些。证券目录、交易日历或日线失败仍停在原处并保留已下载的部分。
- 全市场 `cne init` 先抓日线、再扫公司行为：公司行为逐只拉取全部除权除息记录，与窗口长短无关，以前让日线多等约 40 分钟。原样保留旧默认阶段顺序的配置自动换成新顺序，自定义顺序和已开始的 init 不受影响。
- `cne init`（quick / full）开跑前做最多 8 秒的网络预检：通达信连不上时几秒内停下并给出中文原因，交易所和东财只报告不阻断；`--no-preflight` 或 `CNE_SKIP_PREFLIGHT=1` 跳过。通达信选主机改为第一个可用主机即返回，不再等最慢的候选超时。
- 证券目录步骤（`instruments`）逐段打印进度：开始取通达信列表、北交所、基金与股票上市日期、退市名录和写入时各打一行，并带已用时间，全市场初始化里不再静默数分钟。
- 日线入湖之后的复权因子、行业指数、质量审计或停牌派生出错，不再把已发布的湖判为不可用，也不再跳过后面的阶段；摘要列出没完成的步骤，重跑 `cne init` 只补它们。
- 修复交易日历在节假日表最后一年（2027 年）内必然失败的问题：日历步骤要向后多写一年，超出内置表就报错，从 2027-01-01 起每次 `cne init` 第一阶段和日更日历都会失败；现在写到表的最后一天为止，剩余天数不足时由审计提示。
- 证券目录取通达信列表时，连接和每个市场的请求失败各重试一次，一次网络抖动不再让 `cne init` 在第一步就停下；Baostock 证券基础信息在同一步内只查询一次（以前补上市日期和补退市名录各查一次，全市场各约 90 秒）。
- macOS 和 Windows 上 `cne init` 运行期间阻止系统空闲睡眠（合盖或手动睡眠仍生效，进程结束即解除）；设 `CNE_ALLOW_SLEEP=1` 关闭。
- 修复同一窗口里第二次向 Baostock 核对停牌时覆盖第一次暂存的停牌证据：日线已据第一次结果判为「停牌、无需补」，证据却被替换掉，这些证券既没有停牌记录也不进欠账，`cne check` 因此判覆盖不全（实测 *ST 康佳 A、*ST 萃华整月停牌）。现在每次核对单独暂存。
- 调度脚本在仓库没有 `.venv` 时改用 PATH 上的 `python3`（可用 `CNE_PYTHON` 指定），不再因找不到解释器而拿不到调度锁。
- Windows 上 serve 存储页删除 staging 的计划与记录统一用 `/` 分隔路径，同一计划在各平台一致。
- `cne init` 不再在终端打印 Baostock 的 `login success!` / `logout success!`；`--json` 的 stdout 只剩结果。
- 修复周末或节假日运行 `cne init` 建出的湖缺北交所证券和交易状态：此前以当天日期为准，北交所板块和交易所状态页对非交易日不返回数据，`cne check` 报「新鲜度证明不了」。不带 `--trade-date` 时现在以最近一个已收盘交易日为准，与 demo 一致。
- 全市场 `cne init` 在抓日线和扫公司行为期间于后台把复权因子预取到本地缓存，收尾派生改读缓存，没取完的部分由派生

---

### [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) `🧪 测试版` `v3.0.20-beta.4`

发布时间：2026-10-17（1 小时前）｜ [查看 Release](https://github.com/HuangZhuoRui/LocationSpoofer/releases/tag/v3.0.20-beta.4)

# LocationSpoofer 3.0.20 测试版 4

- 修复了已保存账号在登录失败后出现的问题：现在无需先退出应用或清除应用数据，即可重新输入账号密码进行登录。
- 优化了安全存储模块的异常处理与诊断机制：当临时读取失败时会保留原有密钥及登录数据；待恢复后系统会自动补传相关错误报告。
- 统一了定位功能、SDK 以及 NMEA 协议中的海拔输出标准：固定海拔值不再出现额外波动，从而减少了因切换不同定位来源而导致的累计海拔值误差。
- 原有路线记录、步频数据以及会员权限、使用额度和设备数量限制均予以保留。

现提供全局模式／非全局模式、32位／64位四种类型的安装包，这些安装包均连接至正式后端服务器。全局模式下的 64 位安装包仍内置 x86_64 系统模块，可供兼容的 MuMu／雷电模拟器使用。

安装时请选择覆盖安装方式，安装完成后请重启手机或模拟器。原有的运动记录数据不会重新计算。

版本号：`3.0.20-beta.4`；Android versionCode：`30057`。
更新检查：通过下载服务器获取更新清单。
本版本由自建的 Forgejo CI 系统完成测试、原证书签名、四类安装包的校验及自动发布流程。

所有安装包均由自建 CI 系统构建并校验；GitHub 镜像文件则由发布程序自动上传，其内容与自建下载站提供的同版本安装包完全一致。
GitHub 自动附带的源代码压缩包对应当前的公开 main 分支，并非本次 APK 构建所用的源码；本次构建的提交记录及包文件校验信息可查阅 build-info.json 与 SHA256SUMS 文件。

<details><summary>查看原文</summary>

# LocationSpoofer 3.0.20 Beta 4

- 修复已保存账号恢复登录失败后缺少账号密码重新登录入口的问题，无需先退出或清除应用数据。
- 完善安全存储异常处理和诊断，临时读取失败保留原密钥及登录数据，恢复后补传错误上报。
- 统一定位、SDK 与 NMEA 的海拔输出，固定海拔不再额外抖动，减少不同定位来源切换造成的额外累计爬升。
- 保留现有路线、步频以及会员、额度和设备数量限制。

提供全局／非全局、32／64 位四种原签名安装包，连接正式后端。全局 64 位包继续内置 x86_64 系统模块，供兼容的 MuMu／雷电模拟器使用。

请保留数据覆盖安装，安装后重启手机或模拟器。旧运动记录不会重新计算。

版本号：`3.0.20-beta.4`；Android versionCode：`30057`。
更新检查：下载服务器更新清单。
由自建 Forgejo CI 完成测试、原证书签名、四包校验和自动发布。

安装包由自建 CI 构建和验包，GitHub 镜像由发布程序自动上传，四包与自建下载站的同版本包一致。
GitHub 自动附带的 Source code 归档对应现有公开 main，并非本次 APK 的构建源码；本次构建提交与包摘要记录在 build-info.json 和 SHA256SUMS。

</details>

---

### [XTLS/Xray-core](https://github.com/XTLS/Xray-core) `🧪 测试版` `v26.10.17`

发布时间：2026-10-17（2 小时前）｜ [查看 Release](https://github.com/XTLS/Xray-core/releases/tag/v26.10.17)

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

### [adysec/tracker](https://github.com/adysec/tracker) `📝 提交` `5ddbca6`

发布时间：2026-10-17（2 小时前）｜ [查看提交](https://github.com/adysec/tracker/commit/5ddbca63e994449612aa502c3762d56790e6aea4)

*（原文，翻译暂不可用）*

20261017

---

## 📋 全部项目（按最近更新排序）

| 项目 | 最新版本 | 类型 | 更新时间 | 距今 |
|---|---|---|---|---|
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | `v0.17.0` | 正式版 | 2026-10-17 | 54 分钟前 |
| [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) | `v3.0.20-beta.4` | 测试版 | 2026-10-17 | 1 小时前 |
| [XTLS/Xray-core](https://github.com/XTLS/Xray-core) | `v26.10.17` | 测试版 | 2026-10-17 | 2 小时前 |
| [adysec/tracker](https://github.com/adysec/tracker) | — | 提交 | 2026-10-17 | 2 小时前 |
| [xgit01/sgkrank](https://github.com/xgit01/sgkrank) | — | 提交 | 2026-10-17 | 6 小时前 |
| [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) | — | 提交 | 2026-10-17 | 6 小时前 |
| [chen08209/FlClash](https://github.com/chen08209/FlClash) | `v0.9.1` | 正式版 | 2026-10-17 | 7 小时前 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | `v4.29.1` | 正式版 | 2026-10-17 | 7 小时前 |
| [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) | — | 提交 | 2026-10-17 | 9 小时前 |
| [Niklaus88/Clash-Config](https://github.com/Niklaus88/Clash-Config) | — | 提交 | 2026-10-17 | 9 小时前 |
| [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) | — | 提交 | 2026-10-17 | 10 小时前 |
| [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) | `v2026.10.17-8441.5d47d3a` | 正式版 | 2026-10-17 | 12 小时前 |
| [AIsouler/MyClash](https://github.com/AIsouler/MyClash) | — | 提交 | 2026-10-17 | 13 小时前 |
| [crimera/piko-newx](https://github.com/crimera/piko-newx) | `v3.57.1` | 正式版 | 2026-10-17 | 16 小时前 |
| [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) | `latest` | 正式版 | 2026-10-17 | 16 小时前 |
| [XIU2/TrackersListCollection](https://github.com/XIU2/TrackersListCollection) | — | 提交 | 2026-10-17 | 17 小时前 |
| [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules) | `202610162237` | 正式版 | 2026-10-16 | 19 小时前 |
| [ngosang/trackerslist](https://github.com/ngosang/trackerslist) | — | 提交 | 2026-10-16 | 19 小时前 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | `v0.7.0` | 正式版 | 2026-10-16 | 20 小时前 |
| [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) | `V1.0.320` | 正式版 | 2026-10-16 | 1 天前 |
| [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) | `26.10.16-2` | 正式版 | 2026-10-16 | 1 天前 |
| [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) | `v2.2.2` | 正式版 | 2026-10-16 | 1 天前 |
| [hicccc77/WeFlow](https://github.com/hicccc77/WeFlow) | — | 提交 | 2026-10-16 | 1 天前 |
| [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) | `v1.6.5` | 正式版 | 2026-10-16 | 1 天前 |
| [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | `v0.102.2883.0` | 测试版 | 2026-10-16 | 1 天前 |
| [xiaoyaDev/xiaoya-alist](https://github.com/xiaoyaDev/xiaoya-alist) | — | 提交 | 2026-10-16 | 1 天前 |
| [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) | `v1.19.6` | 正式版 | 2026-10-16 | 1 天前 |
| [t59688/newsnook](https://github.com/t59688/newsnook) | `v1.9.0-beta.3` | 测试版 | 2026-10-16 | 1 天前 |
| [Teamper/JHS](https://github.com/Teamper/JHS) | `v6.5.2` | 正式版 | 2026-10-16 | 1 天前 |
| [waditu/czsc](https://github.com/waditu/czsc) | `v1.0.2` | 正式版 | 2026-10-16 | 1 天前 |
| [z-mio/ParseHub](https://github.com/z-mio/ParseHub) | `v2.3.10` | 正式版 | 2026-10-15 | 1 天前 |
| [z-mio/parse_hub_bot](https://github.com/z-mio/parse_hub_bot) | `v2.2.4` | 正式版 | 2026-10-15 | 2 天前 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | `v0.7.36` | 正式版 | 2026-10-15 | 2 天前 |
| [gkd-kit/gkd](https://github.com/gkd-kit/gkd) | `v1.13.0-beta-2` | 测试版 | 2026-10-15 | 2 天前 |
| [jiangrui1994/CloudSaver](https://github.com/jiangrui1994/CloudSaver) | — | 提交 | 2026-10-15 | 2 天前 |
| [joeytoday/obsidian-canvas-enhance](https://github.com/joeytoday/obsidian-canvas-enhance) | `1.0.9` | 正式版 | 2026-10-15 | 2 天前 |
| [JushiZen/Nimbus.Player](https://github.com/JushiZen/Nimbus.Player) | — | 提交 | 2026-10-15 | 2 天前 |
| [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) | `v7.3.1.7` | 正式版 | 2026-10-15 | 2 天前 |
| [ArvinLovegood/go-stock](https://github.com/ArvinLovegood/go-stock) | `v2026.10.15.1-release` | 正式版 | 2026-10-15 | 2 天前 |
| [daimiaopeng/coolapk-desktop](https://github.com/daimiaopeng/coolapk-desktop) | `v1.35.0` | 正式版 | 2026-10-15 | 2 天前 |
| [myikuns/jichangtz-tuijian](https://github.com/myikuns/jichangtz-tuijian) | — | 提交 | 2026-10-15 | 2 天前 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | `autogpt-platform-beta-v0.8.4` | 测试版 | 2026-10-14 | 3 天前 |
| [bilibili/Index-Translate](https://github.com/bilibili/Index-Translate) | — | 提交 | 2026-10-14 | 3 天前 |
| [xweiba/location-spoofer](https://github.com/xweiba/location-spoofer) | `v1.0.9` | 正式版 | 2026-10-14 | 3 天前 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | — | 提交 | 2026-10-14 | 3 天前 |
| [mason173/aira-browser](https://github.com/mason173/aira-browser) | `v3.7.4` | 正式版 | 2026-10-14 | 3 天前 |
| [Ajaxc/WeChatList](https://github.com/Ajaxc/WeChatList) | `2.5.2` | 正式版 | 2026-10-14 | 3 天前 |
| [exteraless/exteraless](https://github.com/exteraless/exteraless) | `ci-1ad6a60` | 测试版 | 2026-10-13 | 3 天前 |
| [Inginnng/EditHere](https://github.com/Inginnng/EditHere) | `v0.11.1` | 正式版 | 2026-10-13 | 3 天前 |
| [dukangalex/HiClash](https://github.com/dukangalex/HiClash) | — | 提交 | 2026-10-13 | 4 天前 |
| [7723mod/NPatch](https://github.com/7723mod/NPatch) | `v1.0.9` | 正式版 | 2026-10-12 | 5 天前 |
| [SagerNet/sing-box](https://github.com/SagerNet/sing-box) | `v1.15.0-alpha.12` | 测试版 | 2026-10-11 | 6 天前 |
| [LifeArchiveProject/WeChatDataAnalysis](https://github.com/LifeArchiveProject/WeChatDataAnalysis) | `macos-source-runtime-38116174842-1` | 正式版 | 2026-10-11 | 6 天前 |
| [dongyubin/IPTV](https://github.com/dongyubin/IPTV) | — | 提交 | 2026-10-11 | 6 天前 |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | `mineru-4.0.12-released` | 正式版 | 2026-10-11 | 6 天前 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | `v1.4.1` | 正式版 | 2026-10-10 | 7 天前 |
| [crimera/piko](https://github.com/crimera/piko) | `v3.10.0` | 正式版 | 2026-10-10 | 7 天前 |
| [johamwon/wechrss](https://github.com/johamwon/wechrss) | — | 提交 | 2026-10-10 | 7 天前 |
| [pengchujin/livecanvas](https://github.com/pengchujin/livecanvas) | — | 提交 | 2026-10-10 | 7 天前 |
| [T8RIN/ImageToolbox](https://github.com/T8RIN/ImageToolbox) | `4.2.1-rc01` | 测试版 | 2026-10-09 | 7 天前 |
| [ZGMFX01A/OrigRead](https://github.com/ZGMFX01A/OrigRead) | `v1.7.0` | 正式版 | 2026-10-09 | 8 天前 |
| [KaringX/clashmi](https://github.com/KaringX/clashmi) | `v1.0.31.1703` | 正式版 | 2026-10-09 | 8 天前 |
| [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) | `v2.5.8` | 正式版 | 2026-10-09 | 8 天前 |
| [UniClipboard/UniClipboard](https://github.com/UniClipboard/UniClipboard) | `v1.1.2` | 正式版 | 2026-10-09 | 8 天前 |
| [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) | — | 提交 | 2026-10-08 | 8 天前 |
| [jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader) | `desktop-v0.12.5` | 正式版 | 2026-10-08 | 9 天前 |
| [hoothin/UserScripts](https://github.com/hoothin/UserScripts) | — | 提交 | 2026-10-07 | 9 天前 |
| [reeden-org/reeden-app](https://github.com/reeden-org/reeden-app) | `v1.43.1` | 正式版 | 2026-10-07 | 10 天前 |
| [fw876/helloworld](https://github.com/fw876/helloworld) | `v196.19` | 正式版 | 2026-10-07 | 10 天前 |
| [felinics/Memoh](https://github.com/felinics/Memoh) | `v0.21.0` | 正式版 | 2026-10-05 | 12 天前 |
| [AyuGram/AyuGramDesktop](https://github.com/AyuGram/AyuGramDesktop) | `v7.2.9` | 正式版 | 2026-10-05 | 12 天前 |
| [HyNetworks/hysteria](https://github.com/HyNetworks/hysteria) | `app/v2.13.0` | 正式版 | 2026-10-05 | 12 天前 |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | `v1.15.0` | 正式版 | 2026-10-04 | 12 天前 |
| [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) | `draft` | 测试版 | 2026-10-04 | 12 天前 |
| [kenischu/ReSource](https://github.com/kenischu/ReSource) | `3.0.7` | 正式版 | 2026-10-03 | 14 天前 |
| [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) | `v1.19.32` | 正式版 | 2026-09-30 | 17 天前 |
| [linesoft2/TaskMonitor](https://github.com/linesoft2/TaskMonitor) | `v2026.9.30.1` | 正式版 | 2026-09-30 | 17 天前 |
| [xykt/IPQuality](https://github.com/xykt/IPQuality) | — | 提交 | 2026-09-30 | 17 天前 |
| [tingaicompass/AI-Compass](https://github.com/tingaicompass/AI-Compass) | — | 提交 | 2026-09-24 | 23 天前 |
| [op7418/Humanizer-zh](https://github.com/op7418/Humanizer-zh) | — | 提交 | 2026-09-23 | 24 天前 |
| [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | — | 提交 | 2026-09-22 | 25 天前 |
| [zhangxiangliang/stock-api](https://github.com/zhangxiangliang/stock-api) | `v2.7.5` | 正式版 | 2026-09-21 | 26 天前 |
| [TG-Twilight/AWAvenue-Ads-Rule](https://github.com/TG-Twilight/AWAvenue-Ads-Rule) | `1.7.8-release` | 正式版 | 2026-09-21 | 26 天前 |
| [yuanzl77/IPTV](https://github.com/yuanzl77/IPTV) | — | 提交 | 2026-09-21 | 26 天前 |
| [zhanghai/MaterialFiles](https://github.com/zhanghai/MaterialFiles) | `v1.7.5` | 正式版 | 2026-09-20 | 27 天前 |
| [black-ant/Ant-Browser](https://github.com/black-ant/Ant-Browser) | `V1.8.0` | 正式版 | 2026-09-19 | 28 天前 |
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