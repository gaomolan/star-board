# ⭐ Star 动态看板

> 生成时间：2026-10-15 06:49:23 UTC ｜ 共 172 个项目 ｜ 每 3 小时自动更新

## 🆕 本次新增（11）

### [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) `✅ 正式版` `v7.3.1.7`

发布时间：2026-10-15（2 小时前）｜ [查看 Release](https://github.com/Kindness-Kismet/AstraGram-Desktop/releases/tag/v7.3.1.7)

- 调整了自定义通知弹窗的外观，现在采用居中头像、主题背景和关闭与回复按钮的紧凑卡片样式，通知设置中新增“通知样式”选项，可在卡片和叠放之间切换
- 调整了对话列表的更新方式，新消息、草稿或置顶导致对话重新排序时，对话现在会以动画移动到新位置，被移除的对话也会平滑消失而不是瞬间不见
- 调整了登录步骤的切换方式，现在每一步原地淡入淡出，二维码和状态文字保持实时更新，不再从冻结的快照横向滑动
- 调整了从通知跳转到对话的过渡效果，现在原地淡入淡出，不再横向平移
- 调整了窗口内视频播放控件的位置，现在无论视频尺寸和缩放如何，控件始终居中停留在缩略图条或底边上方
- 调整了主菜单抽屉中的归档入口，移除了自定义的归档菜单项，仅保留官方归档按钮，现在由抽屉归档设置控制，显示归档未读计数，单击打开归档，Ctrl+单击在独立窗口打开，右键显示文件夹上下文菜单，归档为空时自动隐藏
- 新增了窗口内媒体查看器中图片的双击缩放，双击图片可在默认大小和以光标为中心的放大视图之间切换，再次双击恢复
- 修复了窗口内媒体查看器顶栏显示来自隐藏发送者的转发消息时的崩溃，快速翻阅媒体时容易触发
- 修复了消息截图预览打开期间消息被删除所导致的崩溃
- 修复了消息被删除后媒体菜单或阅后即焚操作仍继续运行所导致的崩溃
- 修复了转发选择器打开期间源消息消失所导致的崩溃
- 修复了故事在隐身查看确认框打开期间过期后无法再打开的问题
- 修复了退出登录后过滤器对话解析仍在继续所导致的崩溃
- 修复了资料页刷新后收藏音乐菜单仍作用于旧按钮或旧消息的问题
- 修复了切换语言或云语言包更新后内置简体中文翻译丢失的问题
- 修复了关于图片编辑器背景的错误，该问题曾导致窗口背景设为云母或亚克力时清晰的对话列表透出
- 修复了图片编辑器按钮图标大小不一致的问题
- 修复了 Telegram 7.3 新增图片编辑器文字缺少简体中文翻译的问题，涵盖快捷键说明、裁剪至最短、移除音频、圆形圆角和自定义链接文字
- 修复了图片编辑器贴纸面板较矮时“管理贴纸包”链接与媒体按钮重叠的问题

<details><summary>查看原文</summary>

- Changed how custom notification popups look; they are now compact cards with a centered avatar, a themed background and close and reply buttons, and the notification settings offer a new Notification style choice between Cards and Stack
- Changed how the chat list updates; chats now animate to their new position when a new message, draft or pin reorders the list, and removed chats animate away instead of vanishing instantly
- Changed how login steps transition; each step now fades in place, keeping QR codes and status labels live instead of sliding from a frozen snapshot
- Changed how jumping to a chat from a notification looks; the transition now fades in place without the horizontal shift
- Changed how in-window video playback controls are placed; they now stay centered above the thumbnail strip or the bottom edge regardless of video size and zoom
- Changed the archive entry in the main menu drawer; the custom archive item is removed and only the official archive button remains, which now follows the drawer archive setting, shows the archive unread counter, opens the archive on click, opens it in a separate window with Ctrl+click, shows the folder context menu on right click and hides when the archive is empty
- Added double click zoom for photos in the in-window media viewer; double clicking the photo switches between the default size and a zoomed view anchored at the cursor, and another double click returns back
- Fixed a crash in the in-window media viewer header when showing a forwarded message from a hidden sender, which users hit while flipping through media
- Fixed a crash when the message was deleted while its message shot preview was open
- Fixed a crash when media menu or burn-after-read actions ran after the message was removed
- Fixed a crash when the source messages disappeared while the forwarding selector was open
- Fixed an issue where a story could no longer be opened after the ghost mode prompt if it expired while the confirmation box was open

</details>

---

### [daimiaopeng/coolapk-desktop](https://github.com/daimiaopeng/coolapk-desktop) `✅ 正式版` `v1.35.0`

发布时间：2026-10-15（2 小时前）｜ [查看 Release](https://github.com/daimiaopeng/coolapk-desktop/releases/tag/v1.35.0)

## 更新日志

### 新增
- 桌面端支持从账号最近发布的动态、评论中识别手机型号和系统信息，自动用于请求设备配置；无可用记录时使用 iPhone 18 Pro Max 兼容模板。
- 设备设置页展示自动识别的机型及来源。自动配置保留手动指纹和已保存的数盟设备 ID，切换账号时重新识别。
- 搜索分类支持拖动排序，并可收起不常用栏目。
- 无图模式新增详情页图片显示开关。
- 新增浅色界面底色自定义和动态背景图显示开关。
- 话题页新增我的点评卡片。
- 设置页新增“液态玻璃”总开关，默认关闭，可统一控制首页和话题导航的液态玻璃效果。

### 优化
- 移动首页滚动时可自动收起搜索栏和底部导航；详情页底栏支持随滚动隐藏。
- 优化移动端上传、下载布局，并增加 CDN 上传入口。
- 优化首页与话题的沉浸式导航，适配 Android 和 iOS 安全区，并统一上下导航的玻璃效果。
- 优化设置页窄屏和大字体下的布局。
- 设置中心统一使用一个“设置”标签，切换菜单不再新增标签，返回时打开最近访问的栏目；已有固定和收藏的设置标签自动合并。
- 隐藏桌面设置内容区与侧栏重复的栏目标题，保留说明和功能分组。

### 修复
- 修复私信列表中同一联系人可能重复显示的问题，覆盖缓存恢复、刷新及分页加载场景。
- 修复已安装测试版选择稳定版更新渠道时，错误展示旧稳定版更新日志、发布日期和 Release 链接的问题。
- 修正关于页的版本类型与更新渠道说明，避免测试版安装包被误认为稳定版。
- 修复手机快捷入口图标缺失。
- 修复系统榜首屏内容不足时不继续加载下一页，以及双列瀑布流滚动抽动、短列加载不及时的问题。
- 修复切换应用窗口标签后话题列表意外刷新的问题。
- 修复头条刷新和分页时游标传递异常。
- 修复私信图片预览及输入区高度调节问题。
- 修复详情评论点赞状态的主题色显示，以及话题简介文字与背景对比度不足的问题。
- 修复私信列表已收到新消息、当前聊天窗口却未及时更新的问题，现在会自动同步聊天内容，并在展示后更新已读状态；同步时保留输入草稿和历史消息阅读位置。

---

### [JushiZen/Nimbus.Player](https://github.com/JushiZen/Nimbus.Player) `📝 提交` `81bde08`

发布时间：2026-10-15（37 分钟前）｜ [查看提交](https://github.com/JushiZen/Nimbus.Player/commit/81bde08e7f5227e861158438c381fb67e4920e92)

*（原文，翻译暂不可用）*

docs: auto-update contributor avatars

---

### [joeytoday/obsidian-canvas-enhance](https://github.com/joeytoday/obsidian-canvas-enhance) `✅ 正式版` `1.0.9`

发布时间：2026-10-15（3 分钟前）｜ [查看 Release](https://github.com/joeytoday/obsidian-canvas-enhance/releases/tag/1.0.9)

- 修复白板搜索在清空或关闭后仍继续执行、可能导致卡顿的问题
- 修复自动连线将无法解析的文件链接误连到文本或分组卡片的问题
- 改善自定义样式、白板属性和异常数据的处理，提升插件停用及重载时的稳定性

---

### [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) `📝 提交` `c544a8e`

发布时间：2026-10-15（7 分钟前）｜ [查看提交](https://github.com/yijixiuxin/chanlun-pro/commit/c544a8ecbaca28465dd628b4dcf7912484b5c60e)

QMT 鼠标键盘模拟交易支持

---

### [t59688/newsnook](https://github.com/t59688/newsnook) `✅ 正式版` `v1.8.12`

发布时间：2026-10-15（2 小时前）｜ [查看 Release](https://github.com/t59688/newsnook/releases/tag/v1.8.12)

## 有所闻 NewsNook v1.8.12

### 阅读与媒体
- 新增悬浮视频播放功能，同时提升了 Android 端原生站点视频的全屏播放稳定性。
- 图片查看器现已支持旋转与镜像操作；文章预览图显示及阅读位置恢复功能也得到优化。
- 新增选中文字后查询百科的功能，现已支持百度百科作为数据源。

### 订阅与站点
- 新增 RSSHub Radar 功能，可自动探测 RSSHub 实例、预览相关路由并支持批量订阅。
- 站点目录、CMS 工作区及分类管理功能均得到改进。

### 阅读与社区
- 新增跨信源阅读历史记录功能，支持批量删除与恢复操作。
- Linux.do 平台的串楼阅读、通知系统、搜索及私信体验均得到优化。
- 知乎回答切换、评论入口及工作区界面也经过优化处理。

### 外观与交互
- 新增琥珀、森林、暮色三种主题，设置页布局与触觉反馈机制也得到改进。
- 桌面端新增功能引导模块。

### 其它
- 版本号：1.8.12

* 新功能：RSSHub Radar 实例自动探测及多实例 RSS 订阅功能
* 修复：优化了快速切换回答的操作体验及双击评论功能 (#66)
* 新功能：CMS 独立站点、分类快速排序功能以及知乎页面底部 Dock 栏
* 修复：修正了通知分类显示不全及历史记录分页计数不一致的问题
* 重构了 CMS 目录适配机制，统一了功能探测与分页处理流程
* 修复：恢复了信息流安全验证入口并保留了当前用户会话状态
* 修复：统一了各社区页面中的 Cloudflare 验证机制
* 新功能：自动探测 RSSHub 实例并支持已验证频道的订阅功能
* 修复：提升了生产环境下悬浮视频播放的稳定性
* 修复：统一了原生 CMS 请求处理方式并修复了实例探测功能在 CI 环境中的异常
* 新功能：图片查看器支持旋转与镜像变换

<details><summary>查看原文</summary>

## 有所闻 NewsNook v1.8.12

### 阅读与媒体
- 新增悬浮视频播放，并改进 Android 原站视频全屏与播放稳定性。
- 图片查看器支持旋转与镜像；改进文章预览图和阅读位置恢复。
- 新增选中文字查询百科，支持百度百科来源。

### 订阅与站点
- 新增 RSSHub Radar，支持自动探测实例、预览路由和批量订阅。
- 改进站点目录、CMS 工作区与分类管理。

### 阅读与社区
- 新增跨信源阅读历史，支持批量删除与恢复。
- 改进 Linux.do 串楼阅读、通知、搜索和私信等体验。
- 优化知乎回答切换、评论入口与工作区界面。

### 外观与交互
- 新增琥珀、森林、暮色主题，并改进设置页布局与触觉反馈。
- 增加桌面端功能引导。

### 其它
- 版本号 1.8.12

* feat: RSSHub Radar discovery and multi-instance RSS feeds
* fix: improve fast answer swipes and double-tap comments (#66)
* feat: CMS 独立站点、分类快捷排序与知乎贴底 Dock
* fix: 修复通知分类漏显示与历史分页计数不一致
* 重构 CMS 目录适配，统一能力发现与分页链路
* fix: 恢复信息流安全验证入口并保留当前会话
* fix: unify Cloudflare verification across community screens
* feat: automatic instance probing and verified channel subscriptions
* fix: harden floating playback for production
* fix: align native CMS requests and repair probe regression CI
* Feat/image lightbox transform

</details>

---

### [myikuns/jichangtz-tuijian](https://github.com/myikuns/jichangtz-tuijian) `📝 提交` `707de9e`

发布时间：2026-10-15（5 小时前）｜ [查看提交](https://github.com/myikuns/jichangtz-tuijian/commit/707de9e3266580080cc38fdca5562dc3b93c326f)

*（原文，翻译暂不可用）*

Update README.md

---

### [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) `📝 提交` `835615b`

发布时间：2026-10-15（1 小时前）｜ [查看提交](https://github.com/1c7/chinese-independent-developer/commit/835615b3787fe38f11f95689a0c14ce614f78076)

SKILL.md：汇报格式必须单列未收录项及原因类别，拒绝流程补「必须写进汇报」

---

### [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) `🧪 测试版` `tos-test-38694003281-1`

发布时间：2026-10-15（5 分钟前）｜ [查看 Release](https://github.com/EKKOLearnAI/ekko-studio/releases/tag/tos-test-38694003281-1)

TerraMaster 解析器测试：未通过图标合规性检查（SVG 文件大小超过 50 KB）。其余九项软件包检查均顺利通过。该测试结果已被后续的 TOS 测试版本取代，请使用修正后的发布版本。此次测试并未提交至 App Center 进行审核。

<details><summary>查看原文</summary>

TerraMaster parser test: FAILED icon compliance (SVG exceeded 50 KB). The other nine package checks passed. Superseded by the next TOS test build; use the corrected release instead. No App Center review was submitted.

</details>

---

### [adysec/tracker](https://github.com/adysec/tracker) `📝 提交` `d38a3df`

发布时间：2026-10-15（2 小时前）｜ [查看提交](https://github.com/adysec/tracker/commit/d38a3df875bd78877145916b2db6f65f5a1ff16e)

*（原文，翻译暂不可用）*

20261015

---

### [ArvinLovegood/go-stock](https://github.com/ArvinLovegood/go-stock) `✅ 正式版` `v2026.10.15.1-release`

发布时间：2026-10-15（2 小时前）｜ [查看 Release](https://github.com/ArvinLovegood/go-stock/releases/tag/v2026.10.15.1-release)

go-stock v2026.10.15.1 发布：实现广场主备域名的自动回退功能，同时移除了行业研究报告工具

<details><summary>查看原文</summary>

go-stock v2026.10.15.1 release: 广场主备域名自动回退，移除行业研究报告工具

</details>

---

## 📋 全部项目（按最近更新排序）

| 项目 | 最新版本 | 类型 | 更新时间 | 距今 |
|---|---|---|---|---|
| [joeytoday/obsidian-canvas-enhance](https://github.com/joeytoday/obsidian-canvas-enhance) | `1.0.9` | 正式版 | 2026-10-15 | 3 分钟前 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | `tos-test-38694003281-1` | 测试版 | 2026-10-15 | 5 分钟前 |
| [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) | — | 提交 | 2026-10-15 | 7 分钟前 |
| [JushiZen/Nimbus.Player](https://github.com/JushiZen/Nimbus.Player) | — | 提交 | 2026-10-15 | 37 分钟前 |
| [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) | — | 提交 | 2026-10-15 | 1 小时前 |
| [t59688/newsnook](https://github.com/t59688/newsnook) | `v1.8.12` | 正式版 | 2026-10-15 | 2 小时前 |
| [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) | `v7.3.1.7` | 正式版 | 2026-10-15 | 2 小时前 |
| [ArvinLovegood/go-stock](https://github.com/ArvinLovegood/go-stock) | `v2026.10.15.1-release` | 正式版 | 2026-10-15 | 2 小时前 |
| [adysec/tracker](https://github.com/adysec/tracker) | — | 提交 | 2026-10-15 | 2 小时前 |
| [daimiaopeng/coolapk-desktop](https://github.com/daimiaopeng/coolapk-desktop) | `v1.35.0` | 正式版 | 2026-10-15 | 2 小时前 |
| [myikuns/jichangtz-tuijian](https://github.com/myikuns/jichangtz-tuijian) | — | 提交 | 2026-10-15 | 5 小时前 |
| [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) | `latest` | 正式版 | 2026-10-15 | 6 小时前 |
| [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) | `v2026.10.15-8430.d24f513` | 正式版 | 2026-10-15 | 6 小时前 |
| [XIU2/TrackersListCollection](https://github.com/XIU2/TrackersListCollection) | — | 提交 | 2026-10-15 | 6 小时前 |
| [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules) | `202610142237` | 正式版 | 2026-10-14 | 8 小时前 |
| [ngosang/trackerslist](https://github.com/ngosang/trackerslist) | — | 提交 | 2026-10-14 | 8 小时前 |
| [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) | — | 提交 | 2026-10-14 | 11 小时前 |
| [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) | `v3.0.17` | 正式版 | 2026-10-14 | 13 小时前 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | `autogpt-platform-beta-v0.8.4` | 测试版 | 2026-10-14 | 14 小时前 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | `v4.29.0` | 正式版 | 2026-10-14 | 18 小时前 |
| [z-mio/parse_hub_bot](https://github.com/z-mio/parse_hub_bot) | `v2.2.1` | 正式版 | 2026-10-14 | 18 小时前 |
| [bilibili/Index-Translate](https://github.com/bilibili/Index-Translate) | — | 提交 | 2026-10-14 | 19 小时前 |
| [z-mio/ParseHub](https://github.com/z-mio/ParseHub) | `v2.3.5` | 正式版 | 2026-10-14 | 20 小时前 |
| [xweiba/location-spoofer](https://github.com/xweiba/location-spoofer) | `v1.0.9` | 正式版 | 2026-10-14 | 21 小时前 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | — | 提交 | 2026-10-14 | 22 小时前 |
| [Niklaus88/Clash-Config](https://github.com/Niklaus88/Clash-Config) | — | 提交 | 2026-10-14 | 23 小时前 |
| [mason173/aira-browser](https://github.com/mason173/aira-browser) | `v3.7.4` | 正式版 | 2026-10-14 | 23 小时前 |
| [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | `v0.102.2862.0` | 测试版 | 2026-10-14 | 1 天前 |
| [Ajaxc/WeChatList](https://github.com/Ajaxc/WeChatList) | `2.5.2` | 正式版 | 2026-10-14 | 1 天前 |
| [chen08209/FlClash](https://github.com/chen08209/FlClash) | `v0.9.0` | 正式版 | 2026-10-14 | 1 天前 |
| [exteraless/exteraless](https://github.com/exteraless/exteraless) | `ci-1ad6a60` | 测试版 | 2026-10-13 | 1 天前 |
| [Inginnng/EditHere](https://github.com/Inginnng/EditHere) | `v0.11.1` | 正式版 | 2026-10-13 | 1 天前 |
| [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) | `v1.19.5` | 正式版 | 2026-10-13 | 1 天前 |
| [AIsouler/MyClash](https://github.com/AIsouler/MyClash) | — | 提交 | 2026-10-13 | 1 天前 |
| [dukangalex/HiClash](https://github.com/dukangalex/HiClash) | — | 提交 | 2026-10-13 | 1 天前 |
| [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) | `V1.0.319` | 正式版 | 2026-10-13 | 2 天前 |
| [7723mod/NPatch](https://github.com/7723mod/NPatch) | `v1.0.9` | 正式版 | 2026-10-12 | 2 天前 |
| [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) | `v2.2.0` | 正式版 | 2026-10-12 | 2 天前 |
| [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) | `v1.6.5-beta2` | 测试版 | 2026-10-12 | 2 天前 |
| [crimera/piko-newx](https://github.com/crimera/piko-newx) | `v3.56.1` | 正式版 | 2026-10-12 | 3 天前 |
| [gkd-kit/gkd](https://github.com/gkd-kit/gkd) | `v1.13.0-beta-1` | 测试版 | 2026-10-11 | 3 天前 |
| [xiaoyaDev/xiaoya-alist](https://github.com/xiaoyaDev/xiaoya-alist) | — | 提交 | 2026-10-11 | 3 天前 |
| [xgit01/sgkrank](https://github.com/xgit01/sgkrank) | — | 提交 | 2026-10-11 | 3 天前 |
| [SagerNet/sing-box](https://github.com/SagerNet/sing-box) | `v1.15.0-alpha.12` | 测试版 | 2026-10-11 | 4 天前 |
| [LifeArchiveProject/WeChatDataAnalysis](https://github.com/LifeArchiveProject/WeChatDataAnalysis) | `macos-source-runtime-38116174842-1` | 正式版 | 2026-10-11 | 4 天前 |
| [dongyubin/IPTV](https://github.com/dongyubin/IPTV) | — | 提交 | 2026-10-11 | 4 天前 |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | `mineru-4.0.12-released` | 正式版 | 2026-10-11 | 4 天前 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | `v1.4.1` | 正式版 | 2026-10-10 | 4 天前 |
| [crimera/piko](https://github.com/crimera/piko) | `v3.10.0` | 正式版 | 2026-10-10 | 4 天前 |
| [johamwon/wechrss](https://github.com/johamwon/wechrss) | — | 提交 | 2026-10-10 | 4 天前 |
| [XTLS/Xray-core](https://github.com/XTLS/Xray-core) | `v26.10.10` | 测试版 | 2026-10-10 | 4 天前 |
| [pengchujin/livecanvas](https://github.com/pengchujin/livecanvas) | — | 提交 | 2026-10-10 | 5 天前 |
| [T8RIN/ImageToolbox](https://github.com/T8RIN/ImageToolbox) | `4.2.1-rc01` | 测试版 | 2026-10-09 | 5 天前 |
| [hicccc77/WeFlow](https://github.com/hicccc77/WeFlow) | — | 提交 | 2026-10-09 | 5 天前 |
| [ZGMFX01A/OrigRead](https://github.com/ZGMFX01A/OrigRead) | `v1.7.0` | 正式版 | 2026-10-09 | 5 天前 |
| [KaringX/clashmi](https://github.com/KaringX/clashmi) | `v1.0.31.1703` | 正式版 | 2026-10-09 | 6 天前 |
| [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) | `v2.5.8` | 正式版 | 2026-10-09 | 6 天前 |
| [UniClipboard/UniClipboard](https://github.com/UniClipboard/UniClipboard) | `v1.1.2` | 正式版 | 2026-10-09 | 6 天前 |
| [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) | — | 提交 | 2026-10-08 | 6 天前 |
| [jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader) | `desktop-v0.12.5` | 正式版 | 2026-10-08 | 7 天前 |
| [hoothin/UserScripts](https://github.com/hoothin/UserScripts) | — | 提交 | 2026-10-07 | 7 天前 |
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | `v0.16.0` | 正式版 | 2026-10-07 | 7 天前 |
| [reeden-org/reeden-app](https://github.com/reeden-org/reeden-app) | `v1.43.1` | 正式版 | 2026-10-07 | 7 天前 |
| [fw876/helloworld](https://github.com/fw876/helloworld) | `v196.19` | 正式版 | 2026-10-07 | 7 天前 |
| [felinics/Memoh](https://github.com/felinics/Memoh) | `v0.21.0` | 正式版 | 2026-10-05 | 9 天前 |
| [AyuGram/AyuGramDesktop](https://github.com/AyuGram/AyuGramDesktop) | `v7.2.9` | 正式版 | 2026-10-05 | 10 天前 |
| [HyNetworks/hysteria](https://github.com/HyNetworks/hysteria) | `app/v2.13.0` | 正式版 | 2026-10-05 | 10 天前 |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | `v1.15.0` | 正式版 | 2026-10-04 | 10 天前 |
| [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) | `draft` | 测试版 | 2026-10-04 | 10 天前 |
| [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) | `26.10.4-1` | 正式版 | 2026-10-04 | 10 天前 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | `v0.6.0` | 正式版 | 2026-10-03 | 11 天前 |
| [kenischu/ReSource](https://github.com/kenischu/ReSource) | `3.0.7` | 正式版 | 2026-10-03 | 12 天前 |
| [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) | `v1.19.32` | 正式版 | 2026-09-30 | 14 天前 |
| [linesoft2/TaskMonitor](https://github.com/linesoft2/TaskMonitor) | `v2026.9.30.1` | 正式版 | 2026-09-30 | 14 天前 |
| [xykt/IPQuality](https://github.com/xykt/IPQuality) | — | 提交 | 2026-09-30 | 14 天前 |
| [Teamper/JHS](https://github.com/Teamper/JHS) | `v6.5.1` | 正式版 | 2026-09-25 | 19 天前 |
| [tingaicompass/AI-Compass](https://github.com/tingaicompass/AI-Compass) | — | 提交 | 2026-09-24 | 21 天前 |
| [op7418/Humanizer-zh](https://github.com/op7418/Humanizer-zh) | — | 提交 | 2026-09-23 | 22 天前 |
| [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | — | 提交 | 2026-09-22 | 22 天前 |
| [zhangxiangliang/stock-api](https://github.com/zhangxiangliang/stock-api) | `v2.7.5` | 正式版 | 2026-09-21 | 23 天前 |
| [TG-Twilight/AWAvenue-Ads-Rule](https://github.com/TG-Twilight/AWAvenue-Ads-Rule) | `1.7.8-release` | 正式版 | 2026-09-21 | 23 天前 |
| [yuanzl77/IPTV](https://github.com/yuanzl77/IPTV) | — | 提交 | 2026-09-21 | 23 天前 |
| [zhanghai/MaterialFiles](https://github.com/zhanghai/MaterialFiles) | `v1.7.5` | 正式版 | 2026-09-20 | 25 天前 |
| [black-ant/Ant-Browser](https://github.com/black-ant/Ant-Browser) | `V1.8.0` | 正式版 | 2026-09-19 | 25 天前 |
| [liaoliao666/v2ex](https://github.com/liaoliao666/v2ex) | `1.9.6` | 正式版 | 2026-09-19 | 26 天前 |
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
| [jiangrui1994/CloudSaver](https://github.com/jiangrui1994/CloudSaver) | — | 提交 | 2026-04-20 | 5 个月前 |
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