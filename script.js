function getTheWord() {
  let iinputWord = $('#inputWord').val();
  $('#list').append(`
    <div class="column">` + iinputWord + `</div>`);
  document.getElementById("inputWord").value = "";
  return false;
}

function searchWords() {
  let searchWord = $('#searchWord').val();
  let isThere = 0;
  let listWords = document.getElementsByClassName("column");
  for (let i = 0; i < listWords.length; ++i) {
    if (searchWord == listWords[i].innerHTML) {
      isThere = 1;
      listWords[i].style.backgroundColor = "green";
    }
  }
  document.getElementById("searchWord").value = "";
  if (isThere) {
    alert("The word is in the dictionary");
  } else {
    alert("The word is not in the dictionary");
  }
  return false;
}
