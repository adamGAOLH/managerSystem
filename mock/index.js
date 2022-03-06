import Mock from "mockjs";

Mock.setup({
  timeout: "200-600",
});

let contentArry = [];

let file = require.context(".", true, /\.js$/);

file.keys().forEach((key) => {
  if (key === "./index.js") return;
  contentArry = contentArry.concat(file(key).default);
});

contentArry.forEach((item) => {
  for (let [path, target] of Object.entries(item)) {
    let protocol = path.split("|");
    Mock.mock(new RegExp("^" + protocol[1]), protocol[0], target);
  }
});
