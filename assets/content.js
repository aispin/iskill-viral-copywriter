/* ============================================================================
 * iskill-viral-copywriter · 落地页内容
 * 只改这个文件就能换掉整页文案（外加 index.html 顶部那几行 meta）。
 * ==========================================================================*/
window.PROMO = {
  name: "ISKILL-VIRAL-COPYWRITER",
  brand: "#8b5cf6",
  brand2: "#ec4899",
  repo: "https://github.com/aispin/iskill-viral-copywriter",
  repoLabel: "aispin/iskill-viral-copywriter",

  /* 纯提示词：没有任何脚本，任何能读 SKILL.md 的 agent 都能用 → 全平台。 */
  platform: "all",
  license: "MIT",

  lang: {
    /* ── 中文 ───────────────────────────────────────────────────────── */
    zh: {
      meta: {
        title: "ISKILL-VIRAL-COPYWRITER · 爆款口播稿生成",
        description: "输入选题卡，按爆款四段式一次产出四平台四套口播稿（通用/小红书/视频号/抖音）：黄金 3 秒钩子开头，口语化、每 10-15 秒埋钩子，每套另配该平台的标题/描述/标签发布文案。"
      },
      a11y: { skip: "跳到主要内容" },
      ui: { copy: "复制", copied: "已复制", failed: "复制失败" },
      nav: { features: "能力", shots: "截图", how: "上手", faq: "问答" },

      hero: {
        badge: "AI 技能",
        titlePre: "四平台口播稿，",
        titleAccent: "按爆款结构写",
        titlePost: "",
        sub: "输入选题卡（可加拆解报告），一次出四平台四套口播稿——通用 / 小红书 / 视频号 / 抖音，按爆款四段式、黄金 3 秒钩子开头；每套另配该平台的发布文案（标题 / 描述 / 标签）。",
        ctaPrimary: "复制安装提示词",
        ctaSecondary: "看源码",
        meta1: "纯提示词",
        meta2: "四平台适配",
        meta3: "广告法初筛"
      },
      chat: {
        title: "AI Agent · 对话现场",
        status: "在线",
        userLabel: "你",
        agentLabel: "AI",
        messages: [
          { role: "user", text: "按这个选题卡出四套口播稿：通用、小红书、视频号、抖音" },
          { role: "agent", text: "四套已按各平台调性写好：通用居中可复用、小红书姐妹口吻、视频号稳重共鸣、抖音 3 秒单句冲突；事实与核心观点一致，只换钩子、节奏与 CTA。", tag: "已读 选题卡" },
          { role: "user", text: "抖音版开头还不够抓人" },
          { role: "agent", text: "换钩子重写：陈述句改成反问或冲突，第一句就给具体场景和数字——只动抖音那一套。" }
        ]
      },


      stats: [
        { value: "0", label: "脚本与依赖", note: "纯提示词 —— 任何能读 SKILL.md 的 agent 都能用" },
        { value: "4 段", label: "爆款结构", note: "钩子 → 痛点 → 价值 → CTA；有拆解报告则套它的模板" },
        { value: "15/30/60s", label: "三档时长", note: "按用户要的档位独立成稿，不搞「缩写版」" },
        { value: "4 套", label: "平台版本", note: "通用 / 小红书 / 视频号 / 抖音，各一套口播稿 + 该平台发布文案" }
      ],

      compare: {
        eyebrow: "对比",
        title: "以前 vs 现在",
        sub: "",
        before: {
          title: "对着空白页憋文案",
          items: [
            "开头总是「大家好」，前三秒留不住人",
            "写得像通稿，不像人在说话",
            "一个选题一个平台，换个平台还得重写一遍"
          ]
        },
        after: {
          title: "按爆款结构填",
          items: [
            "第一句就是冲突 / 利益 / 反常识，禁止「今天聊聊」开场",
            "全稿口语化，能用「你」不用「用户」，平均一句 ≤ 20 字",
            "同一选题一次出四套，通用 / 小红书 / 视频号 / 抖音各一套，事实一致、只换钩子与语感",
            "四段式固定骨架，有拆解报告直接套模板",
            "写完自动接去 AI 味 + 预检，不裸奔发布"
          ]
        }
      },

      features: {
        eyebrow: "能力",
        title: "它替你干的活",
        sub: "",
        items: [
          { icon: "grid", title: "四平台四套（默认）", desc: "同一选题一次出通用 / 小红书 / 视频号 / 抖音四套口播稿——<b>统一口播体裁</b>，差异只在开头钩子、节奏、语感、CTA 与关键词；四套共用同一批事实与核心观点，绝不各平台编不同数据。" },
          { icon: "bolt", title: "黄金 3 秒钩子", desc: "用选题卡的开头钩子、或更狠的版本；第一句直接给冲突 / 利益 / 反常识，明确禁止「大家好」「今天聊聊」开场。" },
          { icon: "layers", title: "爆款四段式", desc: "钩子 → 痛点共鸣 → 价值交付（1-3 个论点，各配例子 / 数字 / 对比）→ 行动号召；有拆解报告时改用报告里的套用模板。" },
          { icon: "gauge", title: "口播语感硬规则", desc: "能用「你」就不用「用户」；每 10-15 秒埋一个小钩子；「效率提升很多」改成「3 分钟干完 2 小时的活」；结尾留一句能被复述的金句。" },
          { icon: "target", title: "平台调性适配", desc: "小红书＝姐妹口吻 + 收藏驱动 + 避坑钩子；视频号＝稳重共鸣 + 转发驱动 + 悬念钩子；抖音＝3 秒单句冲突 + 短句快节奏 + 关注 CTA；通用＝居中可复用。" },
          { icon: "copy", title: "三档时长独立成稿", desc: "按用户要的档位写 15s / 30s / 60s，每档独立成稿、不搞「缩写版」；稿内标注 <code>【钩子】</code> 等段落功能，方便下游对结构。" },
          { icon: "grid", title: "逐平台发布文案", desc: "口播稿定稿后，按平台各出一份发布文案：标题区（3-5 组备选 + 钩子类型）、描述区（含 CTA）、标签区（核心词 / 长尾词 / 流量词分层）、备注区。" },
          { icon: "shield", title: "广告法初筛", desc: "不写极限词（最 / 第一 / 国家级）、不承诺疗效收益、数据要能给出处；写完提醒逐套送 iskill-content-precheck 预检。" }
        ]
      },

      showcase: {
        eyebrow: "实拍",
        title: "看一眼真东西",
        sub: "",
        items: []
      },

      steps: {
        eyebrow: "上手",
        title: "三步跑起来",
        sub: "命令由 agent 跑，你只说要什么、看结果。",
        items: [
          { title: "交给 AI 装", desc: "把这句话粘进对话框，agent 会自己拉代码、读文档，再告诉你用法。", codeKey: "install" },
          { title: "把选题卡交给它", desc: "有拆解报告一起给它，结构会更贴；时长说清，平台默认四套全出。", codeName: "prompt", code: "按这个选题卡一次出四套口播稿：通用、小红书、视频号、抖音，各 30 秒。" },
          { title: "念一遍", desc: "四套稿子直接回在对话里，你念一遍看顺不顺口；要更口语就让它逐套再过一遍 iskill-copy-deslop。" }
        ]
      },


      faq: {
        eyebrow: "问答",
        title: "常见问题",
        items: [
          { q: "四套是什么意思？能只要一套吗？", a: "默认一次出<b>四套</b>：通用 / 小红书 / 视频号 / 抖音，各一套口播稿 + 该平台发布文案。<b>统一口播体裁</b>，差异只在开头钩子、节奏、语感、CTA 与关键词。只要你点名某个平台（「只要小红书」），就只出那一套。" },
          { q: "需要联网或 API key 吗？", a: "都不需要。它是一份提示词规范，没有任何脚本、也不调用外部服务；生成由对话中的模型完成。" },
          { q: "没有选题卡能写吗？", a: "选题卡是<b>必需</b>输入（选题 / 角度 / 钩子 / 人群痛点）。只给了一个模糊想法时，它会先把选题卡字段帮你口述补齐再动笔；不够具体就先回 iskill-hot-topic-scout。" },
          { q: "能指定视频时长吗？", a: "能，默认 45s。要做 15s / 30s / 60s 就写哪一档、每档独立成稿，不产出「缩写版」；四套各自按该档写，不搞「缩写版」。" },
          { q: "为什么平台标「全平台」？", a: "那是说<b>运行平台</b>：纯提示词、无脚本，不存在平台专属命令 —— 任何能读 SKILL.md 的 agent（Claude Code、Cursor、Codex…）都能装能用。跟「四套」里的<b>内容平台</b>（小红书 / 视频号 / 抖音）是两回事。" },
          { q: "写完能直接发吗？", a: "建议先过一遍：四套口播稿各自交给 iskill-copy-deslop 去 AI 味 + 模拟观众点评，再逐套过 iskill-content-precheck 预检；发布文案模式的标题 / 描述 / 标签同样逐套送预检。" },
          { q: "能不能不用 AI，手动装？", a: "可以。把仓库 clone 进你的 agent 技能目录（如 <code>~/.workbuddy/skills/</code>）就行 —— 技能本身是纯文本。" }
        ]
      },

      cta: {
        title: "别再对着空白页憋开场白",
        desc: "把选题卡给它，一次拿四套，第一句就是钩子。",
        primary: "去 GitHub 看看",
        secondary: "复制安装提示词"
      },
      footer: { license: "MIT 许可", madeWith: "由 iskill-promo-page 生成" }
    },

    /* ── English ────────────────────────────────────────────────────── */
    en: {
      meta: {
        title: "ISKILL-VIRAL-COPYWRITER · Four platform scripts in one pass",
        description: "Give it a topic card and get four platform-specific spoken scripts in one pass (generic / Xiaohongshu / WeChat Channels / Douyin), built on the four-part viral structure: a golden three-second hook, conversational throughout, a mini-hook every 10–15s, each with its own platform publish copy."
      },
      a11y: { skip: "Skip to content" },
      ui: { copy: "Copy", copied: "Copied", failed: "Copy failed" },
      nav: { features: "Features", shots: "Screens", how: "Get started", faq: "FAQ" },

      hero: {
        badge: "AI skill",
        titlePre: "Four platform scripts, ",
        titleAccent: "to a proven structure",
        titlePost: "",
        sub: "Give it a topic card (optionally a teardown report) and get four platform-specific spoken scripts in one pass — generic / Xiaohongshu / WeChat Channels / Douyin — on the four-part viral structure, opening with a golden three-second hook; each set comes with its own platform publish copy (title / description / tags).",
        ctaPrimary: "Copy install prompt",
        ctaSecondary: "View source",
        meta1: "Pure prompt",
        meta2: "Four platforms",
        meta3: "Ad-law screen"
      },
      chat: {
        title: "AI Agent · live session",
        status: "online",
        userLabel: "You",
        agentLabel: "AI",
        messages: [
          { role: "user", text: "Write four scripts from this topic card: generic, Xiaohongshu, Channels, Douyin" },
          { role: "agent", text: "All four written to each platform's tone — generic neutral and reusable, Xiaohongshu sisterly, Channels steady and resonant, Douyin single-sentence conflict in three seconds. Same facts and core take throughout; only the hook, rhythm and CTA change.", tag: "read topic card" },
          { role: "user", text: "The Douyin opening doesn't grab me" },
          { role: "agent", text: "Rewrite the hook: turn the statement into a question or a conflict, put a concrete scene and a number in the first line — only touching the Douyin set." }
        ]
      },


      stats: [
        { value: "0", label: "scripts and dependencies", note: "pure prompt — any agent that reads SKILL.md can use it" },
        { value: "4 parts", label: "the viral structure", note: "hook → pain → value → CTA; use the teardown's template when you have one" },
        { value: "15/30/60s", label: "three lengths", note: "each written as its own standalone script, never a trimmed version" },
        { value: "4 sets", label: "platform versions", note: "generic / Xiaohongshu / Channels / Douyin, each a script plus its platform publish copy" }
      ],

      compare: {
        eyebrow: "Comparison",
        title: "Before vs after",
        sub: "",
        before: {
          title: "Staring at a blank page",
          items: [
            "It always opens with \"hi everyone\" — nobody stays for the first three seconds",
            "It reads like a press release, not a person talking",
            "One topic, one platform — switch platform and you rewrite the whole thing"
          ]
        },
        after: {
          title: "Fill in a proven structure",
          items: [
            "The first line is conflict, benefit or counter-intuition — \"let's talk about\" is banned",
            "Conversational throughout, sentences averaging 20 characters or less",
            "One topic, four sets — generic / Xiaohongshu / Channels / Douyin, same facts, only the hook and tone change",
            "A fixed four-part skeleton; drop in the teardown's template when you have one",
            "It hands off to de-AI-ing and a pre-publish check instead of shipping raw"
          ]
        }
      },

      features: {
        eyebrow: "Features",
        title: "What it takes off your plate",
        sub: "",
        items: [
          { icon: "grid", title: "Four platforms, four sets (default)", desc: "One topic produces four scripts — generic / Xiaohongshu / WeChat Channels / Douyin — in the <b>same spoken format</b>, differing only in opening hook, rhythm, tone, CTA and keywords; all four share the same facts and core take, never inventing different numbers per platform." },
          { icon: "bolt", title: "Golden three-second hook", desc: "Uses the topic card's hook, or a sharper version; the first line delivers conflict, benefit or counter-intuition, and openings like \"hi everyone\" are explicitly banned." },
          { icon: "layers", title: "The four-part structure", desc: "Hook → pain resonance → value delivery (1–3 points, each with an example, number or contrast) → call to action; a teardown report can replace this with its own template." },
          { icon: "gauge", title: "Spoken-language rules", desc: "Prefer \"you\" over \"users\"; drop a mini-hook every 10–15s; rewrite \"much more efficient\" as \"two hours of work in three minutes\"; close on a line worth repeating." },
          { icon: "target", title: "Platform tone tuning", desc: "Xiaohongshu = sisterly voice, save-driven, pitfall hooks; Channels = steady resonance, share-driven, suspense hooks; Douyin = single-sentence conflict in three seconds, short and fast, follow CTA; generic = neutral and reusable." },
          { icon: "copy", title: "Three lengths, standalone", desc: "Written to 15s / 30s / 60s as requested — each a standalone script, never an abridged one; sections are labelled like <code>【hook】</code> so downstream steps can read the structure." },
          { icon: "grid", title: "Publish copy per platform", desc: "Once each script is final it produces that platform's publish copy: a title block (3–5 options with hook type), a description (including a CTA), a tag block (core / long-tail / traffic tiers) and an optional notes block." },
          { icon: "shield", title: "Ad-law screening", desc: "No superlatives, no promised cures or returns, and every number must be sourced; it then reminds you to pre-check every set with iskill-content-precheck." }
        ]
      },

      showcase: {
        eyebrow: "Screens",
        title: "See the real thing",
        sub: "",
        items: []
      },

      steps: {
        eyebrow: "Get started",
        title: "Up and running in three steps",
        sub: "The agent runs the commands. You say what you want and check the result.",
        items: [
          { title: "Let your agent install it", desc: "Paste the line into the chat — it clones the repo, reads the docs, and tells you how to use it.", codeKey: "install" },
          { title: "Hand it the topic card", desc: "Give it a teardown report too and the structure lands closer to what works. Say the length; all four platforms come out by default.", codeName: "prompt", code: "From this topic card write four 30-second scripts: generic, Xiaohongshu, Channels and Douyin." },
          { title: "Read them out loud", desc: "All four come back in chat — read them aloud. Want them more colloquial? Send each through iskill-copy-deslop." }
        ]
      },


      faq: {
        eyebrow: "FAQ",
        title: "Frequently asked",
        items: [
          { q: "What are the four sets? Can I get just one?", a: "By default you get <b>four</b>: generic / Xiaohongshu / WeChat Channels / Douyin, each a script plus its platform publish copy. All in the <b>same spoken format</b>, differing only in opening hook, rhythm, tone, CTA and keywords. Name a single platform (\"Xiaohongshu only\") and only that set is produced." },
          { q: "Does it need network access or an API key?", a: "Neither. It is a prompt specification with no scripts and no external services; generation happens in the conversation model." },
          { q: "Can it write without a topic card?", a: "The topic card is <b>required</b> (topic / angle / hook / audience pain point). Given only a vague idea, it helps you fill the card's fields in conversation first; if it is still too thin, go back to iskill-hot-topic-scout." },
          { q: "Can I set the video length?", a: "Yes, 45s by default. Ask for 15s / 30s / 60s and each is written as a standalone script — never an abridged version; all four sets follow that length." },
          { q: "Why does it say \"all platforms\"?", a: "That refers to the <b>runtime</b>: pure prompt with no scripts, so there are no platform-specific commands — any agent that reads SKILL.md (Claude Code, Cursor, Codex…) can use it. It is separate from the <b>content platforms</b> in the four sets (Xiaohongshu / Channels / Douyin)." },
          { q: "Can I publish straight away?", a: "Better to run the chain first: hand each of the four scripts to iskill-copy-deslop for de-AI-ing and simulated audience feedback, then to iskill-content-precheck. Publish-copy output (titles / description / tags) needs the same per-set pre-check." },
          { q: "Can I install it without an agent?", a: "Sure. Clone the repo into your agent's skills directory (e.g. <code>~/.workbuddy/skills/</code>) — it is plain text." }
        ]
      },

      cta: {
        title: "Stop staring at a blank opening line",
        desc: "Hand it the topic card and get four sets, each already opening on a hook.",
        primary: "Open on GitHub",
        secondary: "Copy install prompt"
      },
      footer: { license: "MIT licensed", madeWith: "Built with iskill-promo-page" }
    }
  }
};
