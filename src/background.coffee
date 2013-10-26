$ ->
  getBmyUrl = ->
    chrome.tabs.query url: 'http://bbs.xjtu.edu.cn/*',
      (tab) -> return tab[0].url
