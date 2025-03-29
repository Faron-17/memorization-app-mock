# ER図

## Memorization App データベース

```mermaid
---
title: "ユーザーアカウント"
---
erDiagram
  users ||--o{ memo_categories : ""
  memo_categories ||--o{ memo_items : ""

  users {
    uuid id PK "ID"
    varchar username "ユーザー名"
    string password "パスワード"
    string email "メールアドレス"
  }

  memo_categories {
    uuid id PK "ID"
    uuid user_id FK "User ID:users.id"
    string name "カテゴリー名"
    boolean pin "Navにピン留め"
  }

  memo_items {
    uuid id PK "ID"
    uuid category_id FK "Memo Category ID:memo_categories.id"
    string title "タイトル"
    string answer "解答"
    timestamp created_at "作成日時"
    timestamp updated_at "更新日時"
    number count "回数"
  }
```

## 補足
- サイドナビゲーションのカテゴリー名の右に出ている数値は、今日の日付とupdated_at、countを比較して、数値として加算されたりされなかったりする。回数は3以上の場合は比較対象にならない。1回目は何日後に加算対象となるかの設定ファイルをコードで持つ想定
- 認証：メールアドレスとOAuth認証（google）