function setList() {
  var input_list = document.getElementById("id_list");
  localStorage.setItem("bmy",input_list.value);
  input_list.value = "";
  renderList();
}

function renderList() {
  var status = document.getElementById("status");
  status.innerHTML = "Filter: " + localStorage.getItem("bmy");
}

document.addEventListener('DOMContentLoaded', renderList);
document.querySelector('#save').addEventListener('click', setList);
