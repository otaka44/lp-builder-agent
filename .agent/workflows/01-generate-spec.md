# ワークフロー 01: 構成データ生成 (Spec Generation)

ユーザーから入力された「サービス概要」や「提供されたWebサイトの情報」を元に、LPの構造データを作成する。

## 実行手順
1. `.agent/templates/structure.json` の形式を厳格に守ること。
2. 入力情報からキーメッセージ、ターゲット、主要機能を抽出する。
3. 再利用可能な 7 種類のコンポーネント（Hero, TabbedFeature, FeatureHighlight, IconGrid, Banner, LinkBox, CTA）から最適な構成を選択する。
4. 各セクションで必要な画像アセットの「画像指示リスト（required_assets）」と「AI生成プロンプト（ai_prompt）」を作成する。
5. 出力結果を `src/constants/page-structure.json` に上書き保存する。
