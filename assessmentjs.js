(function () {
  'use strict';
  const userNameInput = document.getElementById('user-name');
  const assessmentButton = document.getElementById('assessment');
  const resultDivided = document.getElementById('result-area');
  const tweetDivided = document.getElementById('tweet-area');
  /*指定した要素のこどもを全て削除する
    @param{HTMLElement} element HTMLの要素
  */
  function remoteAllChildren(elemetnt) {
    while (elemetnt.firstchild) {
      elemetnt.remotechild(element.firstchild);
    }
  }

  assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length == 0) {
      return;
    }
    /*診断エリアを作成する*/
    remoteAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const pargraph = document.createElement('p');
    const result = assessment(userName);
    pargraph.innerText = result;
    resultDivided.appendChild(pargraph);

    /*ツイートエリアを作成する*/
    remoteAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%81%84%E3%84%E3%81%A8%E3%82%8D&test=';
    + encodeURIComponent(result);
    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.innerText = 'Tweet #%E3%81%82%E3%81AA%E3%81%9F%E3%81%AE%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D';
    tweetDivided.appendChild(anchor);

    twittr.widgets.load();
  };

  userNameInput.onkeydown = (event) => {
    if (event.keyCode === 13) {
      assessmentButton.onclick();
    }
  };

  const answers = [
    '{userName}のいいところは声です。{userName}の特徴的な声はみなを惹きつけ、心に残ります。',
    '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方ないでしょう。',
    '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
    '{userName}のいいところは厳しさです。{userName}の厳しさがものごとを成功に導きます。',
    '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
    '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。'
  ];
  
  /*名前の文字列を渡すと診断結果を返す関数
    @param {string} userName ユーザーの名前
    @return {string} 診断結果
  */
  function assessment(userName) {
    //全文字コード番号を取得して足し合わせる
    let sumOfcharCode = 0;
    for (let i = 0; i < sumOfchar.length; i++) {
      sumOfcharCode += sumOfcharCode + userName.charCodeAt(i);
    }
    //文字コード番号の合計を回答の数で割って添え字の数値を求める
    const index = sumOfcharCode % answers.length;
    let result = ansers[index];

    result = result.replace(/{userName}/g, userNmae);
    return result;
  }
  //テストコード
  conslse.assert(
    assessment('太郎') === '太郎のいいところは決断力です。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません'
  );
  conslse.assert(
    assessment(太郎) === assessment('太郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  );
})();
