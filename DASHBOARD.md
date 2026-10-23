# ⭐ Star 动态看板

> 生成时间：2026-10-23 05:37:44 UTC ｜ 共 174 个项目 ｜ 每 3 小时自动更新

## 🆕 本次新增（11）

### [Inginnng/EditHere](https://github.com/Inginnng/EditHere) `✅ 正式版` `v0.11.2`

发布时间：2026-10-23（1 小时前）｜ [查看 Release](https://github.com/Inginnng/EditHere/releases/tag/v0.11.2)

**简体中文** · English

本次为稳定修复版，继续沿用 0.11.1 的反馈 JSON 与项目格式，不包含尚在评估的格式升级。

- **Windows 长截图闪烁**：修复窗口采集排除不可用时，反复隐藏和显示整屏暗罩、选框造成的明暗闪烁。遮罩与运行选框持续显示，采集区域保持挖空，并兼顾分数缩放、移动选区和全屏选区（#22）。
- **诊断更完整**：记录 Windows 采集排除结果、错误码及控件回退状态，相同配置不逐帧重复写日志。更新后如仍闪烁，可通过「设置 → 诊断日志 → 导出诊断日志…」反馈。
- **安装与批注修复**：保留 OneDrive 云桌面快捷方式的安装修复；修复删除按钮首次点击被拦截，以及焦点切换导致移动批注卡片被重建的问题。
- **打包稳定性**：Linux AppImage 使用固定版本和校验和的运行时，Web ZIP 保持跨平台构建可复现。
- **反馈格式保持稳定**：现有 JSON、工程、CLI 和 skill 继续沿用 0.11.1 契约。新增编号、OCR 文本、图片包、页面来源等反馈格式实验暂存于 `codex/feedback-json-development`，待确认后单独评审。

提供 Windows 安装器与免安装 ZIP、macOS 通用 DMG、Linux AppImage，以及离线 Web 与 Web Agent 包。请完整安装或解压，保留随包运行库及插件。

---

<details><summary>查看原文</summary>

## English

This maintenance release retains the feedback JSON and project formats from 0.11.1. The proposed format changes remain under evaluation and are not included.

- **Windows scrolling capture**: fixes the flashing caused by repeatedly hiding and showing the screen shade and selection frame when capture exclusion is unavailable. The shade and running frame remain visible while leaving the sampled pixels uncovered, including fractional scaling, moved selections and full-screen selections (#22).
- **More useful diagnostics**: records Windows capture-exclusion results, error codes and control fallback state without repeating the same configuration every frame. If flashing persists, use Settings → Diagnostic logs → Export diagnostic logs to provide details.
- **Installation and annotation fixes**: retains the OneDrive cloud-desktop shortcut installation fix; corrects the first delete-button click being intercepted and movement cards being recreated during focus changes.
- **Packaging reliability**: pins the Linux AppImage runtime to a versioned, checksum-verified asset and keeps Web ZIP builds reproducible across platforms.
- **Stable feedback contract**: JSON, project files, the CLI and skills keep the 0.11.1 contract. Experiments involving numbering, OCR text, image bundles and page context remain on `codex/feedback-json-development` for separate review.

Packages include the Windows installer and portable ZIP, universal macOS DMG, Linux AppImage, offline Web and Web Agent editions. Install or extract the complete package, keeping its runtime libraries and plugins.

</details>

---

### [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) `✅ 正式版` `v7.3.1.10`

发布时间：2026-10-23（2 小时前）｜ [查看 Release](https://github.com/Kindness-Kismet/AstraGram-Desktop/releases/tag/v7.3.1.10)

- 新增了已访问聊天的离线浏览功能，现在没有网络时也可以查看聊天列表、消息记录、链接预览、投票、回应、贴纸、自定义表情和已缓存的小文件
- 新增了按类别和聊天管理缓存的功能，现在可以查看存储占用，清理选中的类别或单个聊天，并分别设置私聊、群组、频道和动态的保留时长
- 新增了文章内查看媒体的功能，现在可以直接在文章窗口里打开文章中的图片和视频
- 调整了主题编辑的行为，现在会打开主题创建对话框，支持按类别搜索颜色、调整不透明度、引用其他颜色、实时预览和逐项还原，未保存的草稿重启后也会保留
- 调整了聊天列表中下载和更新提示的行为，现在顶部下载按钮会在下载时播放动画并显示数量，有可用更新时旁边会出现更新按钮，点击后可以查看更新说明并选择更新或跳过
- 调整了隐身模式和主播模式设置的保存方式，现在每个账号分别保存自己的设置
- 调整了媒体查看器的关闭方式，现在点击空白处不会再关闭查看器，窗口内查看器和文章查看器可以拖动顶栏移动
- 调整了默认聊天背景，现在浅色和深色主题都使用中性灰色
- 对文件消息进行了改善，这使得文件名会完整地分行显示，不再省略中间部分
- 对页面和面板的切换动画进行了改善，这使得切换时改为原地淡入淡出而不是滑动，表情面板移入和移出侧栏时也使用与资料面板相同的动画
- 对媒体查看器的菜单进行了改善，这使得菜单会跟随应用的浅色或深色主题
- 对设置页中的预览进行了改善，这使得预览与页面共用背景，贴纸预览也移到了大小滑块上方
- 对贴纸面板的悬停效果进行了改善，这使得悬停时只加深贴纸本身，与贴纸联想保持一致
- 对聊天文件夹进行了改善，这使得第一次打开文件夹时就能立即显示聊天头像
- 对主菜单项目设置进行了改善，这使得标题中会提示可以长按拖动排序
- 移除了自定义应用图标功能，选择其他应用图标不再可用
- 移除了媒体查看器顶栏中的图片标签，单张图片不再显示通用的图片入口
- 修复了关于启动时聊天文件夹的错误，该问题曾导致隐藏“所有聊天”后没有选中任何文件夹，以及短暂显示已隐藏的聊天
- 修复了关于转发对话框的错误，该问题曾导致列表较短时对话框向下偏移
- 修复了关于对话框内搜索的错误，该问题曾导致对话框打开后搜索栏、文件夹标签和列表发生跳动
- 修复了关于消息菜单中已读回执的错误，该问题曾导致显示单个对勾而不是双对勾
- 修复了关于查看视频封面的错误，该问题曾导致视频下载过程中右键菜单里的这一项消失
- 修复了关于 Windows 上另存为对话框的错误，该问题曾导致旁边出现一个空白小窗口
- 修复了关于贴纸包菜单按钮的错误，该问题曾导致悬停背景偏离中心并被裁切

<details><summary>查看原文</summary>

- Added offline browsing for visited chats, so you can now open the chat list, message history, link previews, polls, reactions, stickers, custom emoji and cached small files without a connection
- Added cache management by category and chat, so you can now see what uses storage, clear selected categories or single chats and set separate retention periods for private chats, groups, channels and stories
- Added in-window media for articles, so you can now open photos and videos from an article without leaving the article window
- Changed how theme editing works; it now opens a theme creator dialog with searchable color categories, opacity, reference colors, previews and per-color reset, and keeps unsaved drafts across restarts
- Changed how downloads and updates appear in the chat list; the header download button animates and shows a count while files load, and a ready update appears as a button next to it that opens the release notes with update and skip actions
- Changed how ghost mode and streamer mode settings are saved; each account now keeps its own settings
- Changed how media viewers close; clicking empty space no longer closes them, and the in-window and article viewers can be moved by dragging their top bar
- Changed the default chat background; it now uses a neutral gray in both light and dark themes
- Improved file messages, which now show complete file names on multiple lines instead of cutting out the middle
- Improved page and panel transitions, which now fade in place instead of sliding, and the emoji panel moves into and out of the side column with the same animation as the info panel
- Improved media viewer menus, which now follow the light or dark app theme
- Improved settings previews, which now share the page background and show the sticker preview above its size slider
- Improved the sticker panel hover effect, which now darkens only the sticker itself like sticker suggestions
- Improved chat folders, which now show chat avatars right away the f

</details>

---

### [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) `📦 规则集` `latest`

发布时间：2026-10-23（4 小时前）｜ [查看 Release](https://github.com/appshubcc/bett-rules/releases/tag/latest)

*（无更新说明）*

---

### [UniClipboard/UniClipboard](https://github.com/UniClipboard/UniClipboard) `🧪 测试版` `v1.4.0-alpha.3`

发布时间：2026-10-23（2 小时前）｜ [查看 Release](https://github.com/UniClipboard/UniClipboard/releases/tag/v1.4.0-alpha.3)

## 1.4.0-alpha.3 - 2026-10-23

### 特点

- 添加连接电话和加入空间的分步指南，并将设置、连接详细信息和网络设置保存在一个面板中 (#2086)

### 修复

- 防止过时的加入结果在重新启动加入空间的过程后更改屏幕 (#2086)

**变更日志文件**

- 英文更新日志：1.4.0-alpha.3.md
- 中文变更日志: 1.4.0-alpha.3.zh.md

## 售前警告

这是一个 **alpha** 版本，可能包含错误或不完整的功能。
不建议用于生产用途。请在 GitHub 上报告问题。

## Windows 软件包没有代码签名

此版本中的 Windows 安装程序、可移植 zip 和 CLI 存档**未经过代码签名**。 Windows SmartScreen 或防病毒软件可能会发出警告。根据“SHA256SUMS.txt”（和“SHA256SUMS.txt.minisig”）验证下载。应用内更新仍通过更新程序签名进行验证。

## 应用程序安装

## 验证

所有版本均已签名。提供`.sig`文件用于验证。

<details><summary>查看原文</summary>

## 1.4.0-alpha.3 - 2026-10-23

### Features

- Add step-by-step guidance for connecting a phone and joining a space, with setup, connection details, and network settings kept in one panel (#2086)

### Fixes

- Prevent outdated join results from changing the screen after restarting the process of joining a space (#2086)

**Changelog Files**

- English changelog: 1.4.0-alpha.3.md
- 中文变更日志: 1.4.0-alpha.3.zh.md

##  Prerelease Warning

This is a **alpha** release and may contain bugs or incomplete features.
Not recommended for production use. Please report issues on GitHub.

##  Windows packages are not code-signed

The Windows installer, portable zip and CLI archive in this release are **not code-signed**. Windows SmartScreen or antivirus software may warn about them. Verify the downloads against `SHA256SUMS.txt` (and `SHA256SUMS.txt.minisig`). In-app updates are still verified with the updater signature.

## App Installation

## Verification

All releases are signed. `.sig` files are provided for verification.

</details>

---

### [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) `✅ 正式版` `v2.3.2`

发布时间：2026-10-23（33 分钟前）｜ [查看 Release](https://github.com/x554960766/wechat-mp-tools/releases/tag/v2.3.2)

* fix: mixed avatar | 修复同id公众号头像会混淆的问题

---

### [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) `📝 提交` `d3c982c`

发布时间：2026-10-23（4 小时前）｜ [查看提交](https://github.com/yijixiuxin/chanlun-pro/commit/d3c982c81ab2e2bce89a19988ee944e37362869a)

回测学习空格控制暂停开始

---

### [t59688/newsnook](https://github.com/t59688/newsnook) `🧪 测试版` `v1.9.1-beta.5`

发布时间：2026-10-23（33 分钟前）｜ [查看 Release](https://github.com/t59688/newsnook/releases/tag/v1.9.1-beta.5)

## 有所闻 NewsNook v1.9.1-beta.5

### 阅读与媒体

- 修复 #85：RSS 周刊等图文文章包含内嵌视频时，被错误识别为纯视频内容，造成正文只显示短摘要、无法继续滚动阅读。
- RSS、Atom、JSON Feed 现在区分明确的视频附件或视频页面与普通正文中的视频嵌入；保留文章全文及原有的内嵌视频播放能力。
- 改进旧版误分类缓存的恢复逻辑，避免修复图文内容时影响正常的独立视频订阅。

### 验证

- 已通过用户的实机阅读测试；第 286、283、282 等含视频的潮流周刊在解析测试中均保留完整正文与视频节点。
- RSS 视频、Feed 分页、应用更新测试及生产构建通过。

相关问题：Issue #85

---

### [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) `📝 提交` `7cdd053`

发布时间：2026-10-23（3 小时前）｜ [查看提交](https://github.com/1c7/chinese-independent-developer/commit/7cdd053b6d30620da8b2737b5d179614f628a566)

收录 Paper Texture（在线纸纹叠加编辑器）

---

### [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) `📝 提交` `d518851`

发布时间：2026-10-23（1 小时前）｜ [查看提交](https://github.com/Aethersailor/Custom_OpenClash_Rules/commit/d51885128e6066b7f40eb609fe15e6ec0a8c3c4c)

*（原文，翻译暂不可用）*

ci: rebuild comprehensive automated CodeQL analysis

---

### [adysec/tracker](https://github.com/adysec/tracker) `📝 提交` `1104b6f`

发布时间：2026-10-23（1 小时前）｜ [查看提交](https://github.com/adysec/tracker/commit/1104b6f5b91e1e1eca6b7cfb8a5f4c6d8e3e0b49)

*（原文，翻译暂不可用）*

20261023

---

### [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) `🧪 测试版` `autogpt-platform-beta-v0.9.0`

发布时间：2026-10-23（4 小时前）｜ [查看 Release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.9.0)

*（原文，翻译暂不可用）*

##  What's New?

### New Features

- **#15824** - Add measures and admin tools against multi-account abuse (by @Pwuts)
- **#14553** - Self-host from the Docker Hub image, with a Windows installer (by @ntindle)
- **#14981** - Every block declares its effect; Auto judges cheap outward actions and asks first on costly ones (by @Pwuts)
- **#15675** - Add admin users page to look up, ban and impersonate a user, with rate limits folded in (by @Pwuts)
- **#15859** - Send the browser tools' traffic through an egress proxy (by @ntindle)
- **#15215** - Redesign usage limits and review upgrade charges (by @Torantulino)
- **#15388** - AutoPilot turns pause at their limits instead of dying, and Keep going picks them up (by @ntindle)
- **#15390** - Resume or send a chat's turn when the budget resets (by @ntindle)
- **#15403** - Add send at reset, the out-of-budget panel for Max, and a running-low hint (by @ntindle)
- **#15585** - Add voice mode to the + menu; model and token usage open as dialogs (by @0ubbe)
- **#15115** - Add per-expert default approval mode for new web chats (by @Abhi1992002)
- **#14551** - Distill private account and Expert skills during dreaming (by @ntindle)
- **#14960** - Add durable per-scope schedule registry for dream and community jobs with lifecycle hooks and backfill (by @ntindle)
- **#14961** - Add durable DreamPass record written from the sync and batch dream paths (by @ntindle)
- **#14970** - Add one guard against overlapping dream passes and a stop path built on the DreamPass record (by @ntindle)
- **#15374** - A scheduled chat says once why its run was skipped (by @ntindle)
- **#15375** - Pause a scheduled chat that keeps failing the same way, and say why (by @ntindle)
- **#15377** - Alert the owner when a scheduled chat pauses, list it on Home, resume it on reconnect (by @ntindle)
- **#15400** - Run a scheduled chat less often from its usage-limit note (by @ntindle)
- **#14865** - Serve the swap proxy from a service that exp

---

## 📋 全部项目（按最近更新排序）

| 项目 | 最新版本 | 类型 | 更新时间 | 距今 |
|---|---|---|---|---|
| [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) | `v2.3.2` | 正式版 | 2026-10-23 | 33 分钟前 |
| [t59688/newsnook](https://github.com/t59688/newsnook) | `v1.9.1-beta.5` | 测试版 | 2026-10-23 | 33 分钟前 |
| [Inginnng/EditHere](https://github.com/Inginnng/EditHere) | `v0.11.2` | 正式版 | 2026-10-23 | 1 小时前 |
| [adysec/tracker](https://github.com/adysec/tracker) | — | 提交 | 2026-10-23 | 1 小时前 |
| [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) | — | 提交 | 2026-10-23 | 1 小时前 |
| [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) | `v7.3.1.10` | 正式版 | 2026-10-23 | 2 小时前 |
| [UniClipboard/UniClipboard](https://github.com/UniClipboard/UniClipboard) | `v1.4.0-alpha.3` | 测试版 | 2026-10-23 | 2 小时前 |
| [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) | — | 提交 | 2026-10-23 | 3 小时前 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | `autogpt-platform-beta-v0.9.0` | 测试版 | 2026-10-23 | 4 小时前 |
| [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) | — | 提交 | 2026-10-23 | 4 小时前 |
| [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) | `latest` | 正式版 | 2026-10-23 | 4 小时前 |
| [XIU2/TrackersListCollection](https://github.com/XIU2/TrackersListCollection) | — | 提交 | 2026-10-23 | 5 小时前 |
| [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) | `v2026.10.22-8469.6f4f814` | 正式版 | 2026-10-22 | 5 小时前 |
| [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules) | `202610222237` | 正式版 | 2026-10-22 | 7 小时前 |
| [crimera/piko](https://github.com/crimera/piko) | `v3.11.0-dev.1` | 测试版 | 2026-10-22 | 7 小时前 |
| [ngosang/trackerslist](https://github.com/ngosang/trackerslist) | — | 提交 | 2026-10-22 | 7 小时前 |
| [T8RIN/ImageToolbox](https://github.com/T8RIN/ImageToolbox) | `4.3.0-beta02` | 测试版 | 2026-10-22 | 10 小时前 |
| [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) | `26.10.22-2` | 正式版 | 2026-10-22 | 13 小时前 |
| [ArvinLovegood/go-stock](https://github.com/ArvinLovegood/go-stock) | `v2026.10.22.1-release` | 正式版 | 2026-10-22 | 14 小时前 |
| [komi-store/komi-store](https://github.com/komi-store/komi-store) | `v1.9.3` | 正式版 | 2026-10-22 | 15 小时前 |
| [joeytoday/obsidian-canvas-enhance](https://github.com/joeytoday/obsidian-canvas-enhance) | `1.0.11` | 正式版 | 2026-10-22 | 19 小时前 |
| [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) | `v1.19.7` | 正式版 | 2026-10-22 | 23 小时前 |
| [AIsouler/MyClash](https://github.com/AIsouler/MyClash) | — | 提交 | 2026-10-22 | 1 天前 |
| [fw876/helloworld](https://github.com/fw876/helloworld) | `v198.2` | 正式版 | 2026-10-22 | 1 天前 |
| [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) | `v1.19.33` | 正式版 | 2026-10-21 | 1 天前 |
| [exteraless/exteraless](https://github.com/exteraless/exteraless) | `ci-8b7ec40` | 测试版 | 2026-10-21 | 1 天前 |
| [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) | `V1.0.321` | 正式版 | 2026-10-21 | 1 天前 |
| [XTLS/Xray-core](https://github.com/XTLS/Xray-core) | `v26.10.21` | 正式版 | 2026-10-21 | 1 天前 |
| [z-mio/parse_hub_bot](https://github.com/z-mio/parse_hub_bot) | `v2.2.6` | 正式版 | 2026-10-21 | 1 天前 |
| [z-mio/ParseHub](https://github.com/z-mio/ParseHub) | `v2.3.14` | 正式版 | 2026-10-21 | 1 天前 |
| [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | `v0.102.2933.0` | 正式版 | 2026-10-21 | 1 天前 |
| [myikuns/jichangtz-tuijian](https://github.com/myikuns/jichangtz-tuijian) | — | 提交 | 2026-10-21 | 2 天前 |
| [LifeArchiveProject/WeChatDataAnalysis](https://github.com/LifeArchiveProject/WeChatDataAnalysis) | `macos-source-runtime-39523784335-3` | 正式版 | 2026-10-21 | 2 天前 |
| [xiaoyaDev/xiaoya-alist](https://github.com/xiaoyaDev/xiaoya-alist) | — | 提交 | 2026-10-20 | 2 天前 |
| [johamwon/wechrss](https://github.com/johamwon/wechrss) | — | 提交 | 2026-10-20 | 2 天前 |
| [xgit01/sgkrank](https://github.com/xgit01/sgkrank) | — | 提交 | 2026-10-20 | 2 天前 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | `v0.7.38` | 正式版 | 2026-10-20 | 2 天前 |
| [Lingyan000/fluxdo](https://github.com/Lingyan000/fluxdo) | `v0.2.29` | 正式版 | 2026-10-20 | 2 天前 |
| [hicccc77/WeFlow](https://github.com/hicccc77/WeFlow) | — | 提交 | 2026-10-20 | 2 天前 |
| [ShareX/ShareX](https://github.com/ShareX/ShareX) | `v22.0.0` | 测试版 | 2026-10-20 | 3 天前 |
| [KaringX/clashmi](https://github.com/KaringX/clashmi) | `v1.0.32.1800` | 测试版 | 2026-10-19 | 4 天前 |
| [felinics/Memoh](https://github.com/felinics/Memoh) | `v0.22.0` | 正式版 | 2026-10-19 | 4 天前 |
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | `v0.18.0` | 正式版 | 2026-10-18 | 4 天前 |
| [tingaicompass/AI-Compass](https://github.com/tingaicompass/AI-Compass) | — | 提交 | 2026-10-18 | 4 天前 |
| [ZGMFX01A/OrigRead](https://github.com/ZGMFX01A/OrigRead) | `v1.7.1` | 正式版 | 2026-10-18 | 4 天前 |
| [crimera/piko-newx](https://github.com/crimera/piko-newx) | `v3.59.0` | 正式版 | 2026-10-18 | 4 天前 |
| [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) | `v3.0.20` | 正式版 | 2026-10-18 | 4 天前 |
| [kenischu/ReSource](https://github.com/kenischu/ReSource) | `3.0.8` | 正式版 | 2026-10-18 | 5 天前 |
| [chen08209/FlClash](https://github.com/chen08209/FlClash) | `v0.9.1` | 正式版 | 2026-10-17 | 5 天前 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | `v4.29.1` | 正式版 | 2026-10-17 | 5 天前 |
| [Niklaus88/Clash-Config](https://github.com/Niklaus88/Clash-Config) | — | 提交 | 2026-10-17 | 5 天前 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | `v0.7.0` | 正式版 | 2026-10-16 | 6 天前 |
| [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) | `v1.6.5` | 正式版 | 2026-10-16 | 6 天前 |
| [Teamper/JHS](https://github.com/Teamper/JHS) | `v6.5.2` | 正式版 | 2026-10-16 | 6 天前 |
| [waditu/czsc](https://github.com/waditu/czsc) | `v1.0.2` | 正式版 | 2026-10-16 | 7 天前 |
| [NEORUAA/MeiloX](https://github.com/NEORUAA/MeiloX) | `1.55.1` | 正式版 | 2026-10-16 | 7 天前 |
| [gkd-kit/gkd](https://github.com/gkd-kit/gkd) | `v1.13.0-beta-2` | 测试版 | 2026-10-15 | 7 天前 |
| [jiangrui1994/CloudSaver](https://github.com/jiangrui1994/CloudSaver) | — | 提交 | 2026-10-15 | 7 天前 |
| [JushiZen/Nimbus.Player](https://github.com/JushiZen/Nimbus.Player) | — | 提交 | 2026-10-15 | 7 天前 |
| [daimiaopeng/coolapk-desktop](https://github.com/daimiaopeng/coolapk-desktop) | `v1.35.0` | 正式版 | 2026-10-15 | 8 天前 |
| [bilibili/Index-Translate](https://github.com/bilibili/Index-Translate) | — | 提交 | 2026-10-14 | 8 天前 |
| [xweiba/location-spoofer](https://github.com/xweiba/location-spoofer) | `v1.0.9` | 正式版 | 2026-10-14 | 8 天前 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | — | 提交 | 2026-10-14 | 8 天前 |
| [mason173/aira-browser](https://github.com/mason173/aira-browser) | `v3.7.4` | 正式版 | 2026-10-14 | 8 天前 |
| [Ajaxc/WeChatList](https://github.com/Ajaxc/WeChatList) | `2.5.2` | 正式版 | 2026-10-14 | 8 天前 |
| [dukangalex/HiClash](https://github.com/dukangalex/HiClash) | — | 提交 | 2026-10-13 | 9 天前 |
| [7723mod/NPatch](https://github.com/7723mod/NPatch) | `v1.0.9` | 正式版 | 2026-10-12 | 10 天前 |
| [SagerNet/sing-box](https://github.com/SagerNet/sing-box) | `v1.15.0-alpha.12` | 测试版 | 2026-10-11 | 11 天前 |
| [dongyubin/IPTV](https://github.com/dongyubin/IPTV) | — | 提交 | 2026-10-11 | 11 天前 |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | `mineru-4.0.12-released` | 正式版 | 2026-10-11 | 12 天前 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | `v1.4.1` | 正式版 | 2026-10-10 | 12 天前 |
| [pengchujin/livecanvas](https://github.com/pengchujin/livecanvas) | — | 提交 | 2026-10-10 | 13 天前 |
| [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) | `v2.5.8` | 正式版 | 2026-10-09 | 14 天前 |
| [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) | — | 提交 | 2026-10-08 | 14 天前 |
| [jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader) | `desktop-v0.12.5` | 正式版 | 2026-10-08 | 15 天前 |
| [hoothin/UserScripts](https://github.com/hoothin/UserScripts) | — | 提交 | 2026-10-07 | 15 天前 |
| [reeden-org/reeden-app](https://github.com/reeden-org/reeden-app) | `v1.43.1` | 正式版 | 2026-10-07 | 15 天前 |
| [AyuGram/AyuGramDesktop](https://github.com/AyuGram/AyuGramDesktop) | `v7.2.9` | 正式版 | 2026-10-05 | 17 天前 |
| [HyNetworks/hysteria](https://github.com/HyNetworks/hysteria) | `app/v2.13.0` | 正式版 | 2026-10-05 | 18 天前 |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | `v1.15.0` | 正式版 | 2026-10-04 | 18 天前 |
| [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) | `draft` | 测试版 | 2026-10-04 | 18 天前 |
| [linesoft2/TaskMonitor](https://github.com/linesoft2/TaskMonitor) | `v2026.9.30.1` | 正式版 | 2026-09-30 | 22 天前 |
| [xykt/IPQuality](https://github.com/xykt/IPQuality) | — | 提交 | 2026-09-30 | 22 天前 |
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
| [Kyant0/AndroidLiquidGlass](https://github.com/Kyant0/AndroidLiquidGlass) | `2.0.1` | 正式版 | 2026-08-26 | 1 个月前 |
| [Conquerer-yinn/Kakaaaa-quant](https://github.com/Conquerer-yinn/Kakaaaa-quant) | `v1.0.0` | 正式版 | 2026-08-24 | 1 个月前 |
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
| [woijfwefw/ZsxqCrawler](https://github.com/woijfwefw/ZsxqCrawler) | — | 提交 | 2026-06-25 | 3 个月前 |
| [yyyyymmmmm/InkRoot](https://github.com/yyyyymmmmm/InkRoot) | `v1.1.13` | 正式版 | 2026-06-22 | 4 个月前 |
| [loc567/loc567](https://github.com/loc567/loc567) | — | 提交 | 2026-06-19 | 4 个月前 |
| [LibChecker/LibChecker](https://github.com/LibChecker/LibChecker) | `2.5.4` | 正式版 | 2026-06-17 | 4 个月前 |
| [echs-top/proxy](https://github.com/echs-top/proxy) | `zashboard` | 正式版 | 2026-06-15 | 4 个月前 |
| [nicejade/wealth-tracker](https://github.com/nicejade/wealth-tracker) | `v5.0.0` | 正式版 | 2026-06-13 | 4 个月前 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | `v1.5.0` | 正式版 | 2026-06-11 | 4 个月前 |
| [foru17/make-x-great-again](https://github.com/foru17/make-x-great-again) | `v0.4.0` | 正式版 | 2026-05-28 | 4 个月前 |
| [gedoor/legado](https://github.com/gedoor/legado) | — | 提交 | 2026-05-27 | 4 个月前 |
| [zjp1997720/wechat-radar](https://github.com/zjp1997720/wechat-radar) | — | 提交 | 2026-05-26 | 5 个月前 |
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