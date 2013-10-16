$(function() {
  var fetchNotification = function() {
    var path = document.location.pathname.split('/')[1],
        url = document.location.protocol + "//" + document.location.hostname + "/" + path + '/bbsnotify',
        page = $.parseHTML($.getJSON(url)),
        unreadCount = $('.notify-item', page).length,
        unreadCountKey = 'bmy-unread-count',
        cachedUnreadCount = localStorage.getItem(unreadCountKey) || 0;;
        if (window.webkitNotifications.checkPermission() == 0) { 
          if (unreadCount > cachedUnreadCount) {
              window.webkitNotifications.createNotification('img/notify.png', '通知', '有新的BMY提醒...').show();
          }
        } else {
          window.webkitNotifications.requestPermission();
        }
        localStorage.setItem(unreadCountKey, unreadCount);
  }
  window.setInterval(fetchNotification, 60 * 1000);
  fetchNotification();
})
