(function() {
  var keyword, queryString, redirect, td, tds, _fn, _i, _len;

  queryString = document.location.search;

  keyword = /keyword=([^&]*)/.exec(queryString);

  if (keyword) {
    keyword = keyword[1].toLowerCase();
  }

  redirect = function(tag) {
    if (tag.length > 0 && tag[0].innerHTML.toLowerCase() === keyword) {
      return window.location = tag[0].href;
    }
  };

  tds = document.getElementsByClassName('tduser');

  _fn = function(td) {
    return redirect(td.getElementsByTagName('a'));
  };
  for (_i = 0, _len = tds.length; _i < _len; _i++) {
    td = tds[_i];
    _fn(td);
  }

}).call(this);
