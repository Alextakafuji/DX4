# Step 5 クリアとゲームオーバーを実現しよう

## Q1. ゲームオーバー
### やってみよう
爆弾の設置されているマスがクリックされたときにゲームオーバーになるようにしてみましょう。Step 4では`handle_table_click(cell)`でCSSを切り替えることによってマスの表示を変えていました。

### 解説
`cell.innerText`でそのマスの0～9値を取得することができますので、このメソッドを改造してマスが押されたときの動作を実装してみましょう。

### ヒント
```js
if (cell.innerText === '9') {
	// 爆弾が押された！
} else {
	// セーフ！
}
```

## Q2. ゲームクリア
### やってみよう
爆弾の押されていないマスがすべて押されたらゲームクリアになります。ゲームクリアの処理を実装してみましょう。

### 解説
すべてのマスが押された顔されていないか検査する必要がありますので、`table`全体を見る必要がありそうです。
Q1で修正したメソッドに引数を追加して`table`を参照できるようにしましょう。

### ヒント
マスが押されたか押されていないかは`cell.className`で確認することができます。

```js
if (cell.className === "cell off") {
	// おされていない
} else {
	// おされてている
}
```

爆弾のマスは押されていないはずですので、どのような条件文になるかを考えてみましょう。

### ブラウザで表示してみよう
どうしても難しい場合は以下のファイルをブラウザで表示してみましょう。

```
./src/step1/q-5-1/html/ms.html
```
