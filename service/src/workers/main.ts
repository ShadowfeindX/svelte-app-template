console.log("hello from a web worker");
onmessage = e => {
  console.log("Hello", e.data);
}