# ⭐ Star 动态看板

> 生成时间：2026-10-26 18:58:08 UTC ｜ 共 174 个项目 ｜ 每 3 小时自动更新

## 🆕 本次新增（8）

### [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) `✅ 正式版` `v1.4.3`

发布时间：2026-10-26（4 小时前）｜ [查看 Release](https://github.com/DuarteSantos8/openGym/releases/tag/v1.4.3)

社区发布。下面的大部分内容都是在 GitHub 和 Discord 上请求的，或者作为
Pull request，Apple Watch 学到了一整套技巧，openGym 在 iPhone 上再次启动
1.4.2 盯着标志留下了。对此感到抱歉。

**openGym 在 iOS 15.5 至 16.3 上再次启动** (P1)。 1.4.2 和网络演示坐在启动栏上
永远存在，因为一个微小的链接检查使用了 Safari 在 16.4 中才学会的正则表达式语法。
重写后，构建现在像应用程序一样以 Safari 15 为目标，并且测试会读取每个构建的文件
旧 iPhone 无法处理语法。如果浏览器仍然卡住，openGym 会在屏幕上显示
带有错误和重新加载按钮，而不是永远解除徽标。感谢 h097327 的
优秀的报告。一旦启动，iOS 15.5 至 16.1 也会恢复其缺失的色调（Coach 的
标题和错误气泡、管理药丸、焦点卡的徽章、有色按钮、正文
地图的阴影）：普通的替代品足够接近，您需要一个颜色选择器来辨别，并进行测试
确保每一种新色彩都会带来一种。

**健身提醒**（#614，手机应用程序）。走进您的健身房，openGym 会提示您点击“开始”。添加
您的健身房，请在“设置”→“提醒”→“健身房提醒”中：“我现在在健身房”或在
OpenStreetMap 地图，每个都有自己的半径和文本。最多一天一次，训练后就不再这样了，
切勿在锻炼期间进行，也可以选择仅在特定时间之间进行。默认关闭，您的健身房仍保持开启状态
手机（不在您的服务器上，不在备份中）。 Android使用系统自带的接近警报，
所以不需要谷歌服务。 Android 可能会很慢地注意到您到达（最多半小时），
因此，在健身房附近，手机可以进行简短的 GPS 搜索，然后将您推到门口；需要 openGym 的
电池使用不受限制（设置显示为“快速到达检查”）。如果您登录了
在您的笔记本电脑上进行锻炼时，您的手机尚未同步，手机会首先询问您的服务器（3
最多几秒钟）而不是无论如何都在唠叨你。

**在开始之前查看会话的内容

<details><summary>查看原文</summary>

The community release. Most of what's below was asked for on GitHub and Discord or sent in as a
pull request, the Apple Watch learned a whole bag of tricks, and openGym starts again on iPhones
that 1.4.2 left staring at the logo. Sorry about that one.

**openGym starts again on iOS 15.5 to 16.3** (P1). 1.4.2 and the web demo sat on the splash
forever there, because one tiny link check used regex syntax Safari only learned in 16.4.
Rewritten, the build now targets Safari 15 like the app does, and a test reads every built file
for syntax older iPhones can't handle. Should a browser still choke, openGym says so on screen
with the error and a Reload button instead of lifting the logo forever. Thanks h097327 for the
excellent report. Once it starts, iOS 15.5 to 16.1 also gets its missing tints back (the Coach's
header and error bubbles, the admin pills, the focus card's badges, the tinted buttons, the body
map's shades): plain stand-ins close enough that you'd need a colour picker to tell, and a test
makes sure every new tint brings one.

**Gym reminder** (#614, phone app). Walk into your gym and openGym nudges you to hit Start. Add
your gyms in Settings → Reminders → Gym reminder: "I'm at the gym right now" or a pin on an
OpenStreetMap map, each with its own radius and text. Once a day at most, never after you trained,
never mid-workout, optionally only between certain hours. Off by default, and your gyms stay on
the phone (not on your server, not in backups). Android uses the system's own proximity alerts,
so no Google services are needed. Android can be slow to notice you arrived (up to half an hour),
so near a gym the phone can take a short GPS look and nudge you at the door; that needs openGym's
battery use on Unrestricted (Settings shows it as "Quick arrival check"). And if you logged a
workout on your laptop that your phone hasn't synced yet, the phone asks your server first (3
seconds at most) instead of nagging you anyway.

**See what a session hits before you s

</details>

---

### [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) `✅ 正式版` `V1.0.322`

发布时间：2026-10-26（2 小时前）｜ [查看 Release](https://github.com/Monica-Pass/Monica/releases/tag/V1.0.322)

# Monica Android 

## 中文

- 修复部分笔记内容显示为 `MDK|…` 乱码的问题。附近设备同步接收的笔记，以及从数据库导出包恢复的笔记，曾以加密形式写入本地，笔记列表与详情直接显示了密文。现在接收和恢复的笔记保持笔记原有的存储格式；解锁后会自动将已受影响的笔记恢复为原文，包括已在编辑器中再次保存过的笔记，不改变修改时间和同步归属。

- 修复 HOTP 点击“生成下一个”后跳到列表最前面的问题。验证码顺序保留收藏优先级和手动排序，默认顺序不再随计数器更新而变化；计数器与同步修改时间仍正常更新。

- 修复 HOTP“生成下一个”按钮撑高磁贴的问题。所有验证码磁贴保留原有紧凑尺寸，生成按钮复用次码位置，减少内边距并适配文字大小；放大字号仍完整显示验证码和按钮，生成与复制互不误触。

- 卡包多选列表中的卡叠新增独立展开／收起按钮；收起后可长按拖动整组调整卡叠顺序，重新进入页面仍保留排序。展开与收起保留逐张选择和选择计数，排序不改变卡叠成员顺序或封面。

- 优化密码列表加载与滚动：减少滚动期间的页面重组，复用分类数据订阅，并避免相同数据快照重复生成脱敏列表；保留原有回顶、快速定位、返回位置、搜索、分组和数据处理规则。

- 新增独立 Root 授权，可替代 Shizuku 使用增强无障碍恢复和设置默认密码管理器；Root 通道无需安装或运行 Shizuku。
- 授权方式可切换，提供授权状态、重新授权与停用入口，命令失败后仍可停用 Root。只有主动确认后才请求 Root；无 Root、拒绝或超时会提示，不会自动切换授权方式。停用或切换方式后，排队请求和迟到的授权结果不会重新启用 Root。
- 无障碍恢复仍需手动启用后台保护和增强恢复，仅重连已开启的 Monica 服务；默认密码管理器保留配置备份、写入校验和恢复功能，仍需 Android 14 或更新版本。

<details><summary>查看原文</summary>

## English

- Fixed some notes showing garbled `MDK|…` text. Notes received through nearby device sync, or restored from a database export archive, were stored locally in encrypted form, so the note list and details displayed the ciphertext. Received and restored notes now keep the regular note storage format, and affected notes, including ones saved again from the editor, are restored to their original text after unlocking without changing modification times or sync ownership.

- Fixed HOTP moving to the front of the list after Generate Next. Authenticator ordering retains favorites and manual ranks, with a stable default order across counter updates. Counter values and modification timestamps still update normally for synchronization.

- Fixed the HOTP Generate Next button increasing tile height. All authenticator tiles retain their compact size, with the action using the next-code footer, reduced padding and text that fits the available space. Codes and labels remain complete at larger font sizes, with separate generation and copy actions.

- Added separate expand/collapse controls to card stacks in wallet multiselect. Long-press a collapsed stack to reorder stacks, with the order retained when reopening the wallet. Expansion preserves individual selections and counts; dragging keeps stack membership, internal card order and covers intact.

- Optimized password-list loading and scrolling by reducing page recompositions during scrolling, sharing category subscriptions, and avoiding repeated metadata copies for unchanged snapshots. Existing back-to-top, fast-scroll, position restoration, search, grouping, and data-handling behavior are preserved.

- Added direct Root authorization as an alternative to Shizuku for enhanced accessibility recovery and setting the default password manager. The Root backend works without Shizuku installed or running.
- Choose the authorization method, view its status, authorize again, or disable Root, including after a failed com

</details>

---

### [t59688/newsnook](https://github.com/t59688/newsnook) `🧪 测试版` `v1.9.1-beta.9`

发布时间：2026-10-26（4 小时前）｜ [查看 Release](https://github.com/t59688/newsnook/releases/tag/v1.9.1-beta.9)

## 有所闻 NewsNook v1.9.1-beta.9

### 订阅与界面
- 分类栏与信源筛选条统一横向滚动样式，对齐更稳。
- 预设切换器按平台处理内置浏览器：Android 保留打开能力，Web 隐藏相关控件。

### 其它
- 主导航状态更新改用 startTransition，切换更顺；加载兜底样式与布局更一致。
- 版本号 1.9.1-beta.9

---

### [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) `📝 提交` `8a9486f`

发布时间：2026-10-26（4 小时前）｜ [查看提交](https://github.com/1c7/chinese-independent-developer/commit/8a9486f9e6ba6fa52796635a4dec23698b8e4205)

新增 GameSkill（程序员版面）

---

### [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) `📝 提交` `e462df2`

发布时间：2026-10-26（4 小时前）｜ [查看提交](https://github.com/Aethersailor/Custom_OpenClash_Rules/commit/e462df257a8eeb1de45b4c22ec21414bb25305cf)

*（原文，翻译暂不可用）*

chore(rules): auto generate derived rule files

---

### [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) `🧪 测试版` `draft`

发布时间：2026-10-26（2 小时前）｜ [查看 Release](https://github.com/hiddify/hiddify-app/releases/tag/draft)

*（原文，翻译暂不可用）*

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

OfficialSetup x64 

Setup x64 

Portable x64 

macOS (v10.15+)

DMG Universal 

PKG Universal 

Linux

DebPackage x64 

**List of all changes:** ChangeLog

---

### [adysec/tracker](https://github.com/adysec/tracker) `📝 提交` `fa9cbd9`

发布时间：2026-10-26（19 分钟前）｜ [查看提交](https://github.com/adysec/tracker/commit/fa9cbd96f0823d97bb437ee7bfeccc57649cc404)

*（原文，翻译暂不可用）*

20261026

---

### [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) `✅ 正式版` `v2026.10.26-8483.9515261`

发布时间：2026-10-26（3 小时前）｜ [查看 Release](https://github.com/DIYgod/RSSHub/releases/tag/v2026.10.26-8483.9515261)

*（原文，翻译暂不可用）*

Source commit: 95152618daf61da2d87b031361a6cb19966e85d6

---

## 📋 全部项目（按最近更新排序）

| 项目 | 最新版本 | 类型 | 更新时间 | 距今 |
|---|---|---|---|---|
| [adysec/tracker](https://github.com/adysec/tracker) | — | 提交 | 2026-10-26 | 19 分钟前 |
| [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) | `V1.0.322` | 正式版 | 2026-10-26 | 2 小时前 |
| [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) | `draft` | 测试版 | 2026-10-26 | 2 小时前 |
| [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) | `v2026.10.26-8483.9515261` | 正式版 | 2026-10-26 | 3 小时前 |
| [t59688/newsnook](https://github.com/t59688/newsnook) | `v1.9.1-beta.9` | 测试版 | 2026-10-26 | 4 小时前 |
| [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) | — | 提交 | 2026-10-26 | 4 小时前 |
| [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) | — | 提交 | 2026-10-26 | 4 小时前 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | `v1.4.3` | 正式版 | 2026-10-26 | 4 小时前 |
| [ArvinLovegood/go-stock](https://github.com/ArvinLovegood/go-stock) | `v2026.10.26.1-release` | 正式版 | 2026-10-26 | 8 小时前 |
| [Ajaxc/WeChatList](https://github.com/Ajaxc/WeChatList) | `2.5.4` | 正式版 | 2026-10-26 | 11 小时前 |
| [tingaicompass/AI-Compass](https://github.com/tingaicompass/AI-Compass) | — | 提交 | 2026-10-26 | 13 小时前 |
| [bilibili/Index-Translate](https://github.com/bilibili/Index-Translate) | — | 提交 | 2026-10-26 | 13 小时前 |
| [UniClipboard/UniClipboard](https://github.com/UniClipboard/UniClipboard) | `v1.5.0` | 正式版 | 2026-10-26 | 16 小时前 |
| [AIsouler/MyClash](https://github.com/AIsouler/MyClash) | — | 提交 | 2026-10-26 | 16 小时前 |
| [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) | `latest` | 正式版 | 2026-10-26 | 18 小时前 |
| [XIU2/TrackersListCollection](https://github.com/XIU2/TrackersListCollection) | — | 提交 | 2026-10-26 | 18 小时前 |
| [crimera/piko-newx](https://github.com/crimera/piko-newx) | `v3.64.1` | 正式版 | 2026-10-25 | 19 小时前 |
| [ngosang/trackerslist](https://github.com/ngosang/trackerslist) | — | 提交 | 2026-10-25 | 19 小时前 |
| [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules) | `202610252236` | 正式版 | 2026-10-25 | 20 小时前 |
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | `v0.20.0` | 正式版 | 2026-10-25 | 22 小时前 |
| [crimera/piko](https://github.com/crimera/piko) | `v3.11.0-dev.3` | 测试版 | 2026-10-25 | 1 天前 |
| [johamwon/wechrss](https://github.com/johamwon/wechrss) | — | 提交 | 2026-10-25 | 1 天前 |
| [Inginnng/EditHere](https://github.com/Inginnng/EditHere) | `v0.12.1` | 正式版 | 2026-10-25 | 1 天前 |
| [ZCShou/GoGoGo](https://github.com/ZCShou/GoGoGo) | `v2.5.2` | 正式版 | 2026-10-25 | 1 天前 |
| [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) | `v7.3.1.13` | 正式版 | 2026-10-25 | 1 天前 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | `v4.29.3` | 正式版 | 2026-10-24 | 2 天前 |
| [mason173/aira-browser](https://github.com/mason173/aira-browser) | `v3.8.4` | 正式版 | 2026-10-24 | 2 天前 |
| [xiaoyaDev/xiaoya-alist](https://github.com/xiaoyaDev/xiaoya-alist) | — | 提交 | 2026-10-24 | 2 天前 |
| [komi-store/komi-store](https://github.com/komi-store/komi-store) | `v1.9.4` | 正式版 | 2026-10-24 | 2 天前 |
| [chen08209/FlClash](https://github.com/chen08209/FlClash) | `v0.9.2` | 正式版 | 2026-10-24 | 2 天前 |
| [SagerNet/sing-box](https://github.com/SagerNet/sing-box) | `v1.15.0-alpha.13` | 测试版 | 2026-10-24 | 2 天前 |
| [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) | `v2.3.3` | 正式版 | 2026-10-23 | 3 天前 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | `v0.7.39` | 正式版 | 2026-10-23 | 3 天前 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | `v1.6.0` | 正式版 | 2026-10-23 | 3 天前 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | `autogpt-platform-beta-v0.9.0` | 测试版 | 2026-10-23 | 3 天前 |
| [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) | — | 提交 | 2026-10-23 | 3 天前 |
| [T8RIN/ImageToolbox](https://github.com/T8RIN/ImageToolbox) | `4.3.0-beta02` | 测试版 | 2026-10-22 | 4 天前 |
| [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) | `26.10.22-2` | 正式版 | 2026-10-22 | 4 天前 |
| [joeytoday/obsidian-canvas-enhance](https://github.com/joeytoday/obsidian-canvas-enhance) | `1.0.11` | 正式版 | 2026-10-22 | 4 天前 |
| [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) | `v1.19.7` | 正式版 | 2026-10-22 | 4 天前 |
| [fw876/helloworld](https://github.com/fw876/helloworld) | `v198.2` | 正式版 | 2026-10-22 | 4 天前 |
| [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) | `v1.19.33` | 正式版 | 2026-10-21 | 5 天前 |
| [exteraless/exteraless](https://github.com/exteraless/exteraless) | `ci-8b7ec40` | 测试版 | 2026-10-21 | 5 天前 |
| [XTLS/Xray-core](https://github.com/XTLS/Xray-core) | `v26.10.21` | 正式版 | 2026-10-21 | 5 天前 |
| [z-mio/parse_hub_bot](https://github.com/z-mio/parse_hub_bot) | `v2.2.6` | 正式版 | 2026-10-21 | 5 天前 |
| [z-mio/ParseHub](https://github.com/z-mio/ParseHub) | `v2.3.14` | 正式版 | 2026-10-21 | 5 天前 |
| [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | `v0.102.2933.0` | 正式版 | 2026-10-21 | 5 天前 |
| [myikuns/jichangtz-tuijian](https://github.com/myikuns/jichangtz-tuijian) | — | 提交 | 2026-10-21 | 5 天前 |
| [LifeArchiveProject/WeChatDataAnalysis](https://github.com/LifeArchiveProject/WeChatDataAnalysis) | `macos-source-runtime-39523784335-3` | 正式版 | 2026-10-21 | 5 天前 |
| [xgit01/sgkrank](https://github.com/xgit01/sgkrank) | — | 提交 | 2026-10-20 | 6 天前 |
| [Lingyan000/fluxdo](https://github.com/Lingyan000/fluxdo) | `v0.2.29` | 正式版 | 2026-10-20 | 6 天前 |
| [hicccc77/WeFlow](https://github.com/hicccc77/WeFlow) | — | 提交 | 2026-10-20 | 6 天前 |
| [ShareX/ShareX](https://github.com/ShareX/ShareX) | `v22.0.0` | 测试版 | 2026-10-20 | 6 天前 |
| [KaringX/clashmi](https://github.com/KaringX/clashmi) | `v1.0.32.1800` | 测试版 | 2026-10-19 | 7 天前 |
| [felinics/Memoh](https://github.com/felinics/Memoh) | `v0.22.0` | 正式版 | 2026-10-19 | 7 天前 |
| [ZGMFX01A/OrigRead](https://github.com/ZGMFX01A/OrigRead) | `v1.7.1` | 正式版 | 2026-10-18 | 8 天前 |
| [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) | `v3.0.20` | 正式版 | 2026-10-18 | 8 天前 |
| [kenischu/ReSource](https://github.com/kenischu/ReSource) | `3.0.8` | 正式版 | 2026-10-18 | 8 天前 |
| [Niklaus88/Clash-Config](https://github.com/Niklaus88/Clash-Config) | — | 提交 | 2026-10-17 | 9 天前 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | `v0.7.0` | 正式版 | 2026-10-16 | 9 天前 |
| [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) | `v1.6.5` | 正式版 | 2026-10-16 | 10 天前 |
| [Teamper/JHS](https://github.com/Teamper/JHS) | `v6.5.2` | 正式版 | 2026-10-16 | 10 天前 |
| [waditu/czsc](https://github.com/waditu/czsc) | `v1.0.2` | 正式版 | 2026-10-16 | 10 天前 |
| [NEORUAA/MeiloX](https://github.com/NEORUAA/MeiloX) | `1.55.1` | 正式版 | 2026-10-16 | 10 天前 |
| [gkd-kit/gkd](https://github.com/gkd-kit/gkd) | `v1.13.0-beta-2` | 测试版 | 2026-10-15 | 11 天前 |
| [jiangrui1994/CloudSaver](https://github.com/jiangrui1994/CloudSaver) | — | 提交 | 2026-10-15 | 11 天前 |
| [JushiZen/Nimbus.Player](https://github.com/JushiZen/Nimbus.Player) | — | 提交 | 2026-10-15 | 11 天前 |
| [daimiaopeng/coolapk-desktop](https://github.com/daimiaopeng/coolapk-desktop) | `v1.35.0` | 正式版 | 2026-10-15 | 11 天前 |
| [xweiba/location-spoofer](https://github.com/xweiba/location-spoofer) | `v1.0.9` | 正式版 | 2026-10-14 | 12 天前 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | — | 提交 | 2026-10-14 | 12 天前 |
| [dukangalex/HiClash](https://github.com/dukangalex/HiClash) | — | 提交 | 2026-10-13 | 13 天前 |
| [7723mod/NPatch](https://github.com/7723mod/NPatch) | `v1.0.9` | 正式版 | 2026-10-12 | 14 天前 |
| [dongyubin/IPTV](https://github.com/dongyubin/IPTV) | — | 提交 | 2026-10-11 | 15 天前 |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | `mineru-4.0.12-released` | 正式版 | 2026-10-11 | 15 天前 |
| [pengchujin/livecanvas](https://github.com/pengchujin/livecanvas) | — | 提交 | 2026-10-10 | 16 天前 |
| [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) | `v2.5.8` | 正式版 | 2026-10-09 | 17 天前 |
| [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) | — | 提交 | 2026-10-08 | 18 天前 |
| [jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader) | `desktop-v0.12.5` | 正式版 | 2026-10-08 | 18 天前 |
| [hoothin/UserScripts](https://github.com/hoothin/UserScripts) | — | 提交 | 2026-10-07 | 18 天前 |
| [reeden-org/reeden-app](https://github.com/reeden-org/reeden-app) | `v1.43.1` | 正式版 | 2026-10-07 | 19 天前 |
| [AyuGram/AyuGramDesktop](https://github.com/AyuGram/AyuGramDesktop) | `v7.2.9` | 正式版 | 2026-10-05 | 21 天前 |
| [HyNetworks/hysteria](https://github.com/HyNetworks/hysteria) | `app/v2.13.0` | 正式版 | 2026-10-05 | 21 天前 |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | `v1.15.0` | 正式版 | 2026-10-04 | 21 天前 |
| [linesoft2/TaskMonitor](https://github.com/linesoft2/TaskMonitor) | `v2026.9.30.1` | 正式版 | 2026-09-30 | 26 天前 |
| [xykt/IPQuality](https://github.com/xykt/IPQuality) | — | 提交 | 2026-09-30 | 26 天前 |
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