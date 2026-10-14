function isRuleSet(full, desc) {
  const name = String(full || '').toLowerCase().split('/')[1] || '';
  if (/(^|[-_ ])rules?([-_ ]|$)/.test(name)) return true;
  if (/规则集|rule.?set/i.test(desc || '')) return true;
  return false;
}
// 项目分类：每个仓库一个主分类，辅助标签独立保存。
const CAT_LABELS = {
  ai:'智能', network:'网络', system:'系统', dev:'开发', efficiency:'效率',
  knowledge:'知识', reading:'阅读', media:'媒体', social:'社交', finance:'金融',
  rules:'规则', data:'数据', security:'安全', learning:'学习', other:'其他'
};
const CAT_ORDER = ['ai','network','system','dev','efficiency','knowledge','reading','media','social','finance','rules','data','security','learning','other'];
const CAT_DEFAULT = ['ai','network','system','efficiency','social','finance'];
const CAT_TAG_LABELS = {android:'Android',rss:'RSS',mcp:'MCP',browser:'浏览器',extension:'扩展',proxy:'代理协议',telegram:'Telegram',wechat:'微信',ios:'iOS',windows:'Windows',linux:'Linux',cli:'CLI',web:'Web',dataset:'数据集',ebook:'电子书',adblock:'广告过滤'};
const CATEGORY_OVERRIDES = {
  'metacubex/mihomo':'network','liuran001/mihomo':'ai','fw876/helloworld':'network','openwrt-passwall/openwrt-passwall':'network',
  'privacy-protection-tools/anti-ad':'rules','tg-twilight/awavenue-ads-rule':'rules','echs-top/proxy':'rules','zmqcherish/proxy-script':'rules',
  'rsshub/rsshub':'data','diygod/rsshub-radar':'efficiency','monica-pass/monica':'security','microsoft/powertoys':'system',
  'wink-wink-wink555/markinote':'knowledge','joeytoday/obsidian-canvas-enhance':'knowledge','lfnovo/open-notebook':'knowledge','yyyyymmmmm/inkroot':'knowledge',
  'jbiaojerry/ebook-treasure-chest':'reading','reeden-org/reeden-app':'reading','zgmfx01a/origread':'reading','t59688/newsnook':'reading','gedoor/legado':'reading',
  'sharex/sharex':'efficiency','uniclipboard/uniclipboard':'efficiency','jiangrui1994/cloudsaver':'efficiency','komi-store/komi-store':'efficiency',
  'xweiba/location-spoofer':'system','huangzhuorui/locationspoofer':'system','rikkaapps/shizuku':'system','thedjchi/shizuku':'system','1zumiii/appopsnext':'system','7723mod/npatch':'system','huiyadanli/revokemsgpatcher':'system','zhanghai/materialfiles':'system','loc567/loc567':'system','linesoft2/taskmonitor':'system',
  'tongyi-mai/z-image':'ai','bilibili/index-translate':'ai','astrbotdevs/astrbot':'ai','op7418/humanizer-zh':'ai','felinics/memoh':'ai','panniantong/agent-reach':'ai','smnetstudio/wechat-ai':'ai',
  'opendatalab/mineru':'data','create-codeless/spider2023':'data','2977094657/zsxqcrawler':'data','lifearchiveproject/wechatdataanalysis':'data','ajaxc/wechatlist':'data','hicccc77/weflow':'data','likeflyme/cloudbak':'data','zjp1997720/wechat-radar':'data','yeximm/access_wechat_article':'data',
  'root sunc/cnequity':'finance','rootsunc/cnequity':'finance','zhangxiangliang/stock-api':'finance','tauricresearch/tradingagents':'finance','hsliuping/tradingagents-cn':'finance','guangxiangdebizi/financemcp':'finance','zjssun/trademirror':'finance','jm199504/financial-time-series':'finance','quantfans/quantdigger':'finance','sunnyswag/stockrl':'finance','conquerer-yinn/kakaaaa-quant':'finance','wcq-glhf/prex-quant':'finance','tradingeconomics/notebooks':'finance','tradingeconomics/tradingeconomics':'finance','nicejade/wealth-tracker':'finance',
  'black-ant/ant-browser':'efficiency','mason173/aira-browser':'efficiency','daimiaopeng/coolapk-desktop':'social','lingyan000/fluxdo':'social','liaoliao666/v2ex':'social','foru17/make-x-great-again':'social','mustangym/wechextension-formac':'social','crimera/piko':'social','crimera/piko-newx':'social','exteraless/exteraless':'social','kenischu/resource':'social','johamwon/wechrss':'social','cq0206/wechat2rss':'social','cooderl/wewe-rss':'social',
  'ritz078/moose':'media','jushizen/nimbus.player':'media','pengchujin/livecanvas':'media','pengchujin/jzsub':'media','max-tortoise/douyinliverecorder':'media','jiji262/douyin-downloader':'media','momo707577045/m3u8-downloader':'media','dongyubin/iptv':'media','yuanzl77/iptv':'media','t8rin/imagetoolbox':'media','nastool/nas-tools':'media',
  'eternity4719/howtolivebetter':'learning','bozhoudev/codex-orange-book':'learning','1c7/chinese-independent-developer':'learning','hzlzh/best-app':'learning','ka-pi-ba-la/awesome-ai-tools':'learning','plexpt/awesome-chatgpt-prompts-zh':'learning','bojieli/ai-agent-book':'learning','codeman008/financial_freedom':'learning','xgit01/sgkrank':'other'
};
function classifyProject(full, desc, lang, topics = []) {
  const name = String(full || '').toLowerCase();
  const text = (name + ' ' + String(desc || '') + ' ' + (Array.isArray(topics) ? topics.join(' ') : '')).toLowerCase();
  const topicText = (Array.isArray(topics) ? topics.join(' ') : '').toLowerCase();
  const tags = [];
  const addTag = (tag) => { if (tag && !tags.includes(tag)) tags.push(tag); };
  if (/android|kotlin/.test(topicText) || lang === 'Kotlin' || /android/.test(text)) addTag('android');
  if (/rss/.test(text)) addTag('rss');
  if (/\bmcp\b/.test(text)) addTag('mcp');
  if (/browser/.test(text)) addTag('browser');
  if (/extension|userscript/.test(text)) addTag('extension');
  if (/telegram|nagram/.test(text)) addTag('telegram');
  if (/wechat|微信/.test(text)) addTag('wechat');
  if (/ios|iphone|ipad/.test(topicText)) addTag('ios');
  if (/windows/.test(topicText)) addTag('windows');
  if (/linux/.test(topicText)) addTag('linux');
  if (/\bcli\b/.test(topicText)) addTag('cli');
  if (/\bweb\b/.test(topicText)) addTag('web');
  if (/dataset|数据集/.test(text)) addTag('dataset');
  if (/ebook|e-book|电子书/.test(text)) addTag('ebook');
  if (/adblock|广告过滤|广告规则/.test(text)) addTag('adblock');
  if (/mihomo|clash|sing.?box|shadowsocks|v2ray|xray|hysteria|passwall|edgetunnel/.test(text)) addTag('proxy');
  let primary;
  {
    if (isRuleSet(full, desc) || /(^|[-_ ])(rules?|rule-set|anti-ad|adguard|adblock)([-_ ]|$)|规则集|广告过滤/.test(text)) primary = 'rules';
    else if (/password manager|two.factor|\b2fa\b|privacy|security|vulnerability|漏洞|安全审计|密码管理|隐私保护/.test(text) && !/proxy|mihomo|clash/.test(text)) primary = 'security';
    else if (/quant|trading|trade|stock|finance|financial|tushare|chanlun|缠论|量化|证券|金融|股票|回测|market data/.test(text)) primary = 'finance';
    else if (/crawler|spider|scraper|爬虫|采集|数据抓取|数据解析|data ingestion|data pipeline|数据集|数据接口/.test(text)) primary = 'data';
    else if (/ebook|e-book|reader|reading|novel|book source|电子书|阅读器|书源|小说阅读/.test(text)) primary = 'reading';
    else if (/video|music|player|m3u8|douyin|iptv|tvbox|live stream|media server|nas-tools|视频|音乐|播放器|直播|影视|媒体库/.test(text)) primary = 'media';
    else if (/telegram|wechat|weixin|v2ex|forum|community|social|聊天|社交|论坛|社区客户端|微信|电报/.test(text)) primary = 'social';
    else if (/obsidian|notebook|knowledge management|note-taking|notes app|知识管理|笔记|知识库/.test(text)) primary = 'knowledge';
    else if (/tutorial|guide|awesome|book|course|learning|指南|教程|学习资源|精选列表|入门/.test(text)) primary = 'learning';
    else if (/gpt|llm|ollama|diffusion|whisper|gemini|agent|artificial intelligence|machine learning|large language model|人工智能|大模型|智能体|模型推理/.test(text)) primary = 'ai';
    else if (/proxy|vpn|mihomo|clash|sing.?box|shadowsocks|v2ray|xray|hysteria|passwall|network|dns|tunnel|代理|网络工具|域名解析/.test(text)) primary = 'network';
    else if (/android system|system enhancement|permission|appops|shizuku|xposed|patcher|location spoof|系统管理|权限管理|系统增强|定位模拟/.test(text)) primary = 'system';
    else if (/framework|library|sdk|api client|developer tool|debugger|compiler|programming language|开发框架|开发库|调试工具|开发工具/.test(text) || /^(JavaScript|TypeScript|Rust|Go|C#|C\+\+)$/.test(lang || '')) primary = 'dev';
    else if (/automation|clipboard|workflow|productivity|browser|launcher|task manager|automation script|自动化|剪贴板|效率工具|工作流|浏览器/.test(text)) primary = 'efficiency';
    else if (/android|system|permission|device management|设备管理|系统工具/.test(text)) primary = 'system';
    else primary = 'other';
  }
  // 先执行通用规则，再用经过核实的例外映射修正冲突或语义不明确的项目。
  const override = CATEGORY_OVERRIDES[name];
  if (override) primary = override;
  return { primary, tags, confidence: primary === 'other' ? 'review' : (override ? 'override' : 'rule') };
}

export { isRuleSet, CAT_LABELS, CAT_ORDER, CAT_DEFAULT, CAT_TAG_LABELS, classifyProject };
