import _ from "lodash";
import "./style.css";

function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello World", "From Webpack"], " ");
  element.classList.add("panel");

  return element;
}

document.body.appendChild(component());
