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

### ステップ 1: 概要を投入する（デザイン計画 & 構成データの生成）
AIチャット（Antigravity等）で以下のように伝えます：
> 「`.agent/workflows/01-generate-spec.md` を実行して。サービス概要は以下の通りです：
> [サービス名、ターゲット、主要機能、強みなどを入力]」

➔ `lp-frontend-design` スキルに基づいてサービスの文脈に即したデザイン方針（配色・タイポグラフィ・Hero主役要素）が策定され、AI Slopを排除した構成データが `src/constants/page-structure.json` に自動生成されます。

### ステップ 2: 自動ビルド・スタイリングを実行する
> 「`.agent/workflows/02-build-lp.md` を実行して」

➔ React + Tailwind CSS の動的レンダラーによって画面が瞬時に構築され、デザイン品質チェックが行われます。

### ステップ 3: 画像の手配・生成
`page-structure.json` に出力された `prompt`（または `ai_prompt`）をそのまま画像生成AI（Midjourney、DALL-E、Imagen等）に投げるか、指定されたパス（例: `/public/images/hero/hero-visual.png`）に画像を配置します。
画像が未配置の場合でも、美しいフォールバックカードが表示されるためレイアウトが崩れません。

---

## 📁 ディレクトリ構成

```text
lp-builder-agent/
├── .agent/
│   ├── rules.md                   # AIエージェントの基本ルール（デザイン・実装方針）
│   ├── skills/
│   │   └── lp-frontend-design/    # LP特化型フロントエンドデザインスキル
│   │       └── SKILL.md
│   ├── workflows/
│   │   ├── 01-generate-spec.md    # デザイン方針策定＆構成データ(JSON)生成フロー
│   │   └── 02-build-lp.md         # JSONからコード構築・品質検証フロー
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
