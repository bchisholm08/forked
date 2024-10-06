import Vue from "vue";
import App from "./App.vue";
import Typewriter from "typewriter-effect/dist/core";
import GraphemeSplitter from "grapheme-splitter";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

document.addEventListener("DOMContentLoaded", function () {
  const innerdemo = document.getElementById("inner-demo-2");
  // Check if the element is found
  if (!innerdemo) {
    console.error("Element with id 'inner-demo-2' not found");
    return;
  }

  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  const typewriter = new Typewriter(innerdemo, {
    loop: true, // allow writing to continue
    delay: 65,
    stringSplitter,
  });

  // bigger font for name
  typewriter
    .callFunction(() => {
      innerdemo.style.alignContent = "center";
      innerdemo.style.fontSize = "48px"; // name font size
      innerdemo.style.color = "#000"; // name text color
    })
    .start()
    .typeString("Hi, I'm Brady 👋")
    .pauseFor(2000)
    .deleteAll()
    // Adjust for ASCII art: smaller font and faster typing
    .callFunction(() => {
      innerdemo.classList.remove("name");
      innerdemo.classList.add("ascii-art");
      typewriter.options.delay = 8; // Faster speed for ASCII
    })
    .typeString(" _   |~  _<br>")
    .typeString("[_]--'--[_]<br>")
    .typeString('|\'|""`""|\'|<br>')
    .typeString("|   | /^ |  |<br>") // alignment of walls
    .typeString("|_|_|I|_|_|<br>")
    .typeString("<br>")
    .typeString("Welcome to my GitHub!")
    .pauseFor(10000)
    .deleteAll(1);
});
