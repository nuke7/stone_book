function pageLoad() {
  let root = document.querySelector("#root");
  let notes = [];

  notes.push({
    title: `always link css and js in the head`,
    tag: "pre",
    content: `<code>
    &lt;link rel="preconnect" href="https://fonts.gstatic.com"/>
    &lt;link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
      rel="stylesheet"
    />
    &lt;link rel="stylesheet" href="./css/style.css" />
    &lt;script src="./script.js">&lt;/script>
    </code>`,
  });

  notes.push({
    title: "event listener for dynamically generated elements: <u>if</u>",
    tag: "pre",
    content: `<code>  
      document.addEventListener("mouseover", function (e) {
        if (
          e.target.tagName.toLowerCase() === "a" ||
          e.target.tagName.toLowerCase() === "img"
        ) {
          circle.classList.toggle("hover");
        }
      });
     </code>`,
  });

  notes.push({
    title: "don't trigger on child elements",
    tag: "pre",
    content: `<code>
    button *{
      pointer-events: none;
      }
      stopPropagation
      event bubbling
    </code>`,
  });

  for (note of notes) {
    root.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2 class="title">${note.title}</h2>
        <${note.tag}> ${note.content} </${note.tag}>
      </div>`
    );
  }

  document.querySelectorAll("pre code").forEach((block) => {
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
