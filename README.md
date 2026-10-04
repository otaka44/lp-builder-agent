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

➔ `lp-frontend-design` スキルに基づいてサービスの文脈に即したデザイン方針（配色・タイポグラフィ・Hero主役要素）が策定され、**必須3ページ（Privacy Policy / Terms of Service / Support & FAQ）**および**日英多言語（i18n）**を含む構成データが `src/constants/page-structure.json` に自動生成されます。

### ステップ 2: 自動ビルド・スタイリングを実行する
> 「`.agent/workflows/02-build-lp.md` を実行して」

➔ React + Tailwind CSS の動的レンダラーによって画面が瞬時に構築され、言語切り替えスイッチや法務・サポートモーダル、デザイン品質チェック（タイポグラフィ・コントラスト・レスポンシブ）が行われます。

### ステップ 3: SEO・AEO・CRO 最適化を実行する
> 「`.agent/workflows/03-seo-cro-optimization.md` を実行して」

➔ 導入された5つの専門スキル（`seo-audit`, `schema`, `ai-seo`, `cro`, `analytics`）が連携し、内部SEO、Schema.org 構造化データ（JSON-LD）、AI検索エンジン向け `public/llms.txt`、CVR最適化、GA4/GTM計測設計を完備します。

---

## 📁 ディレクトリ構成

```text
lp-builder-agent/
├── .agent/                        # LP Builder Agent 固有の規約・ワークフロー
│   ├── rules.md                   # AIエージェントの基本ルール（デザイン・実装方針・必須ページ規約）
│   ├── skills/
│   │   └── lp-frontend-design/    # LP特化型フロントエンドデザインスキル
│   │       └── SKILL.md
│   ├── workflows/
│   │   ├── 01-generate-spec.md    # デザイン方針策定＆構成データ(JSON)生成フロー
│   │   ├── 02-build-lp.md         # JSONからコード構築・品質検証フロー
│   │   └── 03-seo-cro-optimization.md # SEO/AEO/Schema/CRO/Analytics最適化フロー
│   └── templates/
│       └── structure.json         # 構成データの出力フォーマット（スキーマ）
├── .agents/                       # 公式/コミュニティ配布スキルの配置ディレクトリ (npx skills add)
│   └── skills/
│       ├── ai-seo/                # AIアンサーエンジン(ChatGPT/Perplexity等)引用最適化
│       ├── analytics/             # GA4/GTMイベント・コンバージョントラッキング設計
│       ├── cro/                   # コンバージョン率最適化・CTA設計
│       ├── schema/                # Schema.org JSON-LD 構造化データ実装
│       └── seo-audit/             # 内部SEO・メタタグ・見出し階層・CWV診断
├── public/
│   ├── llms.txt                   # AI検索クローラー向けサマリーテキスト
│   └── images/                    # アセット格納用（自動生成or手動配置）
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── ImageWithFallback.tsx  # 画像未配置時フォールバック
│   │   │   ├── LanguageSwitcher.tsx   # 日英（ja/en）切り替えトグル
│   │   │   ├── LegalModal.tsx         # Privacy, Terms, Supportモーダルビュー
│   │   │   ├── AppStoreButtons.tsx    # アプリストア導線バッジ
│   │   │   └── SectionHeader.tsx      # セクション共通ヘッダー
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
│   ├── App.tsx                    # 動的レンダラー & 多言語・モーダル制御
│   ├── main.tsx
│   └── index.css                  # デザインシステム・タイポグラフィ
├── package.json
└── tailwind.config.js
```

---

## 🛡️ 必須ページ & 多言語（i18n）仕様

生成されるすべてのLPは、以下の3ページ（モーダル）および日英（`ja` / `en`）切り替えに対応しています：

| キー | 日本語名称 | 英語名称 | 内容 |
|---|---|---|---|
| `privacy` | プライバシーポリシー | Privacy Policy | 取得情報、利用目的、第三者提供、データ保護方針 |
| `terms` | 利用規約 | Terms of Service | サービス利用条件、免責事項、知的財産権、禁止行為 |
| `support` | サポート・FAQ | Support & FAQ | よくある質問（FAQアコーディオン）とお問い合わせ窓口 |

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

