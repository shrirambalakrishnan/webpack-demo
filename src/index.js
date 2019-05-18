import _ from "lodash";
import "./style.css";
import spiderManIcon from "./spider_man.jpg";

function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello World", "From Webpack"], " ");
  element.classList.add("panel");

  const icon = new Image();
  icon.src = spiderManIcon;
  element.appendChild(icon);

  return element;
}

document.body.appendChild(component());
