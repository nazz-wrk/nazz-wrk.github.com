﻿// Блог Никиты Лебедева, lebedev-design.ru/simple-jquery-popup
(function($) {
  $.fn.simplePopup = function() {

    // метод центирования
    $.fn.center = function() {
      var marginLeft = -this.width()/2;
      return this.css("margin-left", marginLeft);
    }
    // Общая функция скрытия
    function hide() {
      $(".p_body, .popup").fadeOut(300, 0);
    }
    // Закрытие по кнопке esc
    $(window).keyup(function(e) {
      if (e.keyCode == 27) {
        hide();
      }
    });
    // Закрытие по фону и по крестику
    $(".p_body, .p_close").click(function() {
      hide();
      return false;
    });

    return this.each(function() {

      $(this).click(function() {
        $(".p_body").fadeTo(300, 0.9);
        $(".popup").center().fadeTo(300, 1);
        return false;
      });

    });

  }
})(jQuery);
// Вызываем попап
$(function() {
  $(".js__popup").simplePopup();
});