# ⭐ Star 动态看板

> 生成时间：2026-10-25 07:58:48 UTC ｜ 共 174 个项目 ｜ 每 3 小时自动更新

## 🆕 本次新增（5）

### [Inginnng/EditHere](https://github.com/Inginnng/EditHere) `✅ 正式版` `v0.12.0`

发布时间：2026-10-25（1 小时前）｜ [查看 Release](https://github.com/Inginnng/EditHere/releases/tag/v0.12.0)

**简体中文** · English

本次更新把反馈 JSON 升级为 `feedback-minimal-4`，并重做手动交付：默认交付 JSON 与独立原图，需要时才内嵌；批注区域的文字可以在本机读出，AI 拿到的反馈更容易对上画面。

- **原图按需交付**：手动交付统一为「复制 JSON 与图片」，默认给出 JSON 与同名 PNG。「查看 JSON」勾选「原图嵌入 JSON」才把图片写进 JSON，并可压缩内嵌图；原图模式下拉和示意图片选项已取消。原图另附类型、尺寸与校验值，收件方能确认图片是否被替换或截断。
- **复制内容更轻**：「复制 JSON 内容」默认不带原图编码，按钮旁的竖向 **…** 可单独选择是否携带并记住，与文件交付互不影响。CLI 与连接器仍可选择 file / embedded / none，也可另存编号预览图。
- **批注结构更清楚**：区域、点、全局意见分别标记，编号与界面一致，每个对象带文件内标识；移动和缩放只记录最终结果。被移动组件里的子批注挂在组件下，归属未确认时不导出，工程仍可保存待确认状态。
- **区域文字可读可改**：桌面版自动识别批注区域的文字，结果显示在批注栏，可修改或删除，最多 500 字；Windows 使用系统 OCR，macOS 使用 Vision，Linux 使用已安装的 Tesseract。设置中的「导出时附带区域文字」默认开启，关闭后反馈不含识别文字，项目仍保留结果。识别文字是截图内容，不是修改要求。
- **带上页面信息**：AI 打开图片或视频时可附带页面说明；反馈同时记录来源、带时区的采集时间、文件名、窗口标题与应用名。页面说明独立于文档标题，随项目、反馈和视频各帧保留。「导出时附带窗口标题」默认开启，关闭后反馈不再写窗口标题。
- **兼容不变**：新程序继续读取 v2、v3 反馈、无版本对象、旧并行数组和旧桌面项目；不承诺旧程序读取新版字段。视频继续使用 v1 容器。桌面、Web、Web MCP、连接器与 Trae 的 Skills 和双语文档同步更新。

同时修复窗口较小时导出弹窗按钮被挤出屏幕、macOS 识别坐标与中文空格、Windows 草稿偶发未保存、Web 子批注顺序被重排，以及复制菜单图标不统一。Windows 长截图不闪烁、OneDrive 安装、删除按钮首次点击等 0.11.2 修复继续保留。

提供 Windows 安装器与免安装 ZIP、macOS 通用 DMG、Linux AppImage，以及离线 Web 与 Web Agent 包。请完整安装或解压，保留随包运行库及插件。

---

<details><summary>查看原文</summary>

## English

This release upgrades image feedback to `feedback-minimal-4` and reworks manual handoff: JSON and a separate original image by default, embedding only when you ask for it. Annotation regions can be read on your machine, so an AI can line feedback up with the picture more easily.

- **Original image on demand**: manual handoff is now **Copy JSON and image**, producing JSON plus a companion PNG. **View JSON** embeds the original only when **Embed original image in JSON** is ticked, with optional compression; the image-mode dropdown and numbered-preview option are gone. The original also carries its type, size and checksum, so the receiver can tell whether the image was replaced or truncated.
- **Lighter text copy**: **Copy JSON content** leaves out image bytes by default; the adjacent vertical **…** menu remembers a separate include-image choice without affecting file handoff. The CLI and connector still offer file / embedded / none and can write a numbered preview image.
- **Clearer feedback structure**: regions, points and global notes are marked separately, numbering matches the interface, and every object carries a file-local identifier; moves and resizes record only the final result. Child notes inside a moved component sit under that component, and export is blocked until ownership is confirmed, while the project keeps the pending state.
- **Region text you can read and edit**: the desktop app recognises text in annotation regions and shows it in the note panel, editable or removable, up to 500 characters; Windows uses system OCR, macOS uses Vision and Linux uses installed Tesseract. **Export region text with feedback** is on by default; turning it off keeps the text out of feedback while the project retains it. Recognised text is screenshot content, not a change request.
- **Page context included**: an AI can attach a page description when opening an image or video; feedback also records the source, a timestamped capture time, the file name, window

</details>

---

### [crimera/piko](https://github.com/crimera/piko) `🧪 测试版` `v3.11.0-dev.2`

发布时间：2026-10-25（1 小时前）｜ [查看 Release](https://github.com/crimera/piko/releases/tag/v3.11.0-dev.2)

## 3.11.0-dev.2 (2026-10-25)

### 错误修复

* **Instagram：** 将推荐的标志标签与其切换状态对齐 (b49c06b)
* **Instagram：** 正确的重启策略并清除禁用的媒体标题 (aceb512)
* **Instagram：** 保持首页托盘故事系统栏纯黑色（20529a8）
* **Instagram：** 跨主题保持故事背景纯黑色 (707c1a9)
* **Instagram：** 本地化故事时间戳和剩余时间 (e504c4d)
* **Instagram：** 主题更改后保留设置滚动位置 (fd6ec7e)
* **Instagram：** 跨模式娱乐保留设置状态 (0991518)
* **Instagram：** 安装安装更改后恢复行为 (0bc1c9f)
* **Instagram：** 恢复保存的即时空状态布局 (52e56db)

### 新功能

* **Instagram：**添加评论作者用户名复制（50a1427）
* **Instagram：** 添加标记以禁用选定的 Plus 功能 (4043e90)
* **Instagram：** 添加隐藏提要帖子补丁（3578c4b）
* **Instagram：** 添加标记为回复后已读选项 (c043bbc)
* **Instagram：** 添加将 DASH 音频转换为 AAC-LC 的选项 (#2171) (ebf7301)
* **Instagram：** 添加隐藏故事关注按钮的选项 (de269b3)
* **Instagram：** 添加推荐标志以隐藏 Meta AI (0c8eb70)
* **Instagram：** 添加推荐标记以隐藏 Plus 追加销售 (492adf5)
* **Instagram：** 添加对安装安装的支持 (#2169) (b628b64)
* **Instagram：** 队列下载所有邮寄请求 (6fac70b)

### 改进

* **Instagram：** 澄清文件选择器不可用的错误 (1e9ffbf)
* **Instagram：** 整合遥测补丁 (6363dd8)
* **Instagram：** Move Plus 的优点低于空底空间设置 (2d09e37)
* **Instagram：** 完善重启确认并要求明确的重启策略 (1c39f36)
* **Instagram：** 细化设置行距 (8c0be72)
* **Instagram：** 使用原生广告图标进行广告设置 (4385aee)

<details><summary>查看原文</summary>

## 3.11.0-dev.2 (2026-10-25)

###  Bug Fixes

* **Instagram:** Align recommended flag labels with their toggle states (b49c06b)
* **Instagram:** Correct restart policies and clear disabled media captions (aceb512)
* **Instagram:** Keep home tray story system bars pure black (20529a8)
* **Instagram:** Keep story backgrounds pure black across themes (707c1a9)
* **Instagram:** Localize story timestamps and remaining time (e504c4d)
* **Instagram:** Preserve settings scroll position after theme changes (fd6ec7e)
* **Instagram:** Preserve settings state across modal recreation (0991518)
* **Instagram:** Restore behavior after mount install changes (0bc1c9f)
* **Instagram:** Restore saved Instants empty-state layout (52e56db)

###  New Features

* **Instagram:** Add comment author username copying (50a1427)
* **Instagram:** Add flags to disable selected Plus features (4043e90)
* **Instagram:** Add hide feed posts patch (3578c4b)
* **Instagram:** Add mark as read after reply option (c043bbc)
* **Instagram:** Add option to convert DASH audio to AAC-LC (#2171) (ebf7301)
* **Instagram:** Add option to hide story follow button (de269b3)
* **Instagram:** Add recommended flags to hide Meta AI (0c8eb70)
* **Instagram:** Add recommended flags to hide Plus upsells (492adf5)
* **Instagram:** Add support for mount installation (#2169) (b628b64)
* **Instagram:** Queue Download All requests by post (6fac70b)

###  Improvements

* **Instagram:** Clarify file picker unavailable errors (1e9ffbf)
* **Instagram:** Consolidate telemetry patches (6363dd8)
* **Instagram:** Move Plus benefits below empty bottom space setting (2d09e37)
* **Instagram:** Refine restart confirmation and require explicit restart policies (1c39f36)
* **Instagram:** Refine settings row spacing (8c0be72)
* **Instagram:** Use the native ads icon for ad settings (4385aee)

</details>

---

### [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) `📝 提交` `d34c1a4`

发布时间：2026-10-25（1 小时前）｜ [查看提交](https://github.com/Aethersailor/Custom_OpenClash_Rules/commit/d34c1a4280e0f83ad1cf40d675bbf0ee0aba30df)

*（原文，翻译暂不可用）*

chore(rules): auto generate derived rule files

---

### [adysec/tracker](https://github.com/adysec/tracker) `📝 提交` `a2848ae`

发布时间：2026-10-25（3 小时前）｜ [查看提交](https://github.com/adysec/tracker/commit/a2848ae7153ddb5a0cc3d21513d777a05ebb05b2)

*（原文，翻译暂不可用）*

20261025

---

### [ZCShou/GoGoGo](https://github.com/ZCShou/GoGoGo) `✅ 正式版` `v2.5.2`

发布时间：2026-10-25（3 小时前）｜ [查看 Release](https://github.com/ZCShou/GoGoGo/releases/tag/v2.5.2)

# 影梭 VirtGO 2.5.2

本次更新集中改进模拟运行控制、线路绘制、应用更新及分身生成，并优化账号、消息和反馈页面的稳定性。

## 模拟运行与悬浮摇杆

- 新增统一运行控制面板，显示当前模拟模式、已走距离、当前速度和运行时间。
- 支持在运行面板中暂停、继续和结束位置、线路模拟，并切换运动速度模式。
- 线路运行新增快进、快退 10 秒，以及单次、循环播放切换和进度显示。
- 悬浮摇杆增加播放状态、循环模式及结束控制，与主界面的运行状态同步。
- 优化暂停处理：暂停期间停止摇杆移动，运行时间不计入暂停时长。
- 优化距离统计：位置模式中的直接跳转不再计入连续移动距离。
- 完善位置与线路模式的切换保护，避免新的启动或跳转操作意外覆盖正在运行的模拟。
- 修复模拟授权与能力校验顺序，授权失败时不再提前操作系统定位服务，并区分授权、定位权限及位置提交失败提示。

## 地图、线路与历史记录

- 优化地图搜索、历史记录入口和主界面布局，统一地图操作与运行控制的展示。
- 改进线路绘制保存流程：保留绘制内容，保存后仍可继续编辑和运行。
- 识别线路是否发生修改，避免重复保存；保存过程中阻止重复提交，保存失败后可重试。
- 保存结果只对应提交时的线路，避免异步完成后把后续编辑错误标记为已保存。
- 模拟运行期间锁定线路节点编辑，保留保存入口，避免修改正在运行的线路。
- 调整绘制工具与地图搜索面板的层级，修复工具遮挡搜索面板及遮罩的问题。
- 优化位置、线路历史及收藏的搜索、分页和异步刷新，减少旧请求覆盖新结果的情况。
- 完善本地记录读取、保存、重命名和删除的失败提示，清理操作完成后再更新页面状态。

## 应用更新

- 优化前台版本检测和强制更新处理，普通更新提示冷却不会屏蔽强制更新。
- 完善更新策略刷新，服务端撤回或替换版本后及时更新页面，避免继续使用失效的更新信息。
- 改进下载排队、后台任务和页面恢复，修复任务未成功创建或已结束时仍显示等待的问题。
- 保留下载、校验及安装准备状态，减少页面重建导致的重复操作和重复提示。
- 完善安装前版本及安装包校验；安装准备后长时间停留后台，再次安装时重新校验。
- 增加重新检查、网络设置和退出等恢复操作，改进网络失败、设备不兼容及系统无法打开安装器时的提示。
- 优化分身更新页面的状态恢复与错误处理，继续展示更新说明，并引导返回主应用重新生成分身。

## 分身定制

- 分身仅允许登录已有账号，隐藏注册入口，并拦截直接打开注册页、发送注册验证码和提交注册的操作；新账号请在主应用注册。
- 重新生成时使用服务端在同一响应中返回的授权及对应定制数据，修复可能把新授权与旧地图 KEY 打包在一起的问题。
- 同步更新生成页面中的地图 KEY 和已保存状态，避免生成失败重试或页面恢复后将旧配置写回服务端。
- 缺少完整定制数据、记录不匹配或证书不一致时停止生成，避免产生配置不一致的分身 APK。
- 优化生成失败后的重试和页面恢复，保留已创建的定制记录 ID 与包名，减少重复创建。
- 仅在实际修改定制字段时更新记录，避免单纯升级分身版本时提前使已安装分身的授权失效。

## 账号、会员与人机验证

- 为注册、登录和 MFA 验证携带一致的安装实例标识，改进同一设备的会话识别。
- 优化账号、邮箱验证及安全操作的页面恢复，保留必要的非敏感表单状态和验证码重发倒计时。
- 改进人机验证弹窗，优化 WebView 背景、主题、加载、刷新及失败重试体验。
- 优化会员套餐加载、购买和操作反馈，减少页面切换或重建时的状态丢失和重复处理。
- 统一账号、会员及文件操作中的错误提示，减少直接显示底层异常或提示重复出现的情况。

## 消息、反馈与界面

- 优化产品公告、消息列表和消息详情的加载、刷新及已读状态；内容更新后可重新提示未读。
- 问题反馈支持选择、上传图片，并在会话中显示图片；优化文字、图片及补充回复的处理。
- 优化反馈历史和会话页面的加载、发送状态、内容展示及操作按钮。
- 改进反馈输入区对键盘、底部导航栏和屏幕边距的适配，统一按钮尺寸及点击反馈。
- 整理账号、通用设置、运动设置、隐私、帮助与关于页面的导航和布局。
- 补充功能说明、首次使用指引及线路操作文档。

---

## 📋 全部项目（按最近更新排序）

| 项目 | 最新版本 | 类型 | 更新时间 | 距今 |
|---|---|---|---|---|
| [crimera/piko](https://github.com/crimera/piko) | `v3.11.0-dev.2` | 测试版 | 2026-10-25 | 1 小时前 |
| [Inginnng/EditHere](https://github.com/Inginnng/EditHere) | `v0.12.0` | 正式版 | 2026-10-25 | 1 小时前 |
| [Aethersailor/Custom_OpenClash_Rules](https://github.com/Aethersailor/Custom_OpenClash_Rules) | — | 提交 | 2026-10-25 | 1 小时前 |
| [ZCShou/GoGoGo](https://github.com/ZCShou/GoGoGo) | `v2.5.2` | 正式版 | 2026-10-25 | 3 小时前 |
| [adysec/tracker](https://github.com/adysec/tracker) | — | 提交 | 2026-10-25 | 3 小时前 |
| [1c7/chinese-independent-developer](https://github.com/1c7/chinese-independent-developer) | — | 提交 | 2026-10-25 | 6 小时前 |
| [Kindness-Kismet/AstraGram-Desktop](https://github.com/Kindness-Kismet/AstraGram-Desktop) | `v7.3.1.13` | 正式版 | 2026-10-25 | 6 小时前 |
| [appshubcc/bett-rules](https://github.com/appshubcc/bett-rules) | `latest` | 正式版 | 2026-10-25 | 7 小时前 |
| [XIU2/TrackersListCollection](https://github.com/XIU2/TrackersListCollection) | — | 提交 | 2026-10-25 | 7 小时前 |
| [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules) | `202610242236` | 正式版 | 2026-10-24 | 9 小时前 |
| [bilibili/Index-Translate](https://github.com/bilibili/Index-Translate) | — | 提交 | 2026-10-24 | 9 小时前 |
| [ngosang/trackerslist](https://github.com/ngosang/trackerslist) | — | 提交 | 2026-10-24 | 9 小时前 |
| [hiddify/hiddify-app](https://github.com/hiddify/hiddify-app) | `draft` | 测试版 | 2026-10-24 | 10 小时前 |
| [DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) | `v2026.10.24-8478.263559f` | 正式版 | 2026-10-24 | 12 小时前 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | `v4.29.3` | 正式版 | 2026-10-24 | 16 小时前 |
| [mason173/aira-browser](https://github.com/mason173/aira-browser) | `v3.8.4` | 正式版 | 2026-10-24 | 16 小时前 |
| [xiaoyaDev/xiaoya-alist](https://github.com/xiaoyaDev/xiaoya-alist) | — | 提交 | 2026-10-24 | 22 小时前 |
| [ArvinLovegood/go-stock](https://github.com/ArvinLovegood/go-stock) | `v2026.10.24.3-release` | 正式版 | 2026-10-24 | 23 小时前 |
| [komi-store/komi-store](https://github.com/komi-store/komi-store) | `v1.9.4` | 正式版 | 2026-10-24 | 1 天前 |
| [crimera/piko-newx](https://github.com/crimera/piko-newx) | `v3.64.0` | 正式版 | 2026-10-24 | 1 天前 |
| [chen08209/FlClash](https://github.com/chen08209/FlClash) | `v0.9.2` | 正式版 | 2026-10-24 | 1 天前 |
| [UniClipboard/UniClipboard](https://github.com/UniClipboard/UniClipboard) | `v1.4.0` | 正式版 | 2026-10-24 | 1 天前 |
| [SagerNet/sing-box](https://github.com/SagerNet/sing-box) | `v1.15.0-alpha.13` | 测试版 | 2026-10-24 | 1 天前 |
| [x554960766/wechat-mp-tools](https://github.com/x554960766/wechat-mp-tools) | `v2.3.3` | 正式版 | 2026-10-23 | 1 天前 |
| [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio) | `v0.7.39` | 正式版 | 2026-10-23 | 1 天前 |
| [t59688/newsnook](https://github.com/t59688/newsnook) | `v1.9.1-beta.6` | 测试版 | 2026-10-23 | 1 天前 |
| [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | `v1.4.2` | 正式版 | 2026-10-23 | 1 天前 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | `v1.6.0` | 正式版 | 2026-10-23 | 2 天前 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | `autogpt-platform-beta-v0.9.0` | 测试版 | 2026-10-23 | 2 天前 |
| [yijixiuxin/chanlun-pro](https://github.com/yijixiuxin/chanlun-pro) | — | 提交 | 2026-10-23 | 2 天前 |
| [T8RIN/ImageToolbox](https://github.com/T8RIN/ImageToolbox) | `4.3.0-beta02` | 测试版 | 2026-10-22 | 2 天前 |
| [Openwrt-Passwall/openwrt-passwall](https://github.com/Openwrt-Passwall/openwrt-passwall) | `26.10.22-2` | 正式版 | 2026-10-22 | 2 天前 |
| [joeytoday/obsidian-canvas-enhance](https://github.com/joeytoday/obsidian-canvas-enhance) | `1.0.11` | 正式版 | 2026-10-22 | 2 天前 |
| [appshubcc/Bettbox](https://github.com/appshubcc/Bettbox) | `v1.19.7` | 正式版 | 2026-10-22 | 3 天前 |
| [AIsouler/MyClash](https://github.com/AIsouler/MyClash) | — | 提交 | 2026-10-22 | 3 天前 |
| [fw876/helloworld](https://github.com/fw876/helloworld) | `v198.2` | 正式版 | 2026-10-22 | 3 天前 |
| [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) | `v1.19.33` | 正式版 | 2026-10-21 | 3 天前 |
| [exteraless/exteraless](https://github.com/exteraless/exteraless) | `ci-8b7ec40` | 测试版 | 2026-10-21 | 3 天前 |
| [Monica-Pass/Monica](https://github.com/Monica-Pass/Monica) | `V1.0.321` | 正式版 | 2026-10-21 | 3 天前 |
| [XTLS/Xray-core](https://github.com/XTLS/Xray-core) | `v26.10.21` | 正式版 | 2026-10-21 | 3 天前 |
| [z-mio/parse_hub_bot](https://github.com/z-mio/parse_hub_bot) | `v2.2.6` | 正式版 | 2026-10-21 | 3 天前 |
| [z-mio/ParseHub](https://github.com/z-mio/ParseHub) | `v2.3.14` | 正式版 | 2026-10-21 | 3 天前 |
| [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | `v0.102.2933.0` | 正式版 | 2026-10-21 | 4 天前 |
| [myikuns/jichangtz-tuijian](https://github.com/myikuns/jichangtz-tuijian) | — | 提交 | 2026-10-21 | 4 天前 |
| [LifeArchiveProject/WeChatDataAnalysis](https://github.com/LifeArchiveProject/WeChatDataAnalysis) | `macos-source-runtime-39523784335-3` | 正式版 | 2026-10-21 | 4 天前 |
| [johamwon/wechrss](https://github.com/johamwon/wechrss) | — | 提交 | 2026-10-20 | 4 天前 |
| [xgit01/sgkrank](https://github.com/xgit01/sgkrank) | — | 提交 | 2026-10-20 | 4 天前 |
| [Lingyan000/fluxdo](https://github.com/Lingyan000/fluxdo) | `v0.2.29` | 正式版 | 2026-10-20 | 4 天前 |
| [hicccc77/WeFlow](https://github.com/hicccc77/WeFlow) | — | 提交 | 2026-10-20 | 5 天前 |
| [ShareX/ShareX](https://github.com/ShareX/ShareX) | `v22.0.0` | 测试版 | 2026-10-20 | 5 天前 |
| [KaringX/clashmi](https://github.com/KaringX/clashmi) | `v1.0.32.1800` | 测试版 | 2026-10-19 | 6 天前 |
| [felinics/Memoh](https://github.com/felinics/Memoh) | `v0.22.0` | 正式版 | 2026-10-19 | 6 天前 |
| [rootSunc/CNEquity](https://github.com/rootSunc/CNEquity) | `v0.18.0` | 正式版 | 2026-10-18 | 6 天前 |
| [tingaicompass/AI-Compass](https://github.com/tingaicompass/AI-Compass) | — | 提交 | 2026-10-18 | 6 天前 |
| [ZGMFX01A/OrigRead](https://github.com/ZGMFX01A/OrigRead) | `v1.7.1` | 正式版 | 2026-10-18 | 6 天前 |
| [HuangZhuoRui/LocationSpoofer](https://github.com/HuangZhuoRui/LocationSpoofer) | `v3.0.20` | 正式版 | 2026-10-18 | 6 天前 |
| [kenischu/ReSource](https://github.com/kenischu/ReSource) | `3.0.8` | 正式版 | 2026-10-18 | 7 天前 |
| [Niklaus88/Clash-Config](https://github.com/Niklaus88/Clash-Config) | — | 提交 | 2026-10-17 | 7 天前 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | `v0.7.0` | 正式版 | 2026-10-16 | 8 天前 |
| [1zumiii/AppOpsNext](https://github.com/1zumiii/AppOpsNext) | `v1.6.5` | 正式版 | 2026-10-16 | 8 天前 |
| [Teamper/JHS](https://github.com/Teamper/JHS) | `v6.5.2` | 正式版 | 2026-10-16 | 9 天前 |
| [waditu/czsc](https://github.com/waditu/czsc) | `v1.0.2` | 正式版 | 2026-10-16 | 9 天前 |
| [NEORUAA/MeiloX](https://github.com/NEORUAA/MeiloX) | `1.55.1` | 正式版 | 2026-10-16 | 9 天前 |
| [gkd-kit/gkd](https://github.com/gkd-kit/gkd) | `v1.13.0-beta-2` | 测试版 | 2026-10-15 | 9 天前 |
| [jiangrui1994/CloudSaver](https://github.com/jiangrui1994/CloudSaver) | — | 提交 | 2026-10-15 | 10 天前 |
| [JushiZen/Nimbus.Player](https://github.com/JushiZen/Nimbus.Player) | — | 提交 | 2026-10-15 | 10 天前 |
| [daimiaopeng/coolapk-desktop](https://github.com/daimiaopeng/coolapk-desktop) | `v1.35.0` | 正式版 | 2026-10-15 | 10 天前 |
| [xweiba/location-spoofer](https://github.com/xweiba/location-spoofer) | `v1.0.9` | 正式版 | 2026-10-14 | 10 天前 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | — | 提交 | 2026-10-14 | 10 天前 |
| [Ajaxc/WeChatList](https://github.com/Ajaxc/WeChatList) | `2.5.2` | 正式版 | 2026-10-14 | 11 天前 |
| [dukangalex/HiClash](https://github.com/dukangalex/HiClash) | — | 提交 | 2026-10-13 | 12 天前 |
| [7723mod/NPatch](https://github.com/7723mod/NPatch) | `v1.0.9` | 正式版 | 2026-10-12 | 12 天前 |
| [dongyubin/IPTV](https://github.com/dongyubin/IPTV) | — | 提交 | 2026-10-11 | 14 天前 |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | `mineru-4.0.12-released` | 正式版 | 2026-10-11 | 14 天前 |
| [pengchujin/livecanvas](https://github.com/pengchujin/livecanvas) | — | 提交 | 2026-10-10 | 15 天前 |
| [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) | `v2.5.8` | 正式版 | 2026-10-09 | 16 天前 |
| [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) | — | 提交 | 2026-10-08 | 16 天前 |
| [jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader) | `desktop-v0.12.5` | 正式版 | 2026-10-08 | 17 天前 |
| [hoothin/UserScripts](https://github.com/hoothin/UserScripts) | — | 提交 | 2026-10-07 | 17 天前 |
| [reeden-org/reeden-app](https://github.com/reeden-org/reeden-app) | `v1.43.1` | 正式版 | 2026-10-07 | 17 天前 |
| [AyuGram/AyuGramDesktop](https://github.com/AyuGram/AyuGramDesktop) | `v7.2.9` | 正式版 | 2026-10-05 | 20 天前 |
| [HyNetworks/hysteria](https://github.com/HyNetworks/hysteria) | `app/v2.13.0` | 正式版 | 2026-10-05 | 20 天前 |
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | `v1.15.0` | 正式版 | 2026-10-04 | 20 天前 |
| [linesoft2/TaskMonitor](https://github.com/linesoft2/TaskMonitor) | `v2026.9.30.1` | 正式版 | 2026-09-30 | 24 天前 |
| [xykt/IPQuality](https://github.com/xykt/IPQuality) | — | 提交 | 2026-09-30 | 24 天前 |
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
| [foru17/make-x-great-again](https://github.com/foru17/make-x-great-again) | `v0.4.0` | 正式版 | 2026-05-28 | 4 个月前 |
| [gedoor/legado](https://github.com/gedoor/legado) | — | 提交 | 2026-05-27 | 5 个月前 |
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