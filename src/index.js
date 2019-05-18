import _ from "lodash";
import printMe from "./print.js";
import "./style.css";
import spiderManIcon from "./spider_man.jpg";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["Hello World", "From Webpack"], " ");
  element.classList.add("panel");

  const icon = new Image();
  icon.src = spiderManIcon;
  element.appendChild(icon);

  btn.innerHTML = "Click me and check the console";
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
