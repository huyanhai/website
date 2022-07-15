export function createdScript(url, cb) {
  let scriptArr = document.querySelectorAll(`script[src='${url}'`);
  if (scriptArr.length > 0) {
    if (!cb) return;
    if (typeof cb !== "function") {
      throw new Error("cb not a function");
    } else {
      return cb();
    }
  }
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
  script.onload = function () {
    if (!cb) return;
    if (typeof cb !== "function") {
      throw new Error("cb not a function");
    } else {
      return cb();
    }
  };
}
