# LP Builder Agent Guidelines

AI駆動開発においてデザイン崩れを防ぎ、数分で高品質なLPを組み上げるための開発規約とコンポーネント設計仕様です。

---

## 開発原則（Architecture Principles）

1. **ゼロからコードを書かない**:
   ページ制作は `src/components/sections/` にある共通コンポーネントと `src/components/common/` の組み合わせで行うこと。
2. **データ駆動レンダリング**:
   ページのレイアウト・文言・画像アセット指定はすべて `src/constants/page-structure.json`（または `.agent/templates/structure.json`）の宣言に従うこと。
3. **デザインシステムのカプセル化**:
   余白（`py-16` / `py-24`）、コンテナ幅（`max-w-6xl`）、角丸（`rounded-3xl` / `rounded-full`）、カラーパレットはコンポーネント側で統一する。
4. **必須ページ・法務・サポートの完備**:
   LP自動生成時は、以下の3つのページ/ビューを必ず含めること：
   - **`privacy`**: 'Privacy Policy' / 'プライバシーポリシー'
   - **`terms`**: 'Terms of Service' / '利用規約'
   - **`support`**: 'Support & FAQ' / 'サポート・FAQ'
   ヘッダーまたはフッターから遷移・閲覧可能にし、規約やサポート窓口への導線を保証する。
5. **多言語（i18n / i10n）対応の標準化**:
   - 少なくとも**日本語（`ja`）および英語（`en`）**の切り替えに対応すること。
   - ヘッダー等に言語切り替えスイッチ（Language Switcher）を設置し、メインLPおよび必須ページ（Privacy, Terms, Support）の全テキストが切り替わる構造を保つこと。

---

## UIコンポーネントライブラリ

### 共通パーツ (`src/components/common/`)
- **`ImageWithFallback.tsx`**: 画像読み込み失敗時の洗練されたプレースホルダー表示。
- **`AppStoreButtons.tsx`**: App Store / Google Play ストアバッジ、OS動作環境・通信料の注記テキスト。
- **`SectionHeader.tsx`**: セクション共通の見出し・バッジ・キーワードハイライト・サブテキスト。
- **`LanguageSwitcher.tsx`**: 日英（`ja` / `en`）切り替えドロップダウン/トグル。
- **`LegalModal.tsx` / `LegalPage.tsx`**: Privacy Policy / Terms of Service / Support & FAQ の多言語コンテンツ表示ビュー。

### セクションコンポーネント (`src/components/sections/`)

| Type | Component | 役割・構成要素 |
| :--- | :--- | :--- |
| **`Hero`** | `HeroSection.tsx` | ファーストビュー（メインコピー / サブコピー / 説明文 / アプリストアバッジ / 注記 / メインビジュアル / 実績数値） |
| **`TabbedFeature`** | `TabbedFeatureSection.tsx` | 切り替え型機能紹介（セクション見出し / 番号付きタブ 01, 02, 03 / キャッチコピー / 詳細テキスト / ポイントリスト / 画像） |
| **`FeatureHighlight`** | `FeatureHighlightSection.tsx` | フォーカス機能解説（大見出し / 概要 / 利用シーン別カード【防災備蓄・ゴミ回収等】 / ラベルイメージ & 使用写真） |
| **`IconGrid`** | `IconGridSection.tsx` | アイコン＋テキスト格子配列（2×2 または 3×3 / ピクトグラム・フォント見本 / 簡潔な説明 / 「要会員登録」等の注記） |
| **`Banner`** | `BannerSection.tsx` | 画像＋文章のビジュアルバナー（背景グラフィック / キャッチコピー / 概要説明 / テンプレート画像 / CTA） |
| **`LinkBox`** | `LinkBoxSection.tsx` | 誘導用コンテンツリンク（アイキャッチ画像 / タイトル / 説明文 / 「紹介ページはこちら」等のリンクボタン） |
| **`CTA`** | `CTASection.tsx` | 最終コンバージョン（締めくくりキャッチコピー / アプリアイコン画像 / アプリストアリンク / 保証・メリットバッジ） |

