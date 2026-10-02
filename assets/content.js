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
        description: "输入选题卡，按爆款四段式生成短视频口播稿：黄金 3 秒钩子开头，口语化、每 10-15 秒埋钩子，15s/30s/60s 按需出稿，附发布文案模式。"
      },
      a11y: { skip: "跳到主要内容" },
      ui: { copy: "复制", copied: "已复制", failed: "复制失败" },
      nav: { features: "能力", shots: "截图", how: "上手", faq: "问答" },

      hero: {
        badge: "AI 技能",
        titlePre: "短视频口播稿，",
        titleAccent: "按爆款结构写",
        titlePost: "",
        sub: "输入选题卡（可加拆解报告），按爆款四段式生成完整口播稿：黄金 3 秒钩子开头，全稿口语化、平均一句 ≤ 20 字，15s / 30s / 60s 按需出稿。",
        ctaPrimary: "复制安装提示词",
        ctaSecondary: "看源码",
        meta1: "纯提示词",
        meta2: "全平台",
        meta3: "广告法初筛"
      },
      chat: {
        title: "AI Agent · 对话现场",
        status: "在线",
        userLabel: "你",
        agentLabel: "AI",
        messages: [
          { role: "user", text: "按这个选题卡写一版 30 秒口播稿" },
          { role: "agent", text: "按爆款结构写：前三秒钩子、中段痛点、结尾行动；15s / 30s / 60s 三档都能出。", tag: "已读 选题卡" },
          { role: "user", text: "开头不够抓人" },
          { role: "agent", text: "换钩子重写：陈述句改成反问或冲突，第一句就给具体场景和数字。" }
        ]
      },


      stats: [
        { value: "0", label: "脚本与依赖", note: "纯提示词 —— 任何能读 SKILL.md 的 agent 都能用" },
        { value: "4 段", label: "爆款结构", note: "钩子 → 痛点 → 价值 → CTA；有拆解报告则套它的模板" },
        { value: "15/30/60s", label: "三档时长", note: "按用户要的档位独立成稿，不搞「缩写版」" },
        { value: "每 10–15s", label: "埋一个小钩子", note: "提问 / 反转 / 预告，防划走" }
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
            "结构凭感觉，没有可复用的套路"
          ]
        },
        after: {
          title: "按爆款结构填",
          items: [
            "第一句就是冲突 / 利益 / 反常识，禁止「今天聊聊」开场",
            "全稿口语化，能用「你」不用「用户」，平均一句 ≤ 20 字",
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
          { icon: "bolt", title: "黄金 3 秒钩子", desc: "用选题卡的开头钩子、或更狠的版本；第一句直接给冲突 / 利益 / 反常识，明确禁止「大家好」「今天聊聊」开场。" },
          { icon: "layers", title: "爆款四段式", desc: "钩子 → 痛点共鸣 → 价值交付（1-3 个论点，各配例子 / 数字 / 对比）→ 行动号召；有拆解报告时改用报告里的套用模板。" },
          { icon: "gauge", title: "口播语感硬规则", desc: "能用「你」就不用「用户」；每 10-15 秒埋一个小钩子；「效率提升很多」改成「3 分钟干完 2 小时的活」；结尾留一句能被复述的金句。" },
          { icon: "copy", title: "三档时长独立成稿", desc: "按用户要的档位写 15s / 30s / 60s，每档独立成稿、不搞「缩写版」；稿内标注 <code>【钩子】</code> 等段落功能，方便下游对结构。" },
          { icon: "grid", title: "发布文案模式", desc: "口播稿定稿后，产出标题区（3-5 组备选 + 钩子类型 + 适用平台）、描述区（100 字内含 CTA）、标签区（8-15 个、分三层）、备注区。" },
          { icon: "shield", title: "广告法初筛", desc: "不写极限词（最 / 第一 / 国家级）、不承诺疗效收益、数据要能给出处；写完提醒送 iskill-content-precheck 预检。" }
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
          { title: "把选题卡交给它", desc: "有拆解报告一起给它，结构会更贴；时长和钩子说清。", codeName: "prompt", code: "按这个选题卡写一版 30 秒口播稿，开头三秒要钩住人。" },
          { title: "念一遍", desc: "稿子直接回在对话里，你念一遍看顺不顺口；要更口语就让它再过一遍 iskill-copy-deslop。" }
        ]
      },


      faq: {
        eyebrow: "问答",
        title: "常见问题",
        items: [
          { q: "需要联网或 API key 吗？", a: "都不需要。它是一份提示词规范，没有任何脚本、也不调用外部服务；生成由对话中的模型完成。" },
          { q: "没有选题卡能写吗？", a: "选题卡是<b>必需</b>输入（选题 / 角度 / 钩子 / 人群痛点）。只给了一个模糊想法时，它会先把选题卡字段帮你口述补齐再动笔；不够具体就先回 iskill-hot-topic-scout。" },
          { q: "能指定视频时长吗？", a: "能，默认 45s。要做 15s / 30s / 60s 就写哪一档、每档独立成稿，不产出「缩写版」。" },
          { q: "为什么平台标「全平台」？", a: "纯提示词、无脚本，不存在平台专属命令 —— 任何能读 SKILL.md 的 agent（Claude Code、Cursor、Codex…）都能装能用。" },
          { q: "写完能直接发吗？", a: "建议先过一遍：口播稿交给 iskill-copy-deslop 去 AI 味 + 模拟观众点评，再过 iskill-content-precheck 预检；发布文案模式产出的标题 / 描述 / 标签同样要送预检（与口播稿同受合规把关）。" },
          { q: "能不能不用 AI，手动装？", a: "可以。把仓库 clone 进你的 agent 技能目录（如 <code>~/.workbuddy/skills/</code>）就行 —— 技能本身是纯文本。" }
        ]
      },

      cta: {
        title: "别再对着空白页憋开场白",
        desc: "把选题卡给它，第一句就是钩子。",
        primary: "去 GitHub 看看",
        secondary: "复制安装提示词"
      },
      footer: { license: "MIT 许可", madeWith: "由 iskill-promo-page 生成" }
    },

    /* ── English ────────────────────────────────────────────────────── */
    en: {
      meta: {
        title: "ISKILL-VIRAL-COPYWRITER · Scripts that hook in three seconds",
        description: "Give it a topic card and get a complete spoken script built on the four-part viral structure: a golden three-second hook, conversational throughout, a mini-hook every 10–15s, written to 15s / 30s / 60s on demand, plus a publish-copy mode."
      },
      a11y: { skip: "Skip to content" },
      ui: { copy: "Copy", copied: "Copied", failed: "Copy failed" },
      nav: { features: "Features", shots: "Screens", how: "Get started", faq: "FAQ" },

      hero: {
        badge: "AI skill",
        titlePre: "Write short-video scripts ",
        titleAccent: "to a proven structure",
        titlePost: "",
        sub: "Give it a topic card (optionally a teardown report) and get a complete spoken script on the four-part viral structure: a golden three-second hook, conversational language with sentences averaging under 20 characters, written to 15s / 30s / 60s.",
        ctaPrimary: "Copy install prompt",
        ctaSecondary: "View source",
        meta1: "Pure prompt",
        meta2: "All platforms",
        meta3: "Ad-law screen"
      },
      chat: {
        title: "AI Agent · live session",
        status: "online",
        userLabel: "You",
        agentLabel: "AI",
        messages: [
          { role: "user", text: "Write a 30-second script from this topic card" },
          { role: "agent", text: "Built on the viral structure: hook in the first three seconds, pain point in the middle, call to action at the end. I can do 15s, 30s or 60s.", tag: "read topic card" },
          { role: "user", text: "The opening doesn't grab me" },
          { role: "agent", text: "Rewrite the hook: turn the statement into a question or a conflict, and put a concrete scene and a number in the first line." }
        ]
      },


      stats: [
        { value: "0", label: "scripts and dependencies", note: "pure prompt — any agent that reads SKILL.md can use it" },
        { value: "4 parts", label: "the viral structure", note: "hook → pain → value → CTA; use the teardown's template when you have one" },
        { value: "15/30/60s", label: "three lengths", note: "each written as its own standalone script, never a trimmed version" },
        { value: "every 10–15s", label: "drop a mini-hook", note: "a question, a reversal or a teaser to stop the scroll" }
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
            "Structure by gut feel, with no reusable pattern"
          ]
        },
        after: {
          title: "Fill in a proven structure",
          items: [
            "The first line is conflict, benefit or counter-intuition — \"let's talk about\" is banned",
            "Conversational throughout, sentences averaging 20 characters or less",
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
          { icon: "bolt", title: "Golden three-second hook", desc: "Uses the topic card's hook, or a sharper version; the first line delivers conflict, benefit or counter-intuition, and openings like \"hi everyone\" are explicitly banned." },
          { icon: "layers", title: "The four-part structure", desc: "Hook → pain resonance → value delivery (1–3 points, each with an example, number or contrast) → call to action; a teardown report can replace this with its own template." },
          { icon: "gauge", title: "Spoken-language rules", desc: "Prefer \"you\" over \"users\"; drop a mini-hook every 10–15s; rewrite \"much more efficient\" as \"two hours of work in three minutes\"; close on a line worth repeating." },
          { icon: "copy", title: "Three lengths, standalone", desc: "Written to 15s / 30s / 60s as requested — each a standalone script, never an abridged one; sections are labelled like <code>【hook】</code> so downstream steps can read the structure." },
          { icon: "grid", title: "Publish-copy mode", desc: "Once the script is final it produces a title block (3–5 options with hook type and platform), a description (under 100 characters, including a CTA), a tag block (8–15 tags in three tiers) and an optional notes block." },
          { icon: "shield", title: "Ad-law screening", desc: "No superlatives, no promised cures or returns, and every number must be sourced; it then reminds you to run iskill-content-precheck before publishing." }
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
          { title: "Hand it the topic card", desc: "Give it a teardown report too and the structure lands closer to what works. Say the length and the hook.", codeName: "prompt", code: "Write a 30-second script from this topic card — hook me in the first three seconds." },
          { title: "Read it out loud", desc: "The script comes back in chat — read it aloud. Want it more colloquial? Send it through iskill-copy-deslop." }
        ]
      },


      faq: {
        eyebrow: "FAQ",
        title: "Frequently asked",
        items: [
          { q: "Does it need network access or an API key?", a: "Neither. It is a prompt specification with no scripts and no external services; generation happens in the conversation model." },
          { q: "Can it write without a topic card?", a: "The topic card is <b>required</b> (topic / angle / hook / audience pain point). Given only a vague idea, it helps you fill the card's fields in conversation first; if it is still too thin, go back to iskill-hot-topic-scout." },
          { q: "Can I set the video length?", a: "Yes, 45s by default. Ask for 15s / 30s / 60s and each is written as a standalone script — never an abridged version." },
          { q: "Why does it say \"all platforms\"?", a: "It is pure prompt with no scripts, so there are no platform-specific commands — any agent that reads SKILL.md (Claude Code, Cursor, Codex…) can use it." },
          { q: "Can I publish it straight away?", a: "Better to run it through the chain first: hand the script to iskill-copy-deslop for de-AI-ing and simulated audience feedback, then to iskill-content-precheck. Publish-copy output (titles / description / tags) needs the same pre-check, since it faces the same compliance bar as the script." },
          { q: "Can I install it without an agent?", a: "Sure. Clone the repo into your agent's skills directory (e.g. <code>~/.workbuddy/skills/</code>) — it is plain text." }
        ]
      },

      cta: {
        title: "Stop staring at a blank opening line",
        desc: "Hand it the topic card and the first line is already a hook.",
        primary: "Open on GitHub",
        secondary: "Copy install prompt"
      },
      footer: { license: "MIT licensed", madeWith: "Built with iskill-promo-page" }
    }
  }
};
