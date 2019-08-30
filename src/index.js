import defaultA, { aVal } from "./a.js";

import(/* webpackChunkName: "async" */ "./async.js").then(({default: asyncFn}) => asyncFn());

console.log(defaultA);

upView(aVal); // 1
setTimeout(() => {
  upView(aVal); // 2
}, 2000);

function upView(text) {
  console.log(text)
}
