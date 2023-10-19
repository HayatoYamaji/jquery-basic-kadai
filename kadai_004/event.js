  $(window).on('load scroll', (event) => {
    // 読み込みが完了した場合
    if(event.type === 'load'){
      console.log('loadイベントが発生しました');
    }
    // スクロールした場合
    if(event.type === 'scroll'){
      console.log('scrollイベントが発生しました');
    }
  });
