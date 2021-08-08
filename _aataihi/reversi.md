---
title: 'reversi!'
excerpt: 'リバーシゲームアプリ。'
coverImage: '/images/works/reversi.png'
date: '2018-12-08'
ogImage:
  url: '/assets/blog/preview/cover.jpg'
---

## 概要

---
ECサイトデモ。管理画面で商品を追加して一覧に表示。カートにて注文メールを送信します。

### 開発経緯

CRUD処理とECサイトの構造を学ぶため。

---

### 仕様

使用言語: PHP, JavaScript, HTML/CSS  
フレームワーク: Bootstrap  
環境: Apache  
データベース: MySQL  
バージョン管理: Git, GitHub  

### 主な機能

条件を指定して商品検索  
季節に応じた旬の野菜を表示  
毎週安売り商品が入れ替わる  
料理から商品を検索  
注文確認メールの送信  
商品・料理を管理画面から編集できる  

### その他・学んだこと

入力値の処理  
HTMLのエスケープ処理（XSS対策）  
静的プレースホルダの使用（SQLインジェクション対策）  
管理画面にDigest認証  
