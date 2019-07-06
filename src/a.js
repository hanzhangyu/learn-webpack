export let aVal = 1;

Promise.resolve().then(() => {
  aVal = 2;
});

export default 2;
