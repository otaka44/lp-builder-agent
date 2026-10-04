# ワークフロー 02: LP自動構築 & スタイリング (Build & Style LP)

`src/constants/page-structure.json` に基づいて全画面を動的に組み立て、`.agent/skills/lp-frontend-design/SKILL.md` の基準を満たすスタイリングと品質検証を行う。

---

## 実行手順

### 1. 構成データ・テーマの読み込み
1. `src/constants/page-structure.json` を読み込む。
2. `site_metadata.theme` に定義されたカラーパレット（プライマリ色、背景色、テキスト色）およびタイポグラフィが正しく反映されているか確認する。

### 2. 動的コンポーネントレンダリング & 必須ページ
1. `src/App.tsx` 内で各 `type`（Hero, TabbedFeature, FeatureHighlight, IconGrid, Banner, LinkBox, CTA）に対応するコンポーネントを動的にレンダリングする。
2. `required_assets` に記載されたパス（`/images/...`）に画像が存在しない場合、`ImageWithFallback` による美しいフォールバックカードが機能していることを確認する。
3. ヘッダー・フッターに言語切り替え（日・英）と、必須3ページ（`privacy`: Privacy Policy / プライバシーポリシー, `terms`: Terms of Service / 利用規約, `support`: Support & FAQ / サポート・FAQ）への導線を確実に設置する。

### 3. フロントエンドデザイン品質チェック（Frontend Design Audit）
- **タイポグラフィ**: 行長（日本語35〜45文字程度）、適切な行間、見出しと本文のコントラストが担保されているか。英語切り替え時にもレイアウト崩れがないか。
- **アクセシビリティ**: テキストと背景色のコントラスト比（WCAG AA基準）を満たしているか。
- **レスポンシブ**: モバイル（390px〜）およびデスクトップ表示時に、ファーストビューや主要導線、法務・サポートモーダル/ページが美しく保たれているか。
- **アニメーションの抑制**: 全画面フェードインなどの過剰な動きを排除し、必要なフィードバックのみに絞られているか。
- **必須ページ・多言語機能**: Privacy Policy、Terms of Service、Support & FAQ が日英両言語で正常に表示・切り替えできるか。

### 4. ローカル検証
1. ローカル開発サーバー（`http://localhost:5173`）で描画崩れがないか確認する。
2. 日英の言語切り替えおよび各法務・サポートページの表示を確認する。

