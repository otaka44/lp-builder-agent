# ワークフロー 02: LP自動構築 (Build LP)

`src/constants/page-structure.json` に基づいて全画面を組み立てる。

## 実行手順
1. `src/constants/page-structure.json` を読み込む。
2. `src/App.tsx` 内で各 `type` に対応するコンポーネントをループ処理で動的レンダリングする構造にする。
3. `required_assets` に記載されたパス（`/images/...`）に画像が存在しない場合、暫定的に画像プレースホルダー（UnsplashまたはSVGダミー）を表示する処理を入れる。
4. ローカルサーバーを起動し、描画崩れがないか確認する。
