# ⭐ Star 动态看板

> 生成时间：2026-10-14 15:15:57 UTC ｜ 共 172 个项目 ｜ 每 3 小时自动更新

## 🆕 本次新增（6）

### [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) `🧪 测试版` `preview`

发布时间：2026-04-17（6 个月前）｜ [查看 Release](https://github.com/Monica-Pass/Monica/releases/tag/preview)

> **注意：这是一个自动构建的开发预览版本 (Development Preview)**
>
> 该版本用于快速体验最新代码，但可能包含尚未完成的功能或存在 Bug。
> 如需正式使用，请下载下方的稳定版。
> 不过实际上，稳定版的更新速度可能不如此预览版本，毕竟稳定版需要经过更多测试与验证。
> 预览版本能更快速地引入最新功能与修复补丁，但稳定性可能稍差一些。
> ---
> **构建信息：**
> *   **构建后缀**: `build.202610141223`
> *   **生成的 APK 数量**: `2`
> **生成的 APK 文件：**
> *   `Monica-Android-arm64-v8a-1.0.320-build.202610141223-26101412-01.APK`
> *   `Monica-Android-armeabi-v7a-1.0.320-build.202610141223-26101412-01.APK`
> *   **提交哈希值**: `4e4a13dcf9445605dbc56a717c3abbc5ab620e36`
> *   **引用**: `refs/heads/main`

<details><summary>查看原文</summary>

> ** 注意：这是一个自动构建的开发预览版本 (Development Preview)**
>
> 此版本用于快速体验最新代码，可能包含未完成的功能或 Bug。
> 正式使用请下载下面的 Stable 版本。
> 但是实际上 Stable 版本可能不如这个预览版本更新，毕竟 Stable 版本需要经过更多的测试和验证。
> 预览版本可能会更快地包含最新的功能和修复，但也可能更不稳定。
> ---
> **构建信息：**
> *   **Build Suffix**: `build.202610141223`
> *   **Generated APK Count**: `2`
> **Generated APKs:**
> *   `Monica-Android-arm64-v8a-1.0.320-build.202610141223-26101412-01.APK`
> *   `Monica-Android-armeabi-v7a-1.0.320-build.202610141223-26101412-01.APK`
> *   **Commit SHA**: `4e4a13dcf9445605dbc56a717c3abbc5ab620e36`
> *   **Ref**: `refs/heads/main`

</details>

---

### [LifeArchiveProject/WeChatDataAnalysis](https://github.com/LifeArchiveProject/WeChatDataAnalysis) `✅ 正式版` `v2.9.0`

发布时间：2026-10-11（3 天前）｜ [查看 Release](https://github.com/LifeArchiveProject/WeChatDataAnalysis/releases/tag/v2.9.0)

# 下载前请确认：开源版与高级版是两个独立安装包

考虑到部分用户对隐私和会员服务的顾虑，**高级版与开源版独立打包、分开分发**。本仓库公开的是开源版源码；高级版为独立版本，其额外功能实现不属于本仓库的开源范围。

- **只需要开源版：下载文件名不以 `advanced-` 开头的安装包。**
- **需要高级版：下载文件名以 `advanced-` 开头的安装包。高级版包含独立会员服务，部分高级功能需要订阅。**

两版分别维护版本号。高级版安装包是否提供，以本次 Release 附件为准。

**本次尚未提供高级版安装包，请下载开源版安装包。**

## 更新内容 (v2.9.0)

- CI：更新 macOS 平台下源码运行时的版本锁定配置 (754b49f)
- 新功能：支持按需安装并验证 Qwen GPU 运行时环境 (5b0aeda)
- 代码风格调整：移除运行时测试代码末尾的空行 (27cb726)
- 修复：在 macOS 上隐藏从 Windows 导入的模型路径信息 (71ddef8)
- 修复：自动升级本地缩略图缓存，同时保留最高分辨率的原始图片 (828c7f5)
- 修复：首次显示内容时，也会检查 hardlink 缩略图之外的本地原始图片 (f40c8da)
- 修复：在本地图片质量检索过程中保留旧版图片文件名格式 (4ac879c)
- 修复：无需图片相关密钥即可切换不同账号 (60d9762)
- 文档更新：更新高级版功能列表说明及两个版本的独立性说明 (5d489aa)
- 修复：在增量式 HTML 归档处理时保留联系人排序顺序 (e04a371)
- 修复：修复索引构建过程中重复触发构建操作导致的死锁问题 (7d120f3)
- 修复：账号归档下载功能现改为依据 export_id 来定位对应文件 (5af761d)
- 修复：导出面板现会显示位置信息，同时兼容已有的增量式目录结构 (279772e)
- 修复：防止 macOS 自动检测功能将用户主目录误判为微信数据根目录 (96ce8fe)
- 修复：视频封面与实况模式下的缩略图现通过证书匹配的 CDN 域名进行加载 (07486c4)
- 性能优化：单字节 XOR 解码操作现改用 bytes.translate 查表方式实现 (cdb1ff8)
- 修复：在非 Windows 系统下，现可借助 ffmpeg 对 wxgf（HEVC 格式）图片进行解码 (394b142)
- 修复：密钥文件在 POSIX 系统上现仅允许文件所有者进行读写操作 (11417a9)
- 修复：修正联系人与目标解析过程中候选项的评分逻辑 (40fe380)
- 修复：为八个与媒体链接相关的工具补充了对应的输入参数校验规则 (a1ff46f)
- 新功能：联系人关键词搜索功能现支持拼音首字母及全拼输入 (da19bc9)
- 修复：允许局域网 IP 地址对应的模型服务使用 HTTP 协议进行通信 (e840136)
- 修复：源码启动过程中现会优先加载当前仓库中的 src 目录内容 (03a3d92)
- 日常维护：移除根目录下无人调用的脚本及数据库结构相关工具链 (1781e19)
- 文档更新：删除根目录下的 design-qa.md 验收记录文档 (81b3f5c)
- 日常维护：移除无实际用途的 tools/weflow_wasm_keystream.js 转发脚本及无法正常工作的回退机制 (7e0e217)
- 日常维护：移除所有无人调用的调试与验收类脚本 (a53ff0b)
- 日常维护：移除剩余四个无实际用途的验收与基准测试脚本 (e92a3c1)
- 性能优化：按业务模块分别保存状态信息，减少回复处理及索引进度记录时的磁盘写入操作 (d13860f)
- 修复：自检程序退出前现会释放 SQLite 连接资源，解决了 Windows CI 环境下清理操作失败的问题 (719b1f5)
- 新功能：新增远程向量推理后端服务，并成功接入 WeMM-Embedding-2B 模型 (2b9ed4f)
- 新功能：远程向量服务地址现可由前端界面自行配置 (5ea6a0b)
- 修复：局域网环境下的向量服务现可绕过系统代理设置进行通信 (f8ea1c4)
- 代码重构：远程向量服务现改用与 OpenAI 协议兼容的通信方式 (3c1c2ff)
- 新功能：前端界面现可自定义配置远程服务地址、所用模型名称及对应密钥 (6cac45d)
- 修复：修正了远程索引身份识别、向量数据校验及 tokenizer 缓存相关的逻辑错误 (c7d6cf4)

<details><summary>查看原文</summary>

# 下载前请确认：开源版与高级版是两个独立安装包

考虑到部分用户对隐私和会员服务的顾虑，**高级版与开源版独立打包、分开分发**。本仓库公开的是开源版源码；高级版为独立版本，其额外功能实现不属于本仓库的开源范围。

- **只需要开源版：下载文件名不以 `advanced-` 开头的安装包。**
- **需要高级版：下载文件名以 `advanced-` 开头的安装包。高级版包含独立会员服务，部分高级功能需要订阅。**

两版分别维护版本号。高级版安装包是否提供，以本次 Release 附件为准。

**本次尚未提供高级版安装包，请下载开源版安装包。**

## 更新内容 (v2.9.0)

- ci: refresh macOS source runtime pin (754b49f)
- feat: install and validate Qwen GPU runtime on demand (5b0aeda)
- style: remove trailing blank line from runtime tests (27cb726)
- fix: redact imported Windows model paths on macOS (71ddef8)
- fix: 自动升级本地缩略图缓存并保留最高分辨率图片 (828c7f5)
- fix: 首次显示时也比较 hardlink 缩略图之外的本地原图 (f40c8da)
- fix: preserve legacy image filename variants in local quality lookup (4ac879c)
- fix: keep accounts switchable without image keys (60d9762)
- docs: update advanced feature catalog and version independence (5d489aa)
- fix: preserve contact order in incremental HTML archives (e04a371)
- fix: 修复索引构建中再次触发构建时的自死锁 (7d120f3)
- fix: 账号归档下载改为按 export_id 取文件 (5af761d)
- fix: 导出面板补上位置消息并兼容已有增量目录 (279772e)
- fix: 避免 macOS 自动检测把用户目录当作微信数据根目录 (96ce8fe)
- fix: 视频封面与实况缩略图改用证书匹配的 CDN 主机名 (07486c4)
- perf: 单字节 XOR 解码改用 bytes.translate 查表 (cdb1ff8)
- fix: 非 Windows 下用 ffmpeg 解码 wxgf（HEVC）图片 (394b142)
- fix: 密钥文件在 POSIX 上限制为仅属主可读写 (11417a9)
- fix: 修正联系人与目标解析的候选打分 (40fe380)
- fix: 为八个媒体链接工具补全入参 schema (a1ff46f)
- feat: 联系人关键词搜索支持拼音首字母与全拼 (da19bc9)
- fix: 允许局域网 IP 的模型服务使用 HTTP (e840136)
- fix: 源码启动时优先加载当前仓库的 src (03a3d92)
- chore: 删除根目录无人调用的脚本与数据库结构工具链 (1781e19)
- docs: 删除根目录的 design-qa.md 验收记录 (81b3f5c)
- chore: 删除多余的 tools/weflow_wasm_keystream.js 转发脚本及走不通的回退 (7e0e217)
- chore: 删除无人调用的调试与验收脚本 (a53ff0b)
- chore: 删除剩余四个无人调用的验收与基准脚本 (e92a3c1)
- perf: 按业务边界保存状态，降低回复与索引进度写盘 (d13860f)
- fix: 自检退出前释放 SQLite 连接，修复 Windows CI 清理失败 (719b1f5)
- feat: 新增远端向量推理后端并接入 WeMM-Embedding-2B (2b9ed4f)
- feat: 远端向量服务地址可在前端设置 (5ea6a0b)
- fix: 局域网向量服务绕过系统代理 (f8ea1c4)
- refactor: 远端向量服务改用 OpenAI 兼容协议 (3c1c2ff)
- feat: 前端可配置远端服务地址、模型名与密钥 (6cac45d)
- fix: 修复远端索引身份、向量校验与 tokenizer 缓存 (c7d6cf4)
-

</details>

---

### [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) `🧪 测试版` `Prerelease-Alpha`

发布时间：2024-08-12（2 年前）｜ [查看 Release](https://github.com/MetaCubeX/mihomo/releases/tag/Prerelease-Alpha)

*（原文，翻译暂不可用）*

Release created at  Tue Oct 13 22:26:56 CST 2026
Synchronize Alpha branch code updates, keeping only the latest version
<br>
我应该下载哪个文件? / Which file should I download?
二进制文件筛选 / Binary file selector
查看文档 / Docs

* fix: bound doh dials so ones the query gave up on cannot pile up
* fix: keep fake-ip allocation state when cloning the pool on reload
* chore: update mieru version
* fix: mark the embedded shadowsocks listener closed so its accept loop exits
* fix: a sub-millisecond URL test is reported as a failure
* fix: dialer-proxy cycle check takes quadratic time and memory

## New Contributors
* @Cassian433 made their first contribution in https://github.com/MetaCubeX/mihomo/pull/3274
* @drakeo338 made their first contribution in https://github.com/MetaCubeX/mihomo/pull/3283

---

### [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) `🧪 测试版` `preview-seed-fixture`

发布时间：2026-08-06（2 个月前）｜ [查看 Release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/preview-seed-fixture)

*（原文，翻译暂不可用）*

Rolling, fully SYNTHETIC preview-database seed fixture baked from dev@7b790626e452 (migration head: 20261008130000_marketing_excluded_country). Preview environments restore fixture.dump.gz (custom-format, gzipped, platform schema only, including _prisma_migrations) BEFORE running a PR's own migrations, so schema changes run against populated tables. RESTORE: apply restore-preamble.sql to the target database first (it creates the platform schema and installs the vector + pg_trgm extensions into it, which pg_dump --schema=platform omits), then run 'gunzip -c fixture.dump.gz | pg_restore -d <db> --no-owner' WITHOUT --exit-on-error (the dump's own CREATE SCHEMA collides benignly with the preamble's). SECURITY INVARIANT: this bake holds no cloud credentials and has no read path to any real database — it runs entirely against a throwaway Postgres container and contains only Faker-generated synthetic rows plus the already-public marketplace agent exports checked into autogpt_platform/backend/agents/. This asset is regenerated on every eligible dev push and weekly; treat it as disposable.

---

### [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) `✅ 正式版` `v2026.10.14-8426.0959493`

发布时间：2026-10-14（3 分钟前）｜ [查看 Release](https://github.com/DIYgod/RSSHub/releases/tag/v2026.10.14-8426.0959493)

*（原文，翻译暂不可用）*

Source commit: 09594934e212fe474d4f30854be29b64f163dc1f

---

### [YaoZeyuan/stablog](https://github.com/YaoZeyuan/stablog) `✅ 正式版` `win-3.3.7`

发布时间：2022-08-03（4 年前）｜ [查看 Release](https://github.com/YaoZeyuan/stablog/releases/tag/win-3.3.7)

仅支持64位系统

---

## 📋 全部项目（按最近更新排序）

| 项目 | 最新版本 | 类型 | 更新时间 | 距今 |
|---|---|---|---|---|
| [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) | `v2026.10.14-8426.0959493` | 正式版 | 2026-10-14 | 3 分钟前 |
| [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) | — | 提交 | 2026-10-14 | 22 分钟前 |
| [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) | `v3.0.17-beta.2` | 测试版 | 2026-10-14 | 1 小时前 |
| [adysec/tracker](https://github.com/adysec/tracker) | — | 提交 | 2026-10-14 | 1 小时前 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | `v4.29.0` | 正式版 | 2026-10-14 | 2 小时前 |
| [z-mio/parse_hub_bot](https://github.com/z-mio/parse_hub_bot) | `v2.2.1` | 正式版 | 2026-10-14 | 3 小时前 |
| [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) | — | 提交 | 2026-10-14 | 3 小时前 |
| [bilibili/Index-Translate](https://github.com/bilibili/Index-Translate) | — | 提交 | 2026-10-14 | 4 小时前 |
| [ArvinLovegood/go-stock](https://github.com/ArvinLovegood/go-stock) | `v2026.10.14.3-release` | 正式版 | 2026-10-14 | 4 小时前 |
| [z-mio/ParseHub](https://github.com/z-mio/ParseHub) | `v2.3.5` | 正式版 | 2026-10-14 | 5 小时前 |
| [daimiaopeng/coolapk-desktop](https://github.com/daimiaopeng/coolapk-desktop) | `v1.35.0-beta.4` | 测试版 | 2026-10-14 | 5 小时前 |
| [xweiba/location-spoofer](https://github.com/xweiba/location-spoofer) | `v1.0.9` | 正式版 | 2026-10-14 | 5 小时前 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | — | 提交 | 2026-10-14 | 6 小时前 |
| [Niklaus88/Clash-Config](https://github.com/Niklaus88/Clash-Config) | — | 提交 | 2026-10-14 | 7 小时前 |
| [mason173/aira-browser](https://github.com/mason173/aira-browser) | `v3.7.4` | 正式版 | 2026-10-14 | 8 小时前 |
| [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) | `v7.3.1.5` | 正式版 | 2026-10-14 | 8 小时前 |
| [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | `v0.102.2862.0` | 测试版 | 2026-10-14 | 8 小时前 |
| [Ajaxc/WeChatList](https://github.com/Ajaxc/WeChatList) | `2.5.2` | 正式版 | 2026-10-14 | 9 小时前 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | `v0.7.35` | 正式版 | 2026-10-14 | 12 小时前 |
| [chen08209/FlClash](https://github.com/chen08209/FlClash) | `v0.9.0` | 正式版 | 2026-10-14 | 13 小时前 |
| [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) | `latest` | 正式版 | 2026-10-14 | 13 小时前 |
| [XIU2/TrackersListCollection](https://github.com/XIU2/TrackersListCollection) | — | 提交 | 2026-10-14 | 15 小时前 |
| [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules) | `202610132237` | 正式版 | 2026-10-13 | 16 小时前 |
| [ngosang/trackerslist](https://github.com/ngosang/trackerslist) | — | 提交 | 2026-10-13 | 17 小时前 |
| [exteraless/exteraless](https://github.com/exteraless/exteraless) | `ci-1ad6a60` | 测试版 | 2026-10-13 | 18 小时前 |
| [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) | — | 提交 | 2026-10-13 | 19 小时前 |
| [JushiZen/Nimbus.Player](https://github.com/JushiZen/Nimbus.Player) | — | 提交 | 2026-10-13 | 20 小时前 |
| [Inginnng/EditHere](https://github.com/Inginnng/EditHere) | `v0.11.1` | 正式版 | 2026-10-13 | 21 小时前 |
| [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) | `v1.19.5` | 正式版 | 2026-10-13 | 1 天前 |
| [AIsouler/MyClash](https://github.com/AIsouler/MyClash) | — | 提交 | 2026-10-13 | 1 天前 |
| [joeytoday/obsidian-canvas-enhance](https://github.com/joeytoday/obsidian-canvas-enhance) | `1.0.8` | 正式版 | 2026-10-13 | 1 天前 |
| [dukangalex/HiClash](https://github.com/dukangalex/HiClash) | — | 提交 | 2026-10-13 | 1 天前 |
| [7723mod/NPatch](https://github.com/7723mod/NPatch) | `v1.0.9` | 正式版 | 2026-10-12 | 2 天前 |
| [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) | `v2.2.0` | 正式版 | 2026-10-12 | 2 天前 |
| [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) | `v1.6.5-beta2` | 测试版 | 2026-10-12 | 2 天前 |
| [t59688/newsnook](https://github.com/t59688/newsnook) | `v1.8.12-beta.6` | 测试版 | 2026-10-12 | 2 天前 |
| [crimera/piko-newx](https://github.com/crimera/piko-newx) | `v3.56.1` | 正式版 | 2026-10-12 | 2 天前 |
| [gkd-kit/gkd](https://github.com/gkd-kit/gkd) | `v1.13.0-beta-1` | 测试版 | 2026-10-11 | 2 天前 |
| [xiaoyaDev/xiaoya-alist](https://github.com/xiaoyaDev/xiaoya-alist) | — | 提交 | 2026-10-11 | 2 天前 |
| [xgit01/sgkrank](https://github.com/xgit01/sgkrank) | — | 提交 | 2026-10-11 | 3 天前 |
| [SagerNet/sing-box](https://github.com/SagerNet/sing-box) | `v1.15.0-alpha.12` | 测试版 | 2026-10-11 | 3 天前 |
| [LifeArchiveProject/WeChatDataAnalysis](https://github.com/LifeArchiveProject/WeChatDataAnalysis) | `v2.9.0` | 正式版 | 2026-10-11 | 3 天前 |
| [dongyubin/IPTV](https://github.com/dongyubin/IPTV) | — | 提交 | 2026-10-11 | 3 天前 |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | `mineru-4.0.12-released` | 正式版 | 2026-10-11 | 3 天前 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | `v1.4.1` | 正式版 | 2026-10-10 | 3 天前 |
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
| [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) | — | 提交 | 2026-10-08 | 5 天前 |
| [jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader) | `desktop-v0.12.5` | 正式版 | 2026-10-08 | 6 天前 |
| [hoothin/UserScripts](https://github.com/hoothin/UserScripts) | — | 提交 | 2026-10-07 | 6 天前 |
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | `v0.16.0` | 正式版 | 2026-10-07 | 6 天前 |
| [reeden-org/reeden-app](https://github.com/reeden-org/reeden-app) | `v1.43.1` | 正式版 | 2026-10-07 | 6 天前 |
| [fw876/helloworld](https://github.com/fw876/helloworld) | `v196.19` | 正式版 | 2026-10-07 | 7 天前 |
| [felinics/Memoh](https://github.com/felinics/Memoh) | `v0.21.0` | 正式版 | 2026-10-05 | 9 天前 |
| [AyuGram/AyuGramDesktop](https://github.com/AyuGram/AyuGramDesktop) | `v7.2.9` | 正式版 | 2026-10-05 | 9 天前 |
| [HyNetworks/hysteria](https://github.com/HyNetworks/hysteria) | `app/v2.13.0` | 正式版 | 2026-10-05 | 9 天前 |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | `v1.15.0` | 正式版 | 2026-10-04 | 9 天前 |
| [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) | `draft` | 测试版 | 2026-10-04 | 9 天前 |
| [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) | `26.10.4-1` | 正式版 | 2026-10-04 | 10 天前 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | `v0.6.0` | 正式版 | 2026-10-03 | 10 天前 |
| [kenischu/ReSource](https://github.com/kenischu/ReSource) | `3.0.7` | 正式版 | 2026-10-03 | 11 天前 |
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
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | `preview-seed-fixture` | 测试版 | 2026-08-06 | 2 个月前 |
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
| [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) | `preview` | 测试版 | 2026-04-17 | 6 个月前 |
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
| [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) | `Prerelease-Alpha` | 测试版 | 2024-08-12 | 2 年前 |
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
| [YaoZeyuan/stablog](https://github.com/YaoZeyuan/stablog) | `win-3.3.7` | 正式版 | 2022-08-03 | 4 年前 |
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