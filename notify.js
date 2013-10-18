$(function() {
  var bmyUrl;
  var getBmyUrl = function() {
    chrome.tabs.query({url: 'http://bbs.xjtu.edu.cn/*'},
      function(tab) {
        bmyUrl = tab[0].url;
      }
    );
    return bmyUrl;
  },
  fetchNotification = function() {
    var bmyUrl = getBmyUrl();
    if (!!bmyUrl) {
      var ident = bmyUrl.split('/')[3],
          url = "http://bbs.xjtu.edu.cn/" + ident + '/bbsnotify',
          xhr = new XMLHttpRequest();
          xhr.onload = function() {
            page = $.parseHTML(xhr.responseText),
            unreadCount = $('.notify-item a[href^=bbscon]', page).length,
            unreadCountKey = 'bmy-unread-count',
            cachedUnreadCount = localStorage.getItem(unreadCountKey) || 0;
            if (unreadCount > cachedUnreadCount) {
              var notification = window.webkitNotifications.createNotification('img/notify.png', '通知', '有新的BMY提醒...');
              notification.onclick = function() {
                chrome.tabs.create({url: url});
              }
              notification.show();
            }
            localStorage.setItem(unreadCountKey, unreadCount);
          }
          xhr.open('GET', url);
          xhr.send();
    }
  }
  window.setInterval(fetchNotification, 30 * 1000);
  fetchNotification();
})
