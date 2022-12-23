// ヘッダーメイン画像のスライダー設定
const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const menu = document.querySelector(".menu");
const headline = document.querySelector(".headline");
// メイン画像アニメーション
const tl =gsap.timeline();
tl.fromTo(hero, 1, {height:"0%"},{height:"80%",ease:Power2.easeInOut}).fromTo(hero,1.2,{width:"80%"},{width:"60%",ease:Power2.easeInOut}).fromTo(slider,1.2,{y:"100%"},{y:"0%",ease:Power2.easeInOut},"-=1.2")
.fromTo(logo,0.5,{opacity:0,x:30},{opacity:1,x:0},"-=0.5")
.fromTo(menu,0.5,{opacity:0,x:30},{opacity:1,x:0},"-=0.5")
.fromTo(headline,0.5,{opacity:0,x:0},{opacity:1,x:30},"-=0.5");

// セクション画像のフェードイン
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
              $(this).addClass('active');
            }
        });
    });
});
$(function(){
    $(window).scroll(function (){
        $('.faderight').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
              $(this).addClass('active');
              $(this).addClass('active');
            }
        });
    });
});
//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100){//上から100pxスクロールしたら
      $('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
      $('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
    }else{
      if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
        $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
        $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
      }
    }
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
  });
  
  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
  });
  
  
  // #page-topをクリックした際の設定
  $('#page-top').click(function () {
    var scroll = $(window).scrollTop(); //スクロール値を取得
    if(scroll > 0){
      $(this).addClass('floatAnime');//クリックしたらfloatAnimeというクラス名が付与
          $('body,html').animate({
              scrollTop: 0
          }, 2000,function(){//スクロールの速さ。数字が大きくなるほど遅くなる
              $('#page-top').removeClass('floatAnime');//上までスクロールしたらfloatAnimeというクラス名を除く
          }); 
    }
      return false;//リンク自体の無効化
  });

