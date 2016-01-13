
var translate_ = function(t) {
  var words = Object.keys(WORDS)
  var result = t;
  // TODO: Loops over words - O(n), after figuring out the punctuation
  // regex.
  for (i = 0; i < words.length; i++) {
    // TODO: Handle line breaks correctly.
    result = result.replace(new RegExp(words[i],"gi"), WORDS[words[i]]);
  }
  return result;
}

var translate = function() {
  var translationEl = document.getElementById('translation');
  var textEl = document.getElementById("said");
  var text = textEl.innerHTML;
  translationEl.innerHTML = translate_(text);
}
var translateEl = document.getElementById('translate');
// TODO: Figure out why onchange doesn't work.
translateEl.addEventListener("click", translate)
