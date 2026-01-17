<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>コスメ診断メーカー</title>

  <script src="https://cdn.tailwindcss.com"></script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'M PLUS Rounded 1c', sans-serif;
      background-color: #fff5f7;
    }
    .sparkle-bg {
      background-image: radial-gradient(circle, #ffcbd1 1px, transparent 1px);
      background-size: 20px 20px;
    }
  </style>

  <!-- importmapは「どこからimportするか」の地図。これだけでは何も起きない -->
  <script type="importmap">
  {
    "imports": {
      "react": "https://esm.sh/react@19.2.0",
      "react-dom/client": "https://esm.sh/react-dom@19.2.0/client",
      "@google/genai": "https://esm.sh/@google/genai@1.37.0"
    }
  }
  </script>
</head>

<body class="sparkle-bg min-h-screen">
  <div id="root"></div>

  <!-- これが無いと何も表示されません -->
  <script type="module">
    import React, { useMemo, useState } from "react";
    import { createRoot } from "react-dom/client";
    // import { GoogleGenerativeAI } from "@google/genai"; // APIキーが必要。後で使うなら有効化

    function App() {
      const [count, setCount] = useState(0);

      const tips = useMemo(() => ([
        "肌悩みはまず保湿が9割（個人の感想）",
        "日焼け止めは投資効率が高すぎる",
        "高い化粧品より睡眠が強い日もある"
      ]), []);

      const tip = tips[count % tips.length];

      return (
        React.createElement("div", { className: "max-w-xl mx-auto p-6" },
          React.createElement("div", { className: "bg-white/80 backdrop-blur rounded-2xl shadow p-6 border border-pink-100" },
            React.createElement("h1", { className: "text-2xl font-bold text-pink-700" }, "コスメ診断メーカー（動く版）"),
            React.createElement("p", { className: "mt-2 text-gray-700" }, "とりあえずReactが描画できる状態にしました。ここから質問や診断UIを足していけばOK。"),
            React.createElement("div", { className: "mt-4 p-4 rounded-xl bg-pink-50 border border-pink-100" },
              React.createElement("p", { className: "text-sm text-pink-900" }, "今日の一言："),
              React.createElement("p", { className: "mt-1 font-bold text-pink-800" }, tip)
            ),
            React.createElement("button", {
              className: "mt-5 w-full py-3 rounded-xl bg-pink-600 text-white font-bold hover:bg-pink-700 transition",
              onClick: () => setCount(c => c + 1)
            }, "テストでカウント +1（" + count + "）")
          )
        )
      );
    }

    const rootEl = document.getElementById("root");
    createRoot(rootEl).render(React.createElement(App));
  </script>
</body>
</html>
