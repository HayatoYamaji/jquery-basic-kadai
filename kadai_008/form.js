$(function() {
  // ボタンがクリックされたら
  $('.btn').on('click', function(){
    // テキストボックスに値を設定
    $('.text-box').val('クリックしました！');
  });
});