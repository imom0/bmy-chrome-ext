(function() {
  $(function() {
    var fetchNotification, getBmyUrl, getUnreadCount, sendNotification;
    getBmyUrl = function() {
      return chrome.tabs.query({
        url: 'http://bbs.xjtu.edu.cn/*'
      }, function(tab) {
        return tab[0].url;
      });
    };
    getUnreadCount = function(ident) {
      var unreadCount, url;
      url = "http://bbs.xjtu.edu.cn/" + ident + "/bbsnotify";
      unreadCount = 0;
      $.get(url, function(data) {
        var page;
        page = $.parseHTML(data);
        return unreadCount = $('.notify-item a[href^=bbscon]', page).length;
      });
      return unreadCount;
    };
    sendNotification = function(ident) {
      var cachedUnreadCount, notification, unreadCount, unreadCountKey;
      unreadCountKey = 'bmy-unread-count';
      cachedUnreadCount = localStorage.getItem(unreadCountKey);
      unreadCount = getUnreadCount(ident);
      if (unreadCount > cachedUnreadCount) {
        notification = window.webkitNotifications.createNotification('img/notify.png', '通知', '有新的BMY提醒...');
        notification.onclick = function() {
          return chrome.tabs.create({
            url: url
          });
        };
        notification.show();
      }
      return localStorage.setItem(unreadCountKey, unreadCount);
    };
    fetchNotification = function() {
      var bmyUrl, ident;
      bmyUrl = getBmyUrl();
      if (bmyUrl) {
        ident = bmyUrl.split('/')[3];
        return sendNotification(ident);
      }
    };
    chrome.contextMenus.create({
      title: "复制当前页面url",
      contexts: ["all"],
      onclick: function(info) {
        var temp, universalUrl, url;
        temp = $('<textarea />');
        url = info.frameUrl;
        universalUrl = url.split('/');
        universalUrl[3] = 'BMY';
        universalUrl = universalUrl.join('/');
        temp.text(universalUrl);
        $('body').append(temp);
        temp.select();
        document.execCommand('copy');
        return temp.remove();
      }
    });
    window.setInterval(fetchNotification, 30 * 1000);
    return fetchNotification();
  });

}).call(this);
