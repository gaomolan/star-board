# ⭐ Star 动态看板

> 生成时间：2026-10-15 17:32:22 UTC ｜ 共 172 个项目 ｜ 每 3 小时自动更新

## 🆕 本次新增（10）

### [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) `📝 提交` `6b182c9`

发布时间：2026-10-15（4 小时前）｜ [查看提交](https://github.com/yijixiuxin/chanlun-pro/commit/6b182c9e12103e713867e09accb5a29a95837569)

*（原文，翻译暂不可用）*

tdx fix bj no ticks

---

### [t59688/newsnook](https://github.com/t59688/newsnook) `🧪 测试版` `v1.9.0-beta.2`

发布时间：2026-10-15（3 小时前）｜ [查看 Release](https://github.com/t59688/newsnook/releases/tag/v1.9.0-beta.2)

## 有所闻 NewsNook v1.9.0-beta.2

### 社区阅读
- 修复了 Linux.do 信息流标题中社区表情显示为“face”等文字名称的问题，恢复了标题中的内联表情显示。
- 修复了知乎评论区中小表情被当作普通图片并从评论文本中分离出去的问题，保留了文字与表情原有的排列顺序。
- 优化了知乎评论中内联表情的显示尺寸，同时沿用了现有的图片加载失败时的备用显示机制。

### 其它
- 补充了对 Linux.do 标题及知乎评论中表情功能的回归测试。
- 版本号为 1.9.0-beta.2。

* 修复：修正了 Linux.do 信息流与知乎评论区中的表情渲染问题

<details><summary>查看原文</summary>

## 有所闻 NewsNook v1.9.0-beta.2

### 社区阅读
- 修复 Linux.do 信息流标题里的社区表情显示为 face 等文字名称的问题，恢复标题中的内联表情。
- 修复知乎评论区小表情被当作普通图片、从评论文字中移走的问题，保留文字和表情的原始顺序。
- 优化知乎评论内联表情的显示尺寸，并沿用现有图片加载失败兜底机制。

### 其它
- 补充 Linux.do 标题和知乎评论表情的回归测试。
- 版本号 1.9.0-beta.2。

* fix: 修复 Linux.do 信息流与知乎评论区表情渲染

</details>

---

### [z-mio/ParseHub](https://github.com/z-mio/ParseHub) `✅ 正式版` `v2.3.9`

发布时间：2026-10-15（18 分钟前）｜ [查看 Release](https://github.com/z-mio/ParseHub/releases/tag/v2.3.9)

* 修复：图片现在会下载原始尺寸版本
* 修复：设备 token 请求也会通过代理发送
* 琐事：将版本号升级至 2.3.9

<details><summary>查看原文</summary>

*  fix: 图片改为下载原图
*  fix: 设备 token 请求也走代理
*  chore: 升级版本号至 2.3.9

</details>

---

### [z-mio/parse_hub_bot](https://github.com/z-mio/parse_hub_bot) `✅ 正式版` `v2.2.4`

发布时间：2026-10-15（7 分钟前）｜ [查看 Release](https://github.com/z-mio/parse_hub_bot/releases/tag/v2.2.4)

* 杂务：将 parsehub 升级至 2.3.8
* 杂务：将 parsehub 升级至 2.3.9

<details><summary>查看原文</summary>

*  chore: 升级 parsehub 至 2.3.8
*  chore: 升级 parsehub 至 2.3.9

</details>

---

### [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) `📝 提交` `333adf0`

发布时间：2026-10-15（2 小时前）｜ [查看提交](https://github.com/1c7/chinese-independent-developer/commit/333adf03c2f2b9c34eb96f297e10e5c3ed18b67f)

SKILL.md：补「双通道抓不到时用根域页面核实子域产品」的判据

---

### [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) `✅ 正式版` `v0.7.36`

发布时间：2026-10-15（4 小时前）｜ [查看 Release](https://github.com/EKKOLearnAI/ekko-studio/releases/tag/v0.7.36)

## 更新重点

- 新增主题实时自定义功能：可为界面的各个区域单独设置背景、透明度、模糊效果、圆角、边框及阴影；还支持对主题进行命名、复制、切换以及保存到账号中 (#3394)。
- 优化了 GIF、动态 WebP 及 APNG 格式壁纸的支持：壁纸文件大小上限提升至 **30 MB**，主题压缩包大小上限也提升至 **32 MB**；上传、缓存、导入和导出过程中动画效果均得以保留 (#3399)。
- 修复了在小屏幕设备上，工作流执行记录抽屉宽度不足且背景透明的问题 (#3398)。
- 修复了群聊场景下 AI 消息主题同步问题，消除了消息气泡及表格中出现的重复背景与模糊效果 (#3398)。
- 统一了模型可见性设置对模型选择器的作用范围，同时为大型模型目录添加了性能提示信息 (#3392)。
- 在可见模型管理功能中新增了搜索功能 (#3393)。
- 现在 Provider 的完整模型目录采用按需加载机制，从而减少了配置页的初始请求量 (#3401)。
- 将新建聊天时的分类选择功能移至输入框工具栏中 (#3389)。
- 优化了 Windows 系统下对盘符根目录工作区的处理机制，同时保留了文件路径首尾的空格 (#3396)。
- 修复了带有版本标记的 Hermes Runtime 打包时的兼容性问题 (#3400)。
- 新增了在版本发布时自动构建并校验 TOS 7 x86_64 测试安装包的流程 (#3397)。
- Studio 与桌面端版本现已同步更新至 `0.7.36`：前端更新日志现已支持 12 种语言，同时保留了最近三个版本的更新信息 (#3399)。

* [codex] 遵循模型可见性设置规则，并在模型目录过大时给出警告提示
* [codex] 在可见模型管理功能中增加搜索功能
* [codex] 将新建聊天时的分类选择功能移至输入框工具栏中
* [codex] 新增主题实时自定义功能，并支持主题预设的导出与导入
* [codex] 在版本发布时自动构建 TOS 7 安装包
* [codex] 修复工作流抽屉及聊天消息主题相关问题
* [codex] 完善 Windows 系统下对盘符根目录工作区的处理，保留文件路径中的首尾空格
* [codex] 在打包 Hermes 版本时添加安装标记以标识版本信息
* [codex] 发布 0.7.36 版本，该版本支持大小不超过 30 MB 的动态壁纸
* [codex] 改为按需加载各 Provider 的完整模型目录

<details><summary>查看原文</summary>

## 更新重点

- 新增主题实时自定义，可按界面区域设置背景、透明度、模糊、圆角、边框和阴影，并支持命名主题、复制、切换及账号保存 (#3394)。
- 完善 GIF、动态 WebP 和 APNG 壁纸支持，壁纸上限提升至 **30 MB**，主题 ZIP 上限提升至 **32 MB**；上传、缓存、导入和导出均保留动画 (#3399)。
- 修复小屏下工作流执行记录抽屉宽度不足和背景透明的问题 (#3398)。
- 修复群聊 AI 消息主题同步，消除消息气泡及表格中的重复背景和模糊 (#3398)。
- 统一模型可见性设置在模型选择器中的生效范围，并为大型模型目录增加性能提示 (#3392)。
- 可见模型管理新增搜索功能 (#3393)。
- Provider 完整模型目录改为按需加载，减少配置页的首次请求量 (#3401)。
- 将新建聊天的分类选择移至输入框工具栏 (#3389)。
- 完善 Windows 盘符根目录工作区处理，并保留文件路径中的首尾空格 (#3396)。
- 修复带版本标记的 Hermes Runtime 打包兼容性 (#3400)。
- 新增随版本发布自动构建和校验 TOS 7 x86_64 测试安装包的流程 (#3397)。
- Studio 与桌面端版本同步更新为 `0.7.36`，前端更新日志覆盖 12 种语言并保留最近三个版本 (#3399)。

* [codex] honor model visibility and warn about large catalogs
* [codex] add search to visible model management
* [codex] move new-chat category picker into composer toolbar
* [codex] add live theme customization and portable theme presets
* [codex] build TOS 7 packages automatically on release publication
* [codex] fix workflow drawers and chat message themes
* [codex] complete Windows drive-root workspace handling without trimming file paths
* [codex] package Hermes releases with install-stamp version identity
* [codex] prepare 0.7.36 with 30 MB animated wallpapers
* [codex] load full provider model catalogs on demand

</details>

---

### [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) `📝 提交` `552b819`

发布时间：2026-10-15（3 小时前）｜ [查看提交](https://github.com/Aethersailor/Custom_OpenClash_Rules/commit/552b819318c070eeb1025d4c67845c9e73bec82e)

*（原文，翻译暂不可用）*

docs(cdn): explain jsDelivr branch cache limitations

---

### [adysec/tracker](https://github.com/adysec/tracker) `📝 提交` `03073f3`

发布时间：2026-10-15（46 分钟前）｜ [查看提交](https://github.com/adysec/tracker/commit/03073f39fd30e46f0f32afc5b198dc9c27dce98d)

*（原文，翻译暂不可用）*

20261015

---

### [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) `✅ 正式版` `v2026.10.15-8432.f23ada8`

发布时间：2026-10-15（2 小时前）｜ [查看 Release](https://github.com/DIYgod/RSSHub/releases/tag/v2026.10.15-8432.f23ada8)

源码提交记录：f23ada8a636fbbb5f92d8e91558cf4e8ffaca66a

<details><summary>查看原文</summary>

Source commit: f23ada8a636fbbb5f92d8e91558cf4e8ffaca66a

</details>

---

### [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) `✅ 正式版` `26.10.16-1`

发布时间：2026-10-15（46 分钟前）｜ [查看 Release](https://github.com/Openwrt-Passwall/openwrt-passwall/releases/tag/26.10.16-1)

## :mega: 获取其他软件包 / 如何获取其他软件包

### 方式 1：添加软件源 / 方法 1：添加软件源
 * 请按照 openwrt-passwall-build 仓库的说明，将其提供的软件源添加到设备中，然后直接使用包管理器安装。

<details><summary>查看原文</summary>

## :mega: 获取其他软件包 / How to Get Other Packages

### 方式 1：添加软件源 / Method 1: Add Software Source
 * 请按照 openwrt-passwall-build 仓库的说明，将其提供的软件源添加到设备中，然后直接使用包管理器安装。
  Follow the instructions in the openwrt-passwall-build repository to add the provided software source to your device, then install directly using the package manager.

</details>

---

## 📋 全部项目（按最近更新排序）

| 项目 | 最新版本 | 类型 | 更新时间 | 距今 |
|---|---|---|---|---|
| [z-mio/parse_hub_bot](https://github.com/z-mio/parse_hub_bot) | `v2.2.4` | 正式版 | 2026-10-15 | 7 分钟前 |
| [z-mio/ParseHub](https://github.com/z-mio/ParseHub) | `v2.3.9` | 正式版 | 2026-10-15 | 18 分钟前 |
| [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) | `26.10.16-1` | 正式版 | 2026-10-15 | 46 分钟前 |
| [adysec/tracker](https://github.com/adysec/tracker) | — | 提交 | 2026-10-15 | 46 分钟前 |
| [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) | — | 提交 | 2026-10-15 | 2 小时前 |
| [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) | `v2026.10.15-8432.f23ada8` | 正式版 | 2026-10-15 | 2 小时前 |
| [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) | — | 提交 | 2026-10-15 | 3 小时前 |
| [t59688/newsnook](https://github.com/t59688/newsnook) | `v1.9.0-beta.2` | 测试版 | 2026-10-15 | 3 小时前 |
| [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) | — | 提交 | 2026-10-15 | 4 小时前 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | `v0.7.36` | 正式版 | 2026-10-15 | 4 小时前 |
| [gkd-kit/gkd](https://github.com/gkd-kit/gkd) | `v1.13.0-beta-2` | 测试版 | 2026-10-15 | 5 小时前 |
| [hicccc77/WeFlow](https://github.com/hicccc77/WeFlow) | — | 提交 | 2026-10-15 | 5 小时前 |
| [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) | `v2.2.1` | 正式版 | 2026-10-15 | 9 小时前 |
| [jiangrui1994/CloudSaver](https://github.com/jiangrui1994/CloudSaver) | — | 提交 | 2026-10-15 | 10 小时前 |
| [joeytoday/obsidian-canvas-enhance](https://github.com/joeytoday/obsidian-canvas-enhance) | `1.0.9` | 正式版 | 2026-10-15 | 10 小时前 |
| [JushiZen/Nimbus.Player](https://github.com/JushiZen/Nimbus.Player) | — | 提交 | 2026-10-15 | 11 小时前 |
| [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) | `v7.3.1.7` | 正式版 | 2026-10-15 | 13 小时前 |
| [ArvinLovegood/go-stock](https://github.com/ArvinLovegood/go-stock) | `v2026.10.15.1-release` | 正式版 | 2026-10-15 | 13 小时前 |
| [daimiaopeng/coolapk-desktop](https://github.com/daimiaopeng/coolapk-desktop) | `v1.35.0` | 正式版 | 2026-10-15 | 13 小时前 |
| [myikuns/jichangtz-tuijian](https://github.com/myikuns/jichangtz-tuijian) | — | 提交 | 2026-10-15 | 15 小时前 |
| [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) | `latest` | 正式版 | 2026-10-15 | 16 小时前 |
| [XIU2/TrackersListCollection](https://github.com/XIU2/TrackersListCollection) | — | 提交 | 2026-10-15 | 17 小时前 |
| [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules) | `202610142237` | 正式版 | 2026-10-14 | 18 小时前 |
| [ngosang/trackerslist](https://github.com/ngosang/trackerslist) | — | 提交 | 2026-10-14 | 19 小时前 |
| [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) | `v3.0.17` | 正式版 | 2026-10-14 | 23 小时前 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | `autogpt-platform-beta-v0.8.4` | 测试版 | 2026-10-14 | 1 天前 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | `v4.29.0` | 正式版 | 2026-10-14 | 1 天前 |
| [bilibili/Index-Translate](https://github.com/bilibili/Index-Translate) | — | 提交 | 2026-10-14 | 1 天前 |
| [xweiba/location-spoofer](https://github.com/xweiba/location-spoofer) | `v1.0.9` | 正式版 | 2026-10-14 | 1 天前 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | — | 提交 | 2026-10-14 | 1 天前 |
| [Niklaus88/Clash-Config](https://github.com/Niklaus88/Clash-Config) | — | 提交 | 2026-10-14 | 1 天前 |
| [mason173/aira-browser](https://github.com/mason173/aira-browser) | `v3.7.4` | 正式版 | 2026-10-14 | 1 天前 |
| [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | `v0.102.2862.0` | 测试版 | 2026-10-14 | 1 天前 |
| [Ajaxc/WeChatList](https://github.com/Ajaxc/WeChatList) | `2.5.2` | 正式版 | 2026-10-14 | 1 天前 |
| [chen08209/FlClash](https://github.com/chen08209/FlClash) | `v0.9.0` | 正式版 | 2026-10-14 | 1 天前 |
| [exteraless/exteraless](https://github.com/exteraless/exteraless) | `ci-1ad6a60` | 测试版 | 2026-10-13 | 1 天前 |
| [Inginnng/EditHere](https://github.com/Inginnng/EditHere) | `v0.11.1` | 正式版 | 2026-10-13 | 1 天前 |
| [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) | `v1.19.5` | 正式版 | 2026-10-13 | 2 天前 |
| [AIsouler/MyClash](https://github.com/AIsouler/MyClash) | — | 提交 | 2026-10-13 | 2 天前 |
| [dukangalex/HiClash](https://github.com/dukangalex/HiClash) | — | 提交 | 2026-10-13 | 2 天前 |
| [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) | `V1.0.319` | 正式版 | 2026-10-13 | 2 天前 |
| [7723mod/NPatch](https://github.com/7723mod/NPatch) | `v1.0.9` | 正式版 | 2026-10-12 | 3 天前 |
| [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) | `v1.6.5-beta2` | 测试版 | 2026-10-12 | 3 天前 |
| [crimera/piko-newx](https://github.com/crimera/piko-newx) | `v3.56.1` | 正式版 | 2026-10-12 | 3 天前 |
| [xiaoyaDev/xiaoya-alist](https://github.com/xiaoyaDev/xiaoya-alist) | — | 提交 | 2026-10-11 | 4 天前 |
| [xgit01/sgkrank](https://github.com/xgit01/sgkrank) | — | 提交 | 2026-10-11 | 4 天前 |
| [SagerNet/sing-box](https://github.com/SagerNet/sing-box) | `v1.15.0-alpha.12` | 测试版 | 2026-10-11 | 4 天前 |
| [LifeArchiveProject/WeChatDataAnalysis](https://github.com/LifeArchiveProject/WeChatDataAnalysis) | `macos-source-runtime-38116174842-1` | 正式版 | 2026-10-11 | 4 天前 |
| [dongyubin/IPTV](https://github.com/dongyubin/IPTV) | — | 提交 | 2026-10-11 | 4 天前 |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | `mineru-4.0.12-released` | 正式版 | 2026-10-11 | 4 天前 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | `v1.4.1` | 正式版 | 2026-10-10 | 5 天前 |
| [crimera/piko](https://github.com/crimera/piko) | `v3.10.0` | 正式版 | 2026-10-10 | 5 天前 |
| [johamwon/wechrss](https://github.com/johamwon/wechrss) | — | 提交 | 2026-10-10 | 5 天前 |
| [XTLS/Xray-core](https://github.com/XTLS/Xray-core) | `v26.10.10` | 测试版 | 2026-10-10 | 5 天前 |
| [pengchujin/livecanvas](https://github.com/pengchujin/livecanvas) | — | 提交 | 2026-10-10 | 5 天前 |
| [T8RIN/ImageToolbox](https://github.com/T8RIN/ImageToolbox) | `4.2.1-rc01` | 测试版 | 2026-10-09 | 5 天前 |
| [ZGMFX01A/OrigRead](https://github.com/ZGMFX01A/OrigRead) | `v1.7.0` | 正式版 | 2026-10-09 | 6 天前 |
| [KaringX/clashmi](https://github.com/KaringX/clashmi) | `v1.0.31.1703` | 正式版 | 2026-10-09 | 6 天前 |
| [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) | `v2.5.8` | 正式版 | 2026-10-09 | 6 天前 |
| [UniClipboard/UniClipboard](https://github.com/UniClipboard/UniClipboard) | `v1.1.2` | 正式版 | 2026-10-09 | 6 天前 |
| [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) | — | 提交 | 2026-10-08 | 6 天前 |
| [jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader) | `desktop-v0.12.5` | 正式版 | 2026-10-08 | 7 天前 |
| [hoothin/UserScripts](https://github.com/hoothin/UserScripts) | — | 提交 | 2026-10-07 | 7 天前 |
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | `v0.16.0` | 正式版 | 2026-10-07 | 7 天前 |
| [reeden-org/reeden-app](https://github.com/reeden-org/reeden-app) | `v1.43.1` | 正式版 | 2026-10-07 | 8 天前 |
| [fw876/helloworld](https://github.com/fw876/helloworld) | `v196.19` | 正式版 | 2026-10-07 | 8 天前 |
| [felinics/Memoh](https://github.com/felinics/Memoh) | `v0.21.0` | 正式版 | 2026-10-05 | 10 天前 |
| [AyuGram/AyuGramDesktop](https://github.com/AyuGram/AyuGramDesktop) | `v7.2.9` | 正式版 | 2026-10-05 | 10 天前 |
| [HyNetworks/hysteria](https://github.com/HyNetworks/hysteria) | `app/v2.13.0` | 正式版 | 2026-10-05 | 10 天前 |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | `v1.15.0` | 正式版 | 2026-10-04 | 10 天前 |
| [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) | `draft` | 测试版 | 2026-10-04 | 10 天前 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | `v0.6.0` | 正式版 | 2026-10-03 | 11 天前 |
| [kenischu/ReSource](https://github.com/kenischu/ReSource) | `3.0.7` | 正式版 | 2026-10-03 | 12 天前 |
| [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) | `v1.19.32` | 正式版 | 2026-09-30 | 15 天前 |
| [linesoft2/TaskMonitor](https://github.com/linesoft2/TaskMonitor) | `v2026.9.30.1` | 正式版 | 2026-09-30 | 15 天前 |
| [xykt/IPQuality](https://github.com/xykt/IPQuality) | — | 提交 | 2026-09-30 | 15 天前 |
| [Teamper/JHS](https://github.com/Teamper/JHS) | `v6.5.1` | 正式版 | 2026-09-25 | 20 天前 |
| [tingaicompass/AI-Compass](https://github.com/tingaicompass/AI-Compass) | — | 提交 | 2026-09-24 | 21 天前 |
| [op7418/Humanizer-zh](https://github.com/op7418/Humanizer-zh) | — | 提交 | 2026-09-23 | 22 天前 |
| [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | — | 提交 | 2026-09-22 | 23 天前 |
| [zhangxiangliang/stock-api](https://github.com/zhangxiangliang/stock-api) | `v2.7.5` | 正式版 | 2026-09-21 | 24 天前 |
| [TG-Twilight/AWAvenue-Ads-Rule](https://github.com/TG-Twilight/AWAvenue-Ads-Rule) | `1.7.8-release` | 正式版 | 2026-09-21 | 24 天前 |
| [yuanzl77/IPTV](https://github.com/yuanzl77/IPTV) | — | 提交 | 2026-09-21 | 24 天前 |
| [zhanghai/MaterialFiles](https://github.com/zhanghai/MaterialFiles) | `v1.7.5` | 正式版 | 2026-09-20 | 25 天前 |
| [black-ant/Ant-Browser](https://github.com/black-ant/Ant-Browser) | `V1.8.0` | 正式版 | 2026-09-19 | 26 天前 |
| [liaoliao666/v2ex](https://github.com/liaoliao666/v2ex) | `1.9.6` | 正式版 | 2026-09-19 | 26 天前 |
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
| [waditu/czsc](https://github.com/waditu/czsc) | `v1.0.1` | 正式版 | 2026-08-09 | 2 个月前 |
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