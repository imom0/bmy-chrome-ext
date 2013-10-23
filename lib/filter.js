(function() {
  chrome.storage.local.get('bmy_blacklist_usernames', function(data) {
    var articles, element, html, index, list, pattern, tables, _i, _len, _results;
    list = data.bmy_blacklist_usernames.split('|').map(function(e) {
      return '\\b' + e + '\\b';
    }).join('|');
    pattern = new RegExp(list, "i");
    tables = document.getElementsByTagName("table");
    articles = Array.prototype.slice.call(tables, 7);
    _results = [];
    for (index = _i = 0, _len = articles.length; _i < _len; index = ++_i) {
      element = articles[index];
      html = element.getElementsByTagName("a")[4].innerHTML;
      if (pattern.test(html)) {
        _results.push(element.style.display = "none");
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  });

}).call(this);
