$(function () {
  // id属性がchange-colorの要素がクリックされたら
  $('#change-color').on('click', function () {
    // 文字色を赤に変化
    $('#target').css('color', 'red');
  });

  // id属性がchage-textの要素がクリックされたら
  $('#change-text').on('click', function () {
    // テキストをHello!に変化
    $('#target').text('Hello!');
  });

  // id属性がfade-outの要素をクリックされたら
  $('#fade-out').on('click', function () {
    // フェードアウトする
    $('#target').fadeOut();
  });

  // id属性がfade-inの要素がクリックされたら
  $('#fade-in').on('click', function () {
    // フェードインする
    $('#target').fadeIn();
  });
});