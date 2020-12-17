"use strict";

function pageLoad(params) {
  var root = document.querySelector("#root");
  var notes = [];
  notes.push({
    tag: "div",
    content: "always link css and js in the head"
  });
  notes.push({
    tag: "pre",
    content: "<code>\n    &lt;link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"/>\n    &lt;link\n      href=\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap\"\n      rel=\"stylesheet\"\n    />\n    &lt;link rel=\"stylesheet\" href=\"./css/style.css\" />\n    &lt;script src=\"./script.js\">&lt;/script>\n    </code>"
  });
  notes.push({
    tag: "pre",
    content: "<code>\n    let root = document.querySelector(\"#root\");\n    let body = document.querySelector(\"body\");\n    </code>"
  });

  for (var _i = 0, _notes = notes; _i < _notes.length; _i++) {
    note = _notes[_i];
    root.insertAdjacentHTML("beforeend", "\n    <".concat(note.tag, "> ").concat(note.content, " </").concat(note.tag, ">"));
  }

  document.querySelectorAll("pre code").forEach(function (block) {
    hljs.highlightBlock(block);
  });
}

window.addEventListener("load", pageLoad);
/* document.addEventListener("load", (event) => {
  document.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightBlock(block);
  });
}); */

/* document.querySelectorAll('code').forEach((block) => {
  hljs.highlightBlock(block);
});
 */

/*
document.querySelectorAll('code').forEach((block) => {
  hljs.highlightBlock(block);
});
*/
//Az összes Js note-ot ilyen módon kirendelelni és a style.scss-ben megformázni.

/*
//Optional: Custom in. - HL JS beágyazása.

https://highlightjs.org/usage/
https://highlightjs.org/download/
<link rel="stylesheet"
    href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.1/styles/default.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.1/highlight.min.js"></script>
*/