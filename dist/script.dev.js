"use strict";

function pageLoad() {
  var root = document.querySelector("#root");
  var notes = [];
  notes.push({
    title: "always link css and js in the head",
    tag: "pre",
    content: "<code>\n    &lt;link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"/>\n    &lt;link\n      href=\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap\"\n      rel=\"stylesheet\"\n    />\n    &lt;link rel=\"stylesheet\" href=\"./css/style.css\" />\n    &lt;script src=\"./script.js\">&lt;/script>\n    </code>"
  });
  notes.push({
    title: "event listener for dynamically generated elements: <u>if</u>",
    tag: "pre",
    content: "<code>  \n      document.addEventListener(\"mouseover\", function (e) {\n        if (\n          e.target.tagName.toLowerCase() === \"a\" ||\n          e.target.tagName.toLowerCase() === \"img\"\n        ) {\n          circle.classList.toggle(\"hover\");\n        }\n      });\n      //or data-attribute\n     </code>"
  });
  notes.push({
    title: "don't trigger on child elements",
    tag: "pre",
    content: "<code>\n    button *{\n      pointer-events: none;\n      }\n      stopPropagation\n      event bubbling\n    </code>"
  });

  for (var _i = 0, _notes = notes; _i < _notes.length; _i++) {
    note = _notes[_i];
    root.insertAdjacentHTML("beforeend", "<div class=\"card\">\n        <h2 class=\"title\">".concat(note.title, "</h2>\n        <").concat(note.tag, "> ").concat(note.content, " </").concat(note.tag, ">\n      </div>"));
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