---

## 必須ページ仕様（Mandatory Pages & i18n）

LP生成時は以下の3ページを必ずフッターリンクおよびビューとして実装・収録します：

1. **Privacy Policy / プライバシーポリシー (`privacy`)**
   - 収集する情報、利用目的、第三者提供、データ保護に関する方針を明記（日・英両対応）。
2. **Terms of Service / 利用規約 (`terms`)**
   - サービスの利用条件、免責事項、禁止事項、権利帰属を明記（日・英両対応）。
3. **Support & FAQ / サポート・FAQ (`support`)**
   - よくある質問（FAQアコーディオン/リスト）および問い合わせ先（サポートメール・フォームリンク等）を明記（日・英両対応）。

---

## デザインシステム・スタイリング規約（Design System & Guidelines）

`.agent/skills/lp-frontend-design/SKILL.md` の原則を遵守し、AIテンプレ臭（AI Slop）を排除した高品質なビジュアルを構築します。

- **テーマカラー管理**:
  - `site_metadata.theme` で定義されたカラーパレット（Primary / Background / Text / Accent）をCSS変数およびTailwindクラスを通じて動的に適用する。
  - プロダクトの世界観に合わせ、4〜6色の明確なカラーシステムを策定する（安易な汎用パレットの固定利用を禁止）。
- **タイポグラフィ**:
  - サービスのトーンに最適なフォント（明朝、幾何学サンセリフ、ヒューマニスト等）を選定。
  - 日本語の1行の長さは 35〜45 文字程度に制限し、可読性を最大化する。英語表示時も適切な行長と文字組みを維持する。
  - 単語1つだけのグラデーション装飾や、無意味な大文字ラベル（FEATURE等）は使用しない。
- **カード・コンテナ & 余白**:
  - 構造そのものが情報を語る規律あるレイアウト（`max-w-6xl`、セクション間余白 `py-16` / `py-24`）。
  - すべてのカードを画一的な角丸や影で囲むSaaSキット感を排し、情報の重要度に応じた階層表現を行う。
- **モーション & インタラクション**:
  - スクロール連動の全画面フェードインは避け、ユーザーのアクションに応じた自然なフィードバックに限定する。

---

## ワークフロー構成（Workflows）

1. **`01-generate-spec.md` (構成データ生成)**:
   - サービス文脈抽出、トークン策定、必須3ページ（Privacy/Terms/Support）& 日英i18nデータ定義、AI Slop自己批評。
2. **`02-build-lp.md` (LP自動構築 & スタイリング)**:
   - `page-structure.json` に基づく動的レンダリング、デザインシステム適用、フォールバック検証、ローカル動作確認。
3. **`03-seo-cro-optimization.md` (SEO & CRO 最適化)**:
   - 専門マーケティングスキルを活用した検索・AIエンジン・CVR・アナリティクスの包括的最適化。

---

## マーケティング & SEO/CRO スキル体系（Marketing & SEO Stack）

以下の5つの専門スキル（`.agents/skills/`）を連携して高品質なマーケティング基盤を構築します：

- **`seo-audit`**: 内部SEO診断、メタタグ（Title/Description/OGP）、見出し階層（h1〜h3）、画像alt、CWV最適化。
- **`schema`**: Schema.org 構造化データ（JSON-LD）の実装（SoftwareApplication, FAQPage, Organization 等）。
- **`ai-seo`**: 生成AI・アンサーエンジン（ChatGPT/Perplexity/Gemini/Claude）向け最適化（AEO/GEO）および `public/llms.txt` 出力。
- **`cro`**: コンバージョン率最大化（CTA設計、フリクション排除、タップ領域48px+、心理的安全バッジ）。
- **`analytics`**: GA4/GTM のコンバージョントラッキングおよびイベント計測設計。


