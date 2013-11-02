$ ->
  getBmyUrl = ->
    chrome.tabs.query
      url: 'http://bbs.xjtu.edu.cn/*',
      (tab) -> tab[0].url

  getUnreadCount = (ident) ->
    url = "http://bbs.xjtu.edu.cn/#{ident}/bbsnotify"
    unreadCount = 0
    $.get url, (data) ->
      page = $.parseHTML data
      unreadCount = $('.notify-item a[href^=bbscon]', page).length
    unreadCount

  sendNotification = (ident) ->
    unreadCountKey = 'bmy-unread-count'
    cachedUnreadCount = localStorage.getItem unreadCountKey
    unreadCount = getUnreadCount ident
    if unreadCount > cachedUnreadCount
      notification = window.webkitNotifications.createNotification 'img/notify.png', '通知', '有新的BMY提醒...'
      notification.onclick = ->
        chrome.tabs.create url: url
      notification.show()
    localStorage.setItem unreadCountKey, unreadCount

  fetchNotification = ->
    bmyUrl = getBmyUrl()
    if bmyUrl
      ident = bmyUrl.split('/')[3]
      sendNotification ident

  chrome.contextMenus.create
    title: "复制当前页面url",
    contexts:["all"],
    onclick: (info) ->
      temp = $('<textarea />')
      url = info.frameUrl
      universalUrl = url.split '/'
      universalUrl[3] = 'BMY'
      universalUrl = universalUrl.join '/'
      temp.text universalUrl
      $('body').append temp
      temp.select()
      document.execCommand 'copy'
      temp.remove()

  window.setInterval fetchNotification, 30 * 1000
  fetchNotification()
