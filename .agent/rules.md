# LP Builder Agent Guidelines

## 開発の原則
1. 新規にゼロからUIを書かないこと。必ず `src/components/sections/` にある共通コンポーネントを使用する。
2. ページの構成は `src/constants/page-structure.json` の宣言通りにレンダリングする。
3. `required_assets` に定義された画像パスにしたがい、ダミー画像または生成画像を配置する。

## デザインシステム
- **テイスト**: 洗練されたモダン、クリーン、読みやすいアース/パステルトーン。
- **ベースカラー**: 背景 `#F4F5F0`（または白）、テキスト `#2B2B2B`。
- **角丸ルール**: カードやボタンは大きめの角丸（`rounded-2xl` または `rounded-full`）。
- **余白**: セクション間は `py-16` 〜 `py-24` でゆったり確保する。

## コンポーネント・マッピング
- `Hero` -> `<HeroSection />`
- `TabbedFeature` -> `<TabbedFeatureSection />`
- `FeatureHighlight` -> `<FeatureHighlightSection />`
- `IconGrid` -> `<IconGridSection />`
- `Banner` -> `<BannerSection />`
- `LinkBox` -> `<LinkBoxSection />`
- `CTA` -> `<CTASection />`
