// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  let i = document.querySelector('span#kaisu');
  let n = Number(i.textContent);

  i.textContent = n + 1;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso = (document.querySelector('input#kaitou').value);
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  let m = document.querySelector('p[id="result"]');
  let kaitou = m.textContent;
  if (yoso >= 4) {
    kaitou = '答えは' + kotae + 'でした. すでにゲームは終わっています';
  } else if (yoso === 3) {
    kaitou = 'まちがい. 残念でした答えは' + kotae + 'です.';
  } else if (yoso === n) {
    kaitou = '正解です. おめでとう!';
  }
  // 　　　　  正解/不正解のときのメッセージを表示する

  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let b = document.querySelector('button#print');
b.addEventListener('click', hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
