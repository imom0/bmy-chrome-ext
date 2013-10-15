$(function() {
  var fetchNotification = function() {
    var path = document.location.pathname.split('/')[1],
        url = document.location.protocol + "//" + document.location.hostname + "/" + path + '/notify',
        page = $.parseHTML($.getJSON(url)),
        unreadCount = $('.notify-item', page).length;
  }
  fetchNotification();
})
