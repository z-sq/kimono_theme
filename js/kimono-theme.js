/**
 * @file
 * Kimono Theme behaviors.
 */
(function (Drupal) {
  "use strict";

  Drupal.behaviors.kimonoTheme = {
    attach(context, settings) {
      console.log("It works!");
    },
  };
})(Drupal);

jQuery(function($) {
    //17インチ（1280×1024）ディスプレイ用
    // if( $(window).width() > 768 && $(window).width() < 1281 && $(window).height() < $(window).width() ) {
    //   $('html').css('zoom', '0.8');
    // }
    // else {
    //   $('html').css('zoom', '');
    // }

    //スムーススクロール
    var $target;

    //ページ内リンク
    $('a[href^="#"], area[href^="#"]').on("click", function () {
      _href = $(this).attr("href");
      //ページトップとアンカー判別
      if (_href == "#") {
        $target = $("html");
        _speed = 800;
      } else {
        $target = $(_href);
        _speed = 500;
      }
      if (!$target[0]) return false;
      smoothScroll($target, _speed);
      return false;
    });

    // 別ページからのリンク
    if (location.hash != "") {
      $target = $(location.hash);
      smoothScroll($target, 400);
    }

    function smoothScroll($target, _speed) {
      _tt = $target.offset().top;
      _menu_h = $(".header").height() + 20;
      _pos = _tt > 0 ? _tt - _menu_h : _tt;
      $("html, body").animate({ scrollTop: _pos }, _speed, "swing");
    }

    //ドロワーメニュー
    $menu = $(".header_menu");
    $(".header_menu_btn").on("click", function () {
      _scr_p = $(window).scrollTop();
      _addcls = "header_nav_open";

      if ($(this).hasClass("active")) {
        //閉じる
        $(this).removeClass("active");
        $menu.removeClass("show");

        if ($(window).width() < 768) {
          //スマホのみ
          _scr_p = $("body").css("top");
          $("body").removeClass(_addcls).css({ top: "" });
          $(window).scrollTop(-parseInt(_scr_p));
        }
      } else {
        //開く
        $(this).addClass("active");
        $menu.addClass("show");

        if ($(window).width() < 768) {
          //スマホのみ
          $("body").addClass(_addcls).css({ top: -_scr_p });
        }
      }
    });

    //スクロールでフェードイン セッティング
    var $scrfade = $(
      "main.mainContents section:not(.top_mv):not(.main_ttl) > *," +
        ".about_list_item," +
        ".plan_list > li," +
        ".sbi_item," +
        ".guide_list_item," +
        ".column_list > li"
    );
    var _fadep = $(window).height() * 0.8; //画面上部から何割のところでフェードインさせるか設定

    // ロード後、スクロール、リサイズ時
    $(window).on("load scroll resize", function () {
      _scrt = $(window).scrollTop();
      _ww = $(window).width();

      // フェードイン
      $scrfade.each(function () {
        _thisp = $(this).offset().top;
        if (_thisp < $(window).height() || _thisp < _scrt + _fadep) {
          $(this).addClass("fade_in");
        } else {
          $(this).addClass("fade");
        }
      });

      // ページトップへボタン表示
      if (200 < _scrt) {
        $(".pagetop").addClass("show");
      } else {
        $(".pagetop").removeClass("show");
      }

      // PCのみ
      if (_ww > 767) {
        // ヘッダーをコンパクトにする
        _change_p = parseInt($(".mainContents").css("padding-top"));
        if (_change_p < _scrt) {
          $(".header").addClass("change");
        } else {
          if (!$menu.hasClass("show")) {
            $(".header").removeClass("change");
          }
        }

        // 追従コンテンツ幅が画面サイズを超えた場合横スクロールを効かせる（最低幅1300px）
        if (_ww < 1300) {
          $(".header").css("left", -$(window).scrollLeft());
        }

        // 画面縦幅よりコンテンツ高さが大きい場合スクロールさせる
        _hdr_menu_h = $(".header_menu_wrp").height();
        if ($(window).height() < $(".header_logo").height() + _hdr_menu_h) {
          $(".header_menu_wrp").css({
            overflow: "scroll",
            height: _hdr_menu_h,
          });
        } else {
          $(".header_menu_wrp").css({ overflow: "", height: "" });
        }
      }
    });

    // 汎用アコーディオン
    $(".acc_btn, .acc_btn_sp").on("click", function () {
      $slide = $(this).next(".acc_slide");
      if ($(this).hasClass("acc_btn_sp")) {
        //スマホのみ
        if ($(window).width() < 768) {
          accordion($(this), $slide);
          return false;
        }
      } else {
        //PCスマホ汎用
        accordion($(this), $slide);
        return false;
      }
    });
    // アコーディオン開閉
    function accordion($this, $slide) {
      if ($this.hasClass("active")) {
        //閉じる
        $this.removeClass("active");
        $slide.slideUp("fast");
      } else {
        //開く
        $this.addClass("active");
        $slide.slideDown("fast");
      }
    }

});
