function setList() {
  var input_list = document.getElementById("id_list");
  chrome.storage.local.set({'bmy_blacklist_usernames': input_list.value});
  input_list.value = "";
  renderList();
}

function renderList() {
  chrome.storage.local.get('bmy_blacklist_usernames', function(data) {
    console.log(data);
    var status = document.getElementById("status");
    status.innerHTML = "Filter: " + data.bmy_blacklist_usernames;
  });
}

document.addEventListener('DOMContentLoaded', renderList);
document.querySelector('#save').addEventListener('click', setList);
