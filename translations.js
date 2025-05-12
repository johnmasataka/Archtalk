const translations = {
    en: {
        // Navigation
        home: "Home",
        community: "Community",
        documentation: "Concept",
        help: "Help",
        signIn: "Sign In",
        
        // Hero Section
        // heroTitle: "Redefine BIM with AI",
        heroSubtitle: "Talk to Build, Build to Think, Think to Create",
        playground: "Playground",
        viewPaper: "View Paper",
        viewVideo: "View Video",
        revitVersion: "Revit Version",
        
        // About Section
        aboutTitle: "About",
        aboutText1: "Archtalk is an interactive web application for architectural design and visualization. It combines 3D building modeling with AI-powered chat assistance to help design and modify building structures.",
        aboutText2: "The application uses a JSON-based data structure to define building elements, which is then visualized in 3D. When users request changes through the chat interface, the OpenAI API interprets these requests and updates the JSON data accordingly, which automatically refreshes the model visualization.",
        aboutText3: "This project combines architectural design tools with conversational AI to make building design more accessible and intuitive.",
        techTitle: "Technology Stack",
        frontend: "Frontend",
        frontendDesc: "React.js with Zustand",
        rendering: "3D Rendering",
        renderingDesc: "Three.js with React Three Fiber",
        styling: "Styling",
        stylingDesc: "CSS with Tailwind CSS",
        backend: "Backend",
        backendDesc: "Node.js with Express",
        ai: "AI Integration",
        aiDesc: "OpenAI API",
        dataFormat: "Data Format",
        dataFormatDesc: "JSON for model representation",
        
        // Team Section
        leadManager: "Lead Manager & Full-Stack Developer",
        johnName: "John Masataka Xianfeng Jiang",
        johnAffiliation: "Columbia University GSAPP",
        johnBio: "John is a New York/ Tokyo-based architect, AI researcher, and project manager. He has over seven years of professional experience at Kengo Kuma & Associates (KKAA) and is a member of the Architectural Institute of Japan (AIJ). Currently, he is exploring the development of large language models (LLMs) to contribute to the architecture, engineering, and construction industries.",
        advisors: "Advisors",
        contact: "Contact",
        email: "Email",
        linkedin: "LinkedIn",
        
        // Features Section
        featuresTitle: "A Conversational Interface for Building Information Modeling (BIM)",
        feature1Title: "3D Building Visualization",
        feature1Desc: "The application renders building models in 3D using Three.js. Users can interact with the model, rotate it, zoom in/out, and view different aspects of the building design.",
        feature2Title: "Real-time Updates",
        feature2Desc: "Changes made through the chat interface or control panels are immediately reflected in the 3D model.",
        feature3Title: "Parametric Controls",
        feature3Desc: "Users can adjust various building parameters like roof type, wall colors, and window styles through control panels and sliders.",
        feature4Title: "AI-Powered Chat Interface",
        feature4Desc: "The integrated chat system allows users to describe architectural changes through natural language, which are then processed by an OpenAI API to modify the building model.",
        
        // CTA Section
        ctaTitle: "Start creating amazing architecture today",
        ctaSubtitle: "Join thousands of artists, designers, and creators using Archtalk",
        getStarted: "Get Started Now"
    },
    ja: {
        // Navigation
        home: "ホーム",
        community: "コミュニティ",
        documentation: "コンセプト",
        help: "ヘルプ",
        signIn: "サインイン",
        
        // Hero Section
        heroTitle: "AIでBIMを再定義",
        heroSubtitle: "話して作る、作って考える、考えて創造する",
        playground: "プレイグラウンド",
        viewPaper: "論文を見る",
        viewVideo: "動画を見る",
        revitVersion: "Revit版",
        
        // About Section
        aboutTitle: "概要",
        aboutText1: "Archtalkは、建築設計と可視化のためのインタラクティブなWebアプリケーションです。3D建物モデリングとAI搭載のチャットアシスタントを組み合わせて、建物構造の設計と修正を支援します。",
        aboutText2: "アプリケーションは、JSONベースのデータ構造を使用して建物要素を定義し、それを3Dで可視化します。ユーザーがチャットインターフェースを通じて変更を要求すると、OpenAI APIがこれらの要求を解釈し、JSONデータを更新します。これにより、モデルの可視化が自動的に更新されます。",
        aboutText3: "このプロジェクトは、建築設計ツールと会話型AIを組み合わせて、建物設計をよりアクセスしやすく直感的にします。",
        techTitle: "技術スタック",
        frontend: "フロントエンド",
        frontendDesc: "React.jsとZustand",
        rendering: "3Dレンダリング",
        renderingDesc: "Three.jsとReact Three Fiber",
        styling: "スタイリング",
        stylingDesc: "CSSとTailwind CSS",
        backend: "バックエンド",
        backendDesc: "Node.jsとExpress",
        ai: "AI統合",
        aiDesc: "OpenAI API",
        dataFormat: "データ形式",
        dataFormatDesc: "モデル表現のためのJSON",
        
        // Team Section
        leadManager: "リードマネージャー＆フルスタック開発者",
        johnName: "ジョン・賢峰・蔣",
        johnAffiliation: "コロンビア大学",
        johnBio: "蔣はニューヨークと東京を拠点とする建築家、AI研究者、プロジェクトマネージャー。" + 
                "隈研吾建築都市設計事務所にてマネージャーを務め、日本建築学会正会員。" + 
                "現在は、建築・エンジニアリング・建設分野における大規模言語モデル（LLM）の応用と開発に取り組んでいる。",
        advisors: "アドバイザー",
        contact: "お問い合わせ",
        email: "メール",
        linkedin: "LinkedIn",
        
        // Features Section
        featuresTitle: "建築情報モデリング（BIM）のための会話型インターフェース",
        feature1Title: "3D建物可視化",
        feature1Desc: "アプリケーションはThree.jsを使用して建物モデルを3Dでレンダリングします。ユーザーはモデルを操作し、回転させ、ズームイン/アウトし、建物設計のさまざまな側面を表示できます。",
        feature2Title: "リアルタイム更新",
        feature2Desc: "チャットインターフェースまたはコントロールパネルを通じて行われた変更は、3Dモデルに即座に反映されます。",
        feature3Title: "パラメトリック制御",
        feature3Desc: "ユーザーは、コントロールパネルとスライダーを通じて、屋根の種類、壁の色、窓のスタイルなどのさまざまな建物パラメータを調整できます。",
        feature4Title: "AI搭載チャットインターフェース",
        feature4Desc: "統合されたチャットシステムにより、ユーザーは自然言語で建築変更を記述でき、OpenAI APIが処理して建物モデルを修正します。",
        
        // CTA Section
        ctaTitle: "今日から素晴らしい建築を作り始めましょう",
        ctaSubtitle: "Archtalkを使用する何千ものアーティスト、デザイナー、クリエイターに参加しましょう",
        getStarted: "今すぐ始める"
    },
    'zh-CN': {
        // Navigation
        home: "首页",
        community: "社区",
        documentation: "开发概念",
        help: "帮助",
        signIn: "登录",
        
        // Hero Section
        heroTitle: "用AI重新定义BIM",
        heroSubtitle: "对话构建，构建思考，思考创造",
        playground: "演示版",
        viewPaper: "查看论文",
        viewVideo: "查看视频",
        revitVersion: "Revit版本",
        
        // About Section
        aboutTitle: "关于",
        aboutText1: "Archtalk是一个用于建筑设计和可视化的交互式Web应用程序。它将3D建筑建模与AI驱动的聊天辅助相结合，帮助设计和修改建筑结构。",
        aboutText2: "该应用程序使用基于JSON的数据结构来定义建筑元素，然后在3D中进行可视化。当用户通过聊天界面请求更改时，OpenAI API会解释这些请求并相应地更新JSON数据，从而自动刷新模型可视化。",
        aboutText3: "该项目将建筑设计工具与会话式AI相结合，使建筑设计更加易于访问和直观。",
        techTitle: "技术栈",
        frontend: "前端",
        frontendDesc: "React.js与Zustand",
        rendering: "3D渲染",
        renderingDesc: "Three.js与React Three Fiber",
        styling: "样式",
        stylingDesc: "CSS与Tailwind CSS",
        backend: "后端",
        backendDesc: "Node.js与Express",
        ai: "AI集成",
        aiDesc: "OpenAI API",
        dataFormat: "数据格式",
        dataFormatDesc: "用于模型表示的JSON",
        
        // Team Section
        leadManager: "项目管理和全栈开发者",
        johnName: "蒋贤峰",
        johnAffiliation: "哥伦比亚大学",
        johnBio: "蒋贤峰是一位常驻纽约/东京的建筑师、AI研究员和项目经理。他在隈研吾建筑都市设计事务所（KKAA）担任设计总监，并且是日本建筑学会的会员。目前，他正在探索开发大型语言模型（LLM），为建筑、工程和建设行业做出贡献。",
        advisors: "顾问",
        contact: "联系方式",
        email: "邮箱",
        linkedin: "领英",
        
        // Features Section
        featuresTitle: "建筑信息模型（BIM）的对话式界面",
        feature1Title: "3D建筑可视化",
        feature1Desc: "应用程序使用Three.js在3D中渲染建筑模型。用户可以与模型交互，旋转它，放大/缩小，并查看建筑设计的不同方面。",
        feature2Title: "实时更新",
        feature2Desc: "通过聊天界面或控制面板所做的更改会立即反映在3D模型中。",
        feature3Title: "参数控制",
        feature3Desc: "用户可以通过控制面板和滑块调整各种建筑参数，如屋顶类型、墙壁颜色和窗户样式。",
        feature4Title: "AI驱动的聊天界面",
        feature4Desc: "集成的聊天系统允许用户通过自然语言描述建筑更改，然后由OpenAI API处理以修改建筑模型。",
        
        // CTA Section
        ctaTitle: "立即开始创建令人惊叹的建筑",
        ctaSubtitle: "加入使用Archtalk的数千名艺术家、设计师和创作者",
        getStarted: "立即开始"
    },
    'zh-TW': {
        // Navigation
        home: "首頁",
        community: "社群",
        documentation: "開發理念",
        help: "幫助",
        signIn: "登入",
        
        // Hero Section
        heroTitle: "用AI重新定義BIM",
        heroSubtitle: "對話構建，構建思考，思考創造",
        playground: "演示版",
        viewPaper: "查看論文",
        viewVideo: "查看影片",
        revitVersion: "Revit版本",
        
        // About Section
        aboutTitle: "關於",
        aboutText1: "Archtalk是一個用於建築設計和可視化的互動式Web應用程式。它將3D建築建模與AI驅動的聊天輔助相結合，幫助設計和修改建築結構。",
        aboutText2: "該應用程式使用基於JSON的數據結構來定義建築元素，然後在3D中進行可視化。當用戶通過聊天界面請求更改時，OpenAI API會解釋這些請求並相應地更新JSON數據，從而自動刷新模型可視化。",
        aboutText3: "該項目將建築設計工具與會話式AI相結合，使建築設計更加易於訪問和直觀。",
        techTitle: "技術棧",
        frontend: "前端",
        frontendDesc: "React.js與Zustand",
        rendering: "3D渲染",
        renderingDesc: "Three.js與React Three Fiber",
        styling: "樣式",
        stylingDesc: "CSS與Tailwind CSS",
        backend: "後端",
        backendDesc: "Node.js與Express",
        ai: "AI集成",
        aiDesc: "OpenAI API",
        dataFormat: "數據格式",
        dataFormatDesc: "用於模型表示的JSON",
        
        // Team Section
        leadManager: "首席經理和全棧開發者",
        johnName: "蔣賢峰",
        johnAffiliation: "哥倫比亞大學",
        johnBio: "蔣賢峰是一位常駐紐約/東京的建築師、AI研究員和專案經理。他在隈研吾建築都市設計事務所（KKAA）担任專案經理，並且是日本建築學會（AIJ）的會員。目前，他正在探索開發大型語言模型（LLM），為建築、工程和建設行業做出貢獻。",
        advisors: "顧問",
        contact: "聯繫方式",
        email: "郵箱",
        linkedin: "領英",
        
        // Features Section
        featuresTitle: "建築信息模型（BIM）的對話式界面",
        feature1Title: "3D建築可視化",
        feature1Desc: "應用程式使用Three.js在3D中渲染建築模型。用戶可以與模型交互，旋轉它，放大/縮小，並查看建築設計的不同方面。",
        feature2Title: "實時更新",
        feature2Desc: "通過聊天界面或控制面板所做的更改會立即反映在3D模型中。",
        feature3Title: "參數控制",
        feature3Desc: "用戶可以通過控制面板和滑塊調整各種建築參數，如屋頂類型、牆壁顏色和窗戶樣式。",
        feature4Title: "AI驅動的聊天界面",
        feature4Desc: "集成的聊天系統允許用戶通過自然語言描述建築更改，然後由OpenAI API處理以修改建築模型。",
        
        // CTA Section
        ctaTitle: "立即開始創建令人驚嘆的建築",
        ctaSubtitle: "加入使用Archtalk的數千名藝術家、設計師和創作者",
        getStarted: "立即開始"
    }
}; 