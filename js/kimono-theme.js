/**
 * @file
 * Kimono Theme behaviors.
 */
(function (Drupal) {

  'use strict';

  Drupal.behaviors.kimonoTheme = {
    attach (context, settings) {

      console.log('It works!');
      const style = document.createElement('style');
      style.type = 'text/tailwindcss';
      style.textContent = `
      @theme {
        --font-serif: "EB Garamond", "Hina Mincho", serif;
        --color-primary: #aa2828;
      }
      @layer components {
        .panel {
          @apply py-12 md:py-20 px-4 md:px-8 flex flex-col space-y-10;
        }
        .panel_title {
          @apply text-3xl flex flex-col items-center font-bold before:content-[url(https://kimono-fukumoto.com/assets/img/common/ornament01.svg)];
        }
        .btn-more {
          @apply block mx-auto relative w-50 md:w-70 bg-primary text-white text-center py-2 md:py-4;
          &::after {
            @apply content-[''] absolute top-1/2 right-2 w-8 h-[1px] bg-white transition-[width] delay-300;
          }
          &:hover::after {
            @apply w-0;
          }
        }
        .breadcrumb {
          @apply container mx-auto flex [&>li:not(:last-child)]:after:content-['›'] [&>li:not(:last-child)]:after:px-2;
        }
      }
      @layer utilities {
        .container {
          margin-inline: auto;
        }

        .content-auto {
          content-visibility: auto;
        }
      }
      main {
        @apply relative z-0 bg-[url('https://kimono-fukumoto.com/assets/img/common/bg.png')];

        &::before {
          background-image: url("https://kimono-fukumoto.com/assets/img/common/bg_left.png"),
            url("https://kimono-fukumoto.com/assets/img/common/bg_right.png");
          background-position: left, right;
          background-size: 25vw auto, 25vw auto;
          @apply content-[''] absolute inset-0 z-[-1] bg-repeat-y;
        }
      }

      .front_about {
        background-image: url(https://kimono-fukumoto.com/assets/img/top/bg_about_left.png),url(https://kimono-fukumoto.com/assets/img/top/bg_about_right.png);
        background-position: left top,right top;
        background-size: 50vw auto, 50vw auto;
        @apply bg-repeat-y bg-white;
      }

      .about_list {
        @apply container mx-auto grid md:grid-cols-3 gap-4 lg:gap-6 *:shadow-md;
      }
      .about_list_item {
        @apply bg-white;
      }
      .about_list_item_img {
        @apply relative grid *:col-[-1/-1] *:row-[-1/-1];
        &::after {
          background-image: url(https://kimono-fukumoto.com/assets/img/common/ornament03.svg);
          @apply content-[''] absolute -left-3 bottom-11 w-9 aspect-square bg-contain bg-no-repeat;
        }
      }
      .about_list_item_img_txt {
        @apply bg-white flex items-center self-end justify-self-start h-15 px-4 text-2xl;
        &::before,
        &::after {
          @apply content-[''] absolute left-4 h-[1px] bg-[#c4b174];
        }
        &::before {
          @apply w-20 bottom-0;
        }
        &::after {
          @apply w-10 -bottom-2;
        }
      }`;
      document.head.appendChild(style);

    }
  };

} (Drupal));
