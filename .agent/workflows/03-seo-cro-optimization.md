# ワークフロー 03: SEO & CRO 最適化 (SEO, AEO, Schema & CRO Optimization)

LPの構築完了後、検索エンジン（Google/Bing）、AIアンサーエンジン（ChatGPT/Perplexity/Gemini等）、およびユーザーのコンバージョン率（CVR）を最大化するための体系的な最適化ワークフローです。

導入された5つの専門スキル（`seo-audit`, `schema`, `ai-seo`, `cro`, `analytics`）を連携して実行します。

---

## 実行手順（5-Step Optimization Workflow）

```mermaid
flowchart TD
    A[1. 内部SEO診断 & メタデータ最適化\n(seo-audit)] --> B[2. 構造化データ実装\n(schema)]
    B --> C[3. AI検索・LLM引用最適化\n(ai-seo)]
    C --> D[4. コンバージョン率最適化\n(cro)]
    D --> E[5. 計測・アナリティクス設計\n(analytics)]
```

---

### Step 1: 内部SEO診断 & メタデータ最適化 (`seo-audit`)
1. **メタタグ・OGPの完全検証**:
   - `index.html` および `site_metadata` の `<title>`、`<meta name="description">`、`<link rel="canonical">`、`og:image`、`og:title`、`og:description`、`twitter:card` を最適化。
   - タイトルは 30〜60 文字程度、ディスクリプションは 80〜120 文字程度で、ターゲットキーワードとブランド名を自然に含める。
2. **見出し階層（Heading Structure）の正規化**:
   - ページ全体で `<h1>` はファーストビューのメインコピー1つのみ。
   - 各セクションの見出しは `<h2>`、カードやサブ要素は `<h3>` とし、見出しレベルのスキップを排除。
3. **画像・アセットの最適化**:
   - 全ての `<img>` / `ImageWithFallback` に意味のある `alt` 属性および `width` / `height` アスペクト比を設定。

---

### Step 2: 構造化データ実装 (`schema`)
1. **JSON-LD Schema の埋め込み**:
   - アプリケーション/プロダクトの性質に応じた構造化データを `index.html` または `src/main.tsx` の `<head>` に JSON-LD 形式で出力：
     - `SoftwareApplication` / `Product`: アプリ名、OS、価格（Free）、評価スコア（AggregateRating）
     - `Organization` / `Brand`: 運営元、ロゴ、公式サイトURL
     - `FAQPage`: `legal_pages.support.faq` に基づくQ&Aの構造化
     - `WebSite`: サイト名、言語（`ja` / `en`）
2. **リッチリザルトテスト準拠**:
   - Google Rich Results テストで構文エラー・必須プロパティ欠落が出ない形式を保証。

---

### Step 3: AI検索 & LLM引用最適化 (`ai-seo`)
1. **Answer Engine Optimization (AEO/GEO)**:
   - ChatGPT、Perplexity、Claude、Google AI Overviews などの生成AIが回答を抽出・引用しやすいように、各セクションの冒頭に「結論ファーストの定義文」を配置。
   - 比較表、箇条書き、FAQ形式を活用して情報密度を高める。
2. **`llms.txt` の生成**:
   - ルートまたは `public/llms.txt` に、AIエージェントがサイトの全体構造と主要機能・URLを即座に理解できるクリーンなマークダウンサマリーを出力。

---

### Step 4: コンバージョン率最適化 (`cro`)
1. **CTA（行動喚起）の強化**:
   - CTAボタンの文言を「送信」「登録」ではなく、具体的なメリットを伝える能動態（例:「無料でダウンロード」「今すぐ始める」）にする。
   - スクロール追従（ヘッダー）とページ最下部（CTAセクション）に常に明確な導線を確保。
2. **フリクション（心理的抵抗）の排除**:
   - 無料利用の明記、対応OS注記、プライバシーポリシー・利用規約・サポートへのリンク常設により安心感を醸成。
3. **モバイルタップ領域（Tap Targets）**:
   - モバイル端末で押しやすい最小48×48pxのボタンサイズと適切なマージンを確保。

---

### Step 5: 計測・アナリティクス設計 (`analytics`)
1. **コンバージョンイベント設計**:
   - GA4 / GTM の標準イベント（`click_app_store`, `click_google_play`, `click_header_cta`, `switch_language`, `open_legal_modal`）の発火トリガーを策定・実装。
2. **UTMパラメータ・流入経路計測**:
   - 外部リンクやプロモーション用URLに適切な `utm_source`, `utm_medium`, `utm_campaign` パラメータを付与可能にする。

---

## 完了チェックリスト

- [ ] `seo-audit`: Title, Description, OGP, h1-h3 階層, img alt が完璧に設定されている
- [ ] `schema`: `SoftwareApplication` / `FAQPage` / `Organization` の JSON-LD が `<head>` に組み込まれている
- [ ] `ai-seo`: `public/llms.txt` が生成され、AI検索エンジン向けのQ&A・特徴記述が整っている
- [ ] `cro`: CTA文言、視認性、ボタンサイズ（48px+）、心理的安全要素が完備されている
- [ ] `analytics`: 主要CV導線の data 属性またはイベント発火ハンドラが設定されている
