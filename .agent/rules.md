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

---

## UIコンポーネントライブラリ

### 共通パーツ (`src/components/common/`)
- **`ImageWithFallback.tsx`**: 画像読み込み失敗時の洗練されたプレースホルダー表示。
- **`AppStoreButtons.tsx`**: App Store / Google Play ストアバッジ、OS動作環境・通信料の注記テキスト。
- **`SectionHeader.tsx`**: セクション共通の見出し・バッジ・キーワードハイライト・サブテキスト。

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

## デザインシステム規約

- **ベースカラー**:
  - 背景: `#F4F5F0`（温かみのあるアース/ニュートラル系）
  - テキスト: `#2B2B2B`（柔らかいチャコールブラック）
  - アクセント: `#E6A817`（品のあるアンバーゴールド）
- **フォント**: サンセリフ（Inter, Zen Kaku Gothic New 等）、視認性の高いウェイト使い
- **カード・コンテナ**: `rounded-3xl` + `border border-black/5` + `bg-white/80 backdrop-blur-md`
