(function() {
  $(function() {
    var delay;
    delay = 20;
    return window.setTimeout((function() {
      var id, isAfterLogout, pw;
      id = $('[name=id]').val();
      pw = $('[name=pw]').val();
      isAfterLogout = /bbslogout/.test(document.referrer);
      if (id && pw && !isAfterLogout) {
        return $('form').submit();
      }
    }), delay);
  });

}).call(this);
