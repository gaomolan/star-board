# ⭐ Star 动态看板

> 生成时间：2026-10-16 14:46:54 UTC ｜ 共 172 个项目 ｜ 每 3 小时自动更新

## 🆕 本次新增（4）

### [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) `✅ 正式版` `V1.0.320`

发布时间：2026-10-16（16 分钟前）｜ [查看 Release](https://github.com/Monica-Pass/Monica/releases/tag/V1.0.320)

# Monica for Android 1.0.320

## 中文

- 卡包的分段姓名、补充地址和联系方式统一使用内容卡片与填充式表单；账单地址支持点开编辑、返回收起及保存排序。修复说明文字和照片卡片的圆角裁切，改善大字体下的显示与照片操作布局。

- 地址与证件支持区县、第 3 行地址及家庭／工作联系方式；地址与银行卡新增独立的可选分段姓名，完整姓名与名／中间名／姓互不推导或覆盖。改进网页自动填充的地址分行、电话分段、国家／有效期下拉框、收货／账单分区和动态银行卡表单。

- 自动填充先显示匹配账号，选中后验证一次；主应用和自动填充仅接受强生物识别或 Monica 主密码，不再接受手机锁屏密码、PIN 或图案。指纹不可用时可使用原主密码，保留现有加密数据和密钥；关闭快捷填充验证时，进入完整选择页仍需验证。

- 修复 Android Studio 未继承 Rust 工具路径时无法打包的问题，支持自动定位已安装工具和自定义 Cargo 路径。

- 补全附近设备同步的文件夹、根目录附件与独立标签，保留附件身份、扩展数据和来源归属；附件校验失败或不支持文件夹删除时保留受影响的数据并说明原因。

- 修复冷启动或绑定验证器查询超时时，自动填充后偶尔不显示验证码通知的问题；密码填充仍优先完成。

- 修复浏览器访问本机自托管网页时无法匹配已保存凭据的问题，保留应用内嵌页面的兼容行为。

- 升级注册、改密和分步登录的自动填充：已保存密码不会覆盖新密码框，生成密码仅填入新密码与确认框；保存时优先使用新密码，并可确认更新匹配的原条目，保留文件夹、备注、附件和其他账户。

- 无障碍补充填充同样避开新密码与确认框，并校验动态网页的密码写入结果以便必要时重试；再次锁定时立即关闭单独验证过的自动填充保存页。

- 改进验证返回与连续登录，限制临时上下文的来源和有效期；增加可取消的请求时限、缓存失效处理和不含凭据的分阶段耗时诊断。

- 改进自动填充的网页识别：支持浏览器标准化提示，准确区分账号、当前密码、新密码和验证码；网页提供表单结构时仅填充当前表单，保留原生应用和旧网页的兼容逻辑。

- 优化原始数据库管理：名称最多显示两行、双栏独立滚动，支持滑动区间多选、长按菜单，以及跟随当前聚焦栏的底部操作与前进／后退导航；修复普通 MDBX 条目跨格式传输被误拦截。

- 新增 Bitwarden Authenticator CSV 导入，独立入口简称“Bitwarden Auth.”，保留验证器账户及验证码参数。

- 修复验证器导入名称重复包含账户名：扫码、链接和批量导入默认使用发行者名称，账户名保留在独立字段；手动填写的名称不受影响。

- 银行卡新增默认“开户行”字段，支持填写、编辑、复制和搜索，并在备份及受支持的数据库同步中保留。

<details><summary>查看原文</summary>

## English

- Unified wallet name parts, extra address fields and contacts with content cards and filled forms. Billing-address sections open separately, collapse on return and retain their saved order. Fixed clipped helper text and photo-card corners, with improved large-text layouts and photo actions.

- Added district/county, address line 3 and home/work contacts to profiles, plus optional independent name parts for addresses and cards. Full names and name parts never infer or overwrite one another. Improved web autofill for address lines, phone parts, country/expiry selects, shipping/billing sections and dynamic card forms.

- Autofill shows matching accounts before one verification step. App unlock and autofill accept only strong biometrics or the Monica master password, never the device PIN, pattern or screen-lock password. Existing vault data and keys are preserved, with the original master password available when biometrics cannot be used. The full picker still requires verification when quick-fill verification is disabled.

- Fixed packaging when Android Studio does not inherit the Rust tool path, with installed-tool discovery and a custom Cargo path option.

- Nearby sync now preserves folder/root attachments, standalone labels, portable identities, extension data and source ownership. Failed attachment verification or unsupported folder deletion preserves the affected data and explains the issue.

- Fixed missing post-fill OTP notifications when a cold bound-authenticator lookup times out, without delaying credential filling.

- Fixed saved-credential matching on browser loopback pages while preserving hybrid-app compatibility.

- Improved autofill for sign-up, password changes and multi-step login. Stored passwords leave new-password fields untouched; generated passwords fill the new/confirmation pair. Saving prefers the new password and offers a reviewed update to a matching entry, preserving folders, notes, attachments and other accounts.

- A

</details>

---

### [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) `✅ 正式版` `v2.2.2`

发布时间：2026-10-16（1 小时前）｜ [查看 Release](https://github.com/x554960766/wechat-mp-tools/releases/tag/v2.2.2)

发布 v2.2.2：彻底解决微信公众号风控验证码问题、全面升级网址下载功能，并发布各平台客户端安装包

<details><summary>查看原文</summary>

Release v2.2.2: 微信公众号防风控验证码根治、网址下载全面升级与全平台客户端打包

</details>

---

### [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) `📝 提交` `d1c9b49`

发布时间：2026-10-16（1 小时前）｜ [查看提交](https://github.com/Aethersailor/Custom_OpenClash_Rules/commit/d1c9b490dd6bf1594c4af773dce59fca45a9557d)

*（原文，翻译暂不可用）*

chore(rules): auto generate derived rule files

---

### [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) `✅ 正式版` `26.10.16-2`

发布时间：2026-10-16（53 分钟前）｜ [查看 Release](https://github.com/Openwrt-Passwall/openwrt-passwall/releases/tag/26.10.16-2)

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
| [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) | `V1.0.320` | 正式版 | 2026-10-16 | 16 分钟前 |
| [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) | `26.10.16-2` | 正式版 | 2026-10-16 | 53 分钟前 |
| [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) | `v2.2.2` | 正式版 | 2026-10-16 | 1 小时前 |
| [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) | — | 提交 | 2026-10-16 | 1 小时前 |
| [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) | `v2026.10.16-8435.0f184a3` | 正式版 | 2026-10-16 | 2 小时前 |
| [hicccc77/WeFlow](https://github.com/hicccc77/WeFlow) | — | 提交 | 2026-10-16 | 3 小时前 |
| [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) | `v3.0.20-beta.1` | 测试版 | 2026-10-16 | 3 小时前 |
| [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) | — | 提交 | 2026-10-16 | 3 小时前 |
| [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) | `v1.6.5` | 正式版 | 2026-10-16 | 5 小时前 |
| [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | `v0.102.2883.0` | 测试版 | 2026-10-16 | 5 小时前 |
| [adysec/tracker](https://github.com/adysec/tracker) | — | 提交 | 2026-10-16 | 5 小时前 |
| [xiaoyaDev/xiaoya-alist](https://github.com/xiaoyaDev/xiaoya-alist) | — | 提交 | 2026-10-16 | 6 小时前 |
| [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) | `v1.19.6` | 正式版 | 2026-10-16 | 7 小时前 |
| [t59688/newsnook](https://github.com/t59688/newsnook) | `v1.9.0-beta.3` | 测试版 | 2026-10-16 | 7 小时前 |
| [Teamper/JHS](https://github.com/Teamper/JHS) | `v6.5.2` | 正式版 | 2026-10-16 | 8 小时前 |
| [waditu/czsc](https://github.com/waditu/czsc) | `v1.0.2` | 正式版 | 2026-10-16 | 10 小时前 |
| [AIsouler/MyClash](https://github.com/AIsouler/MyClash) | — | 提交 | 2026-10-16 | 12 小时前 |
| [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) | `latest` | 正式版 | 2026-10-16 | 14 小时前 |
| [XIU2/TrackersListCollection](https://github.com/XIU2/TrackersListCollection) | — | 提交 | 2026-10-16 | 14 小时前 |
| [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules) | `202610152237` | 正式版 | 2026-10-15 | 16 小时前 |
| [ngosang/trackerslist](https://github.com/ngosang/trackerslist) | — | 提交 | 2026-10-15 | 16 小时前 |
| [crimera/piko-newx](https://github.com/crimera/piko-newx) | `v3.57.0` | 正式版 | 2026-10-15 | 16 小时前 |
| [z-mio/ParseHub](https://github.com/z-mio/ParseHub) | `v2.3.10` | 正式版 | 2026-10-15 | 21 小时前 |
| [z-mio/parse_hub_bot](https://github.com/z-mio/parse_hub_bot) | `v2.2.4` | 正式版 | 2026-10-15 | 21 小时前 |
| [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) | — | 提交 | 2026-10-15 | 1 天前 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | `v0.7.36` | 正式版 | 2026-10-15 | 1 天前 |
| [gkd-kit/gkd](https://github.com/gkd-kit/gkd) | `v1.13.0-beta-2` | 测试版 | 2026-10-15 | 1 天前 |
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
| [7723mod/NPatch](https://github.com/7723mod/NPatch) | `v1.0.9` | 正式版 | 2026-10-12 | 4 天前 |
| [xgit01/sgkrank](https://github.com/xgit01/sgkrank) | — | 提交 | 2026-10-11 | 5 天前 |
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
| [linesoft2/TaskMonitor](https://github.com/linesoft2/TaskMonitor) | `v2026.9.30.1` | 正式版 | 2026-09-30 | 16 天前 |
| [xykt/IPQuality](https://github.com/xykt/IPQuality) | — | 提交 | 2026-09-30 | 16 天前 |
| [tingaicompass/AI-Compass](https://github.com/tingaicompass/AI-Compass) | — | 提交 | 2026-09-24 | 22 天前 |
| [op7418/Humanizer-zh](https://github.com/op7418/Humanizer-zh) | — | 提交 | 2026-09-23 | 23 天前 |
| [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | — | 提交 | 2026-09-22 | 24 天前 |
| [zhangxiangliang/stock-api](https://github.com/zhangxiangliang/stock-api) | `v2.7.5` | 正式版 | 2026-09-21 | 25 天前 |
| [TG-Twilight/AWAvenue-Ads-Rule](https://github.com/TG-Twilight/AWAvenue-Ads-Rule) | `1.7.8-release` | 正式版 | 2026-09-21 | 25 天前 |
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