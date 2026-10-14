# ⭐ Star 动态看板

> 生成时间：2026-10-14 07:23:33 UTC ｜ 共 171 个项目 ｜ 每 3 小时自动更新

## 🆕 本次新增（3）

### [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) `✅ 正式版` `v7.3.1.5`

发布时间：2026-10-14（14 分钟前）｜ [查看 Release](https://github.com/Kindness-Kismet/AstraGram-Desktop/releases/tag/v7.3.1.5)

- 调整了 Windows 上图片和视频的打开行为，现在默认在应用窗口内打开，背景模糊，顶部显示发送者和操作按钮，两侧提供圆形翻页按钮，底部提供带位置计数的缩略图条；可在设置中关闭窗口内查看
- 新增了窗口内媒体查看器的开合与全屏动画，现在可以看到媒体从聊天缩略图展开并收回，缩略图不在可见区域时则原地淡入淡出；全屏时主窗口保持原位，背景使用暗化的系统模糊，按 Esc 可以返回窗口内
- 对窗口内媒体查看器的控件进行了改善，这使得小窗口下的布局更紧凑，视频控制条不会遮挡翻页按钮，空间不足时转发和保存会移入更多菜单，视频控制条跟随浅色或深色主题；按钮支持悬停提示，闲置时控件自动隐藏，悬停时保持显示，更多菜单和视频设置菜单点击才会打开
- 新增了文件夹栏和对话列表顶部的自定义标志，现在可以选择图片并自动适配原有标志大小，也可以让标志跟随主题颜色
- 调整了视频预览的行为，现在右键菜单提供“查看视频封面”，可大图查看上传者设置的封面或 Telegram 生成的缩略图，替换原有带时间的预览帧网格及其播放入口
- 修复了关于从设置返回对话的错误，该问题曾导致照片和贴纸在过渡期间停留在占位画面，随后突然出现
- 修复了关于机器人小程序菜单的错误，该问题曾导致内嵌网页遮住弹出菜单
- 修复了关于 Windows 应用启动的错误，该问题曾导致应用图标未变化时也刷新整个桌面的图标
- 调整了留档撤回消息的显示行为，现在开启“半透明显示已删除消息”时，显示强度从 40% 提高到 60%，文字和相册内容更清楚

<details><summary>查看原文</summary>

- Changed how photos and videos open on Windows; they now open inside the app window by default over a blurred backdrop, with sender information and actions at the top, round previous and next buttons, and a thumbnail strip with a position counter; you can turn off this behavior in settings
- Added opening, closing and full-screen transitions to the in-window media viewer, so you can now follow media as it expands from its chat thumbnail and returns to it, or fades in place when the thumbnail is out of view; full screen keeps the app window in place, uses a dimmed system blur backdrop, and lets you return to the window with Esc
- Improved the in-window media viewer controls, which now fit small windows, keep video controls clear of navigation buttons, move forward and save into the more menu when space is tight, and give video controls the light or dark app theme; button tooltips explain actions, controls hide when idle and stay visible under the pointer, and the more and video settings menus open on click
- Added custom logos for the folder sidebar and the top of the chat list, so you can now choose an image fitted to the original logo size and optionally make it follow the theme color
- Changed how video previews work; the context menu now offers View Video Cover to open the uploader's cover or Telegram-generated thumbnail as a large image, replacing the timestamped frame grid and its playback shortcuts
- Fixed an issue with returning from settings to a chat that previously caused photos and stickers to remain frozen as placeholders during the transition and then appear abruptly
- Fixed an issue with menus in bot mini apps that previously caused embedded web pages to cover popup menus
- Fixed an issue with app startup on Windows that previously caused all desktop icons to refresh even when the app icon had not changed
- Changed how retained deleted messages look; with semi-transparent display enabled, they now use 60% opacity instead of 40%, making text and album

</details>

---

### [mason173/aira-browser](https://github.com/mason173/aira-browser) `✅ 正式版` `v3.7.4`

发布时间：2026-10-14（12 分钟前）｜ [查看 Release](https://github.com/mason173/aira-browser/releases/tag/v3.7.4)

*（原文，翻译暂不可用）*

# Aira Community 3.7.4 (1000531)

这是 **Community 未签名 HAP**，包名 `org.aira.browser`。不是华为应用市场里的 Official 商店包（`com.aira.browser`）。

下载后需要你自己用 `org.aira.browser` 的 HarmonyOS 签名材料签名，再侧载安装。未签名包不能直接装到设备上。

## 安装

1. 用 DevEco Studio 打开本仓库的 `AiraBrowser/`，为 `org.aira.browser` 配置你自己的签名。
2. 对这个 HAP 签名（DevEco 或 HarmonyOS `hap-sign-tool`）。
3. 用 `hdc` 安装到已开启开发者调试的设备。

Community 默认没有官方云、华为账号、华为云空间和 IAP。本地浏览、WebDAV 和自建 Personal Server 可用。

## 产物

- 文件：`Aira-community-v3.7.4-1000531-default-unsigned.hap`
- 包名：`org.aira.browser`
- versionName：`3.7.4`
- versionCode：`1000531`
- SHA-256：`0fe301e86261daacc473db9f9d1cd18861d96d8f7a80df0a3c9313cc526a2732`

## 更新日志

### 3.7.4 (1000531)

2026-10-14

这次更新让地址栏的书签搜索更快，并修好了隐私标签、登录和下载上的几个问题。

- 地址栏的书签搜索改用持久化索引，冷启动后打开也能即搜即得。
- 重开应用后，隐私标签的内容和预览图都能正常恢复，不再只剩空白。
- 普通模式下退出应用后仍保留登录状态，常用网站不用反复登录。
- 网页里发起的下载继续交给浏览器完成，不再因为重放一次性链接被服务器拒绝。
- 修好了网页定位调用偶发失效的问题。
- 打开的分享网页能正常显示，不再出现空白或误弹下载。
- 深色主题下，弹窗按钮的底色不再发白。

## Changelog

### 3.7.4 (1000531)

2026-10-14

This release makes address-bar bookmark search faster, and fixes several private-tab, sign-in, and download issues.

- Address-bar bookmark search now uses a persistent index, so results are ready as soon as you open it, even on a cold start.
- After reopening the app, private tabs restore their content and preview images instead of coming back blank.
- Normal-mode sign-in is kept after you leave the app, so frequently used sites no longer ask you to sign in again.
- Downloads started from a web page are still completed by the browser, instead of replaying one-time links that the server rejects.
- Fixed occasional failures in web page location requests.
- Shared pages you open now display correctly, without a blank screen or a download prompt by mistake.
- In dark theme, dialog button backgrounds no longer appear washed out.

---

### [daimiaopeng/coolapk-desktop](https://github.com/daimiaopeng/coolapk-desktop) `🧪 测试版` `v1.35.0-beta.2`

发布时间：2026-10-14（8 分钟前）｜ [查看 Release](https://github.com/daimiaopeng/coolapk-desktop/releases/tag/v1.35.0-beta.2)

# 测试版更新日志

比较范围：正式版 v1.34.1 → 最新提交 9f229f8

## 新增

- 新增“滚动时自动隐藏导航”设置，默认开启。移动布局向下滚动时收起首页搜索栏、底部 Dock 和详情操作栏，保留首页栏目栏，向上滚动恢复显示。
- 无图模式新增“进入详情时展示图片”选项，可在首页和列表隐藏图片，进入动态或问答详情后显示。
- 新增浅色界面底色设置，支持柔和浅灰、暖米色及自定义颜色，并提供效果预览。
- 新增“显示动态背景图”开关，可关闭作者背景与装饰图，保留正文配图和头像。
- 新增搜索分类拖动排序，支持自动保存与恢复默认，桌面和移动端均生效，“综合”固定在首位。

## 优化

- 首页与话题页导航采用半透明玻璃样式，话题栏目、排序和搜索整合为连续导航区域。
- 话题栏目与排序选中状态统一使用加粗文字和绿色下划线，取消绿色胶囊背景；移动首页导航使用直角边缘。
- 优化话题筛选与搜索布局，根据可用空间排列，减少不必要的换行。
- 优化“我的打分”卡片，显示个人星级和操作提示；点击可打开自己的点评，无关联点评时展示个人评分信息。
- 优化移动端上传下载页面的统计、筛选和任务卡片布局，并补充 CDN 文件上传快捷入口。
- 导航栏目设置改为折叠展示，减少设置页面的默认展开内容。

## 修复

- 修正头条刷新与加载更多的游标传递，改善刷新反复返回较早内容的问题。
- 修复私信粘贴图片后预览异常、发送按钮被挤出输入区的问题。
- 修复反馈输入区展开高度不足和无法拖动调整高度的问题。
- 修复设置页面在窄窗口和大字体下说明、按钮及输入控件相互挤压的问题。
- 修复详情评论已点赞状态未正确显示主题色的问题。
- 修复话题简介文字与浅色背景对比不足的问题。
- 修复话题点评页排序入口重复显示的问题。
- 修复“我的打分”入口点击无反应的问题。

---

## 📋 全部项目（按最近更新排序）

| 项目 | 最新版本 | 类型 | 更新时间 | 距今 |
|---|---|---|---|---|
| [daimiaopeng/coolapk-desktop](https://github.com/daimiaopeng/coolapk-desktop) | `v1.35.0-beta.2` | 测试版 | 2026-10-14 | 8 分钟前 |
| [mason173/aira-browser](https://github.com/mason173/aira-browser) | `v3.7.4` | 正式版 | 2026-10-14 | 12 分钟前 |
| [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) | `v7.3.1.5` | 正式版 | 2026-10-14 | 14 分钟前 |
| [Niklaus88/Clash-Config](https://github.com/Niklaus88/Clash-Config) | — | 提交 | 2026-10-14 | 26 分钟前 |
| [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | `v0.102.2862.0` | 测试版 | 2026-10-14 | 47 分钟前 |
| [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) | — | 提交 | 2026-10-14 | 1 小时前 |
| [Ajaxc/WeChatList](https://github.com/Ajaxc/WeChatList) | `2.5.2` | 正式版 | 2026-10-14 | 1 小时前 |
| [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) | `v3.0.17-beta.1` | 测试版 | 2026-10-14 | 2 小时前 |
| [adysec/tracker](https://github.com/adysec/tracker) | — | 提交 | 2026-10-14 | 3 小时前 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | `v0.7.35` | 正式版 | 2026-10-14 | 4 小时前 |
| [chen08209/FlClash](https://github.com/chen08209/FlClash) | `v0.9.0` | 正式版 | 2026-10-14 | 5 小时前 |
| [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) | `v2026.10.14-8421.a7faf80` | 正式版 | 2026-10-14 | 5 小时前 |
| [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) | `latest` | 正式版 | 2026-10-14 | 6 小时前 |
| [XIU2/TrackersListCollection](https://github.com/XIU2/TrackersListCollection) | — | 提交 | 2026-10-14 | 7 小时前 |
| [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules) | `202610132237` | 正式版 | 2026-10-13 | 8 小时前 |
| [ngosang/trackerslist](https://github.com/ngosang/trackerslist) | — | 提交 | 2026-10-13 | 9 小时前 |
| [exteraless/exteraless](https://github.com/exteraless/exteraless) | `ci-1ad6a60` | 测试版 | 2026-10-13 | 11 小时前 |
| [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) | — | 提交 | 2026-10-13 | 11 小时前 |
| [JushiZen/Nimbus.Player](https://github.com/JushiZen/Nimbus.Player) | — | 提交 | 2026-10-13 | 12 小时前 |
| [Inginnng/EditHere](https://github.com/Inginnng/EditHere) | `v0.11.1` | 正式版 | 2026-10-13 | 13 小时前 |
| [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) | `v1.19.5` | 正式版 | 2026-10-13 | 16 小时前 |
| [AIsouler/MyClash](https://github.com/AIsouler/MyClash) | — | 提交 | 2026-10-13 | 17 小时前 |
| [joeytoday/obsidian-canvas-enhance](https://github.com/joeytoday/obsidian-canvas-enhance) | `1.0.8` | 正式版 | 2026-10-13 | 19 小时前 |
| [dukangalex/HiClash](https://github.com/dukangalex/HiClash) | — | 提交 | 2026-10-13 | 23 小时前 |
| [z-mio/parse_hub_bot](https://github.com/z-mio/parse_hub_bot) | `v2.2.0` | 正式版 | 2026-10-12 | 1 天前 |
| [7723mod/NPatch](https://github.com/7723mod/NPatch) | `v1.0.9` | 正式版 | 2026-10-12 | 1 天前 |
| [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) | `v2.2.0` | 正式版 | 2026-10-12 | 1 天前 |
| [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) | `v1.6.5-beta2` | 测试版 | 2026-10-12 | 1 天前 |
| [t59688/newsnook](https://github.com/t59688/newsnook) | `v1.8.12-beta.6` | 测试版 | 2026-10-12 | 2 天前 |
| [crimera/piko-newx](https://github.com/crimera/piko-newx) | `v3.56.1` | 正式版 | 2026-10-12 | 2 天前 |
| [bilibili/Index-Translate](https://github.com/bilibili/Index-Translate) | — | 提交 | 2026-10-12 | 2 天前 |
| [gkd-kit/gkd](https://github.com/gkd-kit/gkd) | `v1.13.0-beta-1` | 测试版 | 2026-10-11 | 2 天前 |
| [xiaoyaDev/xiaoya-alist](https://github.com/xiaoyaDev/xiaoya-alist) | — | 提交 | 2026-10-11 | 2 天前 |
| [xgit01/sgkrank](https://github.com/xgit01/sgkrank) | — | 提交 | 2026-10-11 | 2 天前 |
| [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) | — | 提交 | 2026-10-11 | 2 天前 |
| [ArvinLovegood/go-stock](https://github.com/ArvinLovegood/go-stock) | `v2026.10.11.1-release` | 正式版 | 2026-10-11 | 2 天前 |
| [SagerNet/sing-box](https://github.com/SagerNet/sing-box) | `v1.15.0-alpha.12` | 测试版 | 2026-10-11 | 3 天前 |
| [LifeArchiveProject/WeChatDataAnalysis](https://github.com/LifeArchiveProject/WeChatDataAnalysis) | `v2.9.0` | 正式版 | 2026-10-11 | 3 天前 |
| [dongyubin/IPTV](https://github.com/dongyubin/IPTV) | — | 提交 | 2026-10-11 | 3 天前 |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | `mineru-4.0.12-released` | 正式版 | 2026-10-11 | 3 天前 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | `v4.29.0-beta.2` | 正式版 | 2026-10-10 | 3 天前 |
| [crimera/piko](https://github.com/crimera/piko) | `v3.10.0` | 正式版 | 2026-10-10 | 3 天前 |
| [johamwon/wechrss](https://github.com/johamwon/wechrss) | — | 提交 | 2026-10-10 | 3 天前 |
| [z-mio/ParseHub](https://github.com/z-mio/ParseHub) | `v2.3.3` | 正式版 | 2026-10-10 | 3 天前 |
| [XTLS/Xray-core](https://github.com/XTLS/Xray-core) | `v26.10.10` | 测试版 | 2026-10-10 | 3 天前 |
| [pengchujin/livecanvas](https://github.com/pengchujin/livecanvas) | — | 提交 | 2026-10-10 | 4 天前 |
| [T8RIN/ImageToolbox](https://github.com/T8RIN/ImageToolbox) | `4.2.1-rc01` | 测试版 | 2026-10-09 | 4 天前 |
| [myikuns/jichangtz-tuijian](https://github.com/myikuns/jichangtz-tuijian) | — | 提交 | 2026-10-09 | 4 天前 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | — | 提交 | 2026-10-09 | 4 天前 |
| [hicccc77/WeFlow](https://github.com/hicccc77/WeFlow) | — | 提交 | 2026-10-09 | 4 天前 |
| [ZGMFX01A/OrigRead](https://github.com/ZGMFX01A/OrigRead) | `v1.7.0` | 正式版 | 2026-10-09 | 4 天前 |
| [KaringX/clashmi](https://github.com/KaringX/clashmi) | `v1.0.31.1703` | 正式版 | 2026-10-09 | 5 天前 |
| [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) | `v2.5.8` | 正式版 | 2026-10-09 | 5 天前 |
| [UniClipboard/UniClipboard](https://github.com/UniClipboard/UniClipboard) | `v1.1.2` | 正式版 | 2026-10-09 | 5 天前 |
| [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) | — | 提交 | 2026-10-08 | 5 天前 |
| [jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader) | `desktop-v0.12.5` | 正式版 | 2026-10-08 | 6 天前 |
| [hoothin/UserScripts](https://github.com/hoothin/UserScripts) | — | 提交 | 2026-10-07 | 6 天前 |
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | `v0.16.0` | 正式版 | 2026-10-07 | 6 天前 |
| [reeden-org/reeden-app](https://github.com/reeden-org/reeden-app) | `v1.43.1` | 正式版 | 2026-10-07 | 6 天前 |
| [fw876/helloworld](https://github.com/fw876/helloworld) | `v196.19` | 正式版 | 2026-10-07 | 6 天前 |
| [felinics/Memoh](https://github.com/felinics/Memoh) | `v0.21.0` | 正式版 | 2026-10-05 | 8 天前 |
| [AyuGram/AyuGramDesktop](https://github.com/AyuGram/AyuGramDesktop) | `v7.2.9` | 正式版 | 2026-10-05 | 9 天前 |
| [HyNetworks/hysteria](https://github.com/HyNetworks/hysteria) | `app/v2.13.0` | 正式版 | 2026-10-05 | 9 天前 |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | `v1.15.0` | 正式版 | 2026-10-04 | 9 天前 |
| [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) | `draft` | 测试版 | 2026-10-04 | 9 天前 |
| [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) | `26.10.4-1` | 正式版 | 2026-10-04 | 9 天前 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | `v0.6.0` | 正式版 | 2026-10-03 | 10 天前 |
| [kenischu/ReSource](https://github.com/kenischu/ReSource) | `3.0.7` | 正式版 | 2026-10-03 | 11 天前 |
| [linesoft2/TaskMonitor](https://github.com/linesoft2/TaskMonitor) | `v2026.9.30.1` | 正式版 | 2026-09-30 | 13 天前 |
| [xykt/IPQuality](https://github.com/xykt/IPQuality) | — | 提交 | 2026-09-30 | 13 天前 |
| [Teamper/JHS](https://github.com/Teamper/JHS) | `v6.5.1` | 正式版 | 2026-09-25 | 18 天前 |
| [xweiba/location-spoofer](https://github.com/xweiba/location-spoofer) | `v1.0.8` | 正式版 | 2026-09-24 | 19 天前 |
| [tingaicompass/AI-Compass](https://github.com/tingaicompass/AI-Compass) | — | 提交 | 2026-09-24 | 20 天前 |
| [op7418/Humanizer-zh](https://github.com/op7418/Humanizer-zh) | — | 提交 | 2026-09-23 | 21 天前 |
| [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | — | 提交 | 2026-09-22 | 21 天前 |
| [zhangxiangliang/stock-api](https://github.com/zhangxiangliang/stock-api) | `v2.7.5` | 正式版 | 2026-09-21 | 22 天前 |
| [TG-Twilight/AWAvenue-Ads-Rule](https://github.com/TG-Twilight/AWAvenue-Ads-Rule) | `1.7.8-release` | 正式版 | 2026-09-21 | 22 天前 |
| [yuanzl77/IPTV](https://github.com/yuanzl77/IPTV) | — | 提交 | 2026-09-21 | 22 天前 |
| [zhanghai/MaterialFiles](https://github.com/zhanghai/MaterialFiles) | `v1.7.5` | 正式版 | 2026-09-20 | 24 天前 |
| [black-ant/Ant-Browser](https://github.com/black-ant/Ant-Browser) | `V1.8.0` | 正式版 | 2026-09-19 | 24 天前 |
| [liaoliao666/v2ex](https://github.com/liaoliao666/v2ex) | `1.9.6` | 正式版 | 2026-09-19 | 25 天前 |
| [eternity4719/HowToLiveBetter](https://github.com/eternity4719/HowToLiveBetter) | `epub-latest` | 正式版 | 2026-09-18 | 25 天前 |
| [j4Uq/TVBoxOSC](https://github.com/j4Uq/TVBoxOSC) | `20260914-1520` | 正式版 | 2026-09-14 | 29 天前 |
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