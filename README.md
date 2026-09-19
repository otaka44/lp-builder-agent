# LP Builder Agent

サービス概要を入力するだけで、AI（Antigravity等）が自動的にコンポーネント選択・データ注入・アセット定義を行って高クオリティなLPを最速で構築する「LP生成専用エージェントリポジトリ」です。

---

## 🚀 クイックスタート

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 開発サーバーの起動
```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開くと、`src/constants/page-structure.json` に定義されたLPが即座にレンダリングされます。

---

## 🤖 AIエージェントを使ったLP自動生成の3ステップ

### ステップ 1: 概要を投入する（構成データの生成）
AIチャット（Antigravity等）で以下のように伝えます：
> 「`.agent/workflows/01-generate-spec.md` を実行して。サービス概要は以下の通りです：
> [サービス名、ターゲット、主要機能、強みなどを入力]」

➔ `src/constants/page-structure.json` に最適なセクション構成データが自動生成・上書き保存されます。

### ステップ 2: 自動ビルドを実行する
> 「`.agent/workflows/02-build-lp.md` を実行して」

➔ React + Tailwind CSS の動的レンダラーによって画面が瞬時に構築されます。

### ステップ 3: 画像の手配・生成
`page-structure.json` に出力された `ai_prompt` をそのまま画像生成AI（Midjourney、DALL-E、Imagen等）に投げるか、指定されたパス（例: `/public/images/hero/hero_dashboard.png`）に画像を配置します。
画像が未配置の場合でも、美しいフォールバックカードが表示されるためレイアウトが崩れません。

---

## 📁 ディレクトリ構成

```text
lp-builder-agent/
├── .agent/
│   ├── rules.md                   # AIエージェントの基本ルール（デザイン・実装方針）
│   ├── workflows/
│   │   ├── 01-generate-spec.md    # 概要から構成データ(JSON)を作るフロー
│   │   └── 02-build-lp.md         # JSONからコードを作るフロー
│   └── templates/
│       └── structure.json         # 構成データの出力フォーマット（スキーマ）
├── public/
│   └── images/                    # アセット格納用（自動生成or手動配置）
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── ImageWithFallback.tsx  # 画像未配置時フォールバック
│   │   └── sections/              # 7つの基本UIコンポーネント（再利用）
│   │       ├── HeroSection.tsx
│   │       ├── TabbedFeatureSection.tsx
│   │       ├── FeatureHighlightSection.tsx
│   │       ├── IconGridSection.tsx
│   │       ├── BannerSection.tsx
│   │       ├── LinkBoxSection.tsx
│   │       └── CTASection.tsx
│   ├── constants/
│   │   └── page-structure.json    # 案件ごとに差し替える構成データ
│   ├── App.tsx                    # 動的レンダラー
│   ├── main.tsx
│   └── index.css                  # デザインシステム・タイポグラフィ
├── package.json
└── tailwind.config.js
```

---

## 🎨 7つの標準セクションコンポーネント

| コンポーネント | `type` 名 | 用途 |
|---|---|---|
| `<HeroSection />` | `Hero` | ファーストビュー（キャッチコピー、CTA、メインビジュアル、実績バッジ） |
| `<TabbedFeatureSection />` | `TabbedFeature` | インタラクティブなタブ切り替えによる機能紹介 |
| `<FeatureHighlightSection />` | `FeatureHighlight` | 特徴のハイライト（画像＋テキスト＋チェックリスト） |
| `<IconGridSection />` | `IconGrid` | アイコンとカードによるメリット・特徴一覧（2〜4列対応） |
| `<BannerSection />` | `Banner` | 目を惹くダークトーン/アクセントのプロモーションバナー |
| `<LinkBoxSection />` | `LinkBox` | ドキュメント、事例、FAQなどのリンクカード集 |
| `<CTASection />` | `CTA` | 高CVRを狙うコンバージョン誘導セクション |
