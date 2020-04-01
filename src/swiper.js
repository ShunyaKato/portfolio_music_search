import $ from 'jquery';
import Swiper from 'swiper';

$('document').ready(function () {

  var mySwiper1 = new Swiper('.main__slider', {
    // オプションパラメータ(一部のみ抜粋)
    loop: true, // 最後のスライドまで到達した場合、最初に戻らずに続けてスライド可能にするか。
    loopedSlides: 3,
    speed: 580, // スライドが切り替わるトランジション時間(ミリ秒)。
    slidesPerView: 'auto', // 何枚のスライドを表示するか
    spaceBetween: 10, // スライド間の余白サイズ(ピクセル)
    direction: 'horizontal', // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
    effect: 'slide', // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)
    centeredSlides: true,
    // スライダーの自動再生
    // autoplay: true, 　//のみなら既定値での自動再生
    // autoplay: {
    //   delay: 10000, // スライドが切り替わるまでの表示時間(ミリ秒)
    //   stopOnLast: false, // 最後のスライドまで表示されたら自動再生を中止するか
    //   disableOnInteraction: false // ユーザーのスワイプ操作を検出したら自動再生を中止するか
    // },
    parallax: true,
    // レスポンシブ化条件
    breakpoints: {
      // 980ピクセル幅以下になったら
      680: {
        spaceBetween: 5,
      }
    },
    //   // 640ピクセル幅以下になったら
    //   640: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //   }
    // },

    // ページネーションを表示する場合
    // pagination: {
    //   el: '.swiper-pagination',　 // ページネーションを表示するセレクタ
    // },

    // 前後スライドへのナビゲーションを表示する場合
    navigation: {
      nextEl: '.swiper-button-next', // 次のスライドボタンのセレクタ
      prevEl: '.swiper-button-prev', // 前のスライドボタンのセレクタ
    },

    // スクロールバーを表示する場合
    // scrollbar: {
    //   el: '.swiper-scrollbar', // スクロールバーを表示するセレクタ
    // }
  });

}); 
