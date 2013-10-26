(function() {
  $(function() {
    var getBmyUrl;
    return getBmyUrl = function() {
      return chrome.tabs.query({
        url: 'http://bbs.xjtu.edu.cn/*'
      }, function(tab) {
        return tab[0].url;
      });
    };
  });

}).call(this);